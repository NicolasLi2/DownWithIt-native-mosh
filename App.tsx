import { Switch, Text, TextInput } from 'react-native';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
