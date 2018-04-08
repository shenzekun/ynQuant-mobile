import React from 'react'
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import Toast from 'react-native-root-toast'
import { login } from '../Login/loginAction'
import Loading from '../../components/Loading'
import { SafeAreaView } from 'react-navigation'

const mapStateToProps = state => {
  return state.Login
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
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
  shouldComponentUpdate (nextProps, nextState) {
    // 登录完成,切成功登录
    if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
      StatusBar.setNetworkActivityIndicatorVisible(false)
      this.props.navigation.goBack()
      return false
    }
    if (nextProps.status === '正在登陆') {
      StatusBar.setNetworkActivityIndicatorVisible(true)
    }
    if (nextProps.status === '登录出错') {
      this.showToast(nextProps.errMsg)
      StatusBar.setNetworkActivityIndicatorVisible(false)
    }
    return true
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
    this.props.login({
      phone: this.state.phone,
      password: this.state.password
    })
  }
  render () {
    let { goBack, navigate } = this.props.navigation
    return (
      <SafeAreaView style={styles.loginPage}>
        <StatusBar barStyle='light-content' backgroundColor='#000' />
        <TouchableOpacity style={styles.back} onPress={() => goBack()}>
          <Image
            source={require('../../images/common/back.png')}
            style={{ width: 8, height: 16 }}
          />
        </TouchableOpacity>
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
            onPress={() => navigate('Register')}
            underlayColor='#fff'
          >
            <Text style={styles.registerButtonText}>注册</Text>
          </TouchableOpacity>
        </View>
        {this.props.status === '正在登陆' ? <Loading /> : null}
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#171616',
    position: 'relative'
  },
  back: {
    position: 'absolute',
    left: 22,
    top: 40
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
    width: 220,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    fontSize: 19,
    color: 'white'
  },
  weChatButton: {
    borderRadius: 21,
    backgroundColor: '#97e960',
    height: 45,
    width: 220,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weChatButtonText: {
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
