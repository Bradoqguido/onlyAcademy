import React from 'react';
import {SafeAreaView} from 'react-native';
import { Home } from './src/pages/home'
import { PaperProvider, useTheme } from 'react-native-paper';

function App() {
  const theme = useTheme();
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
