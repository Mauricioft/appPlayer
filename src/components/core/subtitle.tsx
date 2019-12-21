import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

export const SubTitle = ({ title, textStyle }: Props) => (
  <Text style={[styles.text, styles.sub_title, textStyle]}>{title}</Text>
)