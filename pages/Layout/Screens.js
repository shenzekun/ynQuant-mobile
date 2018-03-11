/**
 * 在这里注册页面, 可以分别配置每个页面的样式
 * 配置文档: https://reactnavigation.org/docs/tab-navigator.html
 */

import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons' // 图标

import HomeScreen from '../Home/home' // 首页
import Setting from '../Setting/Setting' // 设置

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
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: ({focused, tintColor}) => {
        console.log(tintColor)
        return <Ionicons name={'ios-information-circle'} size={25} color={tintColor} />
      },
      title: '设置',
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
