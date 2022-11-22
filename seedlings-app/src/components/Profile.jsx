import {
  SimpleGrid,
  Flex,
  Text,
  Heading,
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  CardHeader,
  Container,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Trophy from './trophy';
import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import * as api from '../utils/api';
import { useState, useEffect } from 'react';
import { useUserContext, UserContext } from '../context/UserContext';
import Weather from './Weather';
import getIpAddress from '../utils/IpAddress';
import axios from 'axios';

function Profile() {

  const { userName } = useUserContext();

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

useEffect(() => {
  setIsLoading(true);
  api
    .getProfileData(userName)
    .then(data => {
      setIsLoading(false);
      setUser(data)
      console.log(data)
  
    })
    .catch(error => {
      setError(error);
      setIsLoading(false);
    });
}, []);


// console.log(user[0].name)

return (
  <Container
  centerContent
    paddingTop='50px'
  >

<Heading textStyle='h1' size='2xl'> Welcome, {user[0].name}! </Heading> 


<Text textStyle='h2' size='2xl'> Here's the latest: </Text> 

{/* <Flex borderRadius='25pt' width='100vw' height='65vh' maxH='800px' alignItems='center' justifyContent='center'> 
      <SimpleGrid spacing={4}  columns={2}>
  <Card size='lg' bgColor='brand.lightgreen' width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
      <Text textStyle='cardHeader'>Allotment</Text>
    </CardHeader>
    <CardBody padding='0px'>
      <Text textStyle='h4'>{user.user.allotment.length}</Text>
      <Text textStyle='h5'>crops planted</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.paleorange'width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'> */}
    {/* <Text textStyle='cardHeader'>Seeds</Text>
    </CardHeader>
    <CardBody padding='0px'>
      <Text textStyle='h4'>{user.user.seeds.length}</Text>
      <Text textStyle='h5'>varieties to plant</Text>
    </CardBody> */}
  {/* </Card>
  <Card size='lg' bgColor='brand.orange' width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
    <Text textStyle='cardHeader'>Harvests</Text>
    </CardHeader>
    <CardBody padding='0px'>
    <Text textStyle='h4'>{user.user.seeds.length}</Text>
      <Text textStyle='h5'>successful harvests</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightbrown' width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
    <Text textStyle='cardHeader'/>
    <Weather/>
    </CardHeader>
    <CardBody padding='0px'>
    </CardBody>
  </Card> */}



  {/* <Card size='lg' bgColor='brand.lightbrown' width='40vw' height='40vw' maxH='200px'>
    {/* <CardHeader>
    <Text textStyle='cardHeader'>Coming up</Text>
    </CardHeader> */}
    {/* <CardBody paddingTop={0} display='flex'  direction='column' alignItems='center' justifyContent='center'>
    {/* <Flex direction='column' alignItems='center' justifyContent='center'> */}
      {/* <Text  textStyle='h5'>Tomatoes</Text>
      <CircularProgress value={40} color='brand.orange'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress> */}
{/* </Flex> */}
    {/* </CardBody> */}
  {/* </Card>  */} 


  {/* <Card size='lg' bgColor='brand.lightgreen' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>To do today:</Text>
    </CardHeader>
    <CardBody padding='0px'>
      <Text  textStyle='h5'>Water Carrots</Text>
    </CardBody>
  </Card>
</SimpleGrid> */}
{/* </Flex>  */}







    </Container>
  );
}

export default Profile;