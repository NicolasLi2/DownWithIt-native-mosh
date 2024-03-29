import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../config/colors';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  color?: 'primary' | 'secondary';
}

export default function AppButton({
  title,
  color = 'primary',
  onPress,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
      // onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
