import {
  useDisclosure,
  Button,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Stack,
  DrawerFooter,
  Icon,
  Flex,
  Heading,
  Spacer
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import React, { useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserContext, UserContext } from '../context/UserContext';


function Nav() {

  const { userName, setUserName, data, setData } = useUserContext();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  const handleLogOut = (event) => {
        localStorage.clear()
        setUserName(null)
        setData(null)
        navigate('/login')
        onClose()
 }


  return (
    <>
    <Flex padding={10}>
        <Heading color='brand.darkgreen'>Seedlings</Heading>
    <Spacer />
      <Button ref={btnRef} color='brand.darkgreen' bgColor='transparent' onClick={onOpen}  >
        <Icon as={FaBars} w={10} h={10}/>
      </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <Heading as='h1' p='20px' color='brand.darkgreen'>Menu</Heading>

          <DrawerBody>
            <Stack gap={3}>
            <p><Link as={NavLink} to="/profile" onClick={onClose}>
              My Profile
            </Link></p>
            <p><Link as={NavLink} to="/allotment" onClick={onClose}>
              My Allotment
            </Link></p>
            <p><Link as={NavLink} to="/seeds" onClick={onClose}>
              My Seeds
            </Link></p>
            <p><Link as={NavLink} to="/growingconditions" onClick={onClose} >
              Choose Items
            </Link></p>
            <p><Link as={NavLink} to="/soiltesting" onClick={onClose} >
              Soil Testing
            </Link></p>
            </Stack>
          </DrawerBody>


          <DrawerFooter>
            { userName ? <Button mr={3} onClick={handleLogOut} bgColor='brand.paleorange'>
              Log Out
            </Button> :
                        <Button  as={NavLink} to="/login"  mr={3} onClick={onClose} bgColor='brand.paleorange'>
                        Log In
                      </Button>}
                      { userName ? null :
            <Button as={NavLink} to="/signup" onClick={onClose} bgColor='brand.paleorange'>Sign up</Button> }
          
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Nav;
