import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { btnTxt, btnView, safeArea, txtInput } from '../utils/styleConst';
import { StackActions, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { userLogin } from '../services/userService';

const Login = () => {

  const navigation = useNavigation()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const fncLogin = () => {
    if (email == '') {
      Toast.show({
        type:'error',
        text1: 'Email Empty!'
      })
    }else if (password == '') {
      Toast.show({
        type:'error',
        text1: 'Password Empty!'
      })
    }else {
      userLogin(email, password).then(res => {
        // işlem başarılı oldu
        const dt = res.data
        console.log(dt)
      }).catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Incorrect email or password'
        })
      })
    }
  }

  const userRegister = () => {
    navigation.dispatch(StackActions.push('Register'))
  }

  return (
    <SafeAreaView style={safeArea}>
        <Text style={styles.txtTitle}>User Login</Text>
        <TextInput onChangeText={(txt) => setEmail(txt)} autoComplete='email' autoCapitalize='none' keyboardType='email-address' placeholder='E-Mail' style={txtInput} />
        <TextInput onChangeText={(txt) => setPassword(txt)} autoComplete='password' secureTextEntry autoCapitalize='none' placeholder='Password' style={txtInput} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={fncLogin}>
                <View style={btnView}>
                    <Text style={btnTxt}>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={userRegister}>
                <View style={btnView}>
                    <Text style={btnTxt}>Register</Text>
                </View>
            </TouchableOpacity>         
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 22,
        textAlign: 'center',
    }
})