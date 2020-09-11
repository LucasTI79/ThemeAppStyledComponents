import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: ${props => props.theme.colors.background};
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.color};
    font-size: 44px;
`;

export const ButtonTheme = styled.Switch`
    background: #ccc,
`;