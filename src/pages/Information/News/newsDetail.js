import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {getLineBreak} from '../../../config/utils'

class NewsDetail extends React.Component {
  render () {
    const {params} = this.props.navigation.state
    console.log(params)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textWrap}>
          <Text style={styles.textStyle}>{getLineBreak(params.content.content, /\n/g, '\n\n')}</Text>
        </View>
      </ScrollView>
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
