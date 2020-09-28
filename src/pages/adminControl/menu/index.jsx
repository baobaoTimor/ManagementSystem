// import React, { useState, useEffect } from 'react';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { Row, Col } from 'antd';
// import { connect } from 'dva';
// import MenuList from '@/components/MenuList'

// const menuList = props => {
//   const [menuData, setMenuList] = useState([]);// 菜单组列表
//   const [menuChildData, setMenuChildList] = useState([]); // 菜单列表
//   const [menuChildPage, setMenuChildPage] = useState([]); // 页面列表
//   const [menuListActive, setMenuListActive] = useState({}); // 菜单组选中的列
//   const [menuChildActive, setMenuChildActive] = useState({}); // 菜单列表选中的列
//   const [menuChildPageActive, setMenuChildPageActive] = useState({});// 页面选中的列

//   // DidMount
//   useEffect(() => {
//     const { dispatch } = props;
//     dispatch({
//       type: 'menuModel/getMenuSetting',
//       payload: {},
//       callback: value => {
//         // 菜单组默认选中第一列
//         setMenuListActive(value[0])
//         // 菜单组列表
//         setMenuList(value)
//       }
//     });
//   }, []);

//   // 菜单组有值的时候再去获取菜单列表
//   useEffect(() => {
//     // const { dispatch } = props;
//     const { menuCode } = menuListActive;
//     if (menuCode) {
//       // console.log('menuCode', menuCode)
//       // dispatch({
//       //   type: 'menuModel/getMenuChild',
//       //   payload:menuCode,
//       //   callback: value => {
//       //     // 菜单列表
//       //     setMenuChildList(value)
//       //     // 菜单组默认选中第一列
//       //     setMenuChildActive(value[0])
//       //     value.map(item => {
//       //       // 页面默认选中第一列
//       //       setMenuChildPageActive(item[0])
//       //       if (item.children) {
//       //         // 页面列表
//       //         setMenuChildPage(item.children)
//       //       }
//       //       return item;
//       //     })
//       //   }
//       // });
//     }
//   }, [menuListActive]);

//   return (
//     <PageHeaderWrapper>
//       <Row gutter={24}>
//         <Col span={6}>
//           <MenuList
//             menuData={menuData}
//             menuName='菜单组'
//             selectedId={menuListActive && menuListActive.menuCode}
//             id={menuListActive && menuListActive.menuCode}
//           />
//         </Col>
//         <Col span={6}>
//           <MenuList
//             menuData={menuChildData}
//             menuName='菜单'
//             selectedId={menuChildActive && menuChildActive.menuCode}
//             id={menuChildActive && menuChildActive.menuCode}
//           />
//         </Col>
//         <Col span={6}>
//           <MenuList
//             menuData={menuChildPage}
//             menuName='页面'
//             selectedId={menuChildPageActive && menuChildPageActive.menuCode}
//             id={menuChildPageActive && menuChildPageActive.menuCode}
//           />
//         </Col>
//       </Row>
//     </PageHeaderWrapper>
//   )
// }

// export default connect(({ menuModel, loading }) => ({
//   menuModel,
//   menuSetting: loading.effects['menuModel/getMenuSetting'],
// }))(menuList);
