import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constant';
import ImagenScreen1 from '../Screen/ImagenScreen1';
import ImagenScreen2 from '../Screen/ImagenScreen2';
import MenorIgualScreen from '../Screen/MenorIgualScreen';
import MayorIgualScreen from '../Screen/MayorIgualScreen';


const Stack = createStackNavigator<any >(); 

export const StackNavigator = () => {
  return (   
    <Stack.Navigator
    screenOptions={{
        cardStyle: {
            backgroundColor:  PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="Login" options={{headerShown: false }} component={LoginScreen}/>
      <Stack.Screen name="ImagenScreen1" options={{title:'Home'}} component={ImagenScreen1}/>
      <Stack.Screen name="ImagenScreen2" options={{title:'Home'}} component={ImagenScreen2}/>
      <Stack.Screen name="MayorIgualScreen" options={{title:'Home'}} component={MayorIgualScreen}/>
      <Stack.Screen name="MenorIgualScreen" options={{title:'Home'}} component={MenorIgualScreen}/>
    </Stack.Navigator>
  );
}