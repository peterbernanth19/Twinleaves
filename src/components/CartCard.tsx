import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import AppStyles from '../themes/AppStyles';
import { CartContext } from '../context/CartContext';

export default function CartCard({ navigation }: any) {
  const { totalCost } = useContext(CartContext);

  if (totalCost === 0) {
    return;
  }

  const handleOnPress = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={AppStyles.cartSummary}>
      <View style={AppStyles.cartDetails}>
        <Image
          source={require('../assets/Images/cart.png')}
          style={AppStyles.cartIcon}
        />
        <Text style={AppStyles.cartTotalText}>₹{totalCost}</Text>
      </View>
      <Text style={AppStyles.viewCartText} onPress={handleOnPress}>
        View Cart
      </Text>
    </View>
  );
}
