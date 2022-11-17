import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
    Card,
    Image,
    CardBody,
    CardFooter,
    ButtonGroup,
    Container
  } from '@chakra-ui/react';
  import * as api from '../utils/api'




const SeedCard = ({ seed, user }) => {

const {
    description,
    name,
    picture
} = seed;

const handleClick = (event) => {
  event.preventDefault();
  console.log(user.user.username)
  try {
  api.postAllotment(user.user.username, name)
} catch(error) {
  console.log(error)
  console.log(user.user.username)
}
};



    return (
    <Card maxW='sm' bgColor='brand.paleorange'>
    <CardBody  >
      <Image
        src={picture}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
  {description}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' bgColor='white' onClick={handleClick}>
          Plant Seeds
        </Button>
  
      </ButtonGroup>
    </CardFooter>
  </Card>
)  
}

export default SeedCard