import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { COLORS } from '../constants/colors';
import CartScreen from '../screens/CartScreen';


const Stack=createNativeStackNavigator();
export default  CartNavigation=()=> {
  return (

        <Stack.Navigator
         initialRouteName='Categories'
         screenOptions={{
            headerStyle:{backgroundColor:COLORS.primary},
            headerTintColor:COLORS.secondary,
            headerTitleStyle:{fontWeight:"bold",},
        }}
        >
            <Stack.Screen name="Cart" component={CartScreen} options={{title:"Carrito"}} />

        </Stack.Navigator>

  )
}
