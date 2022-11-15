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
  Text,
  Stack,
  DrawerFooter,
  Icon
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button position='absolute' right='0' ref={btnRef} color='brand.darkgreen' bgColor='transparent' onClick={onOpen} margin={5} >
        <Icon as={FaBars} w={10} h={10}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack gap={3}>
            <p><Link as={NavLink} to="/profile" onClick={onClose}>
              My Profile
            </Link></p>
            <p><Link as={NavLink} to="/allotment" onClick={onClose}>
              My Allotment
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
            <Button  as={NavLink} to="/login"  mr={3} onClick={onClose} bgColor='brand.paleorange'>
              Log In
            </Button>
            <Button as={NavLink} to="/signup" onClick={onClose} bgColor='brand.paleorange'>Sign up</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Nav;
