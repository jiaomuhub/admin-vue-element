const menus = [
  { id: '0',
    label: '管理控制',
    path: '/home',
    icon: 'fa fa-dashboard',
    submenu: [
      {id: 'home', path: '/home', name: 'home', label: '产品发布'},
      {id: 'proManger', path: '/proManger', name: 'proManger', label: '产品管理'},
      {id: 'houseManage', path: '/houseManage', name: 'houseManage', label: '看房管理'},
      {id: 'houseAdministrators', path: '/houseAdministrators', name: 'houseAdministrators', label: '房管员管理'},
      {id: 'cardManage', path: '/cardManage', name: 'cardManage', label: '免租券管理'}
    ]
  },
  {
    id: '1',
    icon: 'fa fa-microchip',
    label: '系统设置',
    submenu: [
      {id: 'companyInfo', path: '/companyInfo', name: 'companyInfo', label: '公司信息'},
      {id: 'contactUs', path: '/contactUs', name: 'contactUs', label: '联系安优房'}
    ]
  }
]
export default menus
