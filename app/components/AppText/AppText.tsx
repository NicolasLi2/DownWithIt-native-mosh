import { Text } from 'react-native';
import { styles } from './styles';

interface AppTextProps {
  children: string;
  style?: object;
}

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
