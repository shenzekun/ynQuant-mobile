import { TabNavigator, StackNavigator } from 'react-navigation'
import React from 'react'
import Screen from './Screens'

const TabBar = TabNavigator(Screen, {
  // 定义全局 Tabbar 配置, 配置文档: https://reactnavigation.org/docs/tab-navigator.html
  initialRouteName: 'Home' // 首页名字
})

const Navigator = StackNavigator({
  TabBar: {
    screen: TabBar
  }
})
export default class Tabs extends React.Component {
  render () {
    return <Navigator />
  }
}
