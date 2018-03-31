import { TabBarBottom } from 'react-navigation'
import React from 'react'
import { Animated, Easing } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return state.Tabbar
}

class CustomerTabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animate: new Animated.Value(0)
    }
  }

  componentWillUpdate (nextProps, nextState) {
    this.state.animate.setValue(0)
    Animated.timing(this.state.animate, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear
    }).start()
  }

  render () {
    let color = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.prevBackgroundColor, this.props.backgroundColor]
    })
    return (
      <TabBarBottom {...this.props} style={{ backgroundColor: color }} />
    )
  }
}

export default connect(mapStateToProps)(CustomerTabBar)
