import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
} from 'react-native';

export default function App() {
  // console.log(require('./assets/favicon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color='orange'
        title='Click me'
        onPress={() => console.log('button')}
      />
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
