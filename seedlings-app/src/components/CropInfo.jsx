import {
  Box,
  Heading,
  Flex,
  Container,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';

const Seeds = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // const [crops, setCrops] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   setIsLoading(true);
  //   api
  //     .getPlantedCrop()
  //     .then((data) => {
  //       setCrops(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <Loading />;

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
          <Heading textStyle="h1" size="3xl">
            Carrot
          </Heading>
        </Box>

        <Stack gap={3}>
          <Text>12 Weeks Old</Text>
          <Text>67 Days until Harvest</Text>

          <Button>Upload Picture</Button>
          <Button onClick={() => navigate('/harvestsuccess')}>Harvest</Button>
        </Stack>
      </Flex>
    </>
  );
};

export default Seeds;
