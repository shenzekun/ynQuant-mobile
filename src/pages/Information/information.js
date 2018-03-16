import React from 'react'
import {
  Button,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  Animated,
  ScrollView,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TouchTab from '../../conponents/TouchTab'
import NewScreen from '../News/news'
/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class InformationScreen extends React.Component {
  constructor (props) {
    super(props)
    this._deltaY = new Animated.Value(0)
    this.state = {
      tabNames: ['环球新闻', '关键日历'],
      fontSize: new Animated.Value(0)
    }
  }
  render () {
    let tabNames = this.state.tabNames
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <View style={styles.titleContainer}>
          <Animated.Text style={[styles.headerTitle]}>时讯</Animated.Text>
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-130, -0],
                    outputRange: [-33, 0],
                    extrapolateRight: 'clamp'
                  })
                }
              ]
            }
          ]}
        >
          <Animated.View
            style={[
              styles.searchBox,
              {
                opacity: this._deltaY.interpolate({
                  inputRange: [-55, 0],
                  outputRange: [0, 1],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp'
                })
              }
            ]}
          >
            <Image source={require('../../images/search.png')} style={styles.searchIcon} />
            <TextInput
              placeholder='搜索'
              style={styles.inputText}
              placeholderTextColor='white'
              keyboardType='default'
            />
            <Image source={require('../../images/dictation.png')} style={styles.voiceIcon} />
          </Animated.View>
        </Animated.View>
        <ScrollableTabView renderTabBar={() => <TouchTab tabNames={tabNames} />}>
          <NewScreen tabLabel='环球新闻' />
          <NewScreen tabLabel='关键日历' />
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0, // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48, // 处理iOS状态栏
    backgroundColor: '#000',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 5
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -13,
    height: Platform.OS === 'ios' ? 68 : 48, // 处理iOS状态栏
    backgroundColor: '#000',
    alignItems: 'center'
  },
  searchBox: {
    height: 35,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#393f49',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  searchIcon: {
    marginLeft: 6,
    marginRight: 6,
    width: 13.7,
    height: 13.7,
    resizeMode: 'stretch' // 保持原有大小 详情：http://blog.csdn.net/isaisai/article/details/49765885
  },
  inputText: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#fff'
  },
  voiceIcon: {
    marginLeft: 5,
    marginRight: 8,
    width: 11.7,
    height: 16.7,
    resizeMode: 'stretch'
  },
  scrollableTabViewStyle: {
    flex: 1
  }
})

export default InformationScreen
