// const childList = [
//   {
//     id: '351368eb47ecd3260c07354b89dfd0d2',
//     menuCode: 'territory',
//     menuLevel: '1',
//     menuName: '人员区域',
//     children: [
//       {
//         menuCode: 'territoryAndIns',
//         menuLevel: '2',
//         menuName: '岗位辖区管理',
//       },
//       {
//         id: '5a6dcbca653440699be844fbb6f9c39b',
//         menuCode: 'adminStaff',
//         menuLevel: '2',
//         menuName: '人员管理',
//         url: '/personnel/personnelManagement',
//       },
//     ],
//   },
// ];

export default {
  // 菜单组
  'GET /api/menu/setting': [
    {
      id: 'b914aff673f84ac6b5c33a7135089ac3',
      menuCode: 'adminCenter',
      menuLevel: '0',
      menuName: '管理中心',
    },
    {
      id: 'b914aff673f84a1c6b5c33a7135089ac3',
      menuCode: 'personnel',
      menuLevel: '0',
      menuName: '人员区域',
    },
    {
      id: 'b914aff673f84a1c6b5c33a7135089ac3',
      menuCode: 'business',
      menuLevel: '0',
      menuName: '业务填报',
    },
  ],

  // 菜单页面
  'GET /api/menu/child': (req, res) => {
    // const { menuCode } = req.query;
    // let body = req.body;
    // if (req) {
    res.send({
      status: 'success',
      // menuCode,
      body: req,
      query: req.query,
      // req1:req,
    });
    // }
    // res.send({
    //   status: 'error',
    //   childList,
    //   // req,
    //   // res,
    // });
  },

  // 保存
  'POST /api/menu/save': (req, res) => {
    const { password, userName, type } = req.body;

    if (password === '666666' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },

  // 更新菜单内容
  'POST /api/menu/update': (req, res) => {
    const { menuName, type } = req.body;
    if (menuName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },

  // 删除菜单内容
  'GET /api/menu/delete': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
};
