//Styles
import { Volume2, VolumeX } from "lucide-react";

//Types
import { IGlobalStateContextType } from "../../../context/types";

export const handleLanguage = ({
  state,
  setState,
}: IGlobalStateContextType) => {
  const newLanguage = state.language === "ENG" ? "PTBR" : "ENG";
  setState({ ...state, language: newLanguage });
};

const handleSound = ({ state, setState }: IGlobalStateContextType) => {
  setState({ ...state, sound: !state.sound });
};

export const handleDisplaySound = ({
  state,
  setState,
}: IGlobalStateContextType) => {
  if (state.displaySound) return handleIcon({ state, setState });
  else return;
};

const handleIcon = ({ state, setState }: IGlobalStateContextType) => {
  if (state.sound)
    return (
      <VolumeX
        color="#ffffff"
        onClick={() => handleSound({ state, setState })}
      />
    );
  else
    return (
      <Volume2
        color="#ffffff"
        onClick={() => handleSound({ state, setState })}
      />
    );
};
