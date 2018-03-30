import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
class NewsDetail extends React.Component {
  render () {
    const { params } = this.props.navigation.state
    console.log(params)
    return (
      <View style={styles.container}>
        <View style={styles.textWrap}>
          <Text style={styles.textStyle}>&nbsp;&nbsp;&nbsp;&nbsp;{params.content.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textWrap: {
    margin: 16
  },
  textStyle: {
    fontSize: 20
  }
})
export default NewsDetail
