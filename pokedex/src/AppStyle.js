import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 5px;    
  }

  *::-webkit-scrollbar-thumb {
    background-color: #6C6C6C;
    border-radius: 2px;
  }

  *::-webkit-scrollbar-track {
    background-color:#DFDFDF;
  }
`