import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { safeArea } from '../../utils/styleConst'
import MapView, {Marker} from 'react-native-maps';

const Maps = () => {
  return (
    <View style={safeArea}>
        <MapView 
        style={styles.maps}
        zoomEnabled={true}
        zoomControlEnabled={true}
        showsScale={true}
        showsTraffic={true}
        region={{
            latitude:41.00913,
            longitude:28.977127,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        //onRegionChange={(region) => console.log(region)}
        //onRegionChangeComplete={(region) => console.log(region)}
        />
      
    </View>
  )
}

export default Maps

const styles = StyleSheet.create({
    maps: {
        flex: 1,
    }
})