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




const SeedCard = ({ seed, user, setDeleteSeed, deleteSeed}) => {

const {
    description,
    name,
    picture,
    dayAdded
} = seed;


const handlePlant = (event) => {
  event.preventDefault();
  try {
  api.postAllotment(user.user.username, name)

} catch(error) {
  console.log(error)

}
};

const handleDelete = (event) => {
  event.preventDefault();
  try {
    setDeleteSeed(true)
  api.deleteFromSeeds(user.user.username, dayAdded)
} catch(error) {
  console.log(error)
}
};




    return (
    <Card  width='300px' bgColor='brand.paleorange'>
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
        <Button variant='solid' bgColor='white' onClick={handlePlant}>
          Plant Seeds
        </Button>
        <Button variant='solid' bgColor='white' onClick={handleDelete}>
          Delete Seeds 
        </Button>
  
      </ButtonGroup>
    </CardFooter>
  </Card>
)  
}

export default SeedCard