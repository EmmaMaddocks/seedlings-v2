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
  FormErrorMessage
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);


  function onSubmit(data) {
console.log(data)
  }

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="First Name"
            size="lg"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
            bgColor="white"
            borderColor="white"
            borderRadius="10"

            {...register("firstName", { required: true })} 
            aria-invalid={errors.firstName ? "true" : "false"} 

          />
   {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
          <Input
            placeholder="Username"
            size="lg"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
            bgColor="white"
            borderColor="white"
            borderRadius="10"


            {...register("userName", { required: true })} 
            aria-invalid={errors.firstName ? "true" : "false"} 

          />
   {errors.userName?.type === 'required' && <p role="alert">Username is required</p>}
          <Input
            placeholder="Parents Email Address"
            size="lg"
            color="brand.darkgreen"
            _placeholder={{ color: 'inherit' }}
            focusBorderColor="brand.lightgreen"
            bgColor="white"
            borderColor="white"
            borderRadius="10"

    
            {...register("emailAddress", { required: true })} 
            aria-invalid={errors.emailAddress ? "true" : "false"} 

          />
   {errors.emailAddress?.type === 'required' && <p role="alert">Email is required</p>}
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

              {...register("password", { required: true })} 
              aria-invalid={errors.emailAddress ? "true" : "false"} 
  
            />
     {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
          
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

          <Button color="white" bgColor="#ED965C" borderRadius={20} type='submit'>
            Sign Up
          </Button>
</form>
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
      </Flex>
    </>
  );
};

export default SignUp;
