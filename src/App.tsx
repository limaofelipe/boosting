import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { PublicRouters } from './routers/router'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
     

      <BrowserRouter>
        <PublicRouters/>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}

