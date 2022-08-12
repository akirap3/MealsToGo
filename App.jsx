import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import { RestaurantSreen } from './src/features/restaurant/screens/restaurant.screen';

export default function App() {
  return (
    <>
      <RestaurantSreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}
