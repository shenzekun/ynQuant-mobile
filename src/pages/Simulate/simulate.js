import React from 'react'
import { StatusBar, Text, View } from 'react-native'

/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class SimulateScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <Text>SimulateScreen</Text>
      </View>
    )
  }
}

export default SimulateScreen
