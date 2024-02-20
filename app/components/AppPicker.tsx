import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useState } from 'react';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';

interface AppPickerProps {
  icon?: any;
  [x: string]: any;
}

export default function AppPicker({
  icon,
  placeholder,
  ...otherProps
}: AppPickerProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
