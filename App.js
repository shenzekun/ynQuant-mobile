import React from 'react'
import Navigator from './src/pages/Layout/Navigator'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import LoginScreen from './src/pages/Login/login'
import RegisterScreen from './src/pages/Register/register'
console.disableYellowBox = true
/**
 * TODO: 配置具体的关闭提醒
 */

export default class App extends React.Component {
  render () {
    return (
      <Provider store={configureStore}>
        <Navigator />
        {/* <RegisterScreen /> */}
      </Provider>
    )
  }
}
