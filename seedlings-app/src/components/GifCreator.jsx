import { Container, Text, Button, Box, Image, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { createGIF } from 'gifshot';
 
function GifCreator() {
    const [progress, setProgress] = useState(0);
    
    const [gif, setGif ] = useState()
    const [button, showButton ] = useState()

  const handleClick = () => {

 
 
    const images = [
    //   'https://foodtank.com/wp-content/uploads/2017/07/Seed-saving-initiatives.jpg',
    //   'https://images.ctfassets.net/3s5io6mnxfqz/63lqT68x0lXIt2nFUoCdyG/aa28f55e238c3e86ad0a8b3b9a99aae5/AdobeStock_298494604.jpeg',
    //   'https://media.istockphoto.com/id/1164177646/video/seed-germination-and-time-lapse-with-lens-flare-macro.jpg?s=640x640&k=20&c=1-ihJDIZEwxBZm6zpd5Qfv_UXjdj5O8tYYtM60eEGeM=',
    //   'https://cdn.shopify.com/s/files/1/1766/2959/articles/Successful_Seed_Germination_1100x.jpg?v=1521176881',
    //  'https://growingfamily.co.uk/wp-content/uploads/2016/05/Baby-Bio-Outdoor-Fruit-Veg-1-sweetcorn.jpg',
    //   'https://images.immdiate.co.uk/production/volatile/sites/10/2018/02/54eb2762-2131-4dc3-9d01-54019647b2fa-5f159be.jpg',
    //     'https://cdn.shopify.com/s/files/1//4892/4151/files/cabbage-transplant-lo.jpg',

    //     // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsMYo5v8UFR3Rx1NeIteREPpwDCQLP6qmIA&usqp=CAU',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSygEEZhNPvLGUj0KPoqD5wlPxUDKy69X84g&usqp=CAU',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-daz9yk9ZlLj6xEaVV07fNafkm4ff59Am-rPaYn8Marrvbh0djXq9-DLVsMhOR8vJtfQ&usqp=CAU',


    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst9enOUzXzJVPSK8RSi1cF3R8BlZmnOEWngWgNkFrNZIO4eOdllRCmVym3eGqyGjUozc&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ylh6HGyD0xXWjUR7zItqIdlDeaa6HTdB-gEvoe61i1NYMSkWas4BuryfE8ttpQBOkJc&usqp=CAU',
    'https://cdn.shopify.com/s/files/1/0603/4892/4151/files/cabbage-transplant-lo.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsMYo5v8UFR3Rx1NeIteREPpwDCQLP6qmIA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSygEEZhNPvLGUj0KPoqD5wlPxUDKy69X84g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-daz9yk9ZlLj6xEaVV07fNafkm4ff59Am-rPaYn8Marrvbh0djXq9-DLVsMhOR8vJtfQ&usqp=CAU',


  ];
   
      const options = {
        images: images,
        gifWidth: 500,
        gifHeight: 300,
        numWorkers: 5,
        frameDuration: 1,
        sampleInterval: 30,
        progressCallback: e => setProgress(parseInt(e * 100))
      };
   
      createGIF(options, obj => {
        if (!obj.error) {
          const link = document.createElement('a');
          // link.download = 'sample.gif';
          link.href = obj.image;
          setGif(link.href)
          link.click();
          setProgress(0);
        }
      });

  }


    return (
<Container centerContent>
{ gif ? null : <Text textStyle='p' fontSize='lg' paddingLeft='20px' paddingRight='20px' paddingBottom='30px'>
            Well done on looking after your crops!
            Click the button below to watch your crop grow over time!
          </Text> }
        { gif ? null : <Button size='sm' onClick={handleClick}  bgColor='brand.lightgreen' >Watch my crop grow</Button> }
        {progress !== 0 && <Text>Creating GIF... {progress}%
        </Text>}
        <Box>
        { gif ? <Image src={gif} /> : null }
        </Box>
        </Container>
    );
  }
 
export default GifCreator;