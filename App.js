import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPass from './src/screen/ForgotPass';
import MyCart from './src/screen/MyCart';
import Products from './src/screen/Products';
import Splash from './src/screen/Splash';
import TabViewComponent from './src/screen/TabView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabViewComponent" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="TabViewComponent" component={TabViewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;