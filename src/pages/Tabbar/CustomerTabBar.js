import { TabBarBottom } from 'react-navigation'
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return state.Tabbar
}

class CustomerTabBar extends React.Component {
  render () {
    let color = this.state.x.interpolate({
      inputRange: [0, 300],
      outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)']
    })
    return (
      <TabBarBottom {...this.props} style={{ backgroundColor: this.props.backgroundColor || '#333' }} />
    )
  }
}

export default connect(mapStateToProps)(CustomerTabBar)
