import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { getLineBreak, getTime, getImageUrl } from '../../config/utils'
import { commentLikes } from '../../service/getData'
import PropTypes from 'prop-types'
const propTypes = {
  data: PropTypes.object.isRequired // 数据
}
class Comment extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { like: props.data.likes_count, isLike: false }
  }
  render () {
    const key = this.props.data.id
    const name = this.props.data.user_info.name
    const userId = this.props.data.user_info.id
    const imageUrl = getImageUrl(this.props.data.user_info.head_url)
    const location = this.props.data.location
    const time = getTime(this.props.data.created_at)
    // const like = this.props.data.likes_count
    const content = getLineBreak(this.props.data.content, /<br \/>/g, '\n')
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
            <TouchableOpacity
              onPress={() => {
                commentLikes(key)
                  .then(res => {
                    if (res === 'created') {
                      this.setState({ like: this.state.like + 1, isLike: true })
                    } else {
                      if (this.state.like > 0) {
                        this.setState({ like: this.state.like - 1, isLike: false })
                      }
                    }
                    console.log(res)
                  })
                  .catch(err => console.log(err))
              }}
            >
              <Image
                source={
                  this.state.isLike
                    ? require('../../images/note/like-active.png')
                    : require('../../images/note/like.png')
                }
              />
            </TouchableOpacity>
            <Text style={styles.likeNum}>{this.state.like}</Text>
          </View>
        </View>
        <Text style={styles.content}>{content}</Text>
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
Comment.propTypes = propTypes
export default Comment
