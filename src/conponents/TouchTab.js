import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

class TouchTab extends React.Component {
  renderTabOption (tab, index) {
    let color = this.props.activeTab === index ? '#000' : '#fff'
    let bgColor = this.props.activeTab === index ? '#fff' : '#000'
    let isEven = index % 2 === 0
    return (
      <View
        style={{
          flex: 1,
          borderColor: '#fff',
          height: 24,
          backgroundColor: bgColor,
          borderTopLeftRadius: isEven ? 3 : 0,
          borderBottomLeftRadius: isEven ? 3 : 0,
          borderBottomRightRadius: isEven ? 0 : 3,
          borderTopRightRadius: isEven ? 0 : 3,
          borderLeftWidth: isEven ? 1 : 0,
          borderRightWidth: isEven ? 0 : 1,
          borderBottomWidth: 1,
          borderTopWidth: 1
        }} key={index}>
        <TouchableOpacity onPress={() => this.props.goToPage(index)} style={styles.tab} >
          <View style={styles.tabItem}>
            <Text style={{ color: color }}>{this.props.tabNames[index]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  render () {
    return (
      <View style={styles.tabs}>
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15, marginRight: 15 }}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
      </View>
    )
  }
}

const propTypes = {
  tabNames: PropTypes.array, // 标签名
  activeTab: PropTypes.number, // 当前被选中的tab下标
  goToPage: PropTypes.func, // 跳转到对应tab的方法
  tabs: PropTypes.array // 所有tabs集合
}
TouchTab.propTypes = propTypes

const styles = StyleSheet.create({
  tabs: {
    height: 40,
    backgroundColor: '#000'
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})
export default TouchTab
