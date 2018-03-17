import React from 'react'
import { View, StatusBar, StyleSheet, Platform, Animated, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TouchTab from '../../conponents/TouchTab'
import PropTypes from 'prop-types'

const propTypes = {
  tabNames: PropTypes.array.isRequired, //  标签名
  headerTitle: PropTypes.string.isRequired, // 头部标题
  bgColor: PropTypes.string, // 背景颜色
  searchColor: PropTypes.string // 搜索框颜色
}

class Header extends React.Component {
  tabNames = this.props.tabNames
  bgColor = this.props.bgColor ? this.props.bgColor : '#000'
  searchColor = this.props.searchColor ? this.props.searchColor : '#393f49'
  childLen = this.props.children.length
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <View
          style={[
            styles.titleContainer,
            {
              backgroundColor: this.bgColor
            }
          ]}
        >
          <Animated.Text style={[styles.headerTitle]}>{this.props.headerTitle}</Animated.Text>
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: this.bgColor
            }
          ]}
        >
          <Animated.View
            style={[
              styles.searchBox,
              {
                backgroundColor: this.searchColor
              }
            ]}
          >
            <Image source={require('../../images/search.png')} style={styles.searchIcon} />
            <TextInput
              placeholder='搜索'
              style={styles.inputText}
              placeholderTextColor='white'
              keyboardType='default'
            />
            <Image source={require('../../images/dictation.png')} style={styles.voiceIcon} />
          </Animated.View>
        </Animated.View>
        <ScrollableTabView
          renderTabBar={() => <TouchTab tabNames={this.tabNames} bgColor={this.bgColor} />}
          prerenderingSiblingsNumber={this.childLen}
        >
          {this.props.children}
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 25 : 0, // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48, // 处理iOS状态栏
    alignItems: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 35,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  searchBox: {
    height: 35,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
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

Header.propTypes = propTypes
export default Header
