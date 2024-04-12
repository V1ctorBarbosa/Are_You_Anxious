//Context
import { useGlobalContext } from "../../context/context";

//Styles
import { Container, Section, Button, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Animation
import { hoverAnimations } from "../../styles/animations";

function Step7(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleClick = () => {
    setState({
      ...state,
      isFireworksActive: !state.isFireworksActive,
    });
  };

  return (
    <Container>
      <Section>
        <Text>{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Button {...hoverAnimations} onClick={() => handleClick()}>
          {sectionData.data.confirm}
        </Button>
      </Section>
    </Container>
  );
}

export default Step7;
