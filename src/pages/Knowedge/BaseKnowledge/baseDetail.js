import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { getLineBreak } from '../../../config/utils'
import Swiper from 'react-native-swiper'
import { knowledge } from '../../../service/getData'

class BaseDetail extends React.Component {
  constructor (props) {
    super(props)
    this.swiperRef = swiper => (this.swiper = swiper)
    this.state = {
      currentPageNum: 0, // 页数
      maxPage: 0,
      data: []
    }
  }

  componentDidMount () {
    console.log(this.props.navigation.state.params)
    knowledge(this.props.navigation.state.params.id)
      .then(res => this.setState({ data: res, maxPage: res.length - 1 }))
      .catch(err => console.log(err))
  }

  // 上一页
  prePage = () => {
    if (this.state.currentPageNum !== 0) {
      this.setState({
        currentPageNum: this.state.currentPageNum - 1
      })
      this.swiper.scrollBy(-1, true)
    }
  }

  // 下一页
  nextPage = () => {
    if (this.state.currentPageNum !== this.state.maxPage) {
      this.setState({
        currentPageNum: this.state.currentPageNum + 1
      })
      this.swiper.scrollBy(1, true)
    }
  }

  handleIndexChange = index => {
    console.log(index + 'index')
    this.setState({ currentPageNum: index })
  }

  render () {
    const { navigate } = this.props.navigation
    console.log(this.state.currentPageNum)
    let text =
      '交易型开放式指数基金，通常又被称为交易所交易基金（Exchange Traded Funds，简称“ETF”），是一种在交易所上市交易的、基金份额可变的一种开放式基金。<br />交易型开放式指数基金属于开放式基金的一种特殊类型，它结合了封闭式基金和开放式基金的运作特点，投资者既可以向基金管理公司申购或赎回基金份额，同时，又可以像封闭式基金一样在二级市场上按市场价格买卖ETF份额，不过，申购赎回必须以一篮子股票换取基金份额或者以基金份额换回一篮子股票。<br />由于同时存在证券市场交易和申购赎回机制，投资者可以在ETF市场价格与基金单位净值之间存在差价时进行套利交易。套利机制的存在，使得ETF避免了封闭式基金普遍存在的折价问题。'
    text = getLineBreak(text, /<br \/>/g, '\n\n')
    return (
      <View style={styles.container}>
        <View style={styles.titleAndBtn}>
          <Text style={{ fontSize: 20, color: '#fff' }}>ETF{this.state.currentPageNum + 1}</Text>
          <View style={styles.arrowWrap}>
            <TouchableOpacity onPress={this.prePage}>
              <Image
                source={
                  this.state.currentPageNum > 0
                    ? require('../../../images/knowledge/Arrow/leftArrow-active.png')
                    : require('../../../images/knowledge/Arrow/leftArrow.png')
                }
                style={[
                  styles.arrowImg,
                  {
                    marginRight: 40
                  }
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.nextPage}>
              <Image
                source={
                  this.state.currentPageNum < this.state.maxPage
                    ? require('../../../images/knowledge/Arrow/rightArrow-active.png')
                    : require('../../../images/knowledge/Arrow/rightArrow.png')
                }
                style={styles.arrowImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Swiper
          // index={0 || this.props.screenProps.initPageNum}
          onIndexChanged={this.handleIndexChange}
          loop={false}
          showsPagination={false}
          loadMinimal
          ref={this.swiperRef}
          key={this.state.data.length}
        >
          {this.state.data.map(item => {
            console.log(item)
            return (
              <ScrollView style={styles.content} key={item.id}>
                <Text style={styles.contentText}>{item.content}</Text>
              </ScrollView>
            )
          })}
        </Swiper>
        <View style={styles.writeNote}>
          <View style={styles.writeNoteTitle}>
            <Text style={[styles.writeTextFont, { color: '#737783' }]}>信息</Text>
            <Text style={[styles.writeTextFont, { color: '#b5b7bd' }]}>笔记: 15个</Text>
          </View>
          <View style={styles.btnWrap}>
            <TouchableOpacity onPress={() => navigate('BaseWriteNote')}>
              <Text style={[styles.noteBgColor, styles.btn, styles.writeTextFont]}>写笔记</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.nextPage}>
              <Text style={[styles.continueBgColor, styles.btn, styles.writeTextFont]}>下一页</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4b525e',
    flex: 1,
    position: 'relative'
  },
  titleAndBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16
  },
  arrowWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrowImg: {
    width: 12,
    height: 12
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 121
  },
  contentText: {
    padding: 12,
    fontSize: 17,
    fontWeight: 'bold'
  },
  writeNote: {
    width: '100%',
    position: 'absolute',
    height: 105,
    backgroundColor: '#fff',
    bottom: 0
  },
  writeNoteTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  btnWrap: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  writeTextFont: {
    fontSize: 12
  },
  btn: {
    color: '#fff',
    height: 40,
    width: 165,
    textAlign: 'center',
    lineHeight: 40
  },
  noteBgColor: {
    backgroundColor: '#ddba76'
  },
  continueBgColor: {
    backgroundColor: '#1677cb'
  }
})

export default BaseDetail
