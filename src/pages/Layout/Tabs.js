/**
 navigation 详细说明
 http://www.guiyongdong.com/2017/05/20/ReactNative%E5%AF%BC%E8%88%AA%E6%96%B0%E5%AE%A0%E5%84%BFreact-navigation/
 */
import { StackNavigator, TabNavigator } from 'react-navigation'
import React from 'react'
import Screen from './Screens'
import DayAnalysisScreen from '../Information/News/dayAnalysis'
import BaseIntroduce from '../Knowedge/BaseKnowledge/baseIntroduce'
import CustomerTabBar from '../Tabbar/CustomerTabBar'
import { connect } from 'react-redux'
import { changeTabBarColor } from './TabsAction'
import { Dimensions, Text } from 'react-native'
import BaseDetail from '../Knowedge/BaseKnowledge/baseDetail'
import BaseWriteNote from '../Knowedge/BaseKnowledge/baseWriteNote'
import NewsDetail from '../Information/News/newsDetail'
import Login from '../Login/login'
import Register from '../Register/register'
import Setting from '../Setting/setting'
import WriteComment from '../Information/News/writeComment'

let today = new Date()
let mouth = today.getMonth() + 1
let day = today.getDate()

let TabBar = TabNavigator(Screen, {
  // 定义全局 Tabbar 配置, 配置文档: https://reactnavigation.org/docs/tab-navigator.html
  initialRouteName: 'InformationScreen', // 首页名字
  tabBarComponent: CustomerTabBar,
  tabBarOptions: {
    activeTintColor: 'rgba(137, 172, 249, 1.000)', // 选中时文字颜色
    inactiveTintColor: '#9a9a9a', // 未选中时文字颜色
    showIcon: true,
    tabBarPosition: 'bottom', // tab bar的位置
    labelStyle: {
      // tab 字样式
      fontWeight: 'bold',
      fontSize: 11
    }
  },
  lazy: true, // 是否懒加载界面，默认一次加载所有的界面,true为懒加载
  animationEnabled: false, // 开启动画
  initialLayout: {
    height: 49,
    width: Dimensions.get('window').width
  }
})

const Navigator = StackNavigator(
  {
    TabBar: {
      screen: TabBar
    },
    DayAnalysisScreen: {
      screen: DayAnalysisScreen,
      navigationOptions: {
        headerTintColor: '#fff', // 设置导航栏颜色
        gesturesEnabled: true, // 支持手滑返回
        headerStyle: {
          backgroundColor: '#094c90'
        },
        headerTitle: '今日分析',
        headerRight: (
          <Text style={{ color: 'white', fontSize: 17, marginRight: 9 }}>
            {mouth}月{day}日
          </Text>
        )
      }
    },
    BaseIntroduce: {
      screen: BaseIntroduce,
      navigationOptions: {
        header: 'none'
      }
    },
    BaseDetail: {
      screen: BaseDetail,
      navigationOptions: {
        headerTintColor: '#fff', // 设置导航栏颜色
        headerStyle: {
          backgroundColor: '#4b525f',
          borderBottomColor: '#414752'
        },
        headerBackTitle: '返回'
      }
    },
    BaseWriteNote: {
      screen: BaseWriteNote,
      navigationOptions: {
        headerTintColor: '#fff', // 设置导航栏颜色
        headerStyle: {
          backgroundColor: '#4b525f',
          borderBottomColor: '#414752'
        },
        headerTitle: '写笔记'
      }
    },
    NewsDetail: {
      screen: NewsDetail,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#fff', // 设置导航栏颜色
        gesturesEnabled: true, // 支持手滑返回
        headerStyle: {
          backgroundColor: '#094c90'
        },
        title: `${navigation.state.params.content.title}`,
        headerBackTitle: '返回'
      })
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: 'none'
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: 'none'
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        headerTitle: '设置'
      }
    },
    WriteComment: {
      screen: WriteComment,
      navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#094c90'
        },
        title: '写评论'
      }
    }
  },
  {
    cardStyle: {
      // 为各个页面设置统一的样式
      backgroundColor: '#fff'
    },
    headerMode: 'screen'
  }
)

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onPageChange: nextColor => dispatch(changeTabBarColor(nextColor))
  }
}

class Tabs extends React.Component {
  getScreenColor (ScreenName) {
    const screenColor = {
      KnowledgeScreen: 'rgba(75,83,94,1)',
      InformationScreen: 'rgba(0,0,0,1)',
      SimulateScreen: 'rgba(31, 44, 55, 1)',
      AboutScreen: 'rgba(251, 251, 251, 1)'
    }

    return screenColor[ScreenName] || null
  }

  getCurrentRouteName (navigationState) {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index]
    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRouteName(route)
    }
    return route.routeName
  }

  render () {
    return (
      <Navigator
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = this.getCurrentRouteName(currentState)
          this.props.onPageChange(this.getScreenColor(currentScreen))
        }}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
