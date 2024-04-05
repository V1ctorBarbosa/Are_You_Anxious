//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Container } from "./styles/GlobalStyles";
import { theme } from "./styles/themes";

//Components
import Home from "./pages/Home/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
