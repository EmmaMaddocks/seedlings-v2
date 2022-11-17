import {
    Box,
    Heading,
    Flex,
    Container,
    Stack
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState, useEffect } from 'react';
 import Loading from './Loading'
 import * as api from "../utils/api";
import SeedCard from './SeedCard';
  
  const Seeds = ({user}) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [crops, setCrops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
  
    const { name, seeds, allotment, username } = user;
  
    // useEffect(() => {
    //   setIsLoading(true);
    //   api
    //     .getProfileData(user.user.username)
    //     .then(data => {
    //       setIsLoading(false);
    //     })
    //     .catch(error => {
    //       setError(error);
    //       setIsLoading(false);
    //     });
    // }, []);



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
          return <SeedCard key={seed.seed_id} seed={seed} />;
        })}
      </Stack>         
        </Flex>
      </>
    );
  };
  
  export default Seeds;
  