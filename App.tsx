import { Switch, Text, TextInput } from 'react-native';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker placeholder='Category' icon='apps' />
      <AppTextInput placeholder='Email' icon='email' />
    </Screen>
  );
}
