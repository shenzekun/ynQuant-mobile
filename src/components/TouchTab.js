import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const propTypes = {
  tabNames: PropTypes.array.isRequired, // 标签名
  activeTab: PropTypes.number, // 当前被选中的tab下标
  goToPage: PropTypes.func, // 跳转到对应tab的方法
  tabs: PropTypes.array // 所有tabs集合
  // bgColor: PropTypes.string // 背景颜色
}

const mapStateToProps = state => {
  return state.Tabbar
}
class TouchTab extends React.Component {
  len = this.props.tabs.length - 1
  // bgColor = this.props.bgColor ? this.props.bgColor : '#000'
  constructor (props) {
    super(props)
    console.log(props)
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
  renderTabOption (tab, index) {
    let color = this.props.activeTab === index ? this.bgColor : '#fff'
    let bgColor = this.props.activeTab === index ? '#fff' : this.bgColor
    let isShowRightBorder = index === this.len
    let isShowLeftBorder = index === 0
    return (
      <View
        style={[
          styles.tabsWrap,
          {
            backgroundColor: bgColor,
            borderTopLeftRadius: isShowLeftBorder ? 3 : 0,
            borderBottomLeftRadius: isShowLeftBorder ? 3 : 0,
            borderBottomRightRadius: isShowRightBorder ? 3 : 0,
            borderTopRightRadius: isShowRightBorder ? 3 : 0,
            borderRightWidth: isShowRightBorder ? 1 : 0
          }
        ]}
        key={index}
      >
        <TouchableOpacity onPress={() => this.props.goToPage(index)} style={styles.tab}>
          <View style={styles.tabItem}>
            <Text style={[styles.tabText, { color: color }]}>{this.props.tabNames[index]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  render () {
    let bgColor = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.prevBackgroundColor, this.props.backgroundColor]
    })
    return (
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: bgColor
          }
        ]}
      >
        <Animated.View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 53,
    paddingTop: 12,
    paddingBottom: 11,
    backgroundColor: '#000'
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15
  },
  tabsWrap: {
    flex: 1,
    borderColor: '#fff',
    height: 29,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  tabText: {
    fontSize: 13
  }
})
TouchTab.propTypes = propTypes
export default connect(mapStateToProps)(TouchTab)
