import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { safeArea } from '../../utils/styleConst'
import { useIsFocused } from '@react-navigation/native'
import { allProducts } from '../../services/productService'
import { IProduct } from '../../models/IAllProducts'
import ProductItem from '../../components/ProductItem'

const Product = () => {

  /*
  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused) {
      console.log("Data Call")
    }
  }, [isFocused])
  */
  
  const [proArr, setProArr] = useState<IProduct[]>([])
  useEffect(() => {
    allProducts(1).then(res => {
      const dt = res.data
      setProArr(dt.data)
    })
  }, [])


  return (
    <View style={safeArea}>
      <FlatList 
        data={proArr}
        renderItem={ ({item, index}) =>
          <ProductItem item={item} />
        }
      />
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})