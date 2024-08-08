import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { styles } from '../Theme/AppTheme';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};



export default CustomButton;
