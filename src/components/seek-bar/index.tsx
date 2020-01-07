import React from 'react';
import { ProgressBar } from '../progress-bar/';
import { SeekBarLayout as Layout } from '../seek-bar-layout/'
import { Row, Space, Text } from '../core/';

type Props = {
  currentPosition: number; 
  trackLength: number; 
  remaining_minutes: number | string; 
  remaining_seconds: number | string; 
  elapsed_minutes: number | string; 
  elapsed_seconds: number | string; 
  onSlidingStart?: () => void;
  onSeek?: (value: number) => void;
}

export const SeekBar = ({ currentPosition, trackLength, onSlidingStart, onSeek, elapsed_minutes, elapsed_seconds, remaining_minutes, remaining_seconds }: Props) => (
  <Layout>
    <Row>
      <Text title={`${elapsed_minutes}:${elapsed_seconds}`} />
      <Space />
      <Text title={trackLength > 1 ? `-${remaining_minutes}:${remaining_seconds}` : ''} />
    </Row>
    <ProgressBar 
      currentPosition={currentPosition}
      trackLength={trackLength}
      onSlidingStart={onSlidingStart}
      onSeek={onSeek}
    />
  </Layout>
)
