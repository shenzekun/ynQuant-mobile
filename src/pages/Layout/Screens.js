/**
 * 在这里注册页面, 可以分别配置每个页面的样式
 * 配置文档: https://reactnavigation.org/docs/tab-navigator.html
 */

import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import InformationScreen from '../Information/information' // 时讯
import KnowledgeScreen from '../Knowedge/knowledge' // 知识
import SimulateScreen from '../Simulate/simulate' // 模拟
import AboutScreen from '../About/about' // 我的

const tabBarIcon = (ActiveUrl, InactiveUrl, high) => ({ focused, tintColor }) => (
  <Image source={focused ? ActiveUrl : InactiveUrl} style={{ width: 23, height: high }} />
)
export default {
  KnowledgeScreen: {
    screen: KnowledgeScreen,
    navigationOptions: () => ({
      tabBarIcon: tabBarIcon(
        require('../../images/knowledge-active.png'),
        require('../../images/knowledge.png'),
        23
      ),
      title: '知识',
      headerStyle: {
        backgroundColor: '#4b525f',
        borderBottomColor: '#4b525f'
      },
      headerBackTitle: '返回',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 34,
        position: 'absolute',
        left: 0,
        top: 5
      }
    })
  },
  InformationScreen: {
    screen: InformationScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon(
        require('../../images/information-active.png'),
        require('../../images/information.png'),
        23
      ),
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: '#000'
      },
      headerBackTitle: '返回',
      headerTintColor: '#fff', // 导航栏颜色
      title: '时讯',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 34,
        position: 'absolute',
        left: 0,
        top: 5
      }
    }
  },
  SimulateScreen: {
    screen: SimulateScreen,
    navigationOptions: {
      tabBarIcon: tabBarIcon(
        require('../../images/simulation-active.png'),
        require('../../images/simulation.png'),
        23
      ),
      title: '模拟'
    }
  },
  AboutScreen: {
    screen: AboutScreen
  }
}
