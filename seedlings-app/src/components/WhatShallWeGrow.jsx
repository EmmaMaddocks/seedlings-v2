

import {
    ChakraProvider,
    Box,
    Button,
    Heading,
    Text,
    Container,
    Flex,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { Wave } from './Wave.jsx';
  import { useState, useRef } from 'react';
  import VegPatch from './vegPatch';
  import { Canvas } from '@react-three/fiber';
  import Carrot from './Carrot';
import DataInput from './DataInput.jsx';
  import React, { Suspense } from 'react';


  
  const WhatShallWeGrow = () => {
    const navigate = useNavigate();
  
    return (
      <>

<Container height='100vh' width='100vw' centerContent>


<Box height='500px'>
  <Canvas position='absolute' zIndex={1} flat linear >
    
    <Suspense fallback={null}>
      <Carrot/>


    </Suspense>
  </Canvas>
  </Box>
  <DataInput position='absolute' zIndex={2}/>
</Container>

      </>
    );
  };
  
  export default WhatShallWeGrow;
  

