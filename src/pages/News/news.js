import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TimeLine from '../../conponents/TimeLine'

class NewScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <TimeLine />
        <TouchableOpacity style={styles.btnWrap}>
          <Text style={styles.btnText}>今日分析</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnWrap: {
    width: 40,
    height: 40,
    backgroundColor: '#09498b',
    borderRadius: 20,
    position: 'absolute',
    right: 10,
    bottom: 10,
    shadowColor: '#0a498b',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  btnText: {
    width: 30,
    height: 30,
    color: '#fff',
    position: 'absolute',
    left: 8.5,
    top: 8.5,
    fontSize: 11.5
  }
})
export default NewScreen
