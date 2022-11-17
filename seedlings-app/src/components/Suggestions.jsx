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
import CropCard from './CropCard';
  
  const Suggestions = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
  
    const { crops, setCrops, sunlight, setSunlight, soiltype, setSoiltype, outdoors, setLocation  } = props


  
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
              Here's what we suggest..
            </Heading>
          </Box>

          <Stack gap={3}>

        {crops.map((crop) => {
          return <CropCard key={crop.crop_id} crop={crop} />;
        })}
      </Stack>

          {/* need to list out card for each suggested plant */}

         
        </Flex>
      </>
    );
  };
  
  export default Suggestions;
  