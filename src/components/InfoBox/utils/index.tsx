//Styles
import { Link } from "../infoBox.styles";

//Component
import Button from "../../Button/button";

//Styles
import { IButtonOrLink } from "../infoBox.types";

export const handleButtonOrLink = ({
  step,
  command,
  content,
  link,
}: IButtonOrLink) => {
  if (step == "step2" && command == "deny") {
    return <Link href={link}>{content}</Link>;
  } else if (step == "step5" && command == "confirm") {
    return <Link href={link}>{content}</Link>;
  } else return <Button>{content}</Button>;
};
