import React from 'react'
import { View, Animated } from 'react-native'
import { connect } from 'react-redux'
import NewScreen from './News/news'
import Header from '../../components/Header/Header'

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

  render () {
    let tabNames = this.state.tabNames
    return (
      <View style={{ flex: 1 }}>
        <Header tabNames={tabNames} headerTitle='时训'>
          <NewScreen tabLabel='环球新闻' navigation={this.props.navigation} />
          <NewScreen tabLabel='关键日历' navigation={this.props.navigation} />
        </Header>
      </View>
    )
  }
}

export default InformationScreen
