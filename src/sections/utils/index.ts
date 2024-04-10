//Data
import { questionsPath } from "../data/data";

//Types
import { IHandleData } from "../sections.types";

export const handleData = ({ language, step }: IHandleData) => {
    switch (language) {
      case 'ENG':
        switch (step) {
          case 'intro':
            return questionsPath.eng.intro;
          case 'step1':
            return questionsPath.eng.step1;
          case 'step2':
            return questionsPath.eng.step2;
          case 'step3':
            return questionsPath.eng.step3;
          case 'step4':
            return questionsPath.eng.step4;
          case 'step5':
            return questionsPath.eng.step5;
          case 'step6':
            return questionsPath.eng.step6;
          default:
            return null;
        }
      case 'PTBR':
        switch (step) {
          case 'intro':
            return questionsPath.ptbr.intro;
          case 'step1':
            return questionsPath.ptbr.step1;
          case 'step2':
            return questionsPath.ptbr.step2;
          case 'step3':
            return questionsPath.ptbr.step3;
          case 'step4':
            return questionsPath.ptbr.step4;
          case 'step5':
            return questionsPath.ptbr.step5;
          case 'step6':
            return questionsPath.ptbr.step6;
          default:
            return null;
        }
      default:
        return null;
    }
  };