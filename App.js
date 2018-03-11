import React from 'react'
import {YellowBox} from 'react-native'
import Index from './pages/Layout/Index'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
])

export default class App<Props> extends React.Component {
  render () {
    return (
      <Index />
    )
  }
}
