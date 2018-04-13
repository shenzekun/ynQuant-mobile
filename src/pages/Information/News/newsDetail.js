import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { getLineBreak } from '../../../config/utils'
import Note from '../../../components/Note/Note'
import { newsDetail } from '../../../service/getData'

class NewsDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    const { params } = this.props.navigation.state
    console.log(params)
    newsDetail(params.id)
      .then(res => {
        this.setState({ data: res.comments })
      })
      .catch(err => console.log(err))
  }
  render () {
    const { params } = this.props.navigation.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textWrap}>
          <Text style={styles.textStyle}>
            {getLineBreak(params.content.content, /\n/g, '\n\n')}
          </Text>
          <Text style={styles.commentText}>评论</Text>
          <Note data={this.state.data} id={params.id} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textWrap: {
    margin: 16
  },
  commentText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  textStyle: {
    fontSize: 20
  }
})
export default NewsDetail
