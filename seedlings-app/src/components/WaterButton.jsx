import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";


export default function WaterButton() {
<>

  <ReactCanvasConfetti
    angle={61}
    className="canvas"
    colors={[
      '#26ccff'
    ]}
    decay={0.2}
    drift={1.6}
    gravity={2.5}
    origin={{
      x: 0.5,
      y: 0.5
    }}
    particleCount={52}
    resize
    scalar={0.7}
    shapes={[
      'circle'
    ]}
    spread={26}
    startVelocity={326}
    ticks={191}
    useWorker
    zIndex={-1}
  />
</>

}