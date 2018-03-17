import React from 'react'
import {
  Button,
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
// import { loginAction } from './loginActions'

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
  render () {
    return (
      <View style={styles.loginPage}>
        <Image
          source={require('../../images/Logo/loginLogo.png')}
          style={{ width: 250, height: 120, marginTop: 30, padding: 20}}
        />
        <View style={styles.loginSection}>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.7 }}>
            <TextInput
              style={styles.emailInput}
              placeholderTextColor={'#fff'}
              placeholder='邮箱'
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />
          </View>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.5 }}>
            <TextInput
              style={styles.passwordInput}
              placeholderTextColor={'#fff'}
              placeholder='密码'
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
              // onChangeText={text => (this.password = text)}
            />
          </View>
          <Text style={styles.yinuoText}>亿诺智汇科技©</Text>
          <TouchableOpacity
            style={styles.loginButton}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'
          >
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
  emailInput: {
    marginBottom: 1,
    marginTop: 40,
    height: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 17
  },
  passwordInput: {
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
    color: 'white',
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
    paddingTop: 8,
    textAlign: 'center',
    fontSize: 19,
    color: 'white'
  },
  weChatButton: {
    fontSize: 14,
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
    color: '#777777',
    marginBottom: 9
  },
  registerButton: {
    color: 'blue',
    fontSize: 14,
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
