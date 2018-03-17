/**
 * 在这里注册页面, 可以分别配置每个页面的样式
 * 配置文档: https://reactnavigation.org/docs/tab-navigator.html
 */

import React from 'react'
import { Image } from 'react-native'
import InformationScreen from '../Information/information' // 时讯
import KnowledgeScreen from '../Knowedge/knowledge' // 知识
import SimulateScreen from '../Simulate/simulate' // 模拟
import AboutScreen from '../About/about' // 我的

export default {
  KnowledgeScreen: {
    screen: KnowledgeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/knowledge-active.png')
                : require('../../images/knowledge.png')
            }
            style={{ width: 23, height: 23 }}
          />
        )
      },
      title: '知识',
      header: 'none',
      mode: 'modal' // 使用标准的iOS和Android页面转换风格
    }
  },
  InformationScreen: {
    screen: InformationScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/information-active.png')
                : require('../../images/information.png')
            }
            style={{ width: 23, height: 23 }}
          />
        )
      },
      title: '时讯',
      header: 'none'
    }
  },
  SimulateScreen: {
    screen: SimulateScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/simulation-active.png')
                : require('../../images/simulation.png')
            }
            style={{ width: 23, height: 23 }}
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
              focused
                ? require('../../images/about-active.png')
                : require('../../images/about.png')
            }
            style={{ width: 23, height: 25 }}
          />
        )
      },
      title: '我的'
    }
  }
}
