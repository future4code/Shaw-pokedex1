import { Router } from "./routes/Router";
import theme from './theme/theme'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;