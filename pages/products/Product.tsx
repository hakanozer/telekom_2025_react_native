import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { safeArea } from '../../utils/styleConst'
import { useIsFocused } from '@react-navigation/native'

const Product = () => {

  /*
  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused) {
      console.log("Data Call")
    }
  }, [isFocused])
  */
  
  useEffect(() => {
    console.log("Product Call")
  }, [])


  return (
    <View style={safeArea}>
      <Text>Product</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})