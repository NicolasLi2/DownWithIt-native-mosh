import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

interface ListItemProps {
  title: string;
  subTitle: string;
  image: any;
  onPress: () => void;
}

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
}: ListItemProps) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    color: colors.medium,
  },
});
