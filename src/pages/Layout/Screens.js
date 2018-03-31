/**
 * 在这里注册页面, 可以分别配置每个页面的样式
 * 配置文档: https://reactnavigation.org/docs/tab-navigator.html
 */

import React from 'react'
import {Image, TouchableOpacity} from 'react-native'
import InformationScreen from '../Information/information' // 时讯
import KnowledgeScreen from '../Knowedge/knowledge' // 知识
import SimulateScreen from '../Simulate/simulate' // 模拟
import AboutScreen from '../About/about' // 我的

export default {
  KnowledgeScreen: {
    screen: KnowledgeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/knowledge-active.png')
                : require('../../images/knowledge.png')
            }
            style={{width: 23, height: 23}}
          />
        )
      },
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
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/information-active.png')
                : require('../../images/information.png')
            }
            style={{width: 23, height: 23}}
          />
        )
      },
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
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={
              focused
                ? require('../../images/simulation-active.png')
                : require('../../images/simulation.png')
            }
            style={{width: 23, height: 23}}
          />
        )
      },
      title: '模拟'
    }
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={
              focused ? require('../../images/about-active.png') : require('../../images/about.png')
            }
            style={{width: 23, height: 25}}
          />
        )
      },
      title: '我的',
      headerRight: (
        <TouchableOpacity style={{marginRight: 20, width: 20, height: 20}}>
          <Image source={require('../../images/about/setting.png')} />
        </TouchableOpacity>
      )
    }
  }
}
