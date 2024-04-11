//Styles
import { Container, Section, Button, Link, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

//Animation
import { hoverAnimations } from "../../styles/animations";

function Step3(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = () => {
    setState({
      ...state,
      step: "step2",
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
        <Link {...hoverAnimations} href={sectionData.data.link}>
          {sectionData.data.deny}
        </Link>
      </Section>
    </Container>
  );
}

export default Step3;
