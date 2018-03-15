import React from 'react'
import { Button, Text, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class KnowledgeScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <Text>knowledge</Text>
      </View>
    )
  }
}

export default KnowledgeScreen
