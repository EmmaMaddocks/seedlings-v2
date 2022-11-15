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

        <Stack spacing={3} width="350px">
          <Input
            placeholder="First Name"
            size="lg"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
            bgColor="white"
            borderColor="white"
            borderRadius="10"
          />
          <Input
            placeholder="Last Name"
            size="lg"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
            bgColor="white"
            borderColor="white"
            borderRadius="10"
          />
          <Input
            placeholder="Parents Email Address"
            size="lg"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
            bgColor="white"
            borderColor="white"
            borderRadius="10"
          />

          <InputGroup size="md">
            <Input
              size="lg"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              border="white"
              borderRadius="10"
              focusBorderColor="brand.lightgreen"
              color="brand.darkgreen"
              _placeholder={{ color: 'inherit' }}
              bgColor="white"
            />
            <InputRightElement width="4.5rem">
              <Button
                color="white"
                bgColor="#ED965C"
                h="2.5rem"
                size="sm"
                onClick={handleClick}
                borderRadius="10"
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex
            direction="row"
            gap={2}
            alignContent="space-between"
            justifyContent="center"
          >
            <FormLabel
              htmlFor="isRequired"
              fontSize="xs"
              color="brand.darkgreen"
            >
              I have my parents permission to use this app
            </FormLabel>
            <Switch colorScheme="orange" id="isRequired" isRequired />
          </Flex>

          <Button color="white" bgColor="#ED965C" borderRadius={20}>
            Sign Up
          </Button>

          <Flex
            direction="row"
            gap={2}
            alignContent="space-between"
            justifyContent="center"
          >
            <Text fontSize="sm">Already got an account?</Text>
            <Button
              colorScheme="orange"
              variant="link"
              size="sm"
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default SignUp;
