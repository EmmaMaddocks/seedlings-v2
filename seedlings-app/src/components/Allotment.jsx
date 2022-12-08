import {
  Box,
  Heading,
  Flex,
  Container,
  Stack,
  SimpleGrid
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Loading from './Loading'
import * as api from "../utils/api";
import AllotmentCard from './AllotmentCard';
import { useUserContext, UserContext } from '../context/UserContext';
import { ReactComponent as Onions } from '../images/onions.svg';

const Allotment = ({setIndividualCrop, individualCrop}) => {
  const { userName } = useUserContext();

  const [deleteCard, setDeleteCard] = useState(false)

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [allotment, setAllotment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  

  useEffect(() => {
    setIsLoading(true);
    api
      .getProfileData(userName)
      .then(data => {
        setIsLoading(false);
        setAllotment(data[0].allotment)
        setDeleteCard(false)
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [deleteCard]);



  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={6}
      >
        <Onions/>
        <Box size="60vw">
          <Heading textStyle="h1" size="3xl" >
            Your allotment
          </Heading>
        </Box>

        <SimpleGrid minChildWidth='200px' spacing='30px' margin={5}>

      {allotment.map((crop) => {
        return <AllotmentCard crop={crop} setIndividualCrop={setIndividualCrop}  individualCrop={individualCrop} setDeleteCard={setDeleteCard} deleteCard={deleteCard} />;
      })}
    </SimpleGrid>         
      </Flex>
    </>
  );
};

export default Allotment;
