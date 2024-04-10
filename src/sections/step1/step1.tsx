//React
import { useEffect } from "react";

//Styles
import { Container, Text } from "../sections.styles";

//Context
import { useGlobalContext } from "../../context/context";

//Types
import { ISectionData } from "../sections.types";

function Step1(sectionData: ISectionData) {
  const { state, setState } = useGlobalContext();

  const handleAction = () => {
    setState({
      ...state,
      step: "step2",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleAction();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Text>{sectionData.data.info}</Text>
    </Container>
  );
}

export default Step1;
