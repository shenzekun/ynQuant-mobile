import React from 'react'
import {YellowBox} from 'react-native'
import Index from './pages/Layout/Index'

console.dir(YellowBox)

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: encourage 1 time'
])

export default class App<Props> extends React.Component {
  render () {
    return (
      <Index />
    )
  }
}
