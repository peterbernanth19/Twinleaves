import { View, Text, Image, Pressable, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Layouts from '../themes/Layouts';
import AppStyles from '../themes/AppStyles';
import { SCREEN_NAMES } from '../utils/constants';
import { renderImage } from '../utils/helper';

GoogleSignin.configure({
  webClientId:
    '285154550256-4bj6kb415549k8qh0th095q393p9c6rd.apps.googleusercontent.com',
  iosClientId:
    '285154550256-jrpe0ba6vrrgj5p0a40v22dkeivb069p.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

export default function LoginScreen({ navigation }: any) {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (user?.email) {
      navigation.replace(SCREEN_NAMES.DASHBOARD);
    }
  }, [navigation, user]);

  const onAuthStateChanged = (authUser: any) => {
    setUser(authUser);
  };

  const handleLogIn = () => {
    try {
      onGoogleButtonPress().then(() => console.log('Signed in with Google!'));
    } catch (err) {
      Alert.alert('Error Loging In');
    }
  };

  return (
    <View style={Layouts.flexFill}>
      <Image
        // source={require('./../assets/Images/loginImage.png')}
        source={{ uri: renderImage.login }}
        style={AppStyles.loginImg}
      />
      <View style={Layouts.centeredContainer}>
        <Pressable style={AppStyles.loginBtn} onPress={handleLogIn}>
          <Text style={AppStyles.loginTxt}>Google Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}
