import React from 'react'
import {Text, View} from 'react-native'

export default class Navigator extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => this.props.navigation.navigate('Details')}>Home Screen</Text>
      </View>
    )
  }
}
