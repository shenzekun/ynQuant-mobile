import React from 'react'
import {Button, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {increaseAction} from './homeActions'

/**
 * 首页
 */

const mapStateToProps = state => {
  return state.Home
}

class HomeScreen extends React.Component {
  onIncreaseClick = () => {
    this.props.dispatch(increaseAction())
  }

  render () {
    const {count} = this.props
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{count}</Text>
        <Button title={'+1'} onPress={this.onIncreaseClick} />
      </View>
    )
  }
}

export default connect(
  mapStateToProps
)(HomeScreen)
