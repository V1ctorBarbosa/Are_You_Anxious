//Types
import { IText } from "./text.types";

//Styles
import { Container } from "./text.styles";

function Text({ size }: IText) {
  return <Container size={size}>Text</Container>;
}

export default Text;
