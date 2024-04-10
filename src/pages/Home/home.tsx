// Styles
import { Container } from "./home.styles";

//Sections
import Sections from "../../sections/sections";

function Home() {  
  return (
    <Container>
      {Sections()}
    </Container>
  );
}

export default Home;
