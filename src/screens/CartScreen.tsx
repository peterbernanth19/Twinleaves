import { View, Text, FlatList, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import AppStyles from '../themes/AppStyles';
import Layouts from '../themes/Layouts';
import { CartContext } from '../context/CartContext';

export default function CartScreen() {
  const { cartItems } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <View style={[Layouts.flexContainer, AppStyles.primaryBgColor]}>
        <View
          style={[
            Layouts.flexFill,
            AppStyles.bodyDesign,
            Layouts.alignJustifyCenter,
          ]}>
          <Text style={AppStyles.errorText}>Oops! Your cart is empty</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[Layouts.flexContainer, AppStyles.primaryBgColor]}>
      <View style={[Layouts.flexFill, AppStyles.bodyDesign]}>
        <SafeAreaView>
          <Text style={AppStyles.homeHeader}>Cart</Text>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={item => item.gtin.toString()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
