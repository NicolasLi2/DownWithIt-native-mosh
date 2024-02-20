import { Formik } from 'formik';
import { Image, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              placeholder='Email'
              icon='email'
              textContentType='emailAddress'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              textContentType='password'
              secureTextEntry
            />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
