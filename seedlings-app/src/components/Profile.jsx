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
  Stack
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
import { postWaterDatePlanted } from '../utils/api';

function Profile() {
  const { userName, setData, data } = useUserContext();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watered, setWatered] = useState(false);

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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container centerContent paddingTop="50px">
      <Heading textStyle="h1" size="2xl" pb={7}>
        {' '}
        Welcome, {data.name}!{' '}
      </Heading>

      <Weather />

      <Stack gap={3} mb='20px'>
        <Text textStyle="h2" textAlign='left'>To water today:</Text>

        {toBeWatered.map(veg => {
          return (
            <>
              <Card
                        bgColor="brand.lightbrown"
                        width='93vw'
                >
                <CardBody
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                >
                  <Text key={veg.datePlanted} textStyle="h5">
                    {veg.name}
                  </Text>
                  <Button
                    onClick={() => {
                      handleWatering(veg.datePlanted);
                    }}
                  >
                    {' '}
                    Water!
                  </Button>
                </CardBody>
              </Card>
            </>
          );
        })}
      </Stack>

      <Flex
        borderRadius="25pt"
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
            width="45vw"
            height="45vw"
            maxH="200px"

          >
    
            <CardBody padding="0px"             flexDirection='column'
            alignContent='center'
            justifyContent='center'>
              <Text textStyle="h4" position='relative'>{data.allotment.length}</Text>
              <Text textStyle="h5">crops planted</Text>
            </CardBody>
          </Card>
          <Card
            size="lg"
            bgColor="brand.paleorange"
            width="45vw"
            height="45vw"
            maxH="200px"
          >
            <CardBody padding="0px">
              <Text textStyle="h4">{data.seeds.length}</Text>
              <Text textStyle="h5">seeds to plant</Text>
            </CardBody>
          </Card>
          <Card
            size="lg"
            bgColor="brand.orange"
            width="45vw"
            height="45vw"
            maxH="200px"
          >

            <CardBody padding="0px">
              <Text textStyle="h4">{data.seeds.length}</Text>
              <Text textStyle="h5" pl='5px' pr='5px'>successful harvests</Text>
            </CardBody>
          </Card>

          <Card
            size="lg"
            bgColor="brand.lightbrown"
            width="45vw"
            height="45vw"
            maxH="200px"
          >
            <CardHeader padding="0px">
              <Text textStyle="cardHeader">Next to Harvest:</Text>
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
                <CircularProgress
                  value={nextToHarvest.PercentageComplete}
                  color="brand.orange"
                >
                  <CircularProgressLabel>
                    {nextToHarvest.PercentageComplete}%
                  </CircularProgressLabel>
                </CircularProgress>
                <Text textStyle="h5">{nextToHarvest.name}</Text>
                <Text textStyle="h5">{newHarvestDate}</Text>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>


    </Container>
  );
}

export default Profile;
