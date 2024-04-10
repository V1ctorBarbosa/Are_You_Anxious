//Sections
import Intro from "./intro/intro";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";

//Context
import { useGlobalContext } from "../context/context";

//Utils
import { handleData } from "./utils";

function Sections() {
  const { state } = useGlobalContext();

  const handleStep = (step: string) => {
    switch (step) {
      case "intro":
        return <Intro data={() => handleData({ language: state.language, step: state.step })}/>;
      case "step1":
        return <Step1 data={() => handleData({ language: state.language, step: state.step })}/>;
      case "step2":
        return <Step2 data={() => handleData({ language: state.language, step: state.step })}/>;
      case "step3":
        return <Step3 data={() => handleData({ language: state.language, step: state.step })}/>;
      case "step4":
        return <Step4 data={() => handleData({ language: state.language, step: state.step })}/>;
      case "step5":
        return <Step5 data={() => handleData({ language: state.language, step: state.step })}/>;
      default:
        return <Intro data={() => handleData({ language: state.language, step: state.step })}/>;
    }
  };

  return handleStep(state.step);
}

export default Sections;
