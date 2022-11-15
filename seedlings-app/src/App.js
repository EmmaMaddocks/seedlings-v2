import React, {Suspense}  from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider, Container } from '@chakra-ui/react';
import theme from './theme.js';
import '@fontsource/love-ya-like-a-sister';
import '@fontsource/montserrat';
import LandingPage from './components/LandingPage'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import DataInput from  './components/DataInput.jsx';
import Suggestions from  './components/Suggestions.jsx';
import Nav from  './components/Nav.jsx';
import { CSSTransition } from 'react-transition-group'






function App() {


  return (

    <BrowserRouter>
        <Container minHeight='100vh' width='100vw' bg='#FBF2E3'>
          
  <ChakraProvider theme={theme}>
    <Nav/>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/growingconditions" element={<DataInput />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
    </ChakraProvider>
  </Container>


    </BrowserRouter>
  );
}

export default App;
