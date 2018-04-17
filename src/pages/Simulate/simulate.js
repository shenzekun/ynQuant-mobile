import React from 'react'
import { StatusBar, Text, View, Platform, StyleSheet, Image } from 'react-native'

/*
  状态栏配置
  https://reactnavigation.org/docs/status-bar.html
*/
class SimulateScreen extends React.Component {
  componentDidMount () {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#1f2c37')
    })
  }

  componentWillUnmount () {
    this._navListener.remove()
  }
  render () {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.center,
            {
              marginBottom: 30,
              marginTop: 30
            }
          ]}
        >
          <Image
            source={require('../../images/simulate/price.png')}
            style={{ width: 203, height: 88 }}
          />
        </View>
        <View
          style={[
            styles.center,
            {
              marginLeft: 16,
              marginRight: 16,
              marginBottom: 30
            }
          ]}
        >
          <Image
            source={require('../../images/simulate/showPrice.png')}
            style={{ width: '100%', height: 165 }}
          />
        </View>
        <View
          style={[
            styles.center,
            {
              marginLeft: 38,
              marginRight: 38,
              marginBottom: 30
            }
          ]}
        >
          <Image
            source={require('../../images/simulate/Group.png')}
            style={{ width: 298, height: 45 }}
          />
        </View>
        <View
          style={[
            styles.center,
            {
              marginBottom: 20
            }
          ]}
        >
          <Image
            source={require('../../images/simulate/buy.png')}
            style={{ width: 344, height: 48 }}
          />
        </View>
        <View style={styles.center}>
          <Image
            source={require('../../images/simulate/sell.png')}
            style={{ width: 344, height: 48 }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 44, 55, 1.000)'
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
export default SimulateScreen
