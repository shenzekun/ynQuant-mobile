import React from 'react'
import { Button, Text, View, TextInput, StyleSheet } from 'react-native'
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
        <View style={styles.loginSection}>
          <TextInput
            style={styles.emailInput}
            placeholder='邮箱'
            keyboardType={'numeric'}
            autoCapitalize={'none'}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder='password'
            secureTextEntry
            autoCapitalize={'none'}
            maxLength={20}
            // onChangeText={text => (this.password = text)}
          />
          <Text style={styles.yinuoText}>亿诺智汇科技</Text>
          <Button style={styles.loginBut} backgroundColor='blue' title='登录' />
          <Button style={styles.weChatBut} title='微信登录' />
          <Text style={styles.remindText}>没有账号？</Text>
          <Button style={styles.regBut} title='注册' />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20
  },
  loginSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 32
  },
  loginBut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  yinuoText: {
    marginBottom: 60,
    fontSize: 10,
    color: 'gray',
    textAlign: 'center'
  },
  remindText: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 130
  },
  weChatBut: {
    color: 'blue',
    fontSize: 14,
    width: 220,
    height: 40,
    borderRadius: 3,
    backgroundColor: 'blue'
  },
  emailInput: {
    marginBottom: 3,
    marginTop: 187.5,
    height: 40,
    textAlign: 'center'
  },
  passwordInput: {
    marginBottom: 2,
    borderRadius: 3,
    borderColor: 'white',
    height: 40,
    textAlign: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
