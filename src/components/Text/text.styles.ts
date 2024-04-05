import styled from "styled-components";

//Types
import { IText } from "./text.types";

//Utils
import { handleFontSize } from "./utils"

export const Container = styled.p<IText>`
    color: ${props => props.theme.white};
    font-size: ${({ size }) => handleFontSize(size)};
`