//Components
import Text from "../Text/text";
import Button from "../Button/button";

//Styles
import { Container, Section } from "./infoBox.styles";

//Types
import { IInfoBox } from "./infoBox.types";

function InfoBox(data: any) {
  return (
    <Container>
      <Section>
        <Text size="32">{data.question}</Text>
      </Section>
      <Section>
        <Button>{data.confirm}</Button>
        <Button>{data.deny}</Button>
      </Section>
    </Container>
  );
}

export default InfoBox;
