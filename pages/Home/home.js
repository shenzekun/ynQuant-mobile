import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view' // 顶部滚动 tab
import Setting from '../Setting/Setting'

/**
 * 首页
 */

/**
 *  使用ScrollableTabView组件
 * 参考文档：https://github.com/skv-headless/react-native-scrollable-tab-view
 */
class HomeScreen extends React.Component {
  render () {
    return (
      <ScrollableTabView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        tabBarActiveTextColor='#000'
        tabBarTextStyle='nihao'
      >
        <Setting tabLabel='text' />
        <Setting tabLabel='text' />
        <Setting tabLabel='text' />
        <Setting tabLabel='text' />
      </ScrollableTabView>
    )
  }
}

export default HomeScreen
