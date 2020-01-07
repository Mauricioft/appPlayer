import React, { FC } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

type Props = {
  url: string;
  onPress?: () => void;
}

export const Album = ({ url, onPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{uri: url}} />
    </TouchableOpacity>
  </View>
);