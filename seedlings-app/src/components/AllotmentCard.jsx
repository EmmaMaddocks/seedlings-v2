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
  Container,
} from '@chakra-ui/react';
import * as api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const AllotmentCard = ({ crop, setIndividualCrop, individualCrop }) => {
  const navigate = useNavigate();

  const { description, name, picture, planted, datePlanted, lastWatered } =
    crop;

    const {user, setUser} = useContext(UserContext)

  const handleClick = event => {
    event.preventDefault();
    try {
      api.deleteFromAllotment(user.user.username, datePlanted);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewProduct = event => {
    setIndividualCrop(crop.datePlanted);
    navigate('/crop');
  };

  return (
    <Card bgColor="brand.paleorange" width='300px' align="center">
      <CardBody>
        <Image src={picture} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading textStyle="h2" color='white'>{name}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
        <Button variant="solid" bgColor="white" onClick={handleViewProduct}>
            View Info
          </Button>
          <Button variant="solid" bgColor="white" onClick={handleClick}>
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default AllotmentCard;
