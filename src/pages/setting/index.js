import React, { useState } from 'react';
import { Wrapper, Title } from './styles';
import SwithButtonTheme from '../../components/ToggleTheme/index';
import { ThemeProvider } from 'styled-components';

import themes from '../../theme';

export default function Setting(){
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? themes.dark : themes.light);
    }
    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Title>Setting</Title>
                <SwithButtonTheme toggleTheme={toggleTheme}/>
            </Wrapper>
        </ThemeProvider>
    )
}