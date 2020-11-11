export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '清单',
        iconPath: './assets/images/list.png',
        selectedIconPath: './assets/images/listSelected.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: './assets/images/user.png',
        selectedIconPath: './assets/images/userSelected.png',
      },
    ],
  },
}
