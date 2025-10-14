import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { safeArea } from '../../utils/styleConst'

const Settings = () => {

  useEffect(() => {
    console.log("Settings Call")
  }, [])
  
  return (
    <View style={safeArea}>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})