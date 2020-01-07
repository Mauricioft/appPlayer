import React, { useState } from 'react';
import { Playing } from '../playing/';

type State = {
  title: string;
  artist: string;
  albumUrl: string;
  audioUrl: string;
}

export const Playlist = () => {
  const [tracks, setTracks] = useState<Array<State>>([
    {
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      albumUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      audioUrl: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    },
    {
      title: 'Love Yourself',
      artist: 'Justin Bieber',
      albumUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
      audioUrl: 'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
    },
    {
      title: 'Hotline Bling',
      artist: 'Drake',
      albumUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
      audioUrl: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
    },
  ]);

  return <Playing tracks={tracks}>
};
