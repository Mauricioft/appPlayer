import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { fetchFonts } from './src/utils/';
import { PlayingScreen } from './src/screens/playing';

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    !isLoading ? (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoading(true)}
      />
    ):(
      <PlayingScreen />
    )
  )
};

export default App;