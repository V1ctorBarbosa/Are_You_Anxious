//Styles
import { Container, Section, Button, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

//Animation
import { hoverAnimations } from "../../styles/animations";

function Step5(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = () => {
    setState({
      ...state,
      step: "step6",
    });
  };

  return (
    <Container>
      <Section>
        <Text>{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Button {...hoverAnimations} onClick={() => handleAction()}>
          {sectionData.data.confirm}
        </Button>
        <Button {...hoverAnimations} onClick={() => handleAction()}>
          {sectionData.data.deny}
        </Button>
      </Section>
    </Container>
  );
}

export default Step5;
