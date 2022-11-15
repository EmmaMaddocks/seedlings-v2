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
    Card,
    Image,
    CardBody,
    Divider,
    CardFooter,
    ButtonGroup
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  
  const Suggestions = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
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
  
  

          {/* need to list out card for each suggested plant */}

          <Card maxW='sm' bgColor='brand.paleorange'>
  <CardBody  >
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='vegetable'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Tomatoes</Heading>
      <Text>
 Tomatoes description
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' bgColor='white'>
        Add to my allotment
      </Button>

    </ButtonGroup>
  </CardFooter>
</Card>

        </Flex>
      </>
    );
  };
  
  export default Suggestions;
  