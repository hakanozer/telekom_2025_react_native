import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StackActions, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import apiClient from '../../services/apiConfig'

const Splash = () => {

  const navigation = useNavigation()  

  useEffect(() => {
    control()
  }, [])

  const control = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    }else {
        navigation.dispatch(StackActions.replace('UserLoginStack'))
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image style={styles.logoImg} source={require('../../assets/splash_logo.png')} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#ffffff' 
    },
    logoImg: {
        width: 125,
        height: 125,
        resizeMode: 'contain',
    }
})