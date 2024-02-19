import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText>I love React Native!</AppText>
    </View>
  );
}
