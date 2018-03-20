import React from 'react'
import {View, Text, StyleSheet, Image, Platform} from 'react-native'
import { NavigationActions } from 'react-navigation'

class BaseIntroduce extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _replaceTo () {
    const replaceAction = NavigationActions.replace({
      key: this.props.navigation.state.key,
      routeName: 'BaseDetail',
      immediate: true
    })
    this.props.navigation.dispatch(replaceAction)
  }

  render () {
    console.log(this.props)
    const {goBack} = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.contentWrap}>
          <Image
            source={require('../../../images/knowledge/foreignExchange.png')}
            style={styles.img}
          />
          <Text style={styles.title}>外汇基础知识</Text>
          <Text style={styles.contentText}>外汇，就是外国货币或以外国货币表示的能用于国际结算的支付手段</Text>
          <View style={styles.btn}>
            <Text onPress={() => goBack()} style={[styles.btnText, styles.backColor]}>返回</Text>
            <Text onPress={() => this._replaceTo()} style={[styles.btnText, styles.continueColor]}>开始</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363c46',
    paddingTop: Platform.OS === 'ios' ? 25 : 0 // 处理iOS状态栏
  },
  contentWrap: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginBottom: 20
  },
  img: {
    width: 345,
    height: 284
  },
  content: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 29,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  contentText: {
    marginRight: 35,
    marginLeft: 35,
    fontSize: 17,
    color: '#777777',
    lineHeight: 27,
    position: 'relative'
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 30
  },
  btnText: {
    fontSize: 17
  },
  backColor: {
    color: '#777777',
    left: 68
  },
  continueColor: {
    color: '#000',
    left: 202
  }
})
export default BaseIntroduce
