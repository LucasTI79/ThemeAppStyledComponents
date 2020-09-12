import React, { useContext } from 'react';
import { ButtonTheme } from './styles';
import { ThemeContext } from 'styled-components';

export const SwithButtonTheme = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    return(
        <ButtonTheme
            onValueChange={ toggleTheme }
            value={title === 'dark'}
            trackColor={{ false: "#767577", true: "#000" }}
            thumbColor={toggleTheme ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
        />
    )
}

export default SwithButtonTheme;