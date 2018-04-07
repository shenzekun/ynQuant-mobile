import React from 'react'
import { View, Text, StyleSheet, Linking, StatusBar } from 'react-native'
import ProgressBar from '../../../components/ProgressBar'
class DayAnalysisScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <Text style={styles.content}>
          &nbsp;&nbsp;&nbsp;&nbsp; 据天空新闻：<Text
            onPress={() => Linking.openURL('https://www.baidu.com')}
            style={styles.keyword}
          >
            英国首相
          </Text>特雷莎·梅将在格林威治时间16:30（北京时间13日00:30）在：<Text
            onPress={() => Linking.openURL('https://www.baidu.com')}
            style={styles.keyword}
          >
            英国首相
          </Text>发表声明
        </Text>
        <View style={styles.wordWightWarp}>
          <Text style={styles.title}>词权重</Text>
          <View style={styles.chartWrap}>
            <View style={styles.row}>
              <Text style={styles.keywordFont}>dssdf222</Text>
              <ProgressBar color='green' num={1} total={4} />
            </View>
            <View style={styles.row}>
              <Text style={styles.keywordFont}>dssdf</Text>
              <ProgressBar color='green' num={1} total={4} />
            </View>
            <View style={styles.row}>
              <Text style={styles.keywordFont}>dssdf</Text>
              <ProgressBar color='green' num={1} total={4} />
            </View>
            <View style={styles.row}>
              <Text style={styles.keywordFont}>dssdf</Text>
              <ProgressBar color='green' num={1} total={4} />
            </View>
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
  content: {
    fontSize: 24,
    margin: 16
  },
  keyword: {
    textDecorationLine: 'underline',
    color: '#5497e4'
  },
  wordWightWarp: {
    flex: 1,
    marginLeft: 25,
    marginRight: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 26,
    marginBottom: 30
  },
  chartWrap: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20
  },
  keywordFont: {}
})
export default DayAnalysisScreen
