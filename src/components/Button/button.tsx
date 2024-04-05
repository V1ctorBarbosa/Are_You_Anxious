//Styles
import { ButtonContainer } from "./button.styles";

//Types
import { IButton } from "./button.types";

function Button({ children }: IButton) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
