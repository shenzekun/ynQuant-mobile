import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

var flatListData = [
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
        text: '444'
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
        text: '2222'
      },
      {
        key: 8,
        time: '12:01:01',
        text: '111'
      }
    ]
  }
]
class TimeLine extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flatListData: flatListData,
      isRefresh: false
    }
  }
  renderRow (rowData) {
    let firstContent = rowData.item.content.splice(0, 1) // 获取第一个内容
    let content = rowData.item.content // 获取其余内容
    return (
      <View style={styles.row}>
        <View style={styles.date}>
          <Text style={[styles.fontColor, styles.dayFont]}>{rowData.item.day}</Text>
          <Text style={[styles.fontColor, styles.monthFont]}>{rowData.item.month}</Text>
        </View>
        <TouchableOpacity style={styles.contentWrap}>
          <View style={styles.time}>
            <Text style={[styles.fontColor, styles.timeFont]}>{firstContent[0].time || ''}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentFont}>{firstContent[0].text}</Text>
          </View>
        </TouchableOpacity>

        {content.map(data => {
          return (
            <View style={styles.commonWrap} key={data.key}>
              <TouchableOpacity style={styles.contentWrap}>
                <View style={styles.time}>
                  <Text style={[styles.fontColor, styles.timeFont]}>{data.time}</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.contentFont}>{data.text}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.dotOutWard}>
                <View style={styles.dotInWard} />
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.rowWrap}>
          <FlatList
            data={this.state.flatListData}
            renderItem={this.renderRow}
            refreshing={this.state.isRefresh}
            initialNumToRender={6}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowWrap: {
    marginTop: 10
  },
  row: {
    flexDirection: 'column',
    paddingBottom: 10,
    paddingLeft: 20,
    borderLeftWidth: 1.5,
    borderLeftColor: '#e0e0e0',
    marginLeft: 30,
    marginRight: 25,
    marginTop: 10,
    position: 'relative'
  },
  contentWrap: {
    flex: 1,
    marginBottom: 25,
    marginLeft: 10
  },
  commonWrap: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    marginTop: 10
  },
  contentFont: {
    color: '#808080'
  },
  dayFont: {
    fontSize: 15,
    textAlign: 'center'
  },
  monthFont: {
    fontSize: 11,
    textAlign: 'center'
  },
  date: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: '#7ddaff',
    backgroundColor: '#fff',
    position: 'absolute',
    left: -18.5
  },
  time: {
    position: 'relative',
    top: -1
  },
  timeFont: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  fontColor: {
    color: '#31c4ff'
  },
  dotOutWard: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#7ddaff',
    position: 'absolute',
    left: -28,
    top: -1
  },
  dotInWard: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#31c4ff',
    position: 'absolute',
    left: 3.5,
    top: 3.5
  }
})

export default TimeLine
