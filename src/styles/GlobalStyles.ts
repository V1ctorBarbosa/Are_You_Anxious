import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: "Reddit Mono", monospace;
        background-color: ${props => props.theme.black};
    }
`