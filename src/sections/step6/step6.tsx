//Styles
import { Container, Section, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

//Components
import Link from "../../components/Link/link";

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
          linkRef={sectionData.data.link}
          openOnNewWindow
          handleClick={() => handleAction()}
        >
          {sectionData.data.confirm}
        </Link>
      </Section>
    </Container>
  );
}

export default Step6;
