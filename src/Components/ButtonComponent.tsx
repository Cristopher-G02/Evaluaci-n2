import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../Theme/AppTheme'

//interface - props
interface Props {
    textButton: string;
    onPress: () => void;   //prop función
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={styles.button}>
        <Text>{textButton}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent
