import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
const propTypes = {
  color: PropTypes.string, // 颜色
  size: PropTypes.string, // 大小
  top: PropTypes.string // 距离顶部大小
}
class Loading extends React.Component {
  static defaultProps = {
    color: 'white',
    size: 'large',
    top: '50%'
  }
  render () {
    return (
      <View
        style={[
          styles.container,
          {
            top: this.props.top ? this.props.top : this.defaultProps.top
          }
        ]}
      >
        <ActivityIndicator
          color={this.props.color ? this.props.color : this.defaultProps.color}
          size={this.props.size ? this.props.size : this.defaultProps.size}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
Loading.propTypes = propTypes
export default Loading
