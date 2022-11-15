import {
  Box,
  Button,
  Heading,
  Text,
  FormLabel,
  Switch,
  Stack,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex
        height="100vh"
        direction="column"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={6}
      >
        <Box size="60vw">
          <Heading textStyle="h1" size="3xl">
            Sign Up
          </Heading>
        </Box>

        <Stack spacing={3}>
          <Input
            placeholder="First Name"
            size="md"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
          />
          <Input
            placeholder="Last Name"
            size="md"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
          />
          <Input
            placeholder="Parents Email Address"
            size="md"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
          />

          <InputGroup size="md">
            <Input
              size="md"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              borderColor='brand.darkgreen'
              focusBorderColor="brand.lightgreen"
              color="brand.darkgreen"
              _placeholder={{ color: 'inherit' }}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="orange"
                h="2rem"
                size="sm"
                onClick={handleClick}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex direction="row" gap={2}>
            <FormLabel
              htmlFor="isRequired"
              fontSize="xs"
              color="brand.darkgreen"
            >
              I have my parents permission to use this app
              <Switch colorScheme="orange" id="isRequired" isRequired />
            </FormLabel>
          </Flex>
          <Button colorScheme="orange">Sign Up</Button>
        </Stack>

        <Flex flexDirection='column'>
<Text fontSize='sm'>Already got an account?
<Button colorScheme='orange' variant='link' size='sm' onClick={() => navigate("/login")}>Log in</Button>
</Text>
</Flex>
      </Flex>
    </>
  );
};

export default SignUp;
