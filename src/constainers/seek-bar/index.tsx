import React from 'react';
import { minutesAndSeconds } from '../../utils/';
import { SeekBar } from '../../components/seek-bar/';

type Props = {
  currentPosition: number; 
  trackLength: number; 
  onSlidingStart?: () => void; 
  onSeek?: (value: number) => void; 
}

export const SeekBarContainer = ({currentPosition, trackLength, onSlidingStart, onSeek }: Props) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <SeekBar 
      currentPosition={currentPosition}
      trackLength={trackLength}
      onSlidingStart={onSlidingStart}
      onSeek={onSeek}
      elapsed_minutes={elapsed[0]}
      elapsed_seconds={elapsed[1]}
      remaining_minutes={remaining[0]}
      remaining_seconds={remaining[1]}
    />
  )
}