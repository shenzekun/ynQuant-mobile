/**
 * 在这里注册页面, 可以分别配置每个页面的样式
 * 配置文档: https://reactnavigation.org/docs/tab-navigator.html
 */

import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons' // 图标
import { Image } from 'react-native'
import HomeScreen from '../Home/home' // 首页
import InformationScreen from '../Information/information' // 时讯
import knowledgeScreen from '../Knowedge/knowledge' // 知识
import SimulateScreen from '../Simulate/simulate' // 模拟
import AboutScreen from '../About/about' // 我的

export default {
  knowledgeScreen: {
    screen: knowledgeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/knowledge-active.png')
                : require('../../images/knowledge.png')
            }
          />
        )
      },
      title: '知识'
    }
  },
  InformationScreen: {
    screen: InformationScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused ? require('../../images/shape-active.png') : require('../../images/shape.png')
            }
          />
        )
      },
      title: '时讯'
    }
  },
  SimulateScreen: {
    screen: SimulateScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused ? require('../../images/simulate-active.png') : require('../../images/simulate.png')
            }
          />
        )
      },
      title: '模拟'
    }
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused ? require('../../images/about-active.png') : require('../../images/about.png')
            }
          />
        )
      },
      title: '我的'
    }
  }
}
