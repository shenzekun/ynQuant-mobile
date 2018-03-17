import React from 'react'
import { Button, Text, View, StatusBar, StyleSheet, Platform, Animated } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TouchTab from '../../conponents/TouchTab'
import NewScreen from '../News/news'
import SearchBox from '../../conponents/SearchBox'
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
        <Animated.View style={[styles.container]}>
          <SearchBox />
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
    paddingBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 25 : 0, // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48, // 处理iOS状态栏
    backgroundColor: '#000',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 35,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#000',
    alignItems: 'center'
  }
})
export default InformationScreen
