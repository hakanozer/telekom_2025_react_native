import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { safeArea } from '../../utils/styleConst'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions, useNavigation } from '@react-navigation/native'
import { userLogout } from '../../services/userService'
import Toast from 'react-native-toast-message'

const Settings = () => {

  const navigation = useNavigation()

  useEffect(() => {
    //console.log("Settings Call")
  }, [])

  const fncUserLogout = () => {
    Alert.alert("Are you sure?", 'Exit app', [
      {
        text: 'Cancel',
        isPreferred: true,
      },
      {
        text: 'Yes',
        onPress: () => {
          logout()
        },
        style: 'destructive'
      }
    ])
  }

  const logout = () => {
    AsyncStorage.clear().then(() => {
      userLogout().then(() => {
        navigation.dispatch(StackActions.replace('UserLoginStack'))
      }).catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Fail, Try Again!'
        })
      })
    })
  }
  
  return (
    <View style={safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>Settings</Text>
      </ScrollView>
      <TouchableOpacity onPress={fncUserLogout}>
        <View style={styles.btnView}>
          <Text style={styles.btnTxt}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  btnView: {
    backgroundColor: '#787878ff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 17,
    color: '#ffffff'
  }
})