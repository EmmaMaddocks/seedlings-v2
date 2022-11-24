import { Container, Text, Button, Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { createGIF } from 'gifshot';
 
function GifCreator() {
    const [progress, setProgress] = useState(0);
    
    let src

  const handleClick = () => {
 
    const images = [
        'https://thelandroverownerswife.files.wordpress.com/2013/05/cabbage-greyhound-second-sowing-20130427.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst9enOUzXzJVPSK8RSi1cF3R8BlZmnOEWngWgNkFrNZIO4eOdllRCmVym3eGqyGjUozc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ylh6HGyD0xXWjUR7zItqIdlDeaa6HTdB-gEvoe61i1NYMSkWas4BuryfE8ttpQBOkJc&usqp=CAU',
        'https://cdn.shopify.com/s/files/1/0603/4892/4151/files/cabbage-transplant-lo.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsMYo5v8UFR3Rx1NeIteREPpwDCQLP6qmIA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSygEEZhNPvLGUj0KPoqD5wlPxUDKy69X84g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-daz9yk9ZlLj6xEaVV07fNafkm4ff59Am-rPaYn8Marrvbh0djXq9-DLVsMhOR8vJtfQ&usqp=CAU',
        'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
        'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
        'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
        'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
        'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg'
      ];
   
      const options = {
        images: images,
        gifWidth: 500,
        gifHeight: 300,
        numWorkers: 5,
        frameDuration: 0.01,
        sampleInterval: 10,
        progressCallback: e => setProgress(parseInt(e * 100))
      };
   
      createGIF(options, obj => {
        if (!obj.error) {
          const link = document.createElement('a');
          link.download = 'sample.gif';
          link.href = obj.image;
          link.click();
          setProgress(0);
        }
      });
    }
   

    return (
      <Container>
        <Button onClick={handleClick}  bgColor='brand.lightgreen' >Click to create a GIF</Button>
        {progress !== 0 && <Text>Creating GIF... {progress}%</Text>}
        <Box>
<Image src={src}/>
        </Box>
      </Container>
    );
  }
 
export default GifCreator;