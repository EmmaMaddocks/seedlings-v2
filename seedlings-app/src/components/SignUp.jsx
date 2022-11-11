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
<Input placeholder='First Name' size='md' color='white'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.lightgreen'/>
  <Input placeholder='Last Name' size='md'     color='white'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.lightgreen'/>
      <Input placeholder='Parents Email Address' size='md'     color='white'
    _placeholder={{ color: 'inherit' }} focusBorderColor='brand.lightgreen'/>
     
     <InputGroup size='md'>
      <Input
      size='md' color='brand.2'
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

    <FormLabel htmlFor='isRequired' fontSize='xs'>I have asked my parents permission to use this app</FormLabel>
  <Switch colorScheme='orange' id='isRequired' isRequired />
    <Button colorScheme='orange'>Sign Up</Button>

</Stack>




{/* <Flex flexDirection='column'>
<Text fontSize='sm'>Already got an account?
<Button colorScheme='orange' variant='link' size='sm' onClick={() => navigate("/login")}>Log in</Button>
</Text>
</Flex> */}
</>
)
}

export default SignUp