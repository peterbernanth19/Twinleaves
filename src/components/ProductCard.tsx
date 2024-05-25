import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { CartContext } from '../context/CartContext';
import { renderImage } from '../utils/helper';

interface ProductCardProps {
  item: {
    gtin: string;
    name: string;
    imageUri: string;
    mrp: { mrp: number };
    discountPercentage?: string;
    weights_and_measures: { net_weight: string };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { addItemToCart, removeItemFromCart, decreaseItemQuantity, cartItems } =
    useContext(CartContext);
  const cartItem = cartItems.find(cartItem => cartItem.gtin === item.gtin);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <View style={styles.card}>
      <View style={styles.discountWrapper}>
        <Text style={styles.discountText}>
          {item.discountPercentage || '20%'} OFF
        </Text>
      </View>
      <Image source={{ uri: renderImage?.[item.gtin] }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.originText}>ORIGIN</Text>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text style={styles.sizeText}>
          {item.weights_and_measures.net_weight}
        </Text>
        <Text style={styles.originalPrice}>₹{item.mrp.mrp + 30}</Text>
        <Text style={styles.discountedPrice}>₹{item.mrp.mrp}</Text>
      </View>
      <View style={styles.quantityContainer}>
        {quantity > 0 ? (
          <>
            <Pressable
              style={styles.decrementButton}
              onPress={() => {
                if (quantity === 1) {
                  removeItemFromCart(item.gtin);
                } else {
                  decreaseItemQuantity(item.gtin);
                }
              }}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable
              style={styles.incrementButton}
              onPress={() => addItemToCart(item)}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </>
        ) : (
          <Pressable
            style={styles.addButton}
            onPress={() => addItemToCart(item)}>
            <Text style={styles.addButtonText}>ADD</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  discountWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 3,
    zIndex: 99,
    width: 80,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  originText: {
    color: '#888',
    fontSize: 12,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeText: {
    fontSize: 14,
    color: '#888',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  decrementButton: {
    backgroundColor: '#ff6f61',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;
