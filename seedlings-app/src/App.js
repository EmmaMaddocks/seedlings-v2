import React, {Suspense, useState}  from 'react';

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
  const [crops, setCrops] = useState();
  const [sunlight, setSunlight] = useState(null);
  const [soiltype, setSoiltype] = useState(null);
  const [outdoors, setLocation] = useState(false);
  const [user, setUser] = useState(null);


  return (

    <BrowserRouter>
        <Container minH='100vh' minW='100vw' bg='#FBF2E3'>
          
  <ChakraProvider theme={theme}>
    <Nav user={user} setUser={setUser} />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/growingconditions" element={<DataInput crops={crops} setCrops={setCrops} sunlight={sunlight} setSunlight={setSunlight} soiltype={soiltype} setSoiltype={setSoiltype} outdoors={outdoors} setLocation={setLocation} />} />
          <Route path="/suggestions" element={<Suggestions crops={crops} user={user} />} />
          <Route path="/allotment" element={<Allotment user={user} />} />
          <Route path="/seeds" element={<Seeds user={user} />} />
          <Route path="/crop" element={<CropInfo  user={user}/>} />
          <Route path="/harvestsuccess" element={<HarvestedCrop />} />
        </Routes>
    </ChakraProvider>
  </Container>


    </BrowserRouter>
  );
}

export default App;
