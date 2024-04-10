export interface IQuestionsPath {
  eng: ILanguageSteps;
  ptbr: ILanguageSteps;
}
interface IStep {
  id: number;
  info: string;
  confirm?: string;
  deny?: string;
  link?: string;
}
interface ILanguageSteps {
  intro: IStep;
  step1: IStep;
  step2: IStep;
  step3: IStep;
  step4: IStep;
  step5: IStep;
  step6: IStep;
  step7: IStep;
}

export interface IHandleData {
    language: 'ENG' | 'PTBR';
    step: string;
}

export interface ISectionData {
    data: IStep
}
