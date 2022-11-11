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
      <Flex bg="brand.4" minW='100%' minH='100vh' color='white' display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={6}>


<Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
{/* <Box size='50%'>
<Heading textStyle='h1' size='3xl'>Howdy, Gardner!</Heading>
</Box>

<Button colorScheme='orange' size='lg'>Log In</Button>

<Flex flexDirection='column'>
<Text fontSize='lg'>Not got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg'>Sign Up</Button>
</Flex> */}

</Flex>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
