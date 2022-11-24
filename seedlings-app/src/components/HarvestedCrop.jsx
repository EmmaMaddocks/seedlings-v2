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
import GifCreator from './GifCreator';
import { ReactComponent as Wheelbarrow } from '../images/wheelbarrow.svg';

const Seeds = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


  return (
    <>
      <Flex
        minHeight="100vh"
        marginTop='-50px'
        pb='50px'
        direction="column"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={5}
      >
        <Wheelbarrow w="250px" h="250px"/>
        <Stack gap={7} >
          <Heading textStyle="h1" size="2xl">
            Congratulations!
          </Heading>

          <GifCreator />
        </Stack>
   
          <Button
            size="sm"
            bgColor="brand.paleorange"
            onClick={() => navigate('/allotment')}
          >
            Return to Allotment
          </Button>
      </Flex>
    </>
  );
};

export default Seeds;
