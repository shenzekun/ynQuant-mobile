import React from 'react'
import { View, StyleSheet } from 'react-native'
import Note from '../../../components/Note/Note'
class WriteComment extends React.Component {
  render () {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Note type={params.type} id={params.id} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default WriteComment
