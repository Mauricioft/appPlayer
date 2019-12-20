import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

type Props = {
  title?: string;
  artist?: string;
  onAddPress: () => void;
  onMorePress: () => void;
  onTitlePress: () => void;
  onArtistPress: () => void;
}

export const TrackDetails = ({ title, artist, onAddPress, onMorePress, onTitlePress, onArtistPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onAddPress}>
      <Ionicons style={styles.button} size={32} name='ios-add-circle-outline' />
    </TouchableOpacity>
    <View style={styles.detailsWrapper}>
      <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
      <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
    </View>
    <TouchableOpacity onPress={onMorePress}>
      <MaterialCommunityIcons style={styles.button} size={32} name='dots-horizontal-circle' />
    </TouchableOpacity>
  </View>
);