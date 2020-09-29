/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import { connect } from 'dva';
import MenuList from '@/components/MenuList';

const menuList = (props) => {
  const [menuData, setMenuList] = useState([]); // 菜单组列表
  const [menuListActive, setMenuListActive] = useState({}); // 菜单组选中的列
  const [menuChildData, setMenuChildList] = useState([]); // 菜单页面列表
  const [menuChildActive, setMenuChildActive] = useState({}); // 菜单页面列表选中的列

  // DidMount
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'menuModel/getMenuSetting',
      payload: {},
      callback: (value) => {
        // 菜单组默认选中第一列
        const { menuCode } = value[0];
        setMenuListActive(menuCode);
        // 菜单组列表
        setMenuList(value);
      },
    });
  }, []);

  // 通过菜单组的值获取菜单页面列表
  useEffect(() => {
    const { dispatch } = props;
    // 会存在为空{}的情况,所以加一次判断
    if (Object.keys(menuListActive).length) {
      dispatch({
        type: 'menuModel/getMenuChild',
        payload: menuListActive,
        callback: (value) => {
          // 菜单页面列表
          const { children } = value.list[0] || [];
          setMenuChildList(children);
          setMenuChildActive(children[0].menuCode);
        },
      });
    }
  }, [menuListActive]);

  const onClick = (code) => {
    setMenuListActive(code);
  };

  const onClick1 = (code) => {
    setMenuChildActive(code);
  };
  return (
    <PageHeaderWrapper>
      <Row gutter={24}>
        <Col span={6}>
          <MenuList
            menuData={menuData}
            menuName="菜单组"
            selectedId={menuListActive}
            handleClick={(code) => onClick(code)}
          />
        </Col>
        <Col span={6}>
          <MenuList
            menuData={menuChildData}
            menuName="菜单页面"
            selectedId={menuChildActive}
            handleClick={(code) => onClick1(code)}
          />
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

export default connect(({ menuModel, loading }) => ({
  menuModel,
  menuSetting: loading.effects['menuModel/getMenuSetting'],
}))(menuList);
