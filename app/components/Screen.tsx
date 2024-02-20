import Constants from 'expo-constants';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface ScreenProps {
  style?: any;
  children: React.ReactNode;
}

export default function Screen({ children, style }: ScreenProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'yellow',
    flex: 1,
  },
});
