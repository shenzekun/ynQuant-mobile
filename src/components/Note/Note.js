import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import CheckBox from 'react-native-check-box'
import { trim } from '../../config/utils'
import Loading from '../Loading'
import Toast from 'react-native-root-toast'
import { addKnowledgeComments, addNewsComments } from '../../service/getData'
const propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired
}

class Note extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCheckBoxSelected: true,
      text: '',
      isLoading: false
    }
  }
  toast = null
  showToast = message => {
    this.toast && this.toast.destroy()
    this.toast = Toast.show(message, {
      duration: 1000,
      position: Toast.positions.TOP,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: '#fff',
      shadowColor: '#000',
      textColor: '#000',
      opacity: 1
    })
  }
  handleCheckBox = () => {
    this.setState({
      isCheckBoxSelected: !this.state.isCheckBoxSelected
    })
  }
  handleSubmit = () => {
    if (this.state.text) {
      switch (this.props.type) {
        case 0: // 新增新闻评论
          this.setState({ isLoading: true })
          addNewsComments({
            content: this.state.text,
            id: this.props.id
          })
            .then(res => {
              if (res === 'created') {
                this.showToast('评论成功')
                this.setState({ isLoading: false })
              }
            })
            .catch(err => console.log(err))
          break
        case 1: // 新增知识点评论
          this.setState({ isLoading: true })
          addKnowledgeComments({
            content: this.state.text,
            id: this.props.id
          })
            .then(res => {
              console.log(res)
              if (res === 'created') {
                this.showToast('评论成功')
                this.setState({ isLoading: false })
              }
            })
            .catch(err => console.log(err))
          break
        default:
          return false
      }
    } else {
      return false
    }
  }
  render () {
    return (
      <View style={styles.noteWrap}>
        <View style={styles.inputContentWrap}>
          <TextInput
            multiline
            style={styles.inputContent}
            onChangeText={text => {
              text = trim(text)
              this.setState({ text })
            }}
            placeholder={'评论点什么吧...'}
            placeholderTextColor={'#a6a6a6'}
            autoCapitalize={'none'}
            blurOnSubmit
            onSubmitEditing={this.handleSubmit}
            value={this.state.text}
          />
          {/* <View style={styles.checkBoxWrap}>
            <CheckBox
              style={{ padding: 10, width: 111 }}
              rightText={'分享笔记'}
              checkBoxColor={'#1677cb'}
              isChecked={this.state.isCheckBoxSelected}
              onClick={this.handleCheckBox}
              rightTextStyle={{ height: 15, fontSize: 14, color: '#8e929b' }}
            />
          </View> */}
        </View>
        {this.state.isLoading ? <Loading color={'#9a9a9a'} /> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  noteWrap: {
    marginTop: 10,
    marginBottom: 10
  },
  inputContentWrap: {
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8
  },
  inputContent: {
    backgroundColor: '#fff',
    height: 174,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    borderRadius: 3
  },
  checkBoxWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 9
  }
})

Note.propTypes = propTypes

export default Note
