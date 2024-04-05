import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: fit-content;
    margin: auto;

    padding: 20px 30px;
    border-radius: 20px;
    border: solid 1px ${props => props.theme.white};
`

export const Section = styled.section`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
`