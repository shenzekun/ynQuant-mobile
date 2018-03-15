import React from 'react'
import Navigator from './src/pages/Layout/Navigator'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import LoginScreen from './src/pages/Login/login'
console.disableYellowBox = true
/**
 * TODO: 配置具体的关闭提醒
 */

export default class App extends React.Component {
  render () {
    return (
      <Provider store={configureStore}>
        {/* <Navigator /> */}
        <LoginScreen /> // 这里不应该修改入口文件, 你可以本地调试的时候使用, 但是push的时候不应该包含这个部分
      </Provider>
    )
  }
}
