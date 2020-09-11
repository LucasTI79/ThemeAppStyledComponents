import React, { useContext } from 'react';
import { Wrapper, Title, ButtonTheme } from './styles';
import { ThemeContext } from 'styled-components';

export default function Home({ toggleTheme }){
    const { colors, title } = useContext(ThemeContext);
    return(
        <Wrapper>
            <Title>Home</Title>
            <ButtonTheme
                onValueChange={ toggleTheme }
                value={title === 'dark'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={toggleTheme ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
            />
        </Wrapper>
    )
}