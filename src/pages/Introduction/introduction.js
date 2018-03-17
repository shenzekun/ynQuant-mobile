import React from 'react'
import {StyleSheet} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
})

const slides = [
  {
    key: 'somethun',
    title: '亿诺智汇科技',
    text: '聚合外汇智能服务',
    image: require('../../images/Introduction/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'somethun-dos',
    title: '实时外汇',
    text: '大事件日历，NLP智能分析',
    image: require('../../images/Introduction/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29'
  },
  {
    key: 'somethun1',
    title: '模拟实盘',
    text: '新手？老司机？优质策略等着您',
    image: require('../../images/Introduction/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5'
  }
]

export default class IntroScreen extends React.Component {
  _onDone = () => {
  }

  render () {
    return <AppIntroSlider slides={slides} onDone={this._onDone}/>
  }
}
