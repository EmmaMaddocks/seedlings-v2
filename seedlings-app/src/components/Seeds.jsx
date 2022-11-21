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
import { UserContext } from '../context/UserContext';
  
  const Seeds = () => {
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [crops, setCrops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [seeds, setSeeds] = useState([]);
  

  
    useEffect(() => {
      setIsLoading(true);
      api
        .getProfileData(user.user.username)
        .then(data => {
          setIsLoading(false);
          setSeeds(data[0].seeds)
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }, []);



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

        {user.user.seeds.map((seed) => {
          return <SeedCard key={seed.seed_id} seed={seed} user={user} />;
        })}
      </Stack>         
        </Flex>
      </>
    );
  };
  
  export default Seeds;
  