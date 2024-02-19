import { Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          // fontFamily: 'Roboto',
          fontSize: 30,
          fontStyle: 'italic',
          fontWeight: '600',
          color: 'tomato',
          textTransform: 'capitalize',
          // textDecorationLine: 'underline line-through',
          textAlign: 'center',
          lineHeight: 30,
        }}
      >
        I love React Native! This is my first react native app! Here is some
        more text
      </Text>
    </View>
  );
}
