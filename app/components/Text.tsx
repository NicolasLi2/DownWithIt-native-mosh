import { Text } from 'react-native';

import defaultStyles from '../config/styles';

interface AppTextProps {
  children: React.ReactNode;
  style?: object;
  [x: string]: any;
}

export default function AppText({
  children,
  style,
  ...otherProps
}: AppTextProps) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
