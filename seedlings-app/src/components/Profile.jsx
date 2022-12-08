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
  Button,
  GridItem,
  IconButton,
  Box,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import * as api from '../utils/api';
import { useState, useEffect } from 'react';
import { useUserContext, UserContext } from '../context/UserContext';
import Weather from './Weather';
import { postWaterDatePlanted } from '../utils/api';
import { ReactComponent as VegBox } from '../images/vegbox.svg';
import { FaTint } from 'react-icons/fa';
import WaterButton from './WaterButton'


function Profile() {
  const { userName, setData, data } = useUserContext();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watered, setWatered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    api
      .getProfileData(userName)
      .then(response => {
        setIsLoading(false);
        setData(response[0]);
        setWatered(false);
        console.log(response[0]);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [watered]);

  if(data.allotment.length === 0){
return (
  <Container centerContent pl="0px" pr="0px" pb='20px'>
    <VegBox w="50px" h="50px" />
    <Heading textStyle="h1" size="2xl" pb={7}>
      {' '}
      Welcome, {data.name}!{' '}
    </Heading>

    <Stack gap={2} mb="15px">
    <Card bgColor="brand.paleorange" width="90vw" borderRadius={10}>
      <CardBody
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Weather />
      </CardBody>
    </Card>
    </Stack>
    <Flex
      width="100vw"
      // height="65vh"
      maxH="800px"
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid spacing={3} columns={2}>
        <Card
          size="lg"
          bgColor="brand.lightgreen"
          width="44vw"
          height="44vw"
          maxH="200px"
        >
          <CardBody
            padding="0px"
            flexDirection="column"
            alignContent="center"
            justifyContent="center"
          >
            <Text textStyle="h4" position="relative">
              0
            </Text>
            <Text textStyle="h5">crops planted</Text>
          </CardBody>
        </Card>
        <Card
          size="lg"
          bgColor="brand.orange"
          width="44vw"
          height="44vw"
          maxH="200px"
        >
          <CardBody padding="0px">
            <Text textStyle="h4">0</Text>
            <Text textStyle="h5">seeds to plant</Text>
          </CardBody>
        </Card>
        <Card
          size="lg"
          bgColor="brand.orange"
          width="44vw"
          height="44vw"
          maxH="200px"
        >
          <CardBody padding="0px">
            <Text textStyle="h4">0</Text>
            <Text textStyle="h5" pl="5px" pr="5px">
              successful harvests
            </Text>
          </CardBody>
        </Card>

        <Card
          size="lg"
          bgColor="brand.lightbrown"
          width="44vw"
          height="44vw"
          maxH="200px"
        >
          <CardHeader padding="0px">
            <Text textStyle="cardHeader">Nothing to harvest</Text>
          </CardHeader>
          <CardBody
            padding={0}
            display="flex"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  </Container>
);
  }
  let toBeWatered = [];

  data.allotment.forEach(veg => {
    veg.HarvestDay = new Date(veg.datePlanted + veg.minHarvest * 86400000);

    veg.PercentageComplete = Math.round(
      100 -
        (veg.datePlanted + veg.minHarvest * 86400000 - Date.now()) /
          (veg.minHarvest * 864000)
    );
    if (
      Date.now() - veg.lastWatered >
      veg.numberOfDaysBetweenWatering * 86400000
    ) {
      toBeWatered.push({ name: veg.name, datePlanted: veg.datePlanted });
    }
  });


  data.allotment.sort(function (a, b) {
    let keyA = new Date(a.HarvestDay),
      keyB = new Date(b.HarvestDay);

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  const nextToHarvest = data.allotment[0];

  const harvest1 = nextToHarvest.HarvestDay;
  const newHarvestDate = harvest1.toLocaleDateString('en-GB');

  function handleWatering(id) {
    try {
      postWaterDatePlanted(userName, id);
      setWatered(true);
      setIsVisible(true)
    } catch (error) {
      console.log(error);
    }
    setIsVisible(false)
  
  }

  return (
    <Container centerContent pl="0px" pr="0px" pb='20px'>
      <VegBox w="50px" h="50px" />
      <Heading textStyle="h1" size="2xl" pb={7}>
        {' '}
        Welcome, {data.name}!{' '}
      </Heading>

      <Stack gap={2} mb="15px">
       { toBeWatered.length > 0 && <Text textStyle="h2" textAlign="left">
          To water today:
        </Text> }
        {toBeWatered.map(veg => {
          return (
            <>
              <Card bgColor="brand.lightbrown" width="90vw" height='50px'>
                <CardBody
                  display="flex"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  height='50px'
                >
                  <Text key={veg.datePlanted} textStyle="h5">
                    {veg.name}
                  </Text>
{/*          
                    <IconButton color='lightblue' bgcolor='none' icon={FaTint} w={8} h={8}
                    onClick={() => {
                      handleWatering(veg.datePlanted);
                    }}
                  /> */}

      <>  <Button variant='solid' bgColor='white' onClick={() => {setIsVisible(true); handleWatering(veg.datePlanted)}}>
          Water 
      </Button>
     {isVisible &&<WaterButton/>}</>
              
  

                </CardBody>
              </Card>
            </>
          );
        })}
  

      </Stack>

        <SimpleGrid spacing={3} columns={2}>
        <GridItem bgColor="brand.lightbrown"
 p={5} boxShadow="md" rounded="md" borderWidth={1} colSpan={2}>
          <Weather />
</GridItem>
          <Box             bgColor="brand.lightgreen"
 p={5} boxShadow="md" rounded="md" borderWidth={1}>
              <Text textStyle="h4" position="relative">
                {data.allotment.length}
              </Text>
              <Text textStyle="h5">crops planted</Text>
              </Box>
              <Box bgColor="brand.orange"
 p={5} boxShadow="md" rounded="md" borderWidth={1}>

              <Text textStyle="h4">{data.seeds.length}</Text>
              <Text textStyle="h5">seeds to plant</Text>
          </Box>

          <Box             bgColor="brand.orange"
 p={5} boxShadow="md" rounded="md" borderWidth={1}>

              <Text textStyle="h4">{data.number_harvested}</Text>
              <Text textStyle="h5" pl="5px" pr="5px">
                successful harvests
              </Text>
   </Box>
   <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' bgColor="brand.lightbrown"
 p={5} boxShadow="md" rounded="md" borderWidth={1}>
              <Text textStyle="cardHeader">Next to Harvest:</Text>

                <CircularProgress
                  value={nextToHarvest.PercentageComplete}
                  color="brand.orange"
                >
                  <CircularProgressLabel>
                    {nextToHarvest.PercentageComplete}%
                  </CircularProgressLabel>
                </CircularProgress>
                <Text textStyle="h5">{nextToHarvest.name}</Text>
                </Box>

        </SimpleGrid>
    </Container>
  );
}

export default Profile;
