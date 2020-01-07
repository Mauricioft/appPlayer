import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  textStyle?: TextStyle;
}

export const Title = ({ title, textStyle }: Props) => (
  <Text style={[styles.text, styles.title, textStyle]}>{title}</Text>
)