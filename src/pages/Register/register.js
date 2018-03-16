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

class RegisterScreen extends React.Component {
  render () {
    return (
      <View style={styles.registerPage}>
        {/* header */}
        <View style={styles.headerStyle}>
          <Image
            source={require('../../images/Logo/loginLogo.png')}
            style={{ width: 250, height: 120 }}
          />
        </View>
        {/* body */}
        <View style={styles.bodyStyle}>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.9 }}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='邮箱'
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.6 }}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='用户名'
              autoCapitalize={'none'}
              maxLength={8}
            />
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.7 }}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='密码'
              keyboardType={'email-address'}
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
            />
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.6 }}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='确认密码'
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
            />
          </View>
          <View style={styles.selectType} />

          <TouchableOpacity
            style={styles.registerButton}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'
          >
            <Text style={styles.registerButtonText}>创建账号</Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
        <View style={styles.footerStyle}>
          <View style={styles.footerFix}>
            <Text style={styles.remindText}>已经拥有账户？</Text>
            {/* <Button color='black' title='登录.' /> */}
            <TouchableOpacity
              // style={styles.registerButton}
              // onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'
            >
              <Text style={{ fontSize: 14 }}>登录</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  registerPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 0
  },
  headerStyle: {
    padding: 0,
    alignItems: 'center',
    backgroundColor: 'black',
    width: 400,
    height: 200
  },
  bodyStyle: {
    marginTop: 19
  },
  registerButton: {
    fontSize: 14,
    borderRadius: 21,
    backgroundColor: 'black',
    height: 45,
    width: 220,
    marginTop: 10
  },
  registerButtonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginTop: 15
  },
  footerStyle: {
    flex: 1,
    backgroundColor: 'gray',
    height: 35,
    marginTop: 150
  },
  footerFix: {
    flexDirection: 'row',
    width: 400,
    marginTop: 5,
    paddingLeft: 120
  },
  renmindText: {
    color: 'gray'
  },
  input: {
    width: 200,
    height: 40,
    paddingTop: 6,
    textAlign: 'center'
  },
  selectType: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    height: 50
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
