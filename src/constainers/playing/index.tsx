import React from 'react'
import { Layout } from '../../components/layout/'
import { Header } from '../../components/header/'
import { Album } from '../../components/album/'
import { TrackDetails } from '../../components/track-details/'

export const Playing = () => {
  return (
    <Layout>
      <Header 
        message="Playing from Charts" 
        onDownPress={() => console.log('Header.onDownPress')}
        onQueuePress={() => console.log('Header.onQueuePress')}
        onMessagePress={() => console.log('Header.onMessagePress')}
      />
      <Album  
        url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" 
        onPress={() => console.log('Playing.onPress')}
      />
      <TrackDetails 
        title="Stressed Out"
        artist="Twenty One Pilots"
        onAddPress={() => console.log('TrackDetails.onAddPress')}
        onMorePress={() => console.log('TrackDetails.onMorePress')}
        onTitlePress={() => console.log('TrackDetails.onTitlePress')}
        onArtistPress={() => console.log('TrackDetails.onArtistPress')}
      />
    </Layout>
  )
};