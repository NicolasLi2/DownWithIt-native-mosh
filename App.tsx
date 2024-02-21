import { useEffect, useState } from 'react';
import AppPicker from './app/components/Picker';
import AppTextInput from './app/components/TextInput';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState('');
  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY,Permissions.LOCATION_FOREGROUND)
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image
        source={imageUri ? { uri: imageUri } : undefined}
        style={{ width: 200, height: 200 }}
      />
    </Screen>
  );
}
