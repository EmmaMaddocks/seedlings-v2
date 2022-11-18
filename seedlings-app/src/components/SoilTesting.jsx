import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    VStack,
    Image,
    AspectRatio,
    Stack,
    CardBody,
    Card,
    Flex
  } from "@chakra-ui/react";

import {useState} from "react"
  
  function SoilTesting(){
const[soils, setSoils] = useState([{name:"Chalky Soil", url:"https://images.immediate.co.uk/production/volatile/sites/10/2018/02/8dc3bdf7-0e25-4eb3-bc31-145786909eea-0acc28c.jpg?quality=90&webp=true&fit=2048,1364", facts:"Chalky soil is alkaline, stony and free draining, as it often overlays a chalk or limestone bedrock. Minerals such as iron and manganese will quickly leach out of the soil, but this can be remedied to an extent by regularly adding fertiliser. Chalky or lime-rich soil may be light or heavy"},{name:"Clay Soil", url:"https://images.immediate.co.uk/production/volatile/sites/10/2018/02/2b41e644-a9d9-462d-9a47-93832667d275-fa38060.jpg?quality=90&webp=true&fit=2048,1364", facts:"Clay soil warms up slowly in spring and goes hard and cracks when dry. It also drains poorly. Although it's hard to dig, it's very high in nutrients. It feels lumpy, slimy and sticky when wet. It rolls into a ball easily and stays in shape."},{name:"Loamy soil", url:"https://images.immediate.co.uk/production/volatile/sites/10/2018/02/7dbf8bef-14a5-4006-b7ea-97ed2577eaf4-a0530c5.jpg?quality=90&webp=true&fit=2048,1364", facts:"Loam is the perfect soil type, as it's easy to work, is not too free draining or prone to waterlogging, and is packed with nutrients. It also warms up quickly in spring. Loam is made up of a mixture of clay, sand and silt, which each have differently sized soil particles. It rolls into a ball easily, but won't keep its shape as well as clay soil."}, {name:"Sandy Soil", url:"https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4af7f1c8-628f-4713-abf8-395f60b6c9e9-0c8de50.jpg?quality=90&webp=true&fit=2048,1364", facts:"Sandy soil is free draining, easy to work and warms up quickly in spring. However it dries out rapidly and leaches nutrients when it rains, so it needs plenty of added organic matter to retain moisture and feed the plants. It's gritty to touch. A rolled ball of sandy soil will crumble away easily."}])


return(<>
            <Heading textStyle='h1' mb={4} >
             What is soil and why is it important?
            </Heading>
            <AspectRatio maxW='560px' ratio={1}>
  <iframe
    src='https://www.youtube.com/embed/og9A_Apr534'
    allowFullScreen
  />
</AspectRatio>
            <Text textStyle='p' >
            The soil is the top part of the Earth where plants grow. This loose material is made of a combination of eroded rocks and organic matter (decaying plants and animals). The type of rocks and living organisms combined with the conditions in the area determine the type of soil you will find. The soil has different layers. If you were to dig down and cut out a cross section, you would see the layers, or horizons (humus, top soil, subsoil, and parent material).
            </Text>
            <Heading textStyle='h2'>
             What type of soil do you have?
            </Heading>
            <Text textStyle='p'>
              There are 4 main types and we can do a simple test to work it out.
            </Text>

     {soils.map((soil) => (
 <Card w='350px' h='550px' bgColor='brand.palegrey' left='50%' transform='translateX(-50%)'>

<CardBody  >
 <Image
   src={soil.url}
   alt={soil.name}
   borderRadius='lg'
 />
 <Stack mt='6' spacing='2'>
   <Heading size='md'>{soil.name}</Heading>
   <Text as='h2'>{soil.facts}</Text>
   <Text>
{soil.description}
   </Text>
 </Stack>
</CardBody>
</Card>
     ))}

 
  </>);
};

export default SoilTesting