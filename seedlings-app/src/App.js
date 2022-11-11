import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider, Box, Button, Heading, Text, Container, Flex
} from '@chakra-ui/react';
import theme from './theme.js';
import '@fontsource/love-ya-like-a-sister';
import '@fontsource/montserrat';
import LandingPage from './components/LandingPage'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';


function App() {

  return (
    <BrowserRouter>
    <ChakraProvider theme={theme}>
 
      <Box bg='brand.lightbrown' minW='100%' minH='100vh' zIndex={1}></Box>

      <Flex pos='absolute' pt='200px' top={0} left={0} right={0} zIndex={1} minH='100vh' color='white' display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={6}>


      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    

</Flex>

    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
