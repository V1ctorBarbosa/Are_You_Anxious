//Styles
import { Container, Section, Button, Text } from "../sections.styles";

//Types
import { ISectionData } from "../sections.types";

function Step7(sectionData: ISectionData) {

  return (
    <Container>
      <Section>
        <Text>{sectionData.data.info}</Text>
      </Section>
      <Section>
        <Button>
          {sectionData.data.confirm}
        </Button>
      </Section>
    </Container>
  );
}

export default Step7;
