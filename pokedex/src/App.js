import { Router } from "./routes/Router";
import theme from './theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from "./AppStyle";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ChakraProvider>
  );
}

export default App;