import React from 'react';
import { ControlLayout as Layout } from '../control-layout/';
import { Button, Divide } from '../core/';
import styles from './styles';

type Props = {
  paused?: any;
  shuffleOn?: any;
  repeatOn?: any;
  onPressPlay?: any;
  onPressPause?: any;
  onBack?: any;
  onForward?: any;
  onPressShuffle?: any;
  onPressRepeat?: any;
  forwardDisabled?: any;
}

export const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}: Props) => (
  <Layout>
    <Button 
      icon='ios-shuffle'
      onPress={onPressShuffle}
      buttonStyle={shuffleOn && (styles.off)}
    />
    <Divide />
    <Button
      icon='ios-skip-backward'
      iconSize={40}
      onPress={onBack}
    />
    <Divide />
    {
      !paused ? (
        <Button
          icon='ios-pause'
          iconSize={48}
          onPress={onPressPause}
          buttonStyle={styles.playButton}
        />
      ):(
        <Button
          icon='ios-play'
          iconSize={48}
          onPress={onPressPlay}
          buttonStyle={styles.playButton}
        />
      )
    }
    <Divide />
    <Button
      icon='ios-skip-forward'
      iconSize={40}
      onPress={onForward}
      disabled={forwardDisabled}
      buttonStyle={forwardDisabled && (styles.forwardDisabled)}
    />
    <Divide />
    <Button
      icon='ios-repeat'
      onPress={onPressRepeat}
      buttonStyle={repeatOn && (styles.off)}
    />
  </Layout>
);