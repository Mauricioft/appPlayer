import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { ControlLayout as Layout } from '../control-layout/';
import { Button } from '../core/';
import styles from './styles';

type Props = {
  paused: any;
  shuffleOn: any;
  repeatOn: any;
  onPressPlay: any;
  onPressPause: any;
  onBack: any;
  onForward: any;
  onPressShuffle: any;
  onPressRepeat: any;
  forwardDisabled: any;
}

const Controls = ({
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
    {
      /*
        <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
          <Image style={[styles.secondaryControl, shuffleOn ? [] : styles.off]} source={require('../img/ic_shuffle_white.png')} />
        </TouchableOpacity>
      */
    }
    <Button 
      icon='ios-shuffle'
      onPress={onPressShuffle}
      buttonStyle={shuffleOn && (styles.off)}
    />
    <View style={{width: 40}} />
    <Button
      icon='ios-rewind'
      onPress={onBack}
    />
    {
      /*
        <TouchableOpacity onPress={onBack}>
          <Image source={require('../img/ic_skip_previous_white_36pt.png')} />
        </TouchableOpacity>
      */
    }
    <View style={{width: 20}} />
    {
      !paused ? (
        // <TouchableOpacity onPress={onPressPause}>
        //   <View style={styles.playButton}>
        //     <Image source={require('../img/ic_pause_white_48pt.png')} />
        //   </View>
        // </TouchableOpacity> 
        <Button
          icon='ios-pause'
          iconSize={48}
          onPress={onPressPause}
          buttonStyle={styles.playButton}
        />
      ):(
        // <TouchableOpacity onPress={onPressPlay}>
        //   <View style={styles.playButton}>
        //     <Image source={require('../img/ic_play_arrow_white_48pt.png')} />
        //   </View>
        // </TouchableOpacity>
        <Button
          icon='ios-pause'
          iconSize={48}
          onPress={onPressPlay}
          buttonStyle={styles.playButton}
        />
      )
    }
    <View style={{width: 20}} />
    <Button
      icon='ios-pause'
      iconSize={48}
      onPress={onPressPlay}
      buttonStyle={styles.playButton}
    />
    {/* <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <Image style={[forwardDisabled && {opacity: 0.3}]} source={require('../img/ic_skip_next_white_36pt.png')}/>
    </TouchableOpacity> */}
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image style={[styles.secondaryControl, repeatOn ? [] : styles.off]} source={require('../img/ic_repeat_white.png')}/>
    </TouchableOpacity>
  </Layout>
);

export default Controls;