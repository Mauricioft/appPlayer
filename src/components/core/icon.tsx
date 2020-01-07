import React, { lazy } from 'react';

type Props = {
  type: string;
  name: string;
  size?: number;
  color?: string;
}

const defaultProps = {
  size: 32,
  color: '#fff',
}

const Icon = ({ type, name, size, color }: Props) => {
  const Icons = lazy(() => import(`react-native-vector-icons/${type}`));
  return <Icons name={name} size={size} color={color} />;
}

Icon.defaultProps = defaultProps

export {
  Icon
}