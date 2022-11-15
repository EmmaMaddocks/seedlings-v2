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
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  
  const DataInput = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
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

            <Text>Where would you like to grow?</Text>
          <Select  variant='filled' bgColor='white'>
          <option value='Indoor'>Indoors</option>
  <option value='Outdoor'>Outdoors</option>
  </Select>

  <Text>Is there area sunny or shady?</Text>
          <Select  variant='filled' bgColor='white'>
          <option value='Sunny'>Sunny</option>
  <option value='Shady'>Shady</option>
  <option value='Both'>Both</option>
  </Select>

  <Text>What type of soil do you have?</Text>
  <Select  variant='filled' bgColor='white'>
          <option value='Sunny'>I'm not sure</option>
  <option value='Sandy'>Sandy</option>
  <option value='Clay'>Clay</option>
  <option value='Loam'>Loam</option>
  <option value='Silt'>Silt</option>
  <option value='Loam'>Loam</option>
  <option value='Compost'>Potting Compost</option>
  </Select>

  <Text>Lastly, would you prefer to grow fruit or vegetables?</Text>
          <Select  variant='filled' bgColor='white' >
          <option value='Fruit'>Fruit</option>
  <option value='Vegetables'>Vegetables</option>
  <option value='Both'>Both</option>
  </Select>
  <Button color="white" bgColor="#ED965C" borderRadius={20} onClick={() => navigate("/suggestions")} >
           Lets Grow!
          </Button>

          </Stack>
        </Flex>
      </>
    );
  };
  
  export default DataInput;
  