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
  import { useUserContext } from '../context/UserContext';
  import { useContext } from 'react';



const CropCard = ({ crop }) => {

const {
    description,
    name,
    picture
} = crop;

const {user, setUser } = useUserContext()


const handleClick = (event) => {
  event.preventDefault();
  try {
  api.postSeed(user.user.username, name)
} catch(error) {
  console.log(error)
}
};



    return (

    <Card w='300px' h='m' bgColor='brand.paleorange' pos='relative'>
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
        <Button variant='solid' bgColor='white' onClick={handleClick} >
          Add to my seeds
        </Button>
  
      </ButtonGroup>
    </CardFooter>
  </Card>

)  
}

export default CropCard