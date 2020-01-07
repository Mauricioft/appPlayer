import React from 'react';
import { Text as CustomText, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  textStyle?: TextStyle;
}

export const Text = ({ title, textStyle }: Props) => (
  <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
)