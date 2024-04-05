//Styles
import styled from "styled-components"

export const ButtonContainer = styled.button`
    padding: 10px 20px;

    border: 1px solid ${props => props.theme.white};
    border-radius: 20px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};

    cursor: pointer;
`