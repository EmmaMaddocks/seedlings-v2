import {
    ChakraProvider, Box, Button, Heading, Text, Container, Flex
  } from '@chakra-ui/react';
import waves from '../waves.svg'

export function Wave() {
    const wave = waves
    const outerBoxStyles = {
      height: '100vh',
      width: '100vw',
      background:
        `url(${wave}) top no-repeat`,
        position: 'absolute',
        zIndex: 0,
        
    }

    return (

       <Box sx={outerBoxStyles}>
        
       </Box>
    )
}

