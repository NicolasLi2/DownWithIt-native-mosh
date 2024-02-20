import { Text, TextInput } from 'react-native';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        keyboardType='numeric'
        secureTextEntry
        clearButtonMode='always'
        onChangeText={(text) => setFirstName(text)}
        placeholder='First Name'
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
