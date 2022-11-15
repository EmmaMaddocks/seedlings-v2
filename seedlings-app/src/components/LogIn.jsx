import {
    Input, InputGroup, VStack, InputRightElement, Box, Button, Heading, Text, Container, Flex
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom'
  import { useState } from 'react'




const LogIn = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)





return (
    <>

<Flex height='100vh' direction='column' alignItems='center' justifyContent='center' flexDirection='column' gap={6}>

<Box size='50%'>

<Heading textStyle='h1' size='3xl'  mx='100px'>Welcome Back!</Heading>
</Box>

<VStack spacing={3} align='center'>
<Input placeholder='Parents Email Address' size='lg'     color='white'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.lightgreen'/>
     
     <InputGroup size='md'>
      <Input
      size='lg' color='white'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        focusBorderColor='brand.lightgreen'
        _placeholder={{ color: 'inherit' }}
      />
      <InputRightElement width='4.5rem'>
        <Button colorScheme='orange' h='2rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
 
<Button colorScheme='orange' size='lg' >Log In</Button>



<Text fontSize='lg'>Not got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg' onClick={() => navigate("/signup")}>Sign Up</Button>
</VStack>
</Flex>

</>
)
}

export default LogIn

