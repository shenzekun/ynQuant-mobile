import React from 'react'
import {
  Animated,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Easing
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TouchTab from '../../components/TouchTab'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const propTypes = {
  tabNames: PropTypes.array.isRequired, //  标签名
  bgColor: PropTypes.string, // 背景颜色
  searchColor: PropTypes.string // 搜索框颜色
}
const mapStateToProps = state => {
  return state.Tabbar
}
class Header extends React.Component {
  tabNames = this.props.tabNames
  // bgColor = this.props.bgColor ? this.props.bgColor : '#000'
  searchColor = this.props.searchColor ? this.props.searchColor : '#393f49'
  childLen = this.props.children.length

  constructor (props) {
    super(props)
    this.state = {
      animate: new Animated.Value(0)
    }
  }

  startAnimate () {
    this.state.animate.setValue(0)
    Animated.timing(this.state.animate, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear
    }).start()
  }

  componentWillUpdate () {
    this.startAnimate()
  }

  componentDidMount () {
    this.startAnimate()
  }

  render () {
    let bgColor = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.prevBackgroundColor, this.props.backgroundColor]
    })
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: bgColor
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
    marginRight: 5,
    marginTop: 5
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
export default connect(mapStateToProps)(Header)
