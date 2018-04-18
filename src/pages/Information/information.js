import React from 'react'
import { View, Animated, StatusBar, Platform } from 'react-native'
import { connect } from 'react-redux'
import NewScreen from './News/news'
import Header from '../../components/Header/Header'
import CalendarScreen from './Calendar/calendar'

/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class InformationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tabNames: ['环球新闻', '关键日历'],
      fontSize: new Animated.Value(0)
    }
  }
  componentDidMount () {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#000')
    })
  }

  componentWillUnmount () {
    this._navListener.remove()
  }

  render () {
    let tabNames = this.state.tabNames
    return (
      <View style={{ flex: 1 }}>
        <Header tabNames={tabNames} headerTitle='时训'>
          <NewScreen tabLabel='环球新闻' navigation={this.props.navigation} />
          <CalendarScreen tabLabel='关键日历' navigation={this.props.navigation} />
        </Header>
      </View>
    )
  }
}

export default InformationScreen
