import React, {Suspense}  from 'react';

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
import { CSSTransition } from 'react-transition-group'






function App() {


  return (

    <BrowserRouter>
        <Container height='100vh' width='100vw' bg='#ECDDC8'>
  <ChakraProvider theme={theme}>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </ChakraProvider>
  </Container>


    </BrowserRouter>
  );
}

export default App;
