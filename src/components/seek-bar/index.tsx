import React from 'react';
import { ProgressBar } from '../progress-bar/';
import { SeekBarLayout as Layout } from '../seek-bar-layout/'
import { Row, Space, Title, SubTitle } from '../core/';
import styles from './styles'

type Props = {
  currentPosition: number; 
  trackLength: number; 
  remaining_minutes: number | string; 
  remaining_seconds: number | string; 
  elapsed_minutes: number | string; 
  elapsed_seconds: number | string; 
  onSlidingStart: () => void; 
  onSeek: (value: number) => void; 
}

export const SeekBar = ({ currentPosition, trackLength, onSlidingStart, onSeek, elapsed_minutes, elapsed_seconds, remaining_minutes, remaining_seconds }: Props) => (
  <Layout>
    <Row>
      <Title title={`${elapsed_minutes}:${elapsed_seconds}`} />
      <Space />
      <SubTitle 
        title={trackLength > 1 && `-${remaining_minutes}:${remaining_seconds}`}
        textStyle={styles.text}
      />
    </Row>
    <ProgressBar 
      currentPosition={currentPosition}
      trackLength={trackLength}
      onSlidingStart={onSlidingStart}
      onSeek={onSeek}
    />
  </Layout>
)
