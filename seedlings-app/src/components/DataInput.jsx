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
  import { useState } from 'react';
  import * as api from '../utils/api';
  
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
          height="100vh"
          direction="column"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={6}
        >
          <Box size="60vw">
            <Heading textStyle="h1" size="3xl">
              What shall we grow?
            </Heading>
          </Box>
  
          <Stack spacing={3} width="350px">
          <form >
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
  <Select placeholder='Select soil' variant='filled' bgColor='white' onChange={handleSoilType}>
          <option value='null'>I'm not sure</option>
  <option value='sand'>Sandy</option>
  <option value='clay'>Clay</option>
  <option value='loam'>Loam</option>
  <option value='chalk'>Chalk</option>
  </Select>

  {/* <Text>Lastly, would you prefer to grow fruit or vegetables?</Text>
          <Select  variant='filled' bgColor='white' >
          <option value='Fruit'>Fruit</option>
  <option value='Vegetables'>Vegetables</option>
  <option value='Both'>Both</option>
  </Select> */}
  <Button color="white" bgColor="#ED965C" borderRadius={20} onClick={handleClick} >
           Lets Grow!
          </Button>

 
          </form>
          </Stack>
        </Flex>
      </>
    );
  };
  
  export default DataInput;
  