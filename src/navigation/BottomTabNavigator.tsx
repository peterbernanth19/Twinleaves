/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AppStyles from '../themes/AppStyles';
import Layouts from '../themes/Layouts';
import CartScreen from '../screens/CartScreen';
import { SCREEN_NAMES } from '../utils/constants';
import BarCodeScanScreen from '../screens/BarCodeScanScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View style={Layouts.flexFill}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return null;
          },
          tabBarLabel: ({ focused }) => (
            <View
              style={
                focused
                  ? { backgroundColor: 'white', padding: 10, borderRadius: 25 }
                  : null
              }>
              <Text
                style={[
                  focused && AppStyles.tabLabelFocused,
                  Layouts.textCenter,
                  !focused && AppStyles.labelFocused,
                ]}>
                {route.name}
              </Text>
            </View>
          ),
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            padding: 10,
            height: 90,
            backgroundColor: '#1DB954',
          },
          tabBarHideOnKeyboard: true,
          tabBarLabelPosition: 'beside-icon',
        })}>
        <Tab.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="BarCode" component={BarCodeScanScreen} />
      </Tab.Navigator>
    </View>
  );
};
export default BottomTabNavigator;
