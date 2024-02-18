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
} from 'react-native';

export default function App() {
  // console.log(require('./assets/favicon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      {/* <Image source={require('./assets/splash.png')} /> */}
      {/* <TouchableWithoutFeedback onPress={() => console.log('image')}> */}
      {/* <TouchableOpacity onPress={() => console.log('image')}> */}
      {/* <TouchableHighlight onPress={() => console.log('image')}> */}
      <TouchableNativeFeedback onPress={() => console.log('image')}>
        {/* <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        /> */}
        <View
          style={{ width: 200, height: 70, backgroundColor: 'orange' }}
        ></View>
      </TouchableNativeFeedback>
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
