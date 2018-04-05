import React from 'react'
import { Button, Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Toast from 'react-native-root-toast'
import { login } from '../../service/getData'

/**
 * 首页
 */

const mapStateToProps = state => {
  return state.Home
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch()
  }
}

class LoginScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phone: '',
      password: ''
    }
  }
  toast = null
  showToast = message => {
    this.toast && this.toast.destroy()
    this.toast = Toast.show(message, {
      duration: Toast.durations.SHORT,
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
  validatePhone = () => {
    if (
      !/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/.test(
        this.state.phone
      ) ||
      this.state.phone === ''
    ) {
      this.showToast('请输入正确的手机格式！')
    }
  }
  validatePwd = () => {
    if (this.state.password === '') {
      this.showToast('请输入密码！')
    }
  }
  login = () => {
    if (this.state.password === '') {
      return
    }
    if (this.state.phone === '') {
      return
    }
    if (
      !/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/.test(
        this.state.phone
      )
    ) {
      return
    }
    login({
      phone: this.state.phone,
      password: this.state.password
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log(err)
      })
    alert(Object.entries(this.state))
  }
  render () {
    return (
      <View style={styles.loginPage}>
        <Image source={require('../../images/Logo/loginLogo.png')} style={{ marginTop: 68 }} />
        <View style={styles.loginSection}>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.7, width: 230 }}>
            <TextInput
              style={styles.phoneInput}
              placeholderTextColor={'#fff'}
              placeholder='手机'
              autoCapitalize={'none'}
              onChangeText={text => this.setState({ phone: text })}
              value={this.state.phone}
              keyboardType={'numeric'}
              maxLength={11}
              onEndEditing={this.validatePhone}
            />
          </View>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.5, width: 230 }}>
            <TextInput
              style={styles.passwordInput}
              placeholderTextColor={'#fff'}
              placeholder='密码'
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
              onEndEditing={this.validatePwd}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />
          </View>
          <Text style={styles.yinuoText}>亿诺智汇科技©</Text>
          <TouchableOpacity style={styles.loginButton} onPress={this.login} underlayColor='#fff'>
            <Text style={styles.loginButtonText}>登录</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.weChatButton}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'
          >
            <Text style={styles.weChatButtonText}>微信登录</Text>
          </TouchableOpacity>

          <Text style={styles.remindText}>还没有注册？</Text>

          <TouchableOpacity
            style={styles.registerButton}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'
          >
            <Text style={styles.registerButtonText}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#171616'
  },
  loginSection: {
    padding: 1,
    borderColor: '#171616'
  },
  phoneInput: {
    marginBottom: 1,
    marginTop: 40,
    height: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 17
  },
  passwordInput: {
    color: '#fff',
    marginBottom: 1,
    borderRadius: 3,
    borderColor: 'black',
    height: 40,
    textAlign: 'center',
    fontSize: 17
  },
  yinuoText: {
    marginTop: 20,
    marginBottom: 86,
    fontSize: 13,
    color: '#a1a1a1',
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: '#171616',
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#fff',
    height: 45,
    width: 220
  },
  loginButtonText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 19,
    color: 'white'
  },
  weChatButton: {
    borderRadius: 21,
    backgroundColor: '#97e960',
    height: 45,
    width: 220,
    marginTop: 8
  },
  weChatButtonText: {
    paddingTop: 12,
    textAlign: 'center',
    fontSize: 19,
    color: 'black'
  },
  remindText: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 70,
    color: '#919090',
    marginBottom: 9
  },
  registerButton: {
    borderRadius: 21,
    backgroundColor: '#171616',
    height: 45,
    width: 220,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 25
  },
  registerButtonText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 19,
    paddingTop: 7,
    color: 'white'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
