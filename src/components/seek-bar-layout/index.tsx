import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  children: ReactNode; // best, accepts everything
};

export const SeekBarLayout: FC<Props>= ({ children }) => <View style={styles.container}>{children}</View>
