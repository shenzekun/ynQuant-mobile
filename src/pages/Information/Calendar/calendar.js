import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
class CalendarScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../images/Information/calendar/日历内容.png')}
          style={styles.img}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    width: '100%',
    height: '123%'
  }
})
export default CalendarScreen
