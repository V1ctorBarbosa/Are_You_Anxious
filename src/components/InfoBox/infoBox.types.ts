export interface IInfoBox {
    data: IInfoBoxData;
    setStep: any
}

interface IInfoBoxData {
    id: number;
    info: string;
    confirm: string;
    deny?: string | undefined;
    link?: string | undefined;
}

export interface IButtonOrLink {
    step: string,
    command: string,
    content: string,
    link?: string
}