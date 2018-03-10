/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import {StackNavigator} from 'react-navigation'
import HomeScreen from './pages/layout/Navigator'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
])

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: HomeScreen
  }
})

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}
