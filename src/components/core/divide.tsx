import React, { FC, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

type Props = {
  wrapperStyle?: ViewStyle;
}

export const Divide: FC<Props> = ({ wrapperStyle }): ReactElement => <View style={[styles.divide, wrapperStyle]} />
