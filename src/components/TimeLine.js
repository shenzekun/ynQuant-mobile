import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.array.isRequired, // 新闻数据
  navigation: PropTypes.object.isRequired
}

const DEBUG = true

const log = text => {
  DEBUG && console.log(text)
}

class TimeLine extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshState: RefreshState.Idle
    }
  }

  _renderEmptyLayout () {
    return <Text style={{ alignSelf: 'center', marginTop: 20 }}>暂无数据，刷新试试？</Text>
  }

  onHeaderRefresh = () => {
    this.setState({ refreshState: RefreshState.HeaderRefreshing })
  }

  onFooterRefresh = () => {
    this.setState({ refreshState: RefreshState.FooterRefreshing })
  }

  renderRow = (rowData, navigation) => {
    let { navigate } = navigation
    let array = [...rowData.content]
    let firstContent = array.splice(0, 1) // 获取第一个内容
    let content = array // 获取其余内容
    return (
      <View style={styles.row}>
        <View style={styles.date}>
          <Text style={[styles.fontColor, styles.dayFont]}>{rowData.day}</Text>
          <Text style={[styles.fontColor, styles.monthFont]}>{rowData.month}</Text>
        </View>
        <TouchableOpacity
          style={styles.contentWrap}
          onPress={() => {
            navigate('NewsDetail', {
              content: firstContent[0]
            })
          }}
        >
          <View style={styles.time}>
            <Text style={[styles.fontColor, styles.timeFont]}>{firstContent[0].time}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentFont}>{firstContent[0].text}</Text>
          </View>
        </TouchableOpacity>

        {content.map(data => {
          return (
            <View style={styles.commonWrap} key={data.key}>
              <TouchableOpacity
                style={styles.contentWrap}
                onPress={() => {
                  navigate('NewsDetail', {
                    content: data
                  })
                }}
              >
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
        <RefreshListView
          data={this.props.data}
          renderItem={({ item }) => this.renderRow(item, this.props.navigation)}
          initialNumToRender={6}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.onHeaderRefresh}
          onFooterRefresh={this.onFooterRefresh}
          ListEmptyComponent={this._renderEmptyLayout}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'column',
    paddingBottom: 10,
    paddingLeft: 20,
    borderLeftWidth: 1.3,
    borderLeftColor: '#e0e0e0',
    marginLeft: 30,
    marginRight: 12,
    marginTop: 15,
    position: 'relative'
  },
  contentWrap: {
    flex: 1,
    marginBottom: 25,
    marginLeft: 13
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
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
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
    left: -27.9,
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

TimeLine.propTypes = propTypes

export default TimeLine
