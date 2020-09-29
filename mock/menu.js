function getchildList(req, res) {
  const { menuCode } = req.query;
  switch (menuCode) {
    case 'adminCenter':
      // 管理中心的菜单页面
      res.send({
        code: '0000',
        status: 'success',
        menucode: menuCode,
        list: [
          {
            id: '351368eb47ecd3260c07354b89dfd0d2',
            menuCode: 'adminCenter',
            menuLevel: '1',
            menuName: '管理中心',
            children: [
              {
                menuCode: 'roleSetting',
                menuLevel: '2',
                menuName: '角色管理',
              },
              {
                id: '5a6dcbca653440699be844fbb6f9c39b',
                menuCode: 'systemLog',
                menuLevel: '2',
                menuName: '系统日志',
                url: '/personnel/personnelManagement',
              },
              {
                id: '5a6dcbca653440699be844fbb6f9c39b',
                menuCode: 'approvalConfig',
                menuLevel: '2',
                menuName: '审批流配置',
                url: '/personnel/personnelManagement',
              },
            ],
          },
        ],
      });
      break;
    case 'personnel':
      // 人员区域的菜单页面
      res.send({
        code: '0000',
        status: 'success',
        list: [
          {
            id: '351368eb47ecd3260c07354b89dfd0d2',
            menuCode: 'personnelArea',
            menuLevel: '1',
            menuName: '人员区域',
            children: [
              {
                id: '5a6dcbca6587uih90699be844fbb6f9c39b',
                menuCode: 'territoryAndIns',
                menuLevel: '2',
                menuName: '岗位辖区管理',
              },
              {
                id: '5a6dcbca653440699be844fbb6f9c39b',
                menuCode: 'adminStaff',
                menuLevel: '2',
                menuName: '人员管理',
                url: '/personnel/personnelManagement',
              },
              {
                id: '5a6dcbca653440699be844fbb6f9c39b',
                menuCode: 'adminStaff',
                menuLevel: '2',
                menuName: '人员列表',
                url: '/personnel/personnelManagement',
              },
            ],
          },
        ],
      });
      break;
    case 'business':
      // 业务填报的菜单页面
      res.send({
        code: '0000',
        status: 'success',
        list: [
          {
            id: '351368eb47ecd3260c07354b89dfd0d2',
            menuCode: 'business',
            menuLevel: '1',
            menuName: '业务填报',
            children: [
              {
                menuCode: 'approvalCenter1',
                menuLevel: '2',
                menuName: '审批中心',
              },
              {
                id: '5a6dcbca653440699be844fbb6f9c39b',
                menuCode: 'descentApproval',
                menuLevel: '2',
                menuName: '下凡申请',
                url: '/personnel/personnelManagement',
              },
              {
                id: '5a6dcbca653440699be844fbb6f9c39b',
                menuCode: 'soaringApproval',
                menuLevel: '2',
                menuName: '飞升申请',
                url: '/personnel/personnelManagement',
              },
            ],
          },
        ],
      });
      break;
    default:
      break;
  }

  res.send({
    code: '500',
    status: 'error',
    message: '请求失败!',
  });
}

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
  'GET /api/menu/child': getchildList,

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
