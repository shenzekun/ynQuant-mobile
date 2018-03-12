import React from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'

/**
 * 设置
 */

const mapStateToProps = state => {
  return {
    Home: state.Home,
    Setting: state.Setting
  }
}

class SettingScreen extends React.Component {
  render () {
    const {Home, Setting} = this.props
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HomeCount: {Home.count}, SettingCount: {Setting.count}</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps)(SettingScreen)
