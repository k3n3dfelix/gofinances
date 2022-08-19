import React from 'react';
import {View , Text, StyleSheet} from 'react-native'

export function DashBoard(){
  return (
    <View style={styles.container}>
      <Text>DashBoard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})