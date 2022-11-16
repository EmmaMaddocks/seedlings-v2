import {
    ChakraProvider,
    Box,
    Button,
    Heading,
    Text,
    Center,
    Container,
    Flex,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import React, { Suspense } from 'react';
  const LandingPage = () => {
    const navigate = useNavigate();
  
    return (
      <>
<Container centerContent>
        <Flex

          direction="column"
          gap={4}
          alignItems="center"
          justifyContent="center"
          width='400px'
        height='200px'
        position='absolute'
        zIndex='99'

        >
          <Heading textStyle="h1" size="3xl" mx="30px" textAlign="center">
            Howdy, Gardner!
          </Heading>
  
          <Button
            colorScheme="orange"
            size="lg"
            onClick={() => navigate('/login')}
          >
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
        </Container>
      </>
    );
  };
  
  export default LandingPage;
  