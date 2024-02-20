import AppText from './AppText';
import { StyleSheet } from 'react-native';

interface ErrorMessageProps {
  error?: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
