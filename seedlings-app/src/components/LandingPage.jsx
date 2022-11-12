import {
    ChakraProvider, Box, Button, Heading, Text, Container, Flex
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom'
  import { Wave } from './Wave.jsx';
  import { useState, useRef } from 'react'
  import { FadeIn } from './FadeIn.jsx';


const LandingPage = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const animation = useRef(); 
    const toggle = () => {
      animation.current.reversed(!animation.current.reversed());

    };

return (

    <>

       <FadeIn stagger={0.1} y={-100} ref={animation}>
       <Wave zIndex={2}/>
       <Flex flexDirection='column' gap={4} alignItems='center' justifyContent='center'>
<Heading textStyle='h1' size='3xl' mx='30px' textAlign='center' >Howdy, Gardner!</Heading>


<Button colorScheme='orange' size='lg' onClick={toggle}>Log In</Button>



<Text fontSize='lg'>Not got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg' onClick={() => navigate("/signup")}>Sign Up</Button>
</Flex>

</FadeIn>
</>
)
}

export default LandingPage