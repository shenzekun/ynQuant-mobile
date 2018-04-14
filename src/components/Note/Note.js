import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import CheckBox from 'react-native-check-box'
import {trim} from '../../config/utils'
const propTypes = {
  data: PropTypes.array.isRequired // 数据
}

class Note extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCheckBoxSelected: true,
      text: ''
    }
  }
  handleCheckBox = () => {
    this.setState({
      isCheckBoxSelected: !this.state.isCheckBoxSelected
    })
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
              console.log(text)
              this.setState({ text })
            }}
            autoCapitalize={'none'}
            value={this.state.text}
          />
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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  noteWrap: {
    marginTop: 10,
    marginBottom: 76
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
  }
})

Note.propTypes = propTypes

export default Note
