export interface IQuestionsPath {
    [key: string]: {
      id: number;
      info: string;
      confirm: string;
      deny?: string;
      link?: string;
    };
  }
