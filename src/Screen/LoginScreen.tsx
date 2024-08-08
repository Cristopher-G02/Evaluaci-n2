import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import TitleComponent from '../Components/TitleComponent'
import { styles } from '../Theme/AppTheme'
import { PRIMARY_COLOR } from '../commons/constant'
import CustomButton from '../Components/CustomButton'
import BodyComponents from '../Components/BodyComponents'
import { StackScreenProps } from '@react-navigation/stack'



interface Props extends StackScreenProps <any> {}

export const LoginScreen = ({ navigation }: Props) => {
  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Bienvenido!!' />  
        <BodyComponents>
          <View style={styles.contentInput}>
            <CustomButton title='Imagen 1' onPress={() => navigation.navigate('ImagenScreen1')}/>
            <CustomButton title='Imagen 2' onPress={() => navigation.navigate('ImagenScreen2')}/>
            <CustomButton title='>=' onPress={() => navigation.navigate('MayorIgualScreen')}/>
            <CustomButton title='<=' onPress={() => navigation.navigate('MenorIgualScreen')}/>
          </View>
        </BodyComponents>
    </View>
  )
}

export default LoginScreen