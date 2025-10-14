import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { safeArea } from '../../utils/styleConst'

const Likes = () => {

  useEffect(() => {
    console.log("Likes Call")
  }, [])
  
  return (
    <View style={safeArea}>
      <Text>Likes</Text>
    </View>
  )
}

export default Likes

const styles = StyleSheet.create({})