import {
    Box,
    Heading,
    Flex,
    Container,
    Stack
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState, useEffect, useContext } from 'react';
 import Loading from './Loading'
 import * as api from "../utils/api";
import SeedCard from './SeedCard';
import { useUserContext } from '../context/UserContext';
import ScrollToTop from './ScrollToTop'
  
  const Seeds = () => {
    const {user, setUser } = useUserContext()

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [crops, setCrops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [seeds, setSeeds] = useState([]);
    const [deleteSeed, setDeleteSeed] = useState(false)
  

  
    useEffect(() => {
      setIsLoading(true);
      api
        .getProfileData(user.user.username)
        .then(data => {
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
          <Box size="60vw">
            <Heading textStyle="h1" size="3xl" >
              Your saved seeds
            </Heading>
          </Box>

          <Stack gap={3}>

        {seeds.map((seed) => {
          return <SeedCard key={seed.seed_id} seed={seed} user={user} setDeleteSeed ={setDeleteSeed} deleteSeed ={deleteSeed}/>;
        })}
      </Stack> 
      <ScrollToTop/>        
        </Flex>
      </>
    );
  };
  
  export default Seeds;
  