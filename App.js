import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MusicPlayer from './components/MusicPlayer'

const App = () => {
  return (
    <View style = {styles.container}>
      <StatusBar backgroundColor="#222831"
      barStyle='light-content'/>
      <MusicPlayer/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})