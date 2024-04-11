//React
import { useEffect, useRef } from "react";

// Styles
import { Container, Footer, Translate, Audio } from "./home.styles";

//Assets
import AruarianDance from "../../assets/aruarian dance.mp3";

//Context
import { useGlobalContext } from "../../context/context";

//Sections
import Sections from "../../sections/sections";

//Utils
import { handleDisplaySound, handleLanguage } from "./utils";

function Home() {
  const { state, setState } = useGlobalContext();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTimeRef = useRef<number>(0);
  const buttonText = state.language === "ENG" ? "PTBR" : "ENG";

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (state.sound) {
        audio.currentTime = currentTimeRef.current;
        audio.play();
      } else {
        currentTimeRef.current = audio.currentTime;
        audio.pause();
      }
      audio.volume = 0.2;
    }
  }, [state.sound]);

  return (
    <Container>
      {Sections()}
      <Footer>
        {handleDisplaySound({ state, setState })}
        <Translate onClick={() => handleLanguage({ state, setState })}>
          {buttonText}
        </Translate>
        <Audio ref={audioRef} src={AruarianDance} loop style={{ display: "none" }} />
      </Footer>
    </Container>
  );
}

export default Home;
