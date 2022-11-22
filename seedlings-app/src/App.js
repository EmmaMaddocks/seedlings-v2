import React, {Suspense, useMemo, useState, useEffect}  from 'react';

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
import SoilTesting from './components/SoilTesting.jsx'
import WhatShallWeGrow from './components/WhatShallWeGrow.jsx'
import { UserProvider } from './context/UserContext.js';                              




function App() {
  const [crops, setCrops] = useState();
  const [sunlight, setSunlight] = useState(null);
  const [soiltype, setSoiltype] = useState(null);
  const [outdoors, setLocation] = useState(false);

  const [individualCrop, setIndividualCrop] = useState('');



  const [user, setUser] = useState(null);

  // const userValue = useMemo(() => ({user, setUser}), [user, setUser])

//     useEffect(() => {
//        function fetchUser () {
// const loggedInUser = JSON.parse(localStorage.getItem('user'))

//   setUser(loggedInUser)
// }

// fetchUser();
// }, []);

console.log(user)

  return (

    <BrowserRouter>
        <Container minH='100vh' minW='100vw' bg='#FBF2E3'>
          
  <ChakraProvider theme={theme}>
  <UserProvider value={{user, setUser}}>
    <Nav />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/growingconditions" element={<DataInput crops={crops} setCrops={setCrops} sunlight={sunlight} setSunlight={setSunlight} soiltype={soiltype} setSoiltype={setSoiltype} outdoors={outdoors} setLocation={setLocation} />} />
          <Route path="/suggestions" element={<Suggestions crops={crops}/>} />
          <Route path="/allotment" element={<Allotment setIndividualCrop={setIndividualCrop}  individualCrop={individualCrop}   />} />
          <Route path="/seeds" element={<Seeds/>} />
          <Route path="/crop" element={<CropInfo individualCrop={individualCrop}  />} />
          <Route path="/harvestsuccess" element={<HarvestedCrop />} />
          <Route path="/soiltesting" element={<SoilTesting/>}/>
        </Routes>
        </UserProvider>
    </ChakraProvider>

  </Container>


    </BrowserRouter>
  );
}

export default App;
