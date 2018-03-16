import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TimeLine from '../../conponents/TimeLine'

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
            text: '444dsdsdsdsdsdsdsdsdafkljasdfkjasdkfhadskjhjdkahdjksahfjkasbdjkbcjasdjfbsadbsad'
          },
          {
            key: 2,
            time: '12:01:01',
            text:
              '333dasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdjkdasjdkasdakjdaskdjaskdjaskdjsadjasdkasjdkasjdkasdas'
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
            text: '2222Et aliquam commodi quia earum magni. Veritatis fugiat est non possimus corrupti quo. Maiores fuga dolorum qui ut quaerat. Similique delectus facere atque et animi. Debitis dicta ipsum id laborum et iusto. Eos sint vel et officiis enim facilis cumque.'
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
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <TimeLine data={this.state.data} />
        <TouchableOpacity style={styles.btnWrap}>
          <Text style={styles.btnText}>今日分析</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnWrap: {
    width: 40,
    height: 40,
    backgroundColor: '#09498b',
    borderRadius: 20,
    position: 'absolute',
    right: 10,
    bottom: 10,
    shadowColor: '#0a498b',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  btnText: {
    width: 30,
    height: 30,
    color: '#fff',
    position: 'absolute',
    left: 8.5,
    top: 8.5,
    fontSize: 11.5
  }
})
export default NewScreen
