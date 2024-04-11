//Styles
import { Container, Section, Link, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

//Animation
import { hoverAnimations } from "../../styles/animations";

function Step6(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = () => {
    setState({
      ...state,
      step: "step7",
    });
  };

  return (
    <Container>
      <Section>
        <Text>{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Link
          {...hoverAnimations}
          href={sectionData.data.link}
          target="_blank"
          onClick={() => handleAction()}
        >
          {sectionData.data.confirm}
        </Link>
      </Section>
    </Container>
  );
}

export default Step6;
