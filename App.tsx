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
  Dimensions,
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          // width: 150,
          width: '100%',
          height: '30%',
        }}
      ></View>
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
