import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        z-index: 1;
        font-family: "Reddit Mono", monospace;
        background-color: ${(props) => props.theme.black};
    }

    body {
        min-height: 100vh;
        overflow: hidden;
    }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
