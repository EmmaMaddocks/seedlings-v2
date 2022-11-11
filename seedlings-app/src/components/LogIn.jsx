import {
    Input, InputGroup, Stack, InputRightElement, Box, Button, Heading, Text, Container, Flex
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom'
  import { useState} from 'react'

const LogIn = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)



return (
    <>
<Box size='50%'>
<Heading textStyle='h1' size='3xl'>Welcome Back!</Heading>
</Box>

<Stack spacing={3}>
<Input placeholder='Parents Email Address' size='lg'     color='brand.2'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.2'/>
     
     <InputGroup size='md'>
      <Input
      size='lg' color='brand.2'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        focusBorderColor='brand.2'
        _placeholder={{ color: 'inherit' }}
      />
      <InputRightElement width='4.5rem'>
        <Button bg='brand.2' h='2rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
<Button colorScheme='orange' size='lg'>Log In</Button>
</Stack>
<Flex flexDirection='column'>
<Text fontSize='lg'>Not got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg' onClick={() => navigate("/signup")}>Sign Up</Button>
</Flex>

</>
)
}

export default LogIn