import React from 'react';
import {
  ChakraProvider, Box, Button, Heading, Text, Container, Flex
} from '@chakra-ui/react';
import theme from './theme.js';
import '@fontsource/love-ya-like-a-sister';
import '@fontsource/montserrat';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex bg="brand.4" minW='100%' minH='100vh' p={4} color='white' display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={4}>
<Heading as='h1' size='3xl'>Heading</Heading>


<Button colorScheme='orange' size='lg'>Log In</Button>


<Text fontSize='lg'>Not got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg'>Sign Up</Button>


</Flex>
    </ChakraProvider>
  );
}

export default App;
