//Styles
import { Container } from "./button.styles";

//Animations
import { hoverAnimations } from "../../styles/animations";

//Types
import { IButton } from "./button.types";

function Button({ children, handleClick }: IButton) {
  return (
    <Container {...hoverAnimations} onClick={() => handleClick()}>
      {children}
    </Container>
  );
}

export default Button;
