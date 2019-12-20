import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

export const Title = ({ title, textStyle }: Props) => (
  <Text style={[styles.title, textStyle]}>{title}</Text>
)