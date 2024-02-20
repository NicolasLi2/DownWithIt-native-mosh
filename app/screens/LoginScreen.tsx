import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        onChangeText={(text: any) => setEmail(text)}
        placeholder='Email'
        icon='email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        onChangeText={(text: any) => setPassword(text)}
        placeholder='Password'
        textContentType='password'
        secureTextEntry
      />
      <AppButton title='Login' onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
