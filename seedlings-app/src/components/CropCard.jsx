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




const CropCard = ({ crop }) => {

const {
    description,
    name,
    picture
} = crop;

    return (
    <Card maxW='sm' maxH='m' bgColor='brand.paleorange'>
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
        <Button variant='solid' bgColor='white'>
          Add to my seeds
        </Button>
  
      </ButtonGroup>
    </CardFooter>
  </Card>
)  
}

export default CropCard