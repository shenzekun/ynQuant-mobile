import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'
import Note from '../../../components/Note/Note'
import Comment from '../../../components/Comment/Comment'
import { knowledgeCommentsList } from '../../../service/getData'
// import {} from '../../../service/getData'

class BaseWriteNote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCheckBoxSelected: true,
      commentData: []
    }
  }
  componentDidMount () {
    console.log(this.props.navigation.state.params.id)
    knowledgeCommentsList(this.props.navigation.state.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({ commentData: res.data })
      })
      .catch(err => console.log(err))
  }

  handleCheckBox = () => {
    this.setState({
      isCheckBoxSelected: !this.state.isCheckBoxSelected
    })
  }

  render () {
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.writeNoteWrap}>
          <View style={styles.informationWrap}>
            <Text>信息</Text>
            <Text>笔记：15个</Text>
          </View>
          <Note id={this.props.navigation.state.params.id} type={1} />
          {/* <View style={styles.inputContentWrap}>
            <TextInput multiline style={styles.inputContent} />
            <View style={styles.checkBoxWrap}>
              <CheckBox
                style={{ padding: 10, width: 111 }}
                rightText={'分享笔记'}
                checkBoxColor={'#1677cb'}
                isChecked={this.state.isCheckBoxSelected}
                onClick={this.handleCheckBox}
                rightTextStyle={{ height: 15, fontSize: 14, color: '#8e929b' }}
              />
            </View>
          </View> */}
        </View>
        <View style={styles.writeNoteWrap}>
          <Text>精彩笔记：</Text>
          {this.state.commentData.map(item => {
            return <Comment data={item} />
          })}
        </View>
        <View style={styles.writeNote}>
          <View style={styles.btnWrap}>
            <TouchableOpacity onPress={() => goBack()}>
              <Text style={[styles.noteBgColor, styles.btn, styles.writeTextFont]}>返回</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.continueBgColor, styles.btn, styles.writeTextFont]}>下一页</Text>
            </TouchableOpacity>
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
  writeNoteWrap: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  informationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputContentWrap: {
    marginTop: 16
  },
  inputContent: {
    backgroundColor: '#f0f0f0',
    height: 99,
    borderRadius: 3
  },
  checkBoxWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 9
  },
  writeNote: {
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0
  },
  writeTextFont: {
    fontSize: 12
  },
  btnWrap: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  btn: {
    color: '#fff',
    height: 40,
    width: 165,
    textAlign: 'center',
    lineHeight: 40
  },
  noteBgColor: {
    backgroundColor: '#ddba76'
  },
  continueBgColor: {
    backgroundColor: '#1677cb'
  }
})

export default BaseWriteNote
