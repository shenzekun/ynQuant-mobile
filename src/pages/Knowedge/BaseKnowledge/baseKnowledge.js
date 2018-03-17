import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class BaseKnowledge extends React.Component {
  render () {
    return (
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity style={styles.cardWrap} activeOpacity={0.7}>
          <LinearGradient
            style={styles.gradient}
            colors={['#89AD45', '#ABC672']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <View style={styles.cardDescWrap}>
              <View style={styles.cardLogo}>
                <Image
                  source={require('../../../images/knowledge/knowledge.png')}
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardDesc}>
                <Text style={[styles.cardTitle, styles.cardDescFontColor]}>外汇基础知识</Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>
                  建议完成时间: 15分钟
                </Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>建议人群: 初学者</Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>完成人数: 1333人</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.cardStatusWrap}>
            <View style={styles.rowCenter}>
              <Image
                source={require('../../../images/knowledge/complete.png')}
                style={styles.statusImg}
              />
              <Text style={styles.statusText}>已完成 20/20</Text>
            </View>
            <View style={styles.loveAndMsgWrap}>
              <View style={styles.rowCenter}>
                <Image
                  source={require('../../../images/knowledge/love.png')}
                  style={styles.loveImg}
                />
                <Text style={styles.text}>2121</Text>
              </View>
              <View style={styles.rowCenter}>
                <Image
                  source={require('../../../images/knowledge/message.png')}
                  style={styles.messageImg}
                />
                <Text style={styles.text}>212</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardWrap} activeOpacity={0.7}>
          <LinearGradient
            style={styles.gradient}
            colors={['#89AD45', '#ABC672']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <View style={styles.cardDescWrap}>
              <View style={styles.cardLogo}>
                <Image
                  source={require('../../../images/knowledge/knowledge.png')}
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardDesc}>
                <Text style={[styles.cardTitle, styles.cardDescFontColor]}>外汇专业知识</Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>
                  建议完成时间: 15分钟
                </Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>建议人群: 初学者</Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>完成人数: 1333人</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.cardStatusWrap}>
            <View style={styles.rowCenter}>
              <Image
                source={require('../../../images/knowledge/processing.png')}
                style={styles.statusImg}
              />
              <Text style={styles.statusText}>进行中 8/20</Text>
            </View>
            <View style={styles.loveAndMsgWrap}>
              <View style={styles.rowCenter}>
                <Image
                  source={require('../../../images/knowledge/love.png')}
                  style={styles.loveImg}
                />
                <Text style={styles.text}>2121</Text>
              </View>
              <View style={styles.rowCenter}>
                <Image
                  source={require('../../../images/knowledge/message.png')}
                  style={styles.messageImg}
                />
                <Text style={styles.text}>212</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardWrap} activeOpacity={0.7}>
          <LinearGradient
            style={styles.gradient}
            colors={['#89AD45', '#ABC672']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <View style={styles.cardDescWrap}>
              <View style={styles.cardLogo}>
                <Image
                  source={require('../../../images/knowledge/knowledge.png')}
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardDesc}>
                <Text style={[styles.cardTitle, styles.cardDescFontColor]}>外汇专业知识</Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>
                  建议完成时间: 15分钟
                </Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>建议人群: 初学者</Text>
                <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>完成人数: 1333人</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.cardStatusWrap}>
            <View style={styles.rowCenter}>
              <Image
                source={require('../../../images/knowledge/noStart.png')}
                style={styles.statusImg}
              />
              <Text style={styles.statusText}>未开始 0/20</Text>
            </View>
            <View style={styles.loveAndMsgWrap}>
              <View style={styles.rowCenter}>
                <Image
                  source={require('../../../images/knowledge/love.png')}
                  style={styles.loveImg}
                />
                <Text style={styles.text}>2121</Text>
              </View>
              <View style={styles.rowCenter}>
                <Image
                  source={require('../../../images/knowledge/message.png')}
                  style={styles.messageImg}
                />
                <Text style={styles.text}>212</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cardWrap: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    elevation: 1 // 让安卓拥有灰色阴影
  },
  gradient: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden'
  },
  cardDescWrap: {
    flexDirection: 'row',
    position: 'relative',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  cardLogo: {
    height: 50,
    width: 50,
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginLeft: 15,
    marginTop: 15
  },
  cardImg: {
    height: 27,
    width: 27,
    position: 'absolute',
    top: 13,
    left: 12
  },
  cardDesc: {
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 5
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  cardDescFontColor: {
    color: '#fff'
  },
  cardSubTitle: {
    fontSize: 12,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  cardStatusWrap: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loveAndMsgWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  statusImg: {
    height: 20,
    width: 20,
    marginRight: 8,
    marginLeft: 15
  },
  statusText: {
    fontSize: 14
  },
  loveImg: {
    width: 15,
    height: 13.95,
    marginRight: 5
  },
  messageImg: {
    width: 14.98,
    height: 14.02,
    marginLeft: 7,
    marginRight: 5
  },
  text: {
    color: '#a3b5b5',
    fontSize: 14
  }
})
export default BaseKnowledge
