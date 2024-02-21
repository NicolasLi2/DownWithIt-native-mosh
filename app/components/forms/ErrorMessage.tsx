import AppText from '../Text';
import { StyleSheet } from 'react-native';

interface ErrorMessageProps {
  error?: string;
  visible?: boolean;
}

export default function ErrorMessage({ error, visible }: ErrorMessageProps) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
