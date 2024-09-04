import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { LoginForm } from "./pages/login/LoginForm";
import { GlobalStyles } from "./styles/global";



export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
     
      <LoginForm />

      <GlobalStyles />
    </ThemeProvider>
  )
}

