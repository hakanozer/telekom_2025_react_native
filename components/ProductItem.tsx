import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { IProduct } from '../models/IAllProducts'

const ProductItem = (props: {item: IProduct}) => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
      <Image source={{uri: props.item.images[0]}} style={styles.image}  />
      <View>
        <Text>{props.item.title}</Text>
        <Text>{props.item.price}₺</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        borderColor: '#818181ff',
    },
    image: {
        width: 100,
        height: 100,
    }
})