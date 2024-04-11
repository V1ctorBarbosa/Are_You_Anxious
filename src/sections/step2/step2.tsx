//Styles
import { Container, Section, Button, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Animation
import { hoverAnimations } from "../../styles/animations";

//Context
import { useGlobalContext } from "../../context/context";

function Step2(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = (status: string) => {
    if (status == "confirm") {
      setState({
        ...state,
        step: "step4",
      });
    } else {
      setState({
        ...state,
        step: "step3",
      });
    }
  };

  return (
    <Container>
      <Section>
        <Text>{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Button {...hoverAnimations} onClick={() => handleAction("confirm")}>
          {sectionData.data.confirm}
        </Button>
        <Button {...hoverAnimations} onClick={() => handleAction("deny")}>
          {sectionData.data.deny}
        </Button>
      </Section>
    </Container>
  );
}

export default Step2;
