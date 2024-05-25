/**
 * Sample Spotify React Native App
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from './src/utils/constants';
import LoginScreen from './src/screens/LoginScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { CartProvider } from './src/context/CartContext';
// import { NativeModules } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // NativeModules.DevSettings.setIsDebuggingRemotely(true);
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={SCREEN_NAMES.LOGIN_SCREEN}>
          <Stack.Screen
            name={SCREEN_NAMES.LOGIN_SCREEN}
            component={LoginScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.DASHBOARD}
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
