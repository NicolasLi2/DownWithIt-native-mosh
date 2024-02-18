import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed');
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.tsx to start working on Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ad, tenetur, sint neque accusantium, rerum
        nemo ipsam consequuntur facere eveniet in ea earum molestias corrupti
        accusamus! Asperiores rem corporis officia laborum.
      </Text>
      <StatusBar style='auto' />
    </View>
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
