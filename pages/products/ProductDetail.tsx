import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { safeArea } from '../../utils/styleConst'
import { useRoute } from '@react-navigation/native'
import { IProduct } from '../../models/IAllProducts'
import { singleProduct } from '../../services/productService'

const ProductDetail = () => {

  const route = useRoute()
  const obj = route.params! as {item: IProduct}

  const [proItem, setProItem] = useState<IProduct>()

  useEffect(() => {
    singleProduct(obj.item.id).then(res => {
        const dt = res.data
        setProItem(dt.data)
    })
  }, [])

  return (
    <View style={safeArea}>
      {proItem &&
        <>
            <Text>{proItem.title}</Text>
        </>
      }
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})