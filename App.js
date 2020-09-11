import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import { useColorScheme } from 'react-native';

import Home from './src/home/home';
import themes from './src/theme';
import light from './src/theme/light';

const App = () => {
    // const deviceTheme = useColorScheme();
    // const themeSystem = themes[deviceTheme] || dark;

    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? themes.dark : themes.light);
    }
    
  return(
    <ThemeProvider theme={theme}>
        <Home toggleTheme={toggleTheme}/>
    </ThemeProvider>
    ) 
}

export default App;
