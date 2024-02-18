import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log(require('./assets/favicon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <Image source={require('./assets/splash.png')} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
