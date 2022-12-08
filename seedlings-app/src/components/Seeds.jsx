import {
    Box,
    Heading,
    Flex,
    Container,
    Stack,
    SimpleGrid,
    Text
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState, useEffect, useContext } from 'react';
 import Loading from './Loading'
 import * as api from "../utils/api";
import SeedCard from './SeedCard';
import { useUserContext, UserContext } from '../context/UserContext';
import { ReactComponent as SeedPacket } from '../images/seedpacket.svg';  
import ConfettiButton from "./ConfettiButton"
import ScrollToTop from "./ScrollToTop"

  const Seeds = () => {
    const { userName } = useUserContext();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [crops, setCrops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [seeds, setSeeds] = useState([]);
    const [deleteSeed, setDeleteSeed] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
  

  
    useEffect(() => {
      setIsLoading(true);
      api
        .getProfileData(userName)
        .then(data => {
          console.log(data)
          setIsLoading(false);
          setSeeds(data[0].seeds)
          setDeleteSeed(false)
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }, [deleteSeed]);

    


    return (
      <>
        <Flex
          minHeight="100vh"
          direction="column"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={6}
          
        >
          <SeedPacket/>
          <Box size="60vw">
            <Heading textStyle="h1" size="3xl" >
              Your saved seeds
            </Heading>
            <Text textStyle="p" mt={4}>
              Here's all the seeds you would like to plant. Once you've sowed your seeds, click 'plant' to add them to your allotment where you can be reminded when to water them!
            </Text>
          </Box>

          <SimpleGrid minChildWidth='200px' spacing='30px' margin={5}>

        {seeds.map((seed) => {
          return <SeedCard key={seed.seed_id} seed={seed} setDeleteSeed ={setDeleteSeed} deleteSeed ={deleteSeed}/>;
        })}
      </SimpleGrid>  
      <ScrollToTop/>       
        </Flex>
      </>
    );
  };
  
  export default Seeds;
  