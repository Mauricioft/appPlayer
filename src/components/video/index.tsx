import React, { forwardRef, RefObject } from 'react';
import { Video as AvVideo } from 'expo-av';
import styles from './styles';

type Props = {
  source: string;
  onLoadStart?: () => void;
  onLoad?: (data: any) => void;
}

// type Ref<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"] | RefObject<T> | null;
type Ref<T> = RefObject<T> | null;

export const Video = forwardRef<Ref, Props>(({ onLoadStart, source, onLoad }, ref) => (
  <AvVideo
    ref={ref}
    source={{ uri: source }}
    onLoadStart={onLoadStart}
    onLoad={onLoad}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={styles.video}
  />
))