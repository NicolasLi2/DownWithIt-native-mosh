import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './Text';

interface PickerItemProps {
  item: { label: string };
  onPress: () => void;
}

export default function PickerItem({ item, onPress }: PickerItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
