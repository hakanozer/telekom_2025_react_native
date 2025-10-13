import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// Import Pages
import Login from './Login'
import Register from './Register'

const MainStack = createNativeStackNavigator()

// User Stack Navigator
const UserLoginStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <MainStack.Screen name="Register" component={Register} options={{ headerShown: true }} />
  </MainStack.Navigator>
)

const Routes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="UserLoginStack" component={UserLoginStack} options={{ headerShown: false }}/>
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})
