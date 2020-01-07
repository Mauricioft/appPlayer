import React from 'react';
import Slider from '@react-native-community/slider'
import styles from './styles';

type Props = {
  currentPosition: number; 
  trackLength: number; 
  onSlidingStart?: () => void;
  onSeek?: (value: number) => void;
}

export const ProgressBar = ({ currentPosition, trackLength, onSlidingStart, onSeek }: Props) => (
  <Slider
    maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
    onSlidingStart={onSlidingStart}
    onSlidingComplete={onSeek}
    value={currentPosition}
    style={styles.slider}
    minimumTrackTintColor='#fff'
    maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
  />
);