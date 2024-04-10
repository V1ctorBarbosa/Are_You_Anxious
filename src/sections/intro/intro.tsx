//Styles
import { Container, Section, Button } from "../sections.styles";

//Components
import Text from "../../components/Text/text";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

function Intro(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = (status: string) => {
    if (status == "confirm") {
      setState({
        ...state,
        step: "step1",
        displaySound: true,
        sound: true,
      });
    } else {
      setState({
        ...state,
        step: "step1",
      });
    }
  };

  return (
    <Container>
      <Section>
        <Text size="26">{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Button onClick={() => handleAction("confirm")}>
          {sectionData.data.confirm}
        </Button>
        <Button onClick={() => handleAction("deny")}>
          {sectionData.data.deny}
        </Button>
      </Section>
    </Container>
  );
}

export default Intro;
