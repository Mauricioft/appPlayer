import React from 'react';
import { View, Text } from 'react-native';
import { ProgressBar } from '../progress-bar/';
import { SeekBarLayout } from '../seek-bar-layout/'
import { Row, Space } from '../core/';

type Props = {
  currentPosition: number; 
  trackLength: number; 
  onSlidingStart: () => void; 
  onSeek: (value: number) => void; 
}

export const SeekBar = ({ currentPosition, trackLength, onSlidingStart, onSeek }: Props) => (
  <SeekBarLayout>
    <Row>
      <Space />
    </Row>
    <ProgressBar 
      currentPosition={currentPosition}
      trackLength={trackLength}
      onSlidingStart={onSlidingStart}
      onSeek={onSeek}
    />
  </SeekBarLayout>
)
