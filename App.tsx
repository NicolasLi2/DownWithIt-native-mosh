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
import { Button, Image, Text } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title='Click' onPress={() => navigation.navigate('TweetDetails')} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Button
      title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails')}
    /> */}
    <Link />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  // <Stack.Navigator initialRouteName='Tweets'>
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
