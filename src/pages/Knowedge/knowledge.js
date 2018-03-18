import React from 'react'
import { StyleSheet, View } from 'react-native'
import BaseKnowledge from './BaseKnowledge/baseKnowledge'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
const mapStateToProps = state => {
  return state.Knowlege
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

class KnowledgeScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
  }

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
export default connect(mapStateToProps, mapDispatchToProps)(KnowledgeScreen)
