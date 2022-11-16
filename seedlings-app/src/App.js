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
import Profile from './components/Profile.jsx';
import Seeds from './components/Seeds.jsx';
import Allotment from './components/Allotment.jsx';
import CropInfo from './components/CropInfo.jsx'
import HarvestedCrop from './components/HarvestedCrop.jsx';





function App() {


  return (

    <BrowserRouter>
        <Container minH='100vh' minW='100vw' bg='#FBF2E3'>
          
  <ChakraProvider theme={theme}>
    <Nav/>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/growingconditions" element={<DataInput />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/allotment" element={<Allotment />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/carrot" element={<CropInfo />} />
          <Route path="/harvestsuccess" element={<HarvestedCrop />} />
        </Routes>
    </ChakraProvider>
  </Container>


    </BrowserRouter>
  );
}

export default App;
