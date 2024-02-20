import { Text } from 'react-native';

import defaultStyles from '../config/styles';

interface AppTextProps {
  children: string;
  style?: object;
}

export default function AppText({ children, style }: AppTextProps) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
