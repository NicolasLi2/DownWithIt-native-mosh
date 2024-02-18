// import { StatusBar } from 'expo-status-bar';
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
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  // console.log(require('./assets/favicon.png'));
  return (
    <SafeAreaView style={styles.container}>
      {/* <SafeAreaView style={[styles.container, containerStyle]}> */}
      {/*  <SafeAreaView style={containerStyle}> */}
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

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  // make sure css properties are valid
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
