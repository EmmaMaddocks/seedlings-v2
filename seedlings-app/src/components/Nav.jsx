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
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} >
        <FaBars/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
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
            <p><Link as={NavLink} to="/soiltesting" onClick={onClose} >
              Soil Testing
            </Link></p>
            </Stack>
          </DrawerBody>


          <DrawerFooter>
            <Button  as={NavLink} to="/login" variant="outline" mr={3} onClick={onClose}>
              Log In
            </Button>
            <Button colorScheme="blue">Sign up</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Nav;
