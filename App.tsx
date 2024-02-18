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
  Alert,
} from 'react-native';

export default function App() {
  // console.log(require('./assets/favicon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color='orange'
        title='Click me'
        // onPress={() => alert('Button Clicked!')}

        // onPress={() =>
        //   Alert.alert('My title', 'My message', [
        //     { text: 'Yes', onPress: () => console.log('Yes') },
        //     { text: 'No', onPress: () => console.log('No') },
        //   ])
        // }

        onPress={() =>
          Alert.prompt('My title', 'My message', (text) => console.log(text))
        }
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
