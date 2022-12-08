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
import { useUserContext, UserContext } from '../context/UserContext';
import { useContext } from 'react';


const AllotmentCard = ({ crop, setIndividualCrop, individualCrop, setDeleteCard, DeleteCard }) => {
  const navigate = useNavigate();

  const { description, name, picture, planted, datePlanted, lastWatered } =
    crop;

    const { userName, setCrop } = useUserContext();

  const handleClick = event => {
    event.preventDefault();
    try {
        api.deleteFromAllotment(userName, datePlanted);
      setDeleteCard(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewProduct = event => {
    setCrop(datePlanted);
    console.log(datePlanted)
    navigate('/crop');
  };

  return (
    <Card bgColor="brand.paleorange" align="center" key={datePlanted}>
      <CardBody>
        <Image src={picture} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="2">
          <Heading textStyle="h2" color='white'>{name}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
        <Button variant="solid" bgColor="white" onClick={handleViewProduct}>
            View
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
