import React, { createContext, useState, ReactNode, useMemo } from 'react';

interface CartItem {
  gtin: any;
  name: string;
  imageUri: string;
  mrp: { mrp: number };
  discountPercentage?: string;
  weights_and_measures: { net_weight: string };
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  totalCost: number;
}

const defaultValue: CartContextType = {
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decreaseItemQuantity: () => {},
  totalCost: 0,
};

export const CartContext = createContext<CartContextType>(defaultValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        cartItem => cartItem.gtin === item.gtin,
      );
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.gtin === item.gtin
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.gtin !== itemId));
  };

  const decreaseItemQuantity = (itemId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.gtin === itemId);
      if (existingItem?.quantity === 1) {
        return prevItems.filter(item => item.gtin !== itemId);
      }
      return prevItems.map(item =>
        item.gtin === itemId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };

  const totalCost = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.mrp.mrp * item.quantity,
      0,
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        decreaseItemQuantity,
        totalCost,
      }}>
      {children}
    </CartContext.Provider>
  );
};
