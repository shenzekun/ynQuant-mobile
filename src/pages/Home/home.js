import React from 'react'
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { increaseAction } from './homeActions'

/**
 * 首页
 */

const mapStateToProps = state => {
  return state.Home
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

class HomeScreen extends React.Component {
  render () {
    const { count, onIncreaseClick } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{count}</Text>
        <Button title={'+1'} onPress={onIncreaseClick} />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
