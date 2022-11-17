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
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  CardHeader,
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

function Profile({user}) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name, seeds, allotment, username } = user;

  useEffect(() => {
    setIsLoading(true);
    console.log(user.user.username)
    api
      .getProfileData(user.user.username)
      .then(data => {
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

// console.log(user)

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
      paddingTop='50px'
    >
      <Container size='2xs'>
        <Canvas zIndex={1} flat linear >
          <Suspense fallback={null}>
            <Trophy />
          </Suspense>
        </Canvas>
      </Container>

<Heading as='h1' size='2xl'> Welcome, {user.user.name}! </Heading> 
<Text textStyle='h2' size='2xl'> Here's the latest: </Text> 
<Flex position='absolute' bottom='0' bgColor='white' borderRadius='25pt' width='100vw' height='60vh' maxH='800px' alignItems='center' justifyContent='center'> 
      <SimpleGrid spacing={4}  columns={2}>
  <Card size='lg' bgColor='brand.lightgreen' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
      <Text textStyle='cardHeader'>Allotment</Text>
    </CardHeader>
    <CardBody>
      <Text>{user.user.allotment.length} crops</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.paleorange'width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Seeds</Text>
    </CardHeader>
    <CardBody>
      <Text>{user.user.seeds.length}  varietys to plant</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.orange' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Harvests</Text>
    </CardHeader>
    <CardBody>
      <Text>3 succesful harvests</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightbrown' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Weather</Text>
    </CardHeader>
    <CardBody>
      <Text>26 degrees</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightbrown' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Coming up</Text>
    </CardHeader>
    <CardBody paddingTop={0}>
        <Flex direction='row' alignItems='center' justifyContent='space-between'>
      <Text>Tomatoes</Text>
      <CircularProgress value={40} color='brand.orange'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
</Flex>
<Flex direction='row' alignItems='center' justifyContent='space-between' >
      <Text>Peas</Text>
      <CircularProgress value={30} color='brand.orange'>
  <CircularProgressLabel>30%</CircularProgressLabel>
</CircularProgress>
</Flex>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightgreen' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>To do today:</Text>
    </CardHeader>
    <CardBody>
      <Text>Water Carrots</Text>
    </CardBody>
  </Card>
</SimpleGrid>
</Flex>







    </Flex>
  );
}

export default Profile;
