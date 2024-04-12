//Context
import { useGlobalContext } from "../../context/context";

//Styles
import { Container, Section, Text } from "../sections.styles";

//Components
import Button from "../../components/Button/button";

//Types
import { ISectionData } from "../sections.types";

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
        <Button handleClick={() => handleClick()}>
          {sectionData.data.confirm}
        </Button>
      </Section>
    </Container>
  );
}

export default Step7;
