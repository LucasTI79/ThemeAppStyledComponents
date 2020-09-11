import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import Home from './src/home/home';
import themes from './src/theme';

const App = () => {
    const deviceTheme = useColorScheme();
    const theme = themes[deviceTheme] || dark;
  return(
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
    ) 
}

export default App;
