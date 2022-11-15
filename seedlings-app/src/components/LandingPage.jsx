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
import React, {Suspense}  from 'react';

import { FadeIn } from './FadeIn.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();





  return (
    <>
<Container height='50vh' width='100vw' top='0'>
    <Canvas zIndex={1} flat linear>
<Suspense fallback={null}>
<VegPatch/>
</Suspense>
  </Canvas>
  </Container>

        <Flex
          flexDirection="column"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <Heading textStyle="h1" size="3xl" mx="30px" textAlign="center">
            Howdy, Gardner!
          </Heading>

          <Button colorScheme="orange" size="lg"             onClick={() => navigate('/login')}>
            Log In
          </Button>

          <Text fontSize="lg">Not got an account?</Text>
          <Button
            colorScheme="orange"
            variant="link"
            size="lg"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </Flex>

    </>
  );
};

export default LandingPage;
