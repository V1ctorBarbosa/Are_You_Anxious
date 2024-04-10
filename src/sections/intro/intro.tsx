//Styles
import { Container, Section, Button } from "../sections.styles"

//Components
import Text from "../../components/Text/text"

//Types
import { ISectionData } from '../sections.types'

function Intro(sectionData: ISectionData) {
  return (
    <Container>
        <Section>
            <Text size="26">{sectionData.data.info}</Text>
        </Section>
        <Section>
          <Button>{sectionData.data.confirm}</Button>
          <Button>{sectionData.data.deny}</Button>
        </Section>
    </Container>
  )
}

export default Intro