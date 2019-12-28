import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onPress?: () => void;
  activeOpacity?: number;
  disabled?: boolean;
  iconSize?: number;
  icon?: string; // best, accepts everything
  buttonStyle?: ViewStyle;
}

const defaultProps = {
  activeOpacity: 0.0,
  iconSize: 32,
  disabled: false,
}

const Button = ({ onPress, activeOpacity, icon, buttonStyle, iconSize, disabled }: Props) => (
  <TouchableOpacity style={[buttonStyle]} activeOpacity={activeOpacity} onPress={onPress} disabled={disabled}>
    <Ionicons name={icon} size={iconSize} />
  </TouchableOpacity>
)

Button.defaultProps = defaultProps

export {
  Button
}