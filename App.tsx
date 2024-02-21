import { useEffect, useState } from 'react';
import AppPicker from './app/components/Picker';
import AppTextInput from './app/components/TextInput';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
