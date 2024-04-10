//React
import React, { createContext, useContext, useState, ReactNode } from 'react';

const GlobalStateContext = createContext<{
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
} | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<string>('intro');

  return (
    <GlobalStateContext.Provider value={{ step, setStep }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState deve ser usado dentro de um GlobalStateProvider');
  }
  return context;
};
