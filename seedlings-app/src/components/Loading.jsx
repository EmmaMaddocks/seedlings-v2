import { Box } from '@chakra-ui/react';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Wheelbarrow } from '../images/wheelbarrow.svg';



function Loading() {

    const wheelbarrow = useRef();
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(".box", { rotation: "+=360" });
      }, wheelbarrow);
      
      return () => ctx.revert();
    });

    return (
    <Box ref={wheelbarrow}><Wheelbarrow/></Box>
    )
}

export default Loading