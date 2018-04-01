import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
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
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      user: '',
      password: '',
      verifyPassword: '',
      skills: '金融新手',
      isEmailWarn: false,
      isUserWarn: false,
      isPassWordWarn: false,
      isVerifyPwdWarn: false
    }
  }

  clickButton = text => {
    this.setState({ skills: text })
  }

  validateMail = () => {
    if (
      !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/.test(this.state.email)
    ) {
      this.setState({ isEmailWarn: true })
    } else {
      this.setState({ isEmailWarn: false })
    }
  }

  validateUser = () => {
    if (this.state.user === '') {
      this.setState({ isUserWarn: true })
    } else {
      this.setState({ isUserWarn: false })
    }
  }

  validatePwd = () => {
    if (this.state.password === '') {
      this.setState({ isPassWordWarn: true })
    } else {
      this.setState({ isPassWordWarn: false })
    }
  }

  validateVerifyPwd = () => {
    if (this.state.verifyPassword === '' || this.state.password !== this.state.verifyPassword) {
      this.setState({ isVerifyPwdWarn: true })
    } else {
      this.setState({ isVerifyPwdWarn: false })
    }
  }

  register = () => {
    if (this.state.user === '') {
      return
    }
    if (this.state.password === '') {
      return
    }
    if (this.state.verifyPassword === '') {
      return
    }
    if (this.state.password !== this.state.verifyPassword) {
      return
    }
    if (
      !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/.test(this.state.email)
    ) {
      return
    }
    alert(Object.entries(this.state))
  }

  render () {
    return (
      <View style={styles.registerPage}>
        {/* header */}
        <View style={styles.headerStyle}>
          <Image style={styles.logo} source={require('../../images/Logo/loginLogo.png')} />
        </View>
        {/* body */}
        <View style={styles.bodyStyle}>
          <View
            style={[
              styles.inputer,
              {
                borderColor: this.state.isEmailWarn === true ? 'red' : '#BDBDBD'
              }
            ]}
          >
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='邮箱'
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
              onEndEditing={this.validateMail}
            />
          </View>
          <View
            style={[
              styles.inputer,
              {
                borderColor: this.state.isUserWarn === true ? 'red' : '#BDBDBD'
              }
            ]}
          >
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='用户名'
              autoCapitalize={'none'}
              maxLength={16}
              onChangeText={text => this.setState({ user: text })}
              value={this.state.user}
              onEndEditing={this.validateUser}
            />
          </View>
          <View
            style={[
              styles.inputer,
              {
                borderColor: this.state.isPassWordWarn === true ? 'red' : '#BDBDBD'
              }
            ]}
          >
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='密码'
              keyboardType={'email-address'}
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              onEndEditing={this.validatePwd}
            />
          </View>
          <View
            style={[
              styles.inputer,
              {
                borderColor: this.state.isVerifyPwdWarn === true ? 'red' : '#BDBDBD'
              }
            ]}
          >
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='确认密码'
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
              onChangeText={text => this.setState({ verifyPassword: text })}
              value={this.state.verifyPassword}
              onEndEditing={this.validateVerifyPwd}
            />
          </View>
          <View style={styles.selectType}>
            <TouchableOpacity onPress={() => this.clickButton('金融新手')}>
              <View
                style={[
                  styles.progressBar,
                  this.state.skills === '金融新手' ? styles.progressBarActive : null
                ]}
              />
              <Text style={styles.progressBarText}>金融新手</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.clickButton('略有了解')}>
              <View
                style={[
                  styles.progressBar,
                  this.state.skills === '略有了解' ? styles.progressBarActive : null
                ]}
              />
              <Text style={styles.progressBarText}>略有了解</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.clickButton('从业人员')}>
              <View
                style={[
                  styles.progressBar,
                  this.state.skills === '从业人员' ? styles.progressBarActive : null
                ]}
              />
              <Text style={styles.progressBarText}>从业人员</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={this.register}
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
              <Text style={{ fontSize: 14 }}>登录.</Text>
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
    backgroundColor: 'white',
    padding: 0
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: 222
  },
  bodyStyle: {
    marginTop: 62,
    alignItems: 'center'
  },
  registerButton: {
    borderRadius: 21,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 45,
    width: 220
  },
  inputer: {
    height: 31,
    width: 244,
    marginTop: 18.5,
    alignItems: 'center',
    borderBottomWidth: 0.5
  },
  input: {
    width: 230,
    height: 21,
    fontSize: 15,
    textAlign: 'center'
  },
  registerButtonText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white'
  },
  footerStyle: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ECEFF1',
    height: 44
  },
  footerFix: {
    flexDirection: 'row'
  },
  remindText: {
    color: '#777777'
  },
  selectType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: 244,
    marginTop: 10.5
  },
  progressBar: { width: 74.67, height: 4, borderRadius: 9.5, backgroundColor: '#bdbdbd' },
  progressBarActive: {
    backgroundColor: '#777777'
  },
  progressBarText: { textAlign: 'center', marginTop: 8, fontSize: 13, color: '#858585' }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
