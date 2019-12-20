import React, { FC, ReactNode } from 'react'
import { View } from 'react-native'
import styles from './styles'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => <View style={styles.container}>{children}</View>