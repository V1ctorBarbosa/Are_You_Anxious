//Styles
import { Container, Section, Button, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

function Step4(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = () => {
    setState({
      ...state,
      step: "step5",
    });
  };

  return (
    <Container>
      <Section>
        <Text>{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Button onClick={() => handleAction()}>
          {sectionData.data.confirm}
        </Button>
        <Button onClick={() => handleAction()}>
          {sectionData.data.deny}
        </Button>
      </Section>
    </Container>
  );
}

export default Step4;
