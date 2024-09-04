import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }
  ::-webkit-input-placeholder {
   color: ${(props) => props.theme['gray-400']};
}

:-moz-placeholder { /* Firefox 18- */
   color: ${(props) => props.theme['gray-400']};  
}

::-moz-placeholder {  /* Firefox 19+ */
   color: ${(props) => props.theme['gray-400']};  
}

:-ms-input-placeholder {  
   color: ${(props) => props.theme['gray-400']};  
}

  body {
    background: ${(props) => props.theme['gray-50']};
    -webkit-font-smoothing: antialiased;
  }


  body, input, textarea, button {
    font-family: "Titillium Web", sans-serif;
    font-weight: 400;
  }

`
