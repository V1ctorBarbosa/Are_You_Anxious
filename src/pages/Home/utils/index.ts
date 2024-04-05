import { IQuestionsPath } from "../home.types";

export const handleStepData = (step: IQuestionsPath, currentStep: string) => {
  switch (currentStep) {
    case 'step1':
      return step.step1;
    case 'step2':
      return step.step2;
    case 'step3':
      return step.step3;
    case 'step4':
      return step.step4;
    case 'step5':
      return step.step5;
    case 'step6':
      return step.step6;
    default:
      return null;
  }
};
