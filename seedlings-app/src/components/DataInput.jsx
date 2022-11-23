import {
    Box,
    Button,
    Heading,
    Text,
    FormLabel,
    Switch,
    Stack,
    Input,
    Flex,
    Select,
    FormControl,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState, Suspense } from 'react';
  import * as api from '../utils/api';
  import Carrot from './Carrot';
  import { Canvas } from '@react-three/fiber';
  import { ReactComponent as Hand } from '../images/handseed.svg';

  
  const DataInput = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
   

    const { crops, setCrops, sunlight, setSunlight, soiltype, setSoiltype, outdoors, setLocation  } = props

  
    const handleSunlight = (event) => {
      event.preventDefault()
      setSunlight(event.target.value)
      console.log(event.target.value)
    }
  
  
  const handleSoilType = (event) => {
      event.preventDefault()
      setSoiltype(event.target.value)
      console.log(event.target.value)
    }

    const handleLocation = (event) => {
      event.preventDefault()
      let value = event.target.value
      console.log(event.target.value)
      if (value === 'true') {
        setLocation(true)
    } else if (value === 'false') {
      setLocation(false)
    }
    }
  

    const handleClick = (event) => {
      event.preventDefault()
      api.getFilteredCrops(outdoors, soiltype, sunlight)
      .then((data)=>{
        console.log(event)
          setCrops(data);
          navigate('/suggestions')
      })
    }

    return (
      <>
        <Flex

          direction="column"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={6}
        >
<Hand/>

          <Box size="60vw">
            <Heading textStyle="h1" size="3xl" >
              What shall we grow?
            </Heading>
          </Box>
  
    
          <form >
          <Stack spacing={2} width="350px">
            <Text>Where would you like to grow?</Text>
          <Select  placeholder='Select location'  variant='filled' bgColor='white' onChange={handleLocation}>
          <option value='false'>Indoors</option>
  <option value='true'>Outdoors</option>
  </Select>

  <Text>Is there area sunny or shady?</Text>
          <Select placeholder='Select sun'  variant='filled' bgColor='white' onChange={handleSunlight}>
          <option value='full'>Sunny</option>
  <option value='partial+shade'>Shady</option>
  <option value='null'>Both</option>
  </Select>

  <Text>Lastly, what type of soil do you have?</Text>
  <Select pb='10pt' placeholder='Select soil' variant='filled' bgColor='white' onChange={handleSoilType}>
          <option value='null'>I'm not sure</option>
  <option value='sand'>Sandy</option>
  <option value='clay'>Clay</option>
  <option value='loam'>Loam</option>
  <option value='chalk'>Chalk</option>
  </Select>

  <Button  color="white" bgColor="#ED965C" borderRadius={20} onClick={handleClick} >
           Lets Grow!
          </Button>

          </Stack>
          </form>

        </Flex>
      </>
    );
  };
  
  export default DataInput;
  