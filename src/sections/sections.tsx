//Sections
import Intro from "./intro/intro"

//Context
import { useGlobalContext } from "../context/context"


function Sections() {

  const { step } = useGlobalContext()

  const handleStep = (step: string) => {
    switch (step){
        case 'intro':
            return <Intro />
    }
  }
    
  return handleStep(step)
  
}

export default Sections