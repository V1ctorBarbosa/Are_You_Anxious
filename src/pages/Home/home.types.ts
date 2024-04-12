export interface IQuestionsPath {
    [key: string]: {
      id: number;
      info: string;
      confirm: string;
      deny?: string;
      link?: string;
    };
  }

  export interface IIconsData {
    id: number;
    link: string;
    icon: JSX.Element
  }
