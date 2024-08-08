import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../Theme/AppTheme'

export const ImagenScreen2 = () => {
  return (
    <View>
        <Text style={styles.titleHeaderBody}>Bienvenido</Text>
        <Image
        source={{
            uri: 'https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001'
        }}
        style={styles.avatar2}/>
    </View>
  )
}

export default ImagenScreen2
