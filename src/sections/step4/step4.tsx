//Styles
import { Container, Section, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Components
import Button from "../../components/Button/button";

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
      <Button handleClick={() => handleAction()}>
          {sectionData.data.confirm}
        </Button>
        <Button handleClick={() => handleAction()}>
          {sectionData.data.deny}
        </Button>
      </Section>
    </Container>
  );
}

export default Step4;
