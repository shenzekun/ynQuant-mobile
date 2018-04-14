import React from 'react'
import { StatusBar, Text, View, Platform } from 'react-native'

/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class SettingScreen extends React.Component {
  componentDidMount () {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fff')
    })
  }

  componentWillUnmount () {
    this._navListener.remove()
  }
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>sddsd</Text>
        <Text>sddsd</Text>
        <Text>sddsd</Text>
        <Text>sddsd</Text>
        <Text>sddsd</Text>
      </View>
    )
  }
}

export default SettingScreen
