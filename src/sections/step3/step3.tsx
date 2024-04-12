//Styles
import { Container, Section, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

//Context
import { useGlobalContext } from "../../context/context";

//Components
import Button from "../../components/Button/button";
import Link from "../../components/Link/link";

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
        <Button handleClick={() => handleAction()}>
          {sectionData.data.confirm}
        </Button>
        <Link linkRef={sectionData.data.link}>
          {sectionData.data.deny}
        </Link>
      </Section>
    </Container>
  );
}

export default Step3;
