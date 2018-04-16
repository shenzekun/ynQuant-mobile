import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { knowledgeList } from '../../../service/getData'

class BaseKnowledge extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    knowledgeList(0)
      .then(res => {
        this.setState({ data: res })
        console.log(res)
      })
      .catch(err => console.log(err))
    // let data = [
    //   {
    //     id: 1,
    //     title: '\u5803\u603b\u5e05\u4e0d\u5e05',
    //     content: '\u5803\u603b\u5f88\u5e05, \u70b9\u51fb\u9605\u8bfb!',
    //     parent: null,
    //     type: 0,
    //     page: null,
    //     difficulty: '\u521d\u5b66\u8005',
    //     created_at: '2018-04-12 16:47:43',
    //     updated_at: '2018-04-12 16:47:45',
    //     deleted_at: null,
    //     views_count: 11,
    //     total_count: 6,
    //     finished_count: 1,
    //     user_page_tag: {
    //       id: 4,
    //       knowledge_id: 1,
    //       user_id: 1,
    //       page: 6,
    //       created_at: '2018-04-15 12:17:30',
    //       updated_at: '2018-04-15 12:17:34'
    //     }
    //   },
    //   {
    //     id: 2,
    //     title: '\u5803\u603b\u5e05\u4e0d\u5e05',
    //     content: '\u5803\u603b\u5f88\u5e05, \u70b9\u51fb\u9605\u8bfb!',
    //     parent: null,
    //     type: 0,
    //     page: null,
    //     difficulty: '\u521d\u5b66\u8005',
    //     created_at: '2018-04-12 16:47:43',
    //     updated_at: '2018-04-12 16:47:45',
    //     deleted_at: null,
    //     views_count: 0,
    //     total_count: 0,
    //     finished_count: 0,
    //     user_page_tag: null
    //   },
    //   {
    //     id: 3,
    //     title: '\u5803\u603b\u5e05\u4e0d\u5e05',
    //     content: '\u5803\u603b\u5f88\u5e05, \u70b9\u51fb\u9605\u8bfb!',
    //     parent: null,
    //     type: 0,
    //     page: null,
    //     difficulty: '\u521d\u5b66\u8005',
    //     created_at: '2018-04-12 16:47:43',
    //     updated_at: '2018-04-12 16:47:45',
    //     deleted_at: null,
    //     views_count: 0,
    //     total_count: 0,
    //     finished_count: 0,
    //     user_page_tag: null
    //   }
    // ]
    // this.setState({ data: data })
  }

  render () {
    const { navigate, push } = this.props.navigation
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.state.data.map(item => {
          console.log(item)
          const page = item.user_page_tag ? item.user_page_tag.page : 0
          const totalPage = item.total_count
          return (
            <TouchableOpacity
              style={styles.cardWrap}
              activeOpacity={0.7}
              onPress={() => push('BaseIntroduce', { content: item.content, title: item.title })}
              key={item.id}
            >
              <LinearGradient
                style={styles.gradient}
                colors={['#89AD45', '#ABC672']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <View style={styles.cardDescWrap}>
                  <View style={styles.cardLogo}>
                    <Image
                      source={require('../../../images/knowledge/knowledge.png')}
                      style={styles.cardImg}
                    />
                  </View>
                  <View style={styles.cardDesc}>
                    <Text style={[styles.cardTitle, styles.cardDescFontColor]}>{item.title}</Text>
                    <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>
                      建议完成时间: 15分钟
                    </Text>
                    <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>
                      建议人群: {item.difficulty}
                    </Text>
                    <Text style={[styles.cardSubTitle, styles.cardDescFontColor]}>
                      完成人数: {item.finished_count}人
                    </Text>
                  </View>
                </View>
              </LinearGradient>
              <View style={styles.cardStatusWrap}>
                <View style={styles.rowCenter}>
                  {page === 0 ? (
                    <Image
                      source={require('../../../images/knowledge/noStart.png')}
                      style={styles.statusImg}
                    />
                  ) : null}
                  {page === totalPage ? (
                    <Image
                      source={require('../../../images/knowledge/complete.png')}
                      style={styles.statusImg}
                    />
                  ) : null}
                  {page !== totalPage && page !== 0 ? (
                    <Image
                      source={require('../../../images/knowledge/processing.png')}
                      style={styles.statusImg}
                    />
                  ) : null}
                  <Text style={styles.statusText}>
                    {page === 0 ? '未开始' : page === totalPage ? '已完成' : '进行中'}{' '}
                    {page + '/' + totalPage}
                  </Text>
                </View>
                <View style={styles.loveAndMsgWrap}>
                  {/* <View style={styles.rowCenter}>
                    <Image
                      source={require('../../../images/knowledge/love.png')}
                      style={styles.loveImg}
                    />
                    <Text style={styles.text}>2121</Text>
                  </View> */}
                  <View style={styles.rowCenter}>
                    <Image
                      source={require('../../../images/knowledge/message.png')}
                      style={styles.messageImg}
                    />
                    <Text style={styles.text}>12</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
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
    height: 24,
    width: 24,
    position: 'absolute',
    top: 13,
    left: 13
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
