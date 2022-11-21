import {
  Box,
  Heading,
  Flex,
  Container,
  Stack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Loading from './Loading'
import * as api from "../utils/api";
import AllotmentCard from './AllotmentCard';
import { useUserContext } from '../context/UserContext';

const Allotment = ({setIndividualCrop, individualCrop}) => {
 const {user, setUser } = useUserContext()

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [allotment, setAllotment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  

  useEffect(() => {
    setIsLoading(true);
    api
      .getProfileData(user.user.username)
      .then(data => {
        setIsLoading(false);
        setAllotment(data[0].allotment)
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);



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
            Your allotment
          </Heading>
        </Box>

        <Stack gap={3}>

      {allotment.map((crop) => {
        return <AllotmentCard crop={crop} user={user} setIndividualCrop={setIndividualCrop}  individualCrop={individualCrop} />;
      })}
    </Stack>         
      </Flex>
    </>
  );
};

export default Allotment;
