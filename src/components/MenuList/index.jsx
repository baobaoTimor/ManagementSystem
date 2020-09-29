import React from 'react';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { List, Button, Typography, Row, Tooltip } from 'antd';
import CodeTag from '@/components/CodeTag';
import styles from './index.less';

const ListItem = List.Item;
const { Text } = Typography;

const Index = (props) => {
  const { menuData, menuName, selectedId, handleClick } = props;
  // console.log('menuData---', menuData, selectedId)
  return (
    <div className={styles.menuWrapper}>
      <ListItem className={styles.title}>
        <Text strong className={styles.titleName}>
          {menuName}
        </Text>
        <Button type="primary" onClick={() => {}} className={styles.titleAdd}>
          <PlusOutlined />
          新增
        </Button>
      </ListItem>
      <List
        itemLayout="horizontal"
        dataSource={menuData}
        bordered={false}
        renderItem={(item, index) => (
          <ListItem
            className={`${selectedId === item.menuCode ? styles.active : ''} ${styles.item}`}
            onClick={() => handleClick(item.menuCode)}
          >
            <Row type="flex" justify="space-between" className={styles.itemList}>
              <Text strong className={styles.titleName}>
                {`${Number(index) + 1}`}、{item.menuName}
              </Text>
              <Tooltip title="编辑">
                <a>
                  <EditOutlined />
                </a>
              </Tooltip>
            </Row>
            <CodeTag level={item.menuLevel}>{item.menuCode}</CodeTag>
          </ListItem>
        )}
      />
    </div>
  );
};
export default Index;
