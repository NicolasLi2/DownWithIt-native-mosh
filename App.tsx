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
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  // console.log(Dimensions.get('screen'));
  const orientation = useDeviceOrientation();
  console.log(orientation);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: -1, // flex is a short hand for flexGrow and flexShrink, when change to flexGrow or flexShrink, you should reload the app, otherwise it won't work
          width: 400,
          // flexShrink: 1,  // if this item is overflowing, it will shrink, so other items can fit
          height: 100,
          // alignSelf: 'flex-start',
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      {/* <View
        style={{
          backgroundColor: 'grey',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      /> */}
    </View>
  );
}
