//Styles
import { Volume2, VolumeX } from "lucide-react";

//Components
import Icon from "../../../components/Icon/icon";

//Types
import { IGlobalStateContextType } from "../../../context/types";
import { IIconsData } from "../home.types";

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
  if (state.displaySound) return handleVolumeIcon({ state, setState });
  else return;
};

const handleVolumeIcon = ({ state, setState }: IGlobalStateContextType) => {
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

export const handleSocialIcons = (iconsData: IIconsData[]) => 
  iconsData.map((icon) => (
    <Icon key={icon.id} link={icon.link} socialIcon={icon.icon}/>
  ))
