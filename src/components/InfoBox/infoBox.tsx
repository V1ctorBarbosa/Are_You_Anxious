//Components
import Text from "../Text/text";
import Button from "../Button/button";

//Styles
import { Container, Section } from "./infoBox.styles";

//Utils
import { handleButtonOrLink } from "./utils";

//Types
import { IInfoBox } from "./infoBox.types";

function InfoBox({data, setStep}: IInfoBox) {

  return (
    <Container>
      <Section>
        <Text size="32">{data.info}</Text>
      </Section>
      <Section>
        {/* {handleButtonOrLink(data.confirm)} */}
        <Button>{data.confirm}</Button>
        <Button>{data.deny}</Button>
      </Section>
    </Container>
  );
}

export default InfoBox;
