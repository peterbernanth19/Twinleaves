import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Image,
  Pressable,
} from 'react-native';
import Layouts from '../themes/Layouts';
import auth from '@react-native-firebase/auth';
import { API_CONSTANTS, SCREEN_NAMES } from '../utils/constants';
import AppStyles from '../themes/AppStyles';
import ProductCard from '../components/ProductCard';
import CartCard from '../components/CartCard';
import Metrics from '../themes/Metrics';

const HomeScreen = ({ navigation }: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const requestBody = {
      page: '1',
      pageSize: '10',
      sort: {
        creationDateSortOption: 'DESC',
      },
    };
    try {
      const response = await fetch(API_CONSTANTS.PRODUCT_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const handleLogout = async () => {
    await auth().signOut();
    navigation.replace(SCREEN_NAMES.LOGIN_SCREEN);
  };

  if (loading) {
    return <ActivityIndicator size={'large'} style={AppStyles.loader} />;
  }

  if (error) {
    return (
      <View style={[Layouts.flexContainer, AppStyles.primaryBgColor]}>
        <View
          style={[
            Layouts.flexFill,
            AppStyles.bodyDesign,
            Layouts.alignJustifyCenter,
          ]}>
          <Text style={AppStyles.errorText}>Error: {error.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[Layouts.flexContainer, AppStyles.primaryBgColor]}>
      <View style={[Layouts.flexFill, AppStyles.bodyDesign]}>
        <SafeAreaView style={Layouts.flexFill}>
          <View style={Layouts.flexRowSpaceBetween}>
            <Text style={AppStyles.homeHeader}>Products</Text>
            <Pressable onPress={handleLogout}>
              <Image
                source={require('../assets/Images/logout.png')}
                style={Metrics.wh40}
              />
            </Pressable>
          </View>
          <FlatList
            data={data?.products}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={item => item.gtin.toString()}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </SafeAreaView>
        <CartCard navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;
