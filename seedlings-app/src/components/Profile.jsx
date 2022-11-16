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
  Stack,
  CardFooter,
  Image,
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

<Heading as='h1' size='2xl'> Welcome, {name}! </Heading> 
<Text textStyle='h2' size='2xl'> Here's the latest: </Text> 
<Flex position='absolute' bottom='0' bgColor='white' borderRadius='25pt' width='100vw' height='750px' alignItems='center' justifyContent='center'> 
      <SimpleGrid spacing={4}  columns={2}>
  <Card size='lg' bgColor='brand.lightgreen' width='220px' height='220px'>
    <CardHeader>
      <Text textStyle='cardHeader'>Allotment</Text>
    </CardHeader>
    <CardBody>
      <Text>7 crops</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.paleorange' width='220px' height='220px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Seeds</Text>
    </CardHeader>
    <CardBody>
      <Text>5 varietys to plant</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.orange' width='220px' height='220px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Harvests</Text>
    </CardHeader>
    <CardBody>
      <Text>3 succesful harvests</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightbrown' width='220px' height='220px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Weather</Text>
    </CardHeader>
    <CardBody>
      <Text>26 degrees</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightbrown' width='220px' height='220px'>
    <CardHeader>
    <Text textStyle='cardHeader'>Nearing Harvest</Text>
    </CardHeader>
    <CardBody>
      <Text>Tomatoes</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightgreen' width='220px' height='220px'>
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
