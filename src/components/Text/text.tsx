//Types
import { IText } from "./text.types";

//Styles
import { Container } from "./text.styles";

function Text({ size, children }: IText) {
  return <Container size={size}>{children}</Container>;
}

export default Text;
