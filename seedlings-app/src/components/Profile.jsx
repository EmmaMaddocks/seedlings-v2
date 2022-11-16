import {
  SimpleGrid,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Button,
  List,
  ListItem,
  ListIcon,
  Container,
} from '@chakra-ui/react';
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Trophy from './trophy';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as api from '../utils/api';
import { useState, useEffect } from 'react';
import Loading from './Loading';

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState('null');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getProfileData()
      .then(data => {
        console.log(data);
        setUser(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  const { name, seeds, allotment } = user[0];

  return (
    <Flex
      height="70vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
    >
      {/* <Container size='2xs'>
        <Canvas zIndex={1} flat linear >
          <Suspense fallback={null}>
            <Trophy />
          </Suspense>
        </Canvas>
      </Container> */}

      <Heading textStyle="h1" size="2xl" >Welcome, {name}!</Heading>

      <SimpleGrid columns={2} spacing={5}>

      <Flex gap={3} direction='column' bg='white' height='200px' width='200px' borderRadius='25pt' justifyContent='center' alignItems='center'>
  <Heading textStyle="h2" size="lg">Today's Weather</Heading>
    <Text></Text>
  </Flex>


      <Flex gap={3} direction='column' bg='white' height='200px' width='200px' borderRadius='25pt' justifyContent='center' alignItems='center'>
      <Heading textStyle="h2" size="lg">To do today:</Heading>
      <List spacing={3}>
        <ListItem>
          Water Carrots
          <ListIcon as={FaCheck} color="green.500" />
        </ListItem>
        <ListItem>
          Water Peas
          <ListIcon as={FaCheck} color="green.500" />
        </ListItem>
      </List>
  </Flex>

      <Flex gap={3} direction='column' bg='white' height='200px' width='200px' borderRadius='25pt' justifyContent='center' alignItems='center'>
      <Heading textStyle="h2" size="lg">Nearing Harvest:</Heading>
      <List spacing={3}>
        <ListItem>
          Carrots
          <ListIcon as={FaLongArrowAltRight} color="green.500" />
        </ListItem>
        <ListItem>
          Peas
          <ListIcon as={FaLongArrowAltRight} color="green.500" />
        </ListItem>
      </List>
  </Flex>

  <Flex gap={3} direction='column' bg='white' height='200px' width='200px' borderRadius='25pt' justifyContent='center' alignItems='center'>
    <Heading textStyle="h2" size="lg">Allotment</Heading>
    <Text>7 crops</Text>
  </Flex>
  <Flex gap={3} direction='column' bg='white' height='200px' width='200px' borderRadius='25pt' justifyContent='center' alignItems='center'>
  <Heading textStyle="h2" size="lg">Seeds</Heading>
    <Text>7 varieties</Text>
  </Flex>

  <Flex gap={3} direction='column' bg='white' height='200px' width='200px' borderRadius='25pt' justifyContent='center' alignItems='center'>
    <Heading textStyle="h2" size="lg">Past Harvests</Heading>
    <Text>7 successful harvests</Text>
  </Flex>


</SimpleGrid>


    </Flex>
  );
}

export default Profile;
