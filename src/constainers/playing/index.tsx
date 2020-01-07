import React, { useState, useRef } from 'react';
import { Layout } from '../../components/layout/';
import { Header } from '../../components/header/';
import { Album } from '../../components/album/';
import { TrackDetails } from '../../components/track-details/';
import { Controls } from '../../components/controls/';
import { SeekBarContainer as SeekBar } from '../../constainers/seek-bar/';
// import { Video } from '../../components/video/';

type Props = {
  tracks: Array<{}>
}

type State = {
  albumUrl: string;
  audioUrl: string;
}

export const Playing = ({ tracks }: Props) => {
  const audio = useRef(null);
  const [track, setTrack] = useState<State>({
    albumUrl: 'https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6',
    audioUrl: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
  });
  const [paused, setPaused] = useState<boolean>(true);
  const [totalLength, setTotalLength] = useState<number>(1);
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [selectedTrack, setSelectedTrack] = useState<number>(0);
  const [repeatOn, setRepeatOn] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [shuffleOn, setShuffleOn] = useState<boolean>(false);
  /*
  const setDuration = (data: any): void => {
    console.log('Playing.setDuration@data', data);
    setTotalLength(Math.floor(data.duration));
  }
  
  const setTime = (data: any): void => {
    console.log('Playing.setTime@data', data);
    setCurrentPosition(Math.floor(data.currentTime));
  }

  const seek = (time: any): void => {
    time = Math.round(time);
    console.log('Playing.seek@time', time);
    // audio && audio.seek(time);
    setCurrentPosition(time);
    setPaused(false);
  }
  
  const onBack = (): void => {
    if (currentPosition < 10 && selectedTrack > 0) {
      // this.refs.audioElement && this.refs.audioElement.seek(0);
      setIsChanging(true);
      resetParams(selectedTrack - 1);
    } else {
      // this.refs.audioElement.seek(0);
      setCurrentPosition(0);
    }
  }

  const onForward = (): void => {
    if (selectedTrack < tracks.length - 1) {
      // this.refs.audioElement && this.refs.audioElement.seek(0);
      setIsChanging(true);
      resetParams(selectedTrack + 1);
    }
  }

  const resetParams = (selectedTrack: number): void => {
    setTimeout(() => {
      setCurrentPosition(0);
      setTotalLength(1);
      setPaused(false);
      setIsChanging(false);
      setSelectedTrack(selectedTrack);
    }, 0);
  }

  const track = tracks[selectedTrack];

  const loadStart = () => console.log('Playing.loadStart');
  */
  // const video =  isChanging ? null : (
  //   <Video 
  //     ref={audio}
  //     source='https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3' // Can be a URL or a local file.
  //     paused={paused}               // Pauses playback entirely.
  //     repeat={true}                // Repeat forever.
  //     onLoadStart={loadStart} // Callback when video starts to load
  //     onLoad={setDuration}    // Callback when video loads
  //     onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
  //     onEnd={this.onEnd}           // Callback when playback finishes
  //     onError={this.videoError}    // Callback when video cannot be loaded
  //   />
  // );

  return (
    <Layout>
      <Header message="Playing from Charts" />
      <Album url={track.albumUrl} />
      <TrackDetails 
        title="Nirvana"
        artist="Alternative rock"
        onAddPress={() => console.log('TrackDetails.onAddPress')}
        onMorePress={() => console.log('TrackDetails.onMorePress')}
        onTitlePress={() => console.log('TrackDetails.onTitlePress')}
        onArtistPress={() => console.log('TrackDetails.onArtistPress')}
      />
      <SeekBar trackLength={204} currentPosition={156} />
      <Controls />
    </Layout>
  )
};
