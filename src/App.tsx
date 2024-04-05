//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/themes";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>cachorro</div>
        </ThemeProvider>
    );
}

export default App;