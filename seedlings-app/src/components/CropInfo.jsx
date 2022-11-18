import {
  Box,
  Heading,
  Flex,
  Container,
  Stack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';

const CropInfo = ({user}) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [crop, setCrop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true);
    api
      .getProfileData(user.user.username)
      .then(data => {
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  let datePlantedTimeStamp = user.user.allotment[0].datePlanted;





  const newDatePlanted = new Date(datePlantedTimeStamp);
  const newDatePlantedDate = newDatePlanted.toLocaleDateString('en-GB')


  let dateWateredTimeStamp = user.user.allotment[0].lastWatered
  const newDateWatered = new Date(dateWateredTimeStamp);
  const newDateWateredDate = newDateWatered.toLocaleDateString('en-GB')





const todaysDate = new Date()
const todaysDate2 = todaysDate - datePlantedTimeStamp
const daysOld = todaysDate2 / 86400000
const daysOldRounded = daysOld.toFixed()

const weeksOld = daysOld / 7

const daysTillHarvest = user.user.allotment[0].minHarvest - daysOld 
const daysTillHarvestRounded = daysTillHarvest.toFixed()

const handleNotReady = (event) => {


};

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
          <Heading textStyle="h1" size="3xl">
          {user.user.allotment[0].name}
          </Heading>
        </Box>

        <Stack gap={3}>
        { daysOld < 7 ? 
          <Text>Your {user.user.allotment[0].name} is {daysOldRounded} days old! </Text> :
          <Text>Your {user.user.allotment[0].name} is {weeksOld} weeks old! </Text> }


          <Text>There are {daysTillHarvestRounded} days until it's ready to harvest</Text>

          <Text>Last Watered {newDateWateredDate} </Text>
    

          <Button>Upload Picture</Button>


          { daysTillHarvestRounded <= 0 ? <Button bgColor='brand.paleorange' onClick={() => navigate('/harvestsuccess')}>Harvest</Button>  : <Button bgColor='brand.paleorange' onClick={onOpen}>Harvest</Button>  }

          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Oops!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your {user.user.allotment[0].name} isn't quite ready to harvest yet! </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='orange' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


        </Stack>
      </Flex>
    </>
  );
};

export default CropInfo;
