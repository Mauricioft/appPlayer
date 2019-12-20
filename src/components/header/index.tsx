import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

type Props = {
  message: string;
  onDownPress: any;
  onQueuePress: any;
  onMessagePress: any;
}

export const Header = ({ message, onDownPress, onQueuePress, onMessagePress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Ionicons style={styles.button} name='ios-arrow-down' size={32} />
    </TouchableOpacity>
    <Text onPress={onMessagePress} style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Ionicons style={styles.button} name='ios-menu' size={32} />
    </TouchableOpacity>
  </View>
);