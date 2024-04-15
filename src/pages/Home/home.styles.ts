import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    position: relative;
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: absolute;
    bottom: 0%; 
    left: 50%;
    transform: translate(-50%, -0%); 
    
    padding: 10px 15px;
    border-radius: 10px;

    background-color: transparent;
`

export const FooterSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;

    background-color: transparent;
`

export const Translate = styled.button`
    font-size: 14px;
    padding: 2px 5px;

    color: ${props => props.theme.white};
    cursor: pointer;
    
    background-color: transparent;
`

export const Audio = styled.audio`
    display: none;
`