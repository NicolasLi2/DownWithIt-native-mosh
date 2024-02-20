import Constants from 'expo-constants';
import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function Screen({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
