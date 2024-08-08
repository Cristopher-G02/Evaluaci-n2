import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../Theme/AppTheme';

export const ImagenScreen1 = () => {
  return (
    <View>
        <Text style={styles.titleHeaderBody}>Bienvenido</Text>
        <Image
        source={{
            uri: 'https://static8.depositphotos.com/1377416/845/i/450/depositphotos_8457803-stock-photo-two-nice-puppies.jpg'
        }}
        style={styles.avatar1}/>
    </View>
  )
}

export default ImagenScreen1
