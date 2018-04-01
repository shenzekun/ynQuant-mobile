import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import TimeLine from '../../../components/TimeLine'

class NewScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <TimeLine navigation={this.props.navigation} />
        <TouchableOpacity style={styles.btnWrap} onPress={() => navigate('DayAnalysisScreen')}>
          <Text style={styles.btnText}>今日分析</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnWrap: {
    width: 49,
    height: 49,
    backgroundColor: '#09498b',
    borderRadius: 24.5,
    position: 'absolute',
    right: 10,
    bottom: 10,
    shadowColor: '#0a498b',
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  btnText: {
    width: 28,
    height: 28,
    color: '#fff',
    position: 'absolute',
    left: 11,
    top: 11,
    fontSize: 13.5
  }
})
export default NewScreen
