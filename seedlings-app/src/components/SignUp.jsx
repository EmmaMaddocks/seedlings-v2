import {
Box, Button, Heading, Text, FormLabel, Switch, Stack, Input, Flex, InputGroup, InputRightElement
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom'
  import { useState} from 'react'


const SignUp = () => {

        const navigate = useNavigate();
        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)

return (
    <>
<Box size='50%'>
<Heading textStyle='h1' size='3xl'>Sign Up</Heading>
</Box>

<Stack spacing={3}>
<Input placeholder='First Name' size='lg' color='brand.2'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.2'/>
  <Input placeholder='Last Name' size='lg'     color='brand.2'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.2'/>
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

    <FormLabel htmlFor='isRequired'>I have asked my parents permission to use this app</FormLabel>
  <Switch colorScheme='teal' id='isRequired' isRequired />
    <Button color='brand.2'>Sign Up</Button>

</Stack>



<Flex flexDirection='column'>
<Text fontSize='lg'>Already got an account?</Text> 
<Button colorScheme='orange' variant='link' size='lg' onClick={() => navigate("/login")}>Log in</Button>
</Flex>
</>
)
}

export default SignUp