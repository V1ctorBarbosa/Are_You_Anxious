//React
import { Dispatch, SetStateAction } from 'react';

export interface IGlobalState {
    step: string;
    language: 'ENG' | 'PTBR';
    sound: boolean;
  }

export interface IGlobalStateContextType {
    state: IGlobalState;
    setState: Dispatch<SetStateAction<IGlobalState>>;
}