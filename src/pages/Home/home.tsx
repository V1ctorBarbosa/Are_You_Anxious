//React
import { useState } from "react";

//Components
import InfoBox from "../../components/InfoBox/infoBox";

//Styles
import { Container } from "./home.styles";

//Utils
import { handleStepData } from "./utils";

//Data
import { questionsPath } from "./data/data";

function Home() {
  const [currentStep, setCurrentStep] = useState("intro");

  return (
    <Container>
      <InfoBox
        data={handleStepData(questionsPath, currentStep)}
        setStep={setCurrentStep}
      />
    </Container>
  );
}

export default Home;
