import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import { getLineBreak } from '../../config/utils'

const propTypes = {
  data: PropTypes.array.isRequired // 数据
  // image: PropTypes.string.isRequired, // 图片
  // like: PropTypes.number.isRequired, // 点赞数
  // content: PropTypes.string.isRequired, // 笔记内容
  // time: PropTypes.number.isRequired, // 发表时间
  // location: PropTypes.string.isRequired // 位置
}

class Note extends React.Component {
  _renderItem = data => {
    const key = data.item.key
    const name = data.item.name
    const imageUrl = data.item.imageUrl
    const location = data.item.location
    const time = data.item.time
    const like = data.item.like
    const content = getLineBreak(data.item.content, '\n')
    return (
      <View key={key}>
        <View style={styles.noteHeaderWrap}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <View style={styles.personInfoWrap}>
            <Text style={styles.nameTitle}>{name}</Text>
            <View style={styles.locationWrap}>
              <Image source={require('../../images/note/location.png')} />
              <Text style={styles.locationText}>{location}</Text>
              <Text style={styles.locationText}>{time}</Text>
            </View>
          </View>
          <View style={styles.likeWrap}>
            <TouchableOpacity>
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
        <FlatList renderItem={this._renderItem} data={this.props.data} initialNumToRender={2} showsVerticalScrollIndicator={false}
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
