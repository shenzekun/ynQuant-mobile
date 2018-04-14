import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getLineBreak } from '../../../config/utils'
import Note from '../../../components/Note/Note'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import { newsDetail, newsComments } from '../../../service/getData'
import Comment from '../../../components/Comment/Comment'

class NewsDetail extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      refreshState: RefreshState.Idle,
      data: []
    }
    const { params } = props.navigation.state
    this.params = params
    this.page = 1
  }
  _keyExtractor = (item, index) => item.id + ''
  _renderItem = data => {
    return <Comment data={data.item} />
  }
  onFooterRefresh = () => {
    this.setState({ refreshState: RefreshState.FooterRefreshing })
    this.page++
    newsComments(this.page, this.params.id)
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
  onHeaderRefresh = () => {
    this.setState({ refreshState: RefreshState.HeaderRefreshing })
    this.page = 1
    newsComments(this.page, this.params.id)
      .then(res => {
        console.log(res)
        this.setState({ data: res.data, refreshState: RefreshState.Idle })
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount () {
    const { params } = this.props.navigation.state
    this.params = params
    newsDetail(params.id)
      .then(res => {
        this.setState({ data: res.comments })
      })
      .catch(err => console.log(err))
  }
  _renderHeaderLayout () {
    return (
      <View style={{ marginTop: 16 }}>
        <Text style={styles.textStyle}>
          {getLineBreak(this.params.content.content, /\n/g, '\n\n')}
        </Text>
        <Text style={styles.commentText}>评论</Text>
      </View>
    )
  }
  render () {
    const { params } = this.props.navigation.state
    console.log(params)
    return (
      <View style={styles.container}>
        <View style={styles.textWrap}>
          <RefreshListView
            renderItem={this._renderItem}
            data={this.state.data}
            initialNumToRender={10}
            refreshState={this.state.refreshState}
            onFooterRefresh={this.onFooterRefresh}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={this._renderEmptyLayout}
            onHeaderRefresh={this.onHeaderRefresh}
            keyExtractor={this._keyExtractor}
            ListHeaderComponent={() => this._renderHeaderLayout()}
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
  textWrap: {
    marginRight: 16,
    marginLeft: 16
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
