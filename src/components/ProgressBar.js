import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
const propTypes = {
  num: PropTypes.number.isRequired, // 获取单个关键词的数,
  total: PropTypes.number.isRequired, // 获取所有关键词的数
  color: PropTypes.string.isRequired // 进度条颜色
}
class ProcessBar extends React.Component {
  render () {
    const len = this.props.num / this.props.total * 238.75
    const color = this.props.color
    return (
      <View style={styles.progressBarWrap}>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: color,
              width: len
            }
          ]}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  progressBarWrap: {
    height: 10,
    width: 238.75,
    backgroundColor: '#e3e4e5',
    position: 'relative',
    top: 3,
    left: 11,
    bottom: 0
  },
  progressBar: {
    height: 10,
    position: 'absolute',
    left: 0,
    top: 0
  }
})

ProcessBar.propTypes = propTypes
export default ProcessBar
