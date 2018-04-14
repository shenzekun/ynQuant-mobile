import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import { getLineBreak, getTime, getImageUrl } from '../../config/utils'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import { newsComments, commentLikes } from '../../service/getData'

const propTypes = {
  data: PropTypes.array.isRequired // 数据
  // image: PropTypes.string.isRequired, // 图片
  // like: PropTypes.number.isRequired, // 点赞数
  // content: PropTypes.string.isRequired, // 笔记内容
  // time: PropTypes.number.isRequired, // 发表时间
  // location: PropTypes.string.isRequired // 位置
}

class Note extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshState: RefreshState.Idle,
      data: props.data || [],
      isInit: false
    }
    console.log(props)
    this.page = 1
  }
  onFooterRefresh = () => {
    this.setState({ refreshState: RefreshState.FooterRefreshing })
    this.page++
    newsComments(this.page, this.props.id)
      .then(res => {
        console.log(res)
        if (res.data.length !== 0) {
          let data = [...this.state.data]
          data = data.concat(res.data)
          console.log(data)
          this.setState({ data: data, refreshState: RefreshState.Idle })
        } else {
          this.setState({ refreshState: RefreshState.NoMoreData })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  commentLike (id, like) {
    console.log(id)
    commentLikes(id)
      .then(res => {
        if (res === 'success') {
          this.setState({ like: like + 1 })
        } else {
          this.setState({ like: like - 1 })
        }
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  shouldComponentUpdate (nextprops, nextstate) {
    return this.state.data !== nextstate.data
  }
  componentWillReceiveProps (nextprops) {
    if (!this.state.isInit) {
      this.setState({ data: nextprops.data, isInit: true })
    }
  }
  _renderEmptyLayout () {
    return <Text style={{ alignSelf: 'center', marginTop: 20 }}>暂无数据</Text>
  }
  _renderItem = data => {
    if (!data) {
      return
    }
    const key = data.item.id
    const name = data.item.user_info.name
    const userId = data.item.user_info.id
    const imageUrl = getImageUrl(data.item.user_info.head_url)
    const location = data.item.location
    const time = getTime(data.item.created_at)
    const like = data.item.likes_count
    const content = getLineBreak(data.item.content, /<br \/>/g, '\n')
    return (
      <View key={key}>
        <View style={styles.noteHeaderWrap}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <View style={styles.personInfoWrap}>
            <Text style={styles.nameTitle}>{name}</Text>
            <View style={styles.locationWrap}>
              <Image source={require('../../images/note/location.png')} />
              <Text style={styles.locationText}>天津</Text>
              <Text style={styles.locationText}>{time}</Text>
            </View>
          </View>
          <View style={styles.likeWrap}>
            <TouchableOpacity onPress={() => this.commentLike(key, like)}>
              <Image source={require('../../images/note/like.png')} />
            </TouchableOpacity>
            <Text style={styles.likeNum}>{like}</Text>
          </View>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.noteWrap}>
        <RefreshListView
          renderItem={this._renderItem}
          data={this.state.data}
          initialNumToRender={3}
          refreshState={this.state.refreshState}
          onFooterRefresh={this.onFooterRefresh}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={this._renderEmptyLayout}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  noteWrap: {
    marginTop: 10,
    marginBottom: 76
  },
  noteHeaderWrap: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    position: 'relative'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  personInfoWrap: {
    flexDirection: 'column',
    marginLeft: 10
  },
  locationWrap: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationText: {
    fontSize: 10,
    color: '#88a5c2',
    marginLeft: 3
  },
  nameTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: -2
  },
  likeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0
  },
  likeNum: {
    fontSize: 14,
    marginLeft: 5,
    color: '#88a5c2'
  },
  content: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 15,
    marginTop: 15
  }
})

Note.propTypes = propTypes

export default Note
