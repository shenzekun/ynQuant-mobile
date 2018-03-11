/**
 * 在这里注册页面, 可以分别配置每个页面的样式
 * 配置文档: https://reactnavigation.org/docs/tab-navigator.html
 */

import React from 'react'

import HomeScreen from '../Home/home'

export default {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页',
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12
      },
      showIcon: true,
      style: {
        backgroundColor: 'blue'
      }
    }
  }
}
