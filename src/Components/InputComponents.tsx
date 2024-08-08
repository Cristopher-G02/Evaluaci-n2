import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../Theme/AppTheme'

//interface - props
interface Props{
    placeholder: string;
}

export const InputComponents = ( {placeholder} : Props) => {
  return (
    <TextInput
        placeholder= {placeholder}
        keyboardType='default'
        style={styles.inputText}
    />
  )
}

export default InputComponents