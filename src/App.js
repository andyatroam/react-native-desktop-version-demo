import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import AppRoot from './navigation/AppRoot';

const App = () => {
  return (
    <ThemeProvider>
      <AppRoot />
    </ThemeProvider>
  );
};

export default App;
