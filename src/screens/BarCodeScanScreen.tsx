import { View, Text, Linking, SafeAreaView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

export default function BarCodeScanScreen({ navigation }: any) {
  // const [cameraPermissionStatus, setCameraPermissionStatus] =
  //   useState<CameraPermissionStatus>('not-determined');

  // const requestCameraPermission = useCallback(async () => {
  //   console.log('Requesting camera permission...');
  //   const permission = await Camera.requestCameraPermission();
  //   console.log(`Camera permission status: ${permission}`);

  //   if (permission === 'denied') {
  //     await Linking.openSettings();
  //   }
  //   setCameraPermissionStatus(permission);
  // }, []);

  // useEffect(() => {
  //   requestCameraPermission();
  // }, [requestCameraPermission]);

  // useEffect(() => {
  //   if (cameraPermissionStatus === 'granted') {
  //     navigation.goBack();
  //   }
  // }, [cameraPermissionStatus, navigation]);

  return (
    <SafeAreaView>
      <View>
        <Text>BarCodeScanScreen</Text>
      </View>
    </SafeAreaView>
  );
}
