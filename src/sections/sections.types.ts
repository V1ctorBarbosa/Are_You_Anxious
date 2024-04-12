export interface IQuestionsPath {
  eng: ILanguageSteps;
  ptbr: ILanguageSteps;
}

export interface IStep {
  id: number;
  info: string;
  confirm?: string;
  deny?: string;
  link?: string;
}

export interface ILanguageSteps {
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

export interface INullObj {
  eng: {
    data: IStep;
  };
  ptbr: {
    data: IStep;
  };
}

export interface ISectionData {
  data: IStep | any;
}