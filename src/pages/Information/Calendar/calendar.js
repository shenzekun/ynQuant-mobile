import React from 'react'
import { ScrollView, Image, StyleSheet } from 'react-native'
class CalendarScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={require('../../../images/Information/calendar/日历内容.png')}
          style={styles.img}
        />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    flex: 1
  }
})
export default CalendarScreen
