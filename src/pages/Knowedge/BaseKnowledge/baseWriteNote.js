import React from 'react'
import {View, Text, StyleSheet, TextInput, CheckBox} from 'react-native'

class BaseWriteNote extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.writeNoteWrap}>
          <View style={styles.informationWrap}>
            <Text>信息</Text>
            <Text>笔记：15个</Text>
          </View>
          <View style={styles.inputContentWrap}>
            <TextInput multiline style={styles.inputContent} />
            <CheckBox />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  writeNoteWrap: {
    margin: 16
  },
  informationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputContentWrap: {
    marginTop: 16
  },
  inputContent: {
    backgroundColor: '#f0f0f0',
    height: 99,
    borderRadius: 3
  }
})

export default BaseWriteNote
