import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import BodyComponents from '../Components/BodyComponents';
import InputComponents from '../Components/InputComponents';
import { styles } from '../Theme/AppTheme';
import TitleComponent from '../Components/TitleComponent';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR } from '../commons/constant';
import ButtonComponent from '../Components/ButtonComponent';


interface Props {
    placeholder: string;
    handleSetValues: (name: number) => void;
    name: number;
}


const handleSignIn = () => {
  
  if(<>any</>){
    Alert.alert(
      'Error',
      'Por Favor, ingrese valores en todos los campos'
    )
    return;
}}

export const MayorIgualScreen = ({placeholder, handleSetValues, name}: Props) => {
  return (
    <View>
        <Text><StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesión' />  
        <BodyComponents>
          <View style={styles.contentInput}>
            <InputComponents placeholder='Numero 1'  handleSetValues={handleSetValues} name='Numero 1'/>
            <InputComponents placeholder='Numero 2'  handleSetValues={handleSetValues} name='Numero 2' />
          </View>
          <ButtonComponent textButton='>=' onPress={handleSignIn} />
        </BodyComponents></Text>
    </View>
  )
}

export default MayorIgualScreen
