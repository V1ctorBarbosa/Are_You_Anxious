// Context
import { useGlobalState } from "../../context/context";

// Styles
import { Container } from "./home.styles";

function Home() {

  const { step } = useGlobalState();
  console.log(step);
  
  return (
    <Container>
      
    </Container>
  );
}

export default Home;
