import {
    Box,
    Heading,
    Flex,
    Container,
    Stack,
    Card,
    Image,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
    Text
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState, useEffect } from 'react';
 import Loading from './Loading'
 import * as api from "../utils/api";
import CropCard from './CropCard';
import TinderCard from "react-tinder-card"
  
  const Suggestions = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    const [isLoading, setIsLoading] = useState(true);


    const [error, setError] = useState(null)
  
    const { user, crops, setCrops, sunlight, setSunlight, soiltype, setSoiltype, outdoors, setLocation  } = props

    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
    };
    const outOfframe = (name) => {
      console.log(name + " left the screen!");
    };
  


    return (<>
    
      <Heading textStyle='h1' paddingBottom='40px'>Choose your seeds</Heading>
      <Text textStyle='h3' paddingBottom='40px'>Swipe left to skip, swipe right to add to your collection</Text>
      <Flex maxW='100vw' justifyContent='center'>
  
          {crops.map((crop) => (
            <TinderCard
            pos='absolute'
              className="swipe"
              key={crop.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, crop.name)}
              onCardLeftScreen={() => outOfframe(crop.name)}

            >
      
      <Card w='350px' h='550px' bgColor='brand.paleorange' pos='absolute' left='50%' transform='translateX(-50%)'>

    <CardBody  >
      <Image
        src={crop.picture}
        alt={crop.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='2'>
        <Heading size='md'>{crop.name}</Heading>
        <Text as='h2'>Grow Time: {crop.growTime}</Text>
        <Text>
  {crop.description}
        </Text>
      </Stack>
    </CardBody>
  </Card>
            </TinderCard>
          ))}

      </Flex>
      </>
    );
  }

    

  
  export default Suggestions;
  





