//Styles
import { Container } from "./link.styles";

//Animations
import { hoverAnimations } from "../../styles/animations";

//Types
import { ILink } from "./link.types";

function Link({ children, linkRef, openOnNewWindow, handleClick }: ILink) {
  const getTargetAttribute = (openOnNewWindow: boolean | undefined) => {
    return openOnNewWindow ? "_blank" : undefined;
  };

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
    handleClick ? handleClick(e) : e.preventDefault();

  return (
    <Container
      {...hoverAnimations}
      href={linkRef}
      target={getTargetAttribute(openOnNewWindow)}
      onClick={(e) => onClickHandler(e)}
    >
      {children}
    </Container>
  );
}

export default Link;
