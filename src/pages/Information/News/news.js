import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TimeLine from '../../../components/TimeLine'

class NewScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    let flatListData = [
      {
        month: '03月',
        day: '9',
        content: [
          {
            key: 1,
            time: '12:01:01',
            text:
              '据天空新闻：英国首相特雷莎·梅将在格林威治时间16:30（北京时间13日00:30）在英国国会发表声明。'
          },
          {
            key: 2,
            time: '12:01:01',
            text: '据零对冲：人们或许会很惊讶地发现，欧洲央行的资产负债表再次触及了历史新高。'
          },
          {
            key: 3,
            time: '12:01:01',
            text: '2222'
          },
          {
            key: 4,
            time: '12:01:01',
            text: '111'
          }
        ]
      },
      {
        month: '03月',
        day: '8',
        content: [
          {
            key: 5,
            time: '12:01:01',
            text: '444Opera/13.57 (X11; Linux x86_64; U; EU Presto/2.9.172 Version/11.00)'
          },
          {
            key: 6,
            time: '12:01:01',
            text:
              '333dasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdjkdasjdkasdakjdaskdjaskdjaskdjsadjasdkasjdkasjdkasdas'
          },
          {
            key: 7,
            time: '12:01:01',
            text:
              '2222Et aliquam commodi quia earum magni. Veritatis fugiat est non possimus corrupti quo. Maiores fuga dolorum qui ut quaerat. Similique delectus facere atque et animi. Debitis dicta ipsum id laborum et iusto. Eos sint vel et officiis enim facilis cumque.'
          },
          {
            key: 8,
            time: '12:01:01',
            text: '111'
          }
        ]
      }
    ]

    this.setState({ data: flatListData })
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <TimeLine data={this.state.data} navigation={this.props.navigation} />
        <TouchableOpacity style={styles.btnWrap} onPress={() => navigate('DayAnalysisScreen')}>
          <Text style={styles.btnText}>今日分析</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnWrap: {
    width: 49,
    height: 49,
    backgroundColor: '#09498b',
    borderRadius: 24.5,
    position: 'absolute',
    right: 10,
    bottom: 10,
    shadowColor: '#0a498b',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  btnText: {
    width: 28,
    height: 28,
    color: '#fff',
    position: 'absolute',
    left: 11,
    top: 11,
    fontSize: 13.5
  }
})
export default NewScreen
