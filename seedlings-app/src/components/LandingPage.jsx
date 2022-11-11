import {
    ChakraProvider, Box, Button, Heading, Text, Container, Flex
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom'


const LandingPage = () => {

    const navigate = useNavigate();
return (

    <>
<Box size='50%'>
<Heading textStyle='h1' size='3xl'>Howdy, Gardner!</Heading>
</Box>

<Button colorScheme='orange' size='lg' onClick={() => navigate("/login")}>Log In</Button>

<Flex flexDirection='column'>
<Text fontSize='lg'>Not got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg' onClick={() => navigate("/signup")}>Sign Up</Button>
</Flex>
</>
)
}

export default LandingPage