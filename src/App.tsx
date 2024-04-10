//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Container } from "./styles/GlobalStyles";
import { theme } from "./styles/themes";

//Context
import { GlobalStateProvider } from "./context/context";

//Components
import Home from "./pages/Home/home";

function App() {

  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyles />
          <Home />
        </Container>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;