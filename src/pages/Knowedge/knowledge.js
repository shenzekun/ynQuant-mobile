import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import BaseKnowledge from './BaseKnowledge/baseKnowledge'
import Header from '../../conponents/Header/Header'
/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class KnowledgeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tabNames: ['基础知识', '进阶知识']
    }
  }
  render () {
    let tabNames = this.state.tabNames
    return (
      <View style={styles.container}>
        <Header tabNames={tabNames} headerTitle='知识' searchColor='#7c7c7c' bgColor='#4b525e'>
          <BaseKnowledge tabLabel='基础知识' />
          <BaseKnowledge tabLabel='进阶知识' />
        </Header>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f5f9' }
})
export default KnowledgeScreen
