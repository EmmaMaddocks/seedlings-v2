import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";


import { useCallback, useEffect, useRef } from 'react';


export default function WaterButton() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);



  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        angle: 61,
        colors: [
          '#26ccff'
        ],
        decay: 0.2,
        drift: 1.6,
        gravity: 2.5,
        particleCount: 52,
        scalar: 0.7,
        shapes: [
          'circle'
        ],
        ticks: 191,

      });
  }, []);

  useEffect(() => water(), []);

  const water = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 326
    });
  }, [makeShot]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 99
      }}
    />
  );
}





