//React
import { useState, useEffect } from "react";

//Sections
import Intro from "./intro/intro";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";
import Step6 from "./step6/step6";
import Step7 from "./step7/step7";

//Context
import { useGlobalContext } from "../context/context";

//Styles
import { SectionsContainer } from "./sections.styles";

//Animations
import { animationVariants } from "../styles/animations";
import { AnimatePresence } from "framer-motion";

//Utils
import { handleData } from "./utils";

function Sections() {
  const { state } = useGlobalContext();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    return () => setIsAnimating(false);
  }, [state.step]);

  const handleStep = (step: string) => {
    let sectionData;
    let sectionComponent: React.ReactNode;
    sectionData = handleData({ language: state.language, step: step });

    switch (step) {
      case "intro":
        sectionComponent = <Intro data={sectionData} />;
        break;
      case "step1":
        sectionComponent = <Step1 data={sectionData} />;
        break;
      case "step2":
        sectionComponent = <Step2 data={sectionData} />;
        break;
      case "step3":
        sectionComponent = <Step3 data={sectionData} />;
        break;
      case "step4":
        sectionComponent = <Step4 data={sectionData} />;
        break;
      case "step5":
        sectionComponent = <Step5 data={sectionData} />;
        break;
      case "step6":
        sectionComponent = <Step6 data={sectionData} />;
        break;
      case "step7":
        sectionComponent = <Step7 data={sectionData} />;
        break;
      default:
        sectionComponent = <Intro data={sectionData} />;
    }
    return (
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        {isAnimating ? null : (
          <SectionsContainer
            key={step}
            variants={animationVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            {sectionComponent}
          </SectionsContainer>
        )}
      </AnimatePresence>
    );
  };

  return handleStep(state.step);
}

export default Sections;
