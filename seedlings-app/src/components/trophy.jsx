import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'
import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useDrag } from '@use-gesture/react';


export default function Trophy({ ...props }) {
  
  const trophyRef = useRef();

  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  useFrame(({ clock}) => {
  const elapsedTime = clock.getElapsedTime();  
  trophyRef.current.rotation.y = elapsedTime / 1;
});

  const { nodes, materials } = useSpline('https://prod.spline.design/zPIKPkllrcYA3D8s/scene.splinecode')
  return (
    <>
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[200, 300, 300]}
        />
        <group name="trophy" ref={trophyRef} position={position} scale={1.5} {...bind()}>
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials['Mat 2']}
            castShadow
            receiveShadow
            position={[-0.19, -68.82, 0.2]}
            rotation={[Math.PI, 0, 0]}
          />
          <mesh
            name="Cube 3"
            geometry={nodes['Cube 3'].geometry}
            material={materials['Mat 2']}
            castShadow
            receiveShadow
            position={[-59.18, 25.54, -1.28]}
            rotation={[0, 0, Math.PI / 6]}
            scale={[-1, 1, 1]}
          />
          <mesh
            name="Cube 2"
            geometry={nodes['Cube 2'].geometry}
            material={materials['Mat 2']}
            castShadow
            receiveShadow
            position={[59.18, 26.26, -1.28]}
            rotation={[0, 0, -Math.PI / 6]}
            scale={1}
          />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials['Mat 2']}
            castShadow
            receiveShadow
            position={[-0.21, 34.23, 0]}
          />
        </group>
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.49}
          far={100000}
          near={-100000}
          position={[-17.07, -102.76, 997.41]}
          rotation={[0.07, 0.05, 0]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
          {/* <OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
				/> */}
        </group>
      </>
    )
  }
  

