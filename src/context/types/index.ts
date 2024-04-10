//React
import { Dispatch, SetStateAction } from 'react';

export interface IGlobalState {
    step: string;
    language: 'ENG' | 'PTBR';
    sound: boolean;
    displaySound: boolean;
  }

export interface IGlobalStateContextType {
    state: IGlobalState;
    setState: Dispatch<SetStateAction<IGlobalState>>;
}