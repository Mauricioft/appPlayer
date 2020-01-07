import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

type Props = {
  message: string;
  onDownPress?: () => void;
  onQueuePress?: () => void;
  onMessagePress?: () => void;
}

export const Header = ({ message, onDownPress, onQueuePress, onMessagePress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Icon style={styles.icon} name='ios-arrow-down' size={32} />
    </TouchableOpacity>
    <Text onPress={onMessagePress} style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Icon style={styles.icon} name='ios-menu' size={32} />
    </TouchableOpacity>
  </View>
);