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
import styled from 'styled-components';
import React, { Suspense } from 'react';
import LandingPageContent from './LandingPageContent';

import { FadeIn } from './FadeIn.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { MovingVeg } from './MovingVeg.jsx';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>


      <Box height='100vh' width='100vw' >
      <LandingPageContent position='absolute' zIndex={1}/>

        <Canvas position='absolute' zIndex={10} flat linear >
          <Suspense fallback={null}>
            {/* <VegPatch /> */}

            <MovingVeg/>
          </Suspense>
        </Canvas>
      </Box>
  
    </>
  );
};

export default LandingPage;
