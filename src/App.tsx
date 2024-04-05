//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/themes";

//Components
import Home from "./pages/Home/home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    );
}

export default App;