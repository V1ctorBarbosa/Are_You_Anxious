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

  // const handleClickActions = ({data, orientation}: any) => {
  //   if()
  // }

  return (
    <Container>
      <Section>
        <Text size="26">{data.info}</Text>
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
