import React from 'react'
import { View, StyleSheet, Image, TextInput, Animated } from 'react-native'

class SearchBox extends React.Component {
  render () {
    return (
      <Animated.View style={[styles.searchBox]}>
        <Image source={require('../images/search.png')} style={styles.searchIcon} />
        <TextInput
          placeholder='搜索'
          style={styles.inputText}
          placeholderTextColor='white'
          keyboardType='default'
        />
        <Image source={require('../images/dictation.png')} style={styles.voiceIcon} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  searchBox: {
    height: 35,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#393f49',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  searchIcon: {
    marginLeft: 6,
    marginRight: 6,
    width: 13.7,
    height: 13.7,
    resizeMode: 'stretch' // 保持原有大小 详情：http://blog.csdn.net/isaisai/article/details/49765885
  },
  inputText: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#fff'
  },
  voiceIcon: {
    marginLeft: 5,
    marginRight: 8,
    width: 11.7,
    height: 16.7,
    resizeMode: 'stretch'
  }
})

export default SearchBox
