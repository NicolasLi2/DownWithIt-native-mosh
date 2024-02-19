import { PropsWithChildren } from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AppText({ children }: PropsWithChildren) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});
