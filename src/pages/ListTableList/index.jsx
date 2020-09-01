import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message} from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import moment from 'moment';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';


/**
 * 添加节点
 * @param fields
 */

const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await addRule({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async fields => {
  const hide = message.loading('正在配置');
  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async selectedRows => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await removeRule({
      key: selectedRows.map(row => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};


const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef(); 
  const columns = [
    {
      title: '天堂人员名称',
      dataIndex: 'name',
      rules: [
        {
          required: true,
          message: '天堂人员名称为必填项',
        },
      ],
    },
    {
      title: '职位描述',
      dataIndex: 'desc',
      width:'300px',
      valueType: 'textarea',
    },
    {
      title: '月薪',
      dataIndex: 'callNo',
      sorter: true,
      hideInForm: true,
      renderText: val => `${val} 片金叶子`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '已下凡渡劫中',
          status: 'Default',
        },
        1: {
          text: '刚飞升',
          status: 'Processing',
        },
        2: {
          text: '正常',
          status: 'Success',
        },
        3: {
          text: '异常',
          status: 'Error',
        },
        4: {
          text: '休息',
          status: 'Warning',
        },
        5: {
          text: '玩耍',
          status: 'Processing',
        },
      },
    },
    {
      title: '飞升时间',
      dataIndex: 'createdAt',
      sorter: true,
      valueType: 'date',
      hideInForm: true,
      render:val =>(
          <div>{moment(val).format('YYYY-MM-DD')}</div>
        )
    },
    {
      title: '操作',
      dataIndex: 'option',
      align:'center',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            修改
          </a>
          <Divider type="vertical" />
          <a style={{color:'red'}} onClick={ async ()=>{ 
            await handleRemove(Array(record))
            const { reload } = actionRef.current
              reload()
            }
            }>删除</a>
        </>
      ),
    },
  ];


  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="天堂人员列表"
        actionRef={actionRef}
        rowKey="key"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新增
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      action.reload();
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">批量删除</Menu.Item>
                  <Menu.Item key="approval">批量审批</Menu.Item>
                </Menu>
              }
            >
              <Button>
                批量操作 <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          <div>
            已选择
            <a style={{ fontWeight: 600 ,margin:'0 5px'}} >
              {selectedRowKeys.length}
            </a>
            位&nbsp;&nbsp;
            <span>
              月薪总计 {selectedRows.reduce((pre, item) => pre + Number(item.callNo), 0)} 片金叶子
            </span>
          </div>
        )}
        request={(params, sorter, filter) => queryRule({...params, sorter,filter})}
        columns={columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          onSubmit={async value => {
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          columns={columns}
          rowSelection={{}}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(value);

            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default TableList;
