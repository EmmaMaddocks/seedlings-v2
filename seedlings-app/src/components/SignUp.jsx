import {
  Box,
  Button,
  Heading,
  Text,
  FormLabel,
  Switch,
  VStack,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  FormErrorMessage
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import * as api from '../utils/api'


const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();



  function onSubmit(data) {

const { firstName, userName, parentsEmail, password} = data

const newUser = {
  name: firstName,
  username: userName,
  parentsEmail: parentsEmail,
  password: password
}
try {
  api.postUser(firstName, userName, parentsEmail, password)
} catch(error) {
  console.log(error)
}
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
        <VStack spacing={4} align="center" width='300px'>

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
            aria-invalid={errors.userName ? "true" : "false"} 

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

    
            {...register("parentsEmail", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }) } 
            aria-invalid={errors.parentsEmail ? "true" : "false"} 

          />
   {errors.parentsEmail?.type === 'required' && <p role="alert">Email is required</p>}
   {errors.parentsEmail?.type === 'pattern' && <p role="alert">Email address doesn't look right, please try again..</p>}
          
          
          
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
              aria-invalid={errors.password ? "true" : "false"} 
  
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

          <Button color="white" bgColor="#ED965C" borderRadius={20} isLoading={isSubmitting} type='submit'>
            Sign Up
          </Button>
          </VStack >

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
