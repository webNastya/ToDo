import App from "App";
import { ThemeProvider } from "components/ThemeProvider";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
