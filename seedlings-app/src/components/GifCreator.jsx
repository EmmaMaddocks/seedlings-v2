import { Container, Text, Button, Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { createGIF } from 'gifshot';
 
function GifCreator() {
    const [progress, setProgress] = useState(0);
    
    let src

  const handleClick = () => {
 
    const images = [
        'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
        'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
        'https://cdn.pixabay.com/photo/2021/08/13/21/14/kiteboarding-6543982__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947__340.jpg',
        'https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045__340.jpg',
        'https://cdn.pixabay.com/photo/2022/05/08/20/21/flowers-7182930__340.jpg',
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
        <Button onClick={handleClick}>Click to create a GIF</Button>
        {progress !== 0 && <Text>Creating GIF... {progress}%</Text>}
        <Box>
<Image src={src}/>
        </Box>
      </Container>
    );
  }
 
export default GifCreator;