import { Router } from "./routes/Router";
import theme from './theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from "./AppStyle";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;