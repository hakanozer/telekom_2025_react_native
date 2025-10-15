import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { safeArea } from '../../utils/styleConst'
import { useRoute } from '@react-navigation/native'
import { IProduct } from '../../models/IAllProducts'
import { singleProduct } from '../../services/productService'

const ProductDetail = () => {

  const route = useRoute()
  const obj = route.params! as {item: IProduct}

  const [proItem, setProItem] = useState<IProduct>()
  const [bigImage, setBigImage] = useState('')
  useEffect(() => {
    singleProduct(obj.item.id).then(res => {
        const dt = res.data
        setProItem(dt.data)
        setBigImage(dt.data.images[0])
    })
  }, [])

  return (
    <ScrollView style={safeArea}>
      {proItem &&
        <>
            <Text style={styles.title}>{proItem.title}</Text>
            <Image style={styles.bigImage} source={{uri: bigImage}} />
            <ScrollView horizontal={true} style={{marginTop: 10, marginBottom: 10,}}>
                <View style={{flexDirection: 'row',}}>
                {proItem.images.map((item, index) => 
                    <TouchableOpacity onPress={() => setBigImage(item)} key={index}>
                        <Image style={styles.thumbImage} source={{uri: item}} />
                    </TouchableOpacity>
                )}
                </View>
            </ScrollView>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={[styles.price, {color: 'black'}]}>{proItem.stock} Adet</Text>
                <Text style={styles.price}>{proItem.price}₺</Text>
            </View>
            <Text style={styles.detail}>{proItem.description}</Text>
        </>
      }
    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10,
    },
    bigImage: {
        width: '100%',
        height: 300,
    },
    thumbImage: {
        width: 88,
        height: 88,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#a5a5a5ff',
        marginRight: 5,
        resizeMode: 'cover',
    },
    price: {
        fontSize: 22,
        color: '#db820eff',
        textAlign: 'right',
    },
    detail: {
        fontSize: 17,
        marginTop: 10,
    }
})