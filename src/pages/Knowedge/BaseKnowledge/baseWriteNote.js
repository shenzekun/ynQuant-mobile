import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'
import Note from '../../../components/Note/Note'

class BaseWriteNote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCheckBoxSelected: true,
      data: [
        {
          key: '1',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '2',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '3',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '4',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '5',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '6',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '7',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '8',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '9',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        },
        {
          key: '10',
          name: 'xxx',
          imageUrl: 'https://ws4.sinaimg.cn/large/006tKfTcly1fplvuidixtj3014014742.jpg',
          like: 22,
          content:
            '1）对普通投资者而言，ETF也可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。<br />2）赚了指数就赚钱，投资者再也不用研究股票，担心踩上地雷股了；（2010年之前我国证券市场不存在做空机制，因此存在着“指数跌了就要赔钱”的情况。2010年4月，股指期货开通，2011年12月5日起，有七只ETF基金纳入融资融券标的的范畴',
          time: '18:01',
          location: '天津'
        }
      ]
    }
  }

  handleCheckBox = () => {
    this.setState({
      isCheckBoxSelected: !this.state.isCheckBoxSelected
    })
  }

  render () {
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.writeNoteWrap}>
          <View style={styles.informationWrap}>
            <Text>信息</Text>
            <Text>笔记：15个</Text>
          </View>
          <View style={styles.inputContentWrap}>
            <TextInput multiline style={styles.inputContent} />
            <View style={styles.checkBoxWrap}>
              <CheckBox
                style={{ padding: 10, width: 111 }}
                rightText={'分享笔记'}
                checkBoxColor={'#1677cb'}
                isChecked={this.state.isCheckBoxSelected}
                onClick={this.handleCheckBox}
                rightTextStyle={{ height: 15, fontSize: 14, color: '#8e929b' }}
              />
            </View>
          </View>
        </View>
        <View style={styles.writeNoteWrap}>
          <Text>精彩笔记：</Text>
          <Note data={this.state.data} />
        </View>
        <View style={styles.writeNote}>
          <View style={styles.btnWrap}>
            <TouchableOpacity onPress={() => goBack()}>
              <Text style={[styles.noteBgColor, styles.btn, styles.writeTextFont]}>返回</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
    flex: 1
  },
  writeNoteWrap: {
    margin: 16
  },
  informationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputContentWrap: {
    marginTop: 16
  },
  inputContent: {
    backgroundColor: '#f0f0f0',
    height: 99,
    borderRadius: 3
  },
  checkBoxWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 9
  },
  writeNote: {
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0
  },
  writeTextFont: {
    fontSize: 12
  },
  btnWrap: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
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

export default BaseWriteNote
