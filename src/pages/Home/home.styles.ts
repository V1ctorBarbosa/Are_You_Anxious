import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    position: relative;
`

export const Footer = styled.footer`
    display: flex;
    gap: 20px;

    position: absolute;
    bottom: 0%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    
    padding: 10px 15px;
    border-radius: 10px;
`

export const Translate = styled.button`
    font-size: 14px;
    padding: 2px 5px;

    color: ${props => props.theme.white};
    cursor: pointer;
`

export const Audio = styled.audio`
    display: none;
`