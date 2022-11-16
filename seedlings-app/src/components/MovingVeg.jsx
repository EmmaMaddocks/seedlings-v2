import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";


export function MovingVeg({ ...props }) {

    

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  const [strawberryPosition, setStrawberryPosition] = useState([-177.15, 83.81, 122.92] );
  const strawberryRef = useRef();
  const strawberryBind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = strawberryPosition;
      setStrawberryPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const [brocolliPosition, setBroccoliPosition] = useState([-94.32, 69.04, 99.78] );
  const broccoliRef = useRef();
  const broccoliBind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = brocolliPosition;
      setBroccoliPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const [cornPosition, setCornPosition] = useState([204.2, 58.54, -40.72] );
  const cornRef = useRef();
  const cornBind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = cornPosition;
      setCornPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const [carrotPosition, setCarrotPosition] = useState([128.14, 57.06, 11.29]);
  const carrotRef = useRef();
  const carrotBind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = carrotPosition;
      setCarrotPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const [tomatoPosition, setTomatoPosition] = useState([-21.42, 59.26, 95.48]);
  const tomatoRef = useRef();
  const tomatoBind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = tomatoPosition;
      setTomatoPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const [onionPosition, setOnionPosition] = useState([67.83, 54.32, -8.66]);
  const onionRef = useRef();
  const onionBind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = onionPosition;
      setOnionPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );


  const { nodes, materials } = useSpline('https://prod.spline.design/GY2uNRfAEVUqCApr/scene.splinecode')
  return (
    <>
      <group {...props} dispose={null}>
        <group name="strawberry" ref={strawberryRef} position={strawberryPosition} {...strawberryBind()}>
          <group name="rop and leaves" position={[0.69, 149.22, -0.09]}>
            <mesh
              name="leave"
              geometry={nodes.leave.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[71.42, -28.34, 52.49]}
              rotation={[0, -0.68, -Math.PI]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave1"
              geometry={nodes.leave1.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-35.85, -28.34, -72.84]}
              rotation={[-Math.PI, 1.07, 0]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave2"
              geometry={nodes.leave2.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-81.49, -28.34, -19.16]}
              rotation={[-Math.PI, 0.29, 0]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave3"
              geometry={nodes.leave3.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-31.3, -28.34, -80.7]}
              rotation={[-Math.PI, 1.2, 0]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave4"
              geometry={nodes.leave4.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[47.45, -28.34, -75.02]}
              rotation={[0, 1.04, -Math.PI]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave5"
              geometry={nodes.leave5.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-71.69, -28.34, 50.95]}
              rotation={[Math.PI, -0.52, 0]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="rop"
              geometry={nodes.rop.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-22.2, 48.13, -2.97]}
              rotation={[0, 0, -2.53]}
              scale={2.77}
            />
          </group>
          <mesh
            name="strawberry1"
            geometry={nodes.strawberry1.geometry}
            material={materials.strawberry}
            castShadow
            receiveShadow
            position={[0, -44.66, 0]}
          />
          <group name="dots" position={[-81.93, -43.32, -1.41]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              name="dot"
              geometry={nodes.dot.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-87.86, 64.86, -3.22]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="dot1"
              geometry={nodes.dot1.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-244.13, 81.72, -54.98]}
              rotation={[-Math.PI, 0, 3.12]}
              scale={1}
            />
            <mesh
              name="dot2"
              geometry={nodes.dot2.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-177.52, 139.63, -109.72]}
              rotation={[-2.26, -0.33, -2.96]}
              scale={1}
            />
            <mesh
              name="dot3"
              geometry={nodes.dot3.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-10.76, 139.85, -124.07]}
              rotation={[-2.34, 0, -Math.PI]}
            />
            <mesh
              name="dot4"
              geometry={nodes.dot4.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-104.52, 139.37, -141.59]}
              rotation={[-2.25, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="dot5"
              geometry={nodes.dot5.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-59.62, 114.49, -157.93]}
              rotation={[-2.64, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="dot6"
              geometry={nodes.dot6.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[68.42, 121.78, -2.19]}
              rotation={[-Math.PI, 0, 2.43]}
              scale={1}
            />
            <mesh
              name="dot7"
              geometry={nodes.dot7.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[75.61, 72.77, -63.92]}
              rotation={[-2.77, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="dot8"
              geometry={nodes.dot8.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[60.33, 50.32, -96.18]}
              rotation={[Math.PI, 0, -3.04]}
              scale={1}
            />
            <mesh
              name="dot9"
              geometry={nodes.dot9.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-144.92, -54.91, -114.63]}
              rotation={[2.69, 0, 2.8]}
              scale={1}
            />
            <mesh
              name="dot10"
              geometry={nodes.dot10.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-42.86, -59.78, -114.69]}
              rotation={[2.81, -0.08, -2.78]}
              scale={1}
            />
            <mesh
              name="dot11"
              geometry={nodes.dot11.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[44.89, -6.7, -91.11]}
              rotation={[2.87, 0.04, -2.83]}
              scale={1}
            />
            <mesh
              name="dot12"
              geometry={nodes.dot12.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[11.34, -40.44, -94.75]}
              rotation={[2.67, 0, -2.86]}
              scale={1}
            />
            <mesh
              name="dot13"
              geometry={nodes.dot13.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-1.44, 31.54, -148.75]}
              rotation={[-Math.PI, 0, -3.09]}
            />
            <mesh
              name="dot14"
              geometry={nodes.dot14.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-61.03, 8.66, -156.77]}
              rotation={[Math.PI, 0, -2.94]}
              scale={1}
            />
            <mesh
              name="dot15"
              geometry={nodes.dot15.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-101.41, -140.58, -58.87]}
              rotation={[2.37, 0, Math.PI]}
              scale={1}
            />
            <mesh
              name="dot16"
              geometry={nodes.dot16.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-43.8, -118.39, -65.24]}
              rotation={[2.49, 0, -2.84]}
              scale={1}
            />
            <mesh
              name="dot17"
              geometry={nodes.dot17.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-2.01, -91.64, -48.21]}
              rotation={[2.51, 0, -2.8]}
              scale={1}
            />
            <mesh
              name="dot18"
              geometry={nodes.dot18.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-101.13, -84.82, -107.17]}
              rotation={[2.59, 0, Math.PI]}
              scale={1}
            />
            <mesh
              name="dot19"
              geometry={nodes.dot19.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-95.76, -33.12, -142.26]}
              rotation={[2.76, 0, Math.PI]}
              scale={1}
            />
            <mesh
              name="dot20"
              geometry={nodes.dot20.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-212.68, -29.77, -67.15]}
              rotation={[2.74, 0.18, 2.75]}
              scale={1}
            />
            <mesh
              name="dot21"
              geometry={nodes.dot21.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-184.15, 3.12, -126.67]}
              rotation={[2.75, 0, Math.PI]}
              scale={1}
            />
            <mesh
              name="dot22"
              geometry={nodes.dot22.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-125.17, 23.2, -159.89]}
              rotation={[3.01, 0.02, 2.99]}
              scale={1}
            />
            <mesh
              name="dot23"
              geometry={nodes.dot23.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-180.42, 64.86, -146.04]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="dot24"
              geometry={nodes.dot24.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-223.87, 36.95, -102.21]}
              rotation={[2.87, 0.04, 3.01]}
              scale={1}
            />
            <mesh
              name="dot25"
              geometry={nodes.dot25.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-211.08, 97.62, -112.65]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="dot26"
              geometry={nodes.dot26.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-141.23, 97.62, -160.14]}
              rotation={[-2.85, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="dot27"
              geometry={nodes.dot27.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[27.36, 103.27, -125.15]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="dot28"
              geometry={nodes.dot28.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-61.49, 131.91, 146.65]}
              rotation={[-0.81, -0.12, -0.32]}
              scale={1}
            />
            <mesh
              name="dot29"
              geometry={nodes.dot29.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-185.47, 137.02, 96.72]}
              rotation={[-1.13, -0.65, -1.09]}
              scale={1}
            />
            <mesh
              name="dot30"
              geometry={nodes.dot30.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-138.7, 137.2, 132.39]}
              rotation={[-0.96, -0.42, -0.53]}
              scale={1}
            />
            <mesh
              name="dot31"
              geometry={nodes.dot31.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-202.87, 135.8, -68.41]}
              rotation={[-1.54, -0.77, -1.53]}
              scale={1}
            />
            <mesh
              name="dot32"
              geometry={nodes.dot32.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-219.71, 137.2, 25.87]}
              rotation={[-1.55, -0.72, -1.53]}
              scale={1}
            />
            <mesh
              name="dot33"
              geometry={nodes.dot33.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-236.46, 112.94, -18.56]}
              rotation={[-1.52, -1.07, -1.51]}
              scale={1}
            />
            <mesh
              name="dot34"
              geometry={nodes.dot34.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-79.09, -52.36, 133.32]}
              rotation={[0.55, -0.59, -0.01]}
              scale={1}
            />
            <mesh
              name="dot35"
              geometry={nodes.dot35.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-186.36, -54.34, 72.37]}
              rotation={[1.51, -1.12, 1.16]}
              scale={1}
            />
            <mesh
              name="dot36"
              geometry={nodes.dot36.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-181.15, -42.89, -93.59]}
              rotation={[2.15, -1.38, 2.5]}
              scale={1}
            />
            <mesh
              name="dot37"
              geometry={nodes.dot37.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-87.92, -135.35, 62.68]}
              rotation={[0.89, -0.46, 0.44]}
              scale={1}
            />
            <mesh
              name="dot38"
              geometry={nodes.dot38.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-137.8, -139.35, 20.34]}
              rotation={[1.54, -0.8, 1.47]}
              scale={1}
            />
            <mesh
              name="dot39"
              geometry={nodes.dot39.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-149.17, -119.99, -36.91]}
              rotation={[1.53, -0.92, 1.97]}
              scale={1}
            />
            <mesh
              name="dot40"
              geometry={nodes.dot40.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-138.47, -96.95, -79.03]}
              rotation={[1.88, -1.27, 2.18]}
              scale={1}
            />
            <mesh
              name="dot41"
              geometry={nodes.dot41.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-117.46, -80.97, 99.79]}
              rotation={[0.66, -0.56, 0.39]}
              scale={1}
            />
            <mesh
              name="dot42"
              geometry={nodes.dot42.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-23.11, -26.91, 133.43]}
              rotation={[0.43, -0.59, -0.28]}
              scale={1}
            />
            <mesh
              name="dot43"
              geometry={nodes.dot43.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-60.4, 14.05, 160.64]}
              rotation={[0.67, -0.52, -0.13]}
              scale={1}
            />
            <mesh
              name="dot44"
              geometry={nodes.dot44.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-65.89, 64.86, 168.63]}
              rotation={[0, -0.67, 0]}
              scale={1}
            />
            <mesh
              name="dot45"
              geometry={nodes.dot45.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-127.05, 23.25, 159.16]}
              rotation={[0.16, -0.68, -0.05]}
              scale={1}
            />
            <mesh
              name="dot46"
              geometry={nodes.dot46.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-47.2, -85.97, 101.28]}
              rotation={[0.38, -0.44, -0.19]}
              scale={1}
            />
            <mesh
              name="dot47"
              geometry={nodes.dot47.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-117.39, 94.14, 164.69]}
              rotation={[-0.49, -0.61, -0.3]}
              scale={1}
            />
            <mesh
              name="dot48"
              geometry={nodes.dot48.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-149.92, -91.98, 69.78]}
              rotation={[1.03, -1.06, 0.95]}
              scale={1}
            />
            <mesh
              name="dot49"
              geometry={nodes.dot49.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-183.43, -82.42, 21.38]}
              rotation={[1.52, -1.02, 1.52]}
              scale={1}
            />
            <mesh
              name="dot50"
              geometry={nodes.dot50.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-221.36, -32.79, 17.16]}
              rotation={[1.49, -1.23, 1.49]}
              scale={1}
            />
            <mesh
              name="dot51"
              geometry={nodes.dot51.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-158.39, -34.11, 120.24]}
              rotation={[1.42, -1.21, 0.88]}
              scale={1}
            />
            <mesh
              name="dot52"
              geometry={nodes.dot52.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-203.85, 6.03, 104.95]}
              rotation={[1.47, -1, 0.95]}
              scale={1}
            />
            <mesh
              name="dot53"
              geometry={nodes.dot53.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-238.4, 22.53, 52.02]}
              rotation={[1.5, -1.44, 1.35]}
              scale={1}
            />
            <mesh
              name="dot54"
              geometry={nodes.dot54.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-222.47, 64.86, 105.62]}
              rotation={[0, -1.54, 0]}
            />
            <mesh
              name="dot55"
              geometry={nodes.dot55.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-176.79, 36.67, 146.1]}
              rotation={[-2.77, -1.15, -2.92]}
              scale={1}
            />
            <mesh
              name="dot56"
              geometry={nodes.dot56.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-189.51, 97.23, 135.35]}
              rotation={[-1.58, -1.43, -1.36]}
              scale={1}
            />
            <mesh
              name="dot57"
              geometry={nodes.dot57.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-236.27, 96.42, 63.08]}
              rotation={[-1.5, -1.17, -1.5]}
              scale={1}
            />
            <mesh
              name="dot58"
              geometry={nodes.dot58.geometry}
              material={materials.dots}
              castShadow
              receiveShadow
              position={[-83.8, 64.86, 5.27]}
              rotation={[0, -1.54, 0]}
            />
            <mesh
              name="dot59"
              geometry={nodes.dot59.geometry}
              material={materials['dot59 Material']}
              castShadow
              receiveShadow
              position={[23.9, 139.87, -96.37]}
              rotation={[-2.08, 0.78, 2.07]}
              scale={1}
            />
            <mesh
              name="dot60"
              geometry={nodes.dot60.geometry}
              material={materials['dot60 Material']}
              castShadow
              receiveShadow
              position={[36.8, 137.92, 70.41]}
              rotation={[-Math.PI / 2, 0.52, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot61"
              geometry={nodes.dot61.geometry}
              material={materials['dot61 Material']}
              castShadow
              receiveShadow
              position={[52.72, 135.59, -48.39]}
              rotation={[-Math.PI / 2, 0.68, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot62"
              geometry={nodes.dot62.geometry}
              material={materials['dot62 Material']}
              castShadow
              receiveShadow
              position={[66.4, 111.32, 56.91]}
              rotation={[-Math.PI / 2, 1.07, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot63"
              geometry={nodes.dot63.geometry}
              material={materials['dot63 Material']}
              castShadow
              receiveShadow
              position={[-21.88, 72.77, 155.49]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="dot64"
              geometry={nodes.dot64.geometry}
              material={materials['dot64 Material']}
              castShadow
              receiveShadow
              position={[9.6, 50.44, 143.45]}
              rotation={[1.68, 1.5, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot65"
              geometry={nodes.dot65.geometry}
              material={materials['dot65 Material']}
              castShadow
              receiveShadow
              position={[26.87, -55.39, -67.34]}
              rotation={[Math.PI / 2, 1.12, -1.91]}
              scale={1}
            />
            <mesh
              name="dot66"
              geometry={nodes.dot66.geometry}
              material={materials['dot66 Material']}
              castShadow
              receiveShadow
              position={[32.85, -57.99, 42.71]}
              rotation={[1.82, 1.17, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot67"
              geometry={nodes.dot67.geometry}
              material={materials['dot67 Material']}
              castShadow
              receiveShadow
              position={[0.62, -7.09, 129.56]}
              rotation={[Math.PI / 2, 1.21, -1.32]}
              scale={1}
            />
            <mesh
              name="dot68"
              geometry={nodes.dot68.geometry}
              material={materials['dot68 Material']}
              castShadow
              receiveShadow
              position={[11.64, -43.3, 96.11]}
              rotation={[Math.PI / 2, 0.97, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot69"
              geometry={nodes.dot69.geometry}
              material={materials['dot69 Material']}
              castShadow
              receiveShadow
              position={[64.05, 32.2, 79.57]}
              rotation={[1.06, 1.48, -0.96]}
              scale={1}
            />
            <mesh
              name="dot70"
              geometry={nodes.dot70.geometry}
              material={materials['dot70 Material']}
              castShadow
              receiveShadow
              position={[75.65, 9.62, 20.34]}
              rotation={[1.77, 1.29, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot71"
              geometry={nodes.dot71.geometry}
              material={materials['dot71 Material']}
              castShadow
              receiveShadow
              position={[-27.37, -140.74, -20.24]}
              rotation={[Math.PI / 2, 1.02, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot72"
              geometry={nodes.dot72.geometry}
              material={materials['dot72 Material']}
              castShadow
              receiveShadow
              position={[-15.1, -122.56, 37.37]}
              rotation={[Math.PI / 2, 0.92, -1.13]}
              scale={1}
            />
            <mesh
              name="dot73"
              geometry={nodes.dot73.geometry}
              material={materials['dot73 Material']}
              castShadow
              receiveShadow
              position={[-30.36, -96.95, 79.16]}
              rotation={[Math.PI / 2, 0.94, -1.23]}
              scale={1}
            />
            <mesh
              name="dot74"
              geometry={nodes.dot74.geometry}
              material={materials['dot74 Material']}
              castShadow
              receiveShadow
              position={[58.82, -34.06, -14.59]}
              rotation={[Math.PI / 2, 1.1, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot75"
              geometry={nodes.dot75.geometry}
              material={materials['dot75 Material']}
              castShadow
              receiveShadow
              position={[76.8, 22.08, -48.87]}
              rotation={[1.42, 1.44, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="dot76"
              geometry={nodes.dot76.geometry}
              material={materials['dot76 Material']}
              castShadow
              receiveShadow
              position={[82.48, 78.13, 16.12]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="dot77"
              geometry={nodes.dot77.geometry}
              material={materials['dot77 Material']}
              castShadow
              receiveShadow
              position={[59.23, 78.13, 91.36]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="dot78"
              geometry={nodes.dot78.geometry}
              material={materials['dot78 Material']}
              castShadow
              receiveShadow
              position={[-82.58, 64.86, -6.68]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </group>
        </group>
        <group name="corn" ref={cornRef}position={cornPosition} rotation={[-Math.PI, 0, -2.62]} scale={[-0.18, 0.2, 0.05]} {...cornBind()}>
          <group name="leaves" position={[-2.25, -30.24, 22.22]} rotation={[0, 0.87, 0]}>
            <mesh
              name="leave6"
              geometry={nodes.leave6.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-12.6, -134.16, 2.54]}
            />
            <mesh
              name="leave7"
              geometry={nodes.leave7.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-12.6, -144.16, 2.54]}
            />
            <mesh
              name="leave8"
              geometry={nodes.leave8.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-100.1, -31.47, -4.46]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1}
            />
            <mesh
              name="leave9"
              geometry={nodes.leave9.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-5.26, -31.47, -84.96]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="leave10"
              geometry={nodes.leave10.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[82.87, -36.39, 0.31]}
              rotation={[Math.PI / 2, 1.48, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="leave11"
              geometry={nodes.leave11.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-11.46, -40.57, 84.96]}
              rotation={[0, 0, 0]}
              scale={1}
            />
          </group>
          <group name="corn1" position={[-8.88, 23.23, 27.66]} rotation={[0, 0.87, 0]} scale={[0.74, 0.88, 0.74]}>
            <mesh
              name="Sphere 13"
              geometry={nodes['Sphere 13'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.83, -44.87, 70.98]}
              rotation={[0, Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12"
              geometry={nodes['Sphere 12'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.83, -20.56, 70.98]}
              rotation={[0, Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 121"
              geometry={nodes['Sphere 121'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[20.51, -149.23, 56.34]}
              rotation={[0, Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 122"
              geometry={nodes['Sphere 122'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[26.03, 0.77, 71.53]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 123"
              geometry={nodes['Sphere 123'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.83, 22.76, 70.98]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 124"
              geometry={nodes['Sphere 124'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.77, 44.37, 70.79]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 125"
              geometry={nodes['Sphere 125'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[26.03, 65.98, 71.53]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 126"
              geometry={nodes['Sphere 126'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.57, 87.98, 70.24]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 127"
              geometry={nodes['Sphere 127'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[24.83, 109.58, 68.23]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 128"
              geometry={nodes['Sphere 128'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[23.3, 131.58, 64.03]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 129"
              geometry={nodes['Sphere 129'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[16.33, -167.64, 44.87]}
              rotation={[0, Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1210"
              geometry={nodes['Sphere 1210'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[20.51, 151.43, 56.34]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1211"
              geometry={nodes['Sphere 1211'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-26.03, 0.77, -71.53]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1212"
              geometry={nodes['Sphere 1212'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-25.83, 22.76, -70.98]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1213"
              geometry={nodes['Sphere 1213'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-25.77, 44.37, -70.79]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1214"
              geometry={nodes['Sphere 1214'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-26.03, 65.98, -71.53]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1215"
              geometry={nodes['Sphere 1215'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-25.57, 87.98, -70.24]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1216"
              geometry={nodes['Sphere 1216'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-24.83, 109.58, -68.23]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1217"
              geometry={nodes['Sphere 1217'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-23.3, 131.58, -64.03]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1218"
              geometry={nodes['Sphere 1218'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-16.33, -167.64, -44.87]}
              rotation={[-Math.PI, -Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1219"
              geometry={nodes['Sphere 1219'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[16.33, 169.84, 44.87]}
              rotation={[0, Math.PI / 9, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1220"
              geometry={nodes['Sphere 1220'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-20.51, 151.43, -56.34]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1221"
              geometry={nodes['Sphere 1221'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[70.98, -20.56, -25.83]}
              rotation={[Math.PI, 1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1222"
              geometry={nodes['Sphere 1222'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[70.79, -42.17, -25.77]}
              rotation={[Math.PI, 1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1223"
              geometry={nodes['Sphere 1223'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[71.53, -63.78, -26.03]}
              rotation={[Math.PI, 1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1224"
              geometry={nodes['Sphere 1224'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[56.34, -149.23, -20.51]}
              rotation={[Math.PI, 1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1225"
              geometry={nodes['Sphere 1225'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[71.53, 0.77, -26.03]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1226"
              geometry={nodes['Sphere 1226'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[70.98, 22.76, -25.83]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1227"
              geometry={nodes['Sphere 1227'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[70.79, 44.37, -25.77]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1228"
              geometry={nodes['Sphere 1228'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[71.53, 65.98, -26.03]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1229"
              geometry={nodes['Sphere 1229'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[70.24, 87.98, -25.57]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1230"
              geometry={nodes['Sphere 1230'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.23, 109.58, -24.83]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1231"
              geometry={nodes['Sphere 1231'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[64.03, 131.58, -23.3]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1232"
              geometry={nodes['Sphere 1232'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[44.87, -167.64, -16.33]}
              rotation={[Math.PI, 1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1233"
              geometry={nodes['Sphere 1233'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[56.34, 151.43, -20.51]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1234"
              geometry={nodes['Sphere 1234'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-70.98, -20.56, 25.83]}
              rotation={[0, -1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1235"
              geometry={nodes['Sphere 1235'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-70.79, -42.17, 25.77]}
              rotation={[0, -1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1236"
              geometry={nodes['Sphere 1236'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-64.03, -129.38, 23.3]}
              rotation={[0, -1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1237"
              geometry={nodes['Sphere 1237'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-56.34, -149.23, 20.51]}
              rotation={[0, -1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1238"
              geometry={nodes['Sphere 1238'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-71.53, 0.77, 26.03]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1239"
              geometry={nodes['Sphere 1239'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-70.98, 22.76, 25.83]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1240"
              geometry={nodes['Sphere 1240'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-70.79, 44.37, 25.77]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1241"
              geometry={nodes['Sphere 1241'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-71.53, 65.98, 26.03]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1242"
              geometry={nodes['Sphere 1242'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-70.24, 87.98, 25.57]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1243"
              geometry={nodes['Sphere 1243'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.23, 109.58, 24.83]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1244"
              geometry={nodes['Sphere 1244'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-64.03, 131.58, 23.3]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1245"
              geometry={nodes['Sphere 1245'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-44.87, -167.64, 16.33]}
              rotation={[0, -1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1246"
              geometry={nodes['Sphere 1246'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[44.87, 169.84, -16.33]}
              rotation={[-Math.PI, 1.22, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1247"
              geometry={nodes['Sphere 1247'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-16.33, 169.84, -44.87]}
              rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1248"
              geometry={nodes['Sphere 1248'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-56.34, 151.43, 20.51]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1249"
              geometry={nodes['Sphere 1249'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.41, -20.56, 53.41]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1250"
              geometry={nodes['Sphere 1250'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.27, -42.17, 53.27]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1251"
              geometry={nodes['Sphere 1251'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.82, -63.78, 53.82]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1252"
              geometry={nodes['Sphere 1252'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[52.86, -85.77, 52.86]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1253"
              geometry={nodes['Sphere 1253'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[51.34, -107.38, 51.34]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1254"
              geometry={nodes['Sphere 1254'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[48.18, -129.38, 48.18]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1255"
              geometry={nodes['Sphere 1255'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[42.4, -149.23, 42.4]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1256"
              geometry={nodes['Sphere 1256'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.82, 0.77, 53.82]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1257"
              geometry={nodes['Sphere 1257'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.41, 22.76, 53.41]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1258"
              geometry={nodes['Sphere 1258'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.27, 44.37, 53.27]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1259"
              geometry={nodes['Sphere 1259'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.82, 65.98, 53.82]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1260"
              geometry={nodes['Sphere 1260'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[52.86, 87.98, 52.86]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1261"
              geometry={nodes['Sphere 1261'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[51.34, 109.58, 51.34]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1262"
              geometry={nodes['Sphere 1262'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[48.18, 131.58, 48.18]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1263"
              geometry={nodes['Sphere 1263'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[33.77, -167.64, 33.77]}
              rotation={[0, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1264"
              geometry={nodes['Sphere 1264'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[42.4, 151.43, 42.4]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1265"
              geometry={nodes['Sphere 1265'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.41, -20.56, -53.41]}
              rotation={[Math.PI, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 14"
              geometry={nodes['Sphere 14'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-48.62, -67.17, -48.62]}
              rotation={[Math.PI, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1266"
              geometry={nodes['Sphere 1266'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.27, -42.17, -53.27]}
              rotation={[Math.PI, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1267"
              geometry={nodes['Sphere 1267'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-48.18, -129.38, -48.18]}
              rotation={[Math.PI, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1268"
              geometry={nodes['Sphere 1268'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-42.4, -149.23, -42.4]}
              rotation={[Math.PI, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1269"
              geometry={nodes['Sphere 1269'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.82, 0.77, -53.82]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1270"
              geometry={nodes['Sphere 1270'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.41, 22.76, -53.41]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1271"
              geometry={nodes['Sphere 1271'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.27, 44.37, -53.27]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1272"
              geometry={nodes['Sphere 1272'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.82, 65.98, -53.82]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1273"
              geometry={nodes['Sphere 1273'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-52.86, 87.98, -52.86]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1274"
              geometry={nodes['Sphere 1274'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-51.34, 109.58, -51.34]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1275"
              geometry={nodes['Sphere 1275'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-48.18, 131.58, -48.18]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1276"
              geometry={nodes['Sphere 1276'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-33.77, -167.64, -33.77]}
              rotation={[Math.PI, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1277"
              geometry={nodes['Sphere 1277'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[33.77, 169.84, 33.77]}
              rotation={[0, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1278"
              geometry={nodes['Sphere 1278'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-42.4, 151.43, -42.4]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1279"
              geometry={nodes['Sphere 1279'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.41, -20.56, -53.41]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1280"
              geometry={nodes['Sphere 1280'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.27, -42.17, -53.27]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1281"
              geometry={nodes['Sphere 1281'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.82, -63.78, -53.82]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1282"
              geometry={nodes['Sphere 1282'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[52.86, -85.77, -52.86]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1283"
              geometry={nodes['Sphere 1283'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[51.34, -107.38, -51.34]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1284"
              geometry={nodes['Sphere 1284'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[48.18, -129.38, -48.18]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1285"
              geometry={nodes['Sphere 1285'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[42.4, -149.23, -42.4]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1286"
              geometry={nodes['Sphere 1286'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.82, 0.77, -53.82]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1287"
              geometry={nodes['Sphere 1287'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.41, 22.76, -53.41]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1288"
              geometry={nodes['Sphere 1288'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.27, 44.37, -53.27]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1289"
              geometry={nodes['Sphere 1289'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[53.82, 65.98, -53.82]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1290"
              geometry={nodes['Sphere 1290'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[52.86, 87.98, -52.86]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1291"
              geometry={nodes['Sphere 1291'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[51.34, 109.58, -51.34]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1292"
              geometry={nodes['Sphere 1292'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[48.18, 131.58, -48.18]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1293"
              geometry={nodes['Sphere 1293'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[33.77, -167.64, -33.77]}
              rotation={[-Math.PI, Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1294"
              geometry={nodes['Sphere 1294'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[42.4, 151.43, -42.4]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1295"
              geometry={nodes['Sphere 1295'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.41, -20.56, 53.41]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1296"
              geometry={nodes['Sphere 1296'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.27, -42.17, 53.27]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1297"
              geometry={nodes['Sphere 1297'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.82, -63.78, 53.82]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1298"
              geometry={nodes['Sphere 1298'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-52.86, -85.77, 52.86]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1299"
              geometry={nodes['Sphere 1299'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-51.34, -107.38, 51.34]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12100"
              geometry={nodes['Sphere 12100'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-48.18, -129.38, 48.18]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12101"
              geometry={nodes['Sphere 12101'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-42.4, -149.23, 42.4]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12102"
              geometry={nodes['Sphere 12102'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.82, 0.77, 53.82]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12103"
              geometry={nodes['Sphere 12103'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.41, 22.76, 53.41]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12104"
              geometry={nodes['Sphere 12104'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.27, 44.37, 53.27]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12105"
              geometry={nodes['Sphere 12105'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-53.82, 65.98, 53.82]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12106"
              geometry={nodes['Sphere 12106'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-52.86, 87.98, 52.86]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12107"
              geometry={nodes['Sphere 12107'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-51.34, 109.58, 51.34]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12108"
              geometry={nodes['Sphere 12108'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-48.18, 131.58, 48.18]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12109"
              geometry={nodes['Sphere 12109'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-33.77, -167.64, 33.77]}
              rotation={[0, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <group name="Empty Object 2" position={[1.71, -187.88, -1.43]} rotation={[0, 0, -Math.PI]} scale={1}>
              <mesh
                name="Sphere 131"
                geometry={nodes['Sphere 131'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[4.22, 0, 1.48]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 132"
                geometry={nodes['Sphere 132'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[-14.62, 0, 18.45]}
                rotation={[0, -1.22, 0]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 133"
                geometry={nodes['Sphere 133'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[-21.84, 0, -10.74]}
                rotation={[Math.PI, -1.13, Math.PI]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 134"
                geometry={nodes['Sphere 134'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[28.6, 0, -6.45]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 135"
                geometry={nodes['Sphere 135'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[4.27, 0, -26.37]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 136"
                geometry={nodes['Sphere 136'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[16.93, 0, 20.75]}
                scale={[1, 1, 0.81]}
              />
            </group>
            <group name="Empty Object" position={[-4.27, 187.88, -1.43]}>
              <mesh
                name="Sphere 137"
                geometry={nodes['Sphere 137'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[4.22, 0, 1.48]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 138"
                geometry={nodes['Sphere 138'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[-14.62, 0, 18.45]}
                rotation={[0, -1.22, 0]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 139"
                geometry={nodes['Sphere 139'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[-21.84, 0, -10.74]}
                rotation={[Math.PI, -1.13, Math.PI]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 1310"
                geometry={nodes['Sphere 1310'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[28.6, 0, -6.45]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 1311"
                geometry={nodes['Sphere 1311'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[4.27, 0, -26.37]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 0.81]}
              />
              <mesh
                name="Sphere 1312"
                geometry={nodes['Sphere 1312'].geometry}
                material={materials.corn}
                castShadow
                receiveShadow
                position={[16.93, 0, 20.75]}
                scale={[1, 1, 0.81]}
              />
            </group>
            <mesh
              name="Sphere 12110"
              geometry={nodes['Sphere 12110'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[33.77, 169.84, -33.77]}
              rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12111"
              geometry={nodes['Sphere 12111'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-33.77, 169.84, -33.77]}
              rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12112"
              geometry={nodes['Sphere 12112'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-44.87, 169.84, 16.33]}
              rotation={[0, -1.22, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12113"
              geometry={nodes['Sphere 12113'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-42.4, 151.43, 42.4]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 11"
              geometry={nodes['Sphere 11'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.45, -20.56, 31.92]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 111"
              geometry={nodes['Sphere 111'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.28, -42.17, 31.84]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 112"
              geometry={nodes['Sphere 112'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.98, -63.78, 32.17]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 113"
              geometry={nodes['Sphere 113'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[67.75, -85.77, 31.59]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 114"
              geometry={nodes['Sphere 114'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[65.81, -107.38, 30.69]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 115"
              geometry={nodes['Sphere 115'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[61.75, -129.38, 28.79]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 116"
              geometry={nodes['Sphere 116'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[54.34, -149.23, 25.34]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 117"
              geometry={nodes['Sphere 117'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.98, 0.77, 32.17]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 118"
              geometry={nodes['Sphere 118'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.45, 22.76, 31.92]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 119"
              geometry={nodes['Sphere 119'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.28, 44.37, 31.84]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1110"
              geometry={nodes['Sphere 1110'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.98, 65.98, 32.17]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1111"
              geometry={nodes['Sphere 1111'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[67.75, 87.98, 31.59]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1112"
              geometry={nodes['Sphere 1112'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[65.81, 109.58, 30.69]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1113"
              geometry={nodes['Sphere 1113'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[61.75, 131.58, 28.79]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1114"
              geometry={nodes['Sphere 1114'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[43.28, -167.64, 20.18]}
              rotation={[0, 1.13, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1115"
              geometry={nodes['Sphere 1115'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[54.34, 151.43, 25.34]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1116"
              geometry={nodes['Sphere 1116'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.45, -20.56, -31.92]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1117"
              geometry={nodes['Sphere 1117'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.28, -42.17, -31.84]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1118"
              geometry={nodes['Sphere 1118'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.98, -63.78, -32.17]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1119"
              geometry={nodes['Sphere 1119'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-67.75, -85.77, -31.59]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1120"
              geometry={nodes['Sphere 1120'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-65.81, -107.38, -30.69]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1121"
              geometry={nodes['Sphere 1121'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-61.75, -129.38, -28.79]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1122"
              geometry={nodes['Sphere 1122'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-54.34, -149.23, -25.34]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1123"
              geometry={nodes['Sphere 1123'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.98, 0.77, -32.17]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1124"
              geometry={nodes['Sphere 1124'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.45, 22.76, -31.92]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1125"
              geometry={nodes['Sphere 1125'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.28, 44.37, -31.84]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1126"
              geometry={nodes['Sphere 1126'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.98, 65.98, -32.17]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1127"
              geometry={nodes['Sphere 1127'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-67.75, 87.98, -31.59]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1128"
              geometry={nodes['Sphere 1128'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-65.81, 109.58, -30.69]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1129"
              geometry={nodes['Sphere 1129'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-61.75, 131.58, -28.79]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1130"
              geometry={nodes['Sphere 1130'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-43.28, -167.64, -20.18]}
              rotation={[Math.PI, -1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1131"
              geometry={nodes['Sphere 1131'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[43.28, 169.84, 20.18]}
              rotation={[0, 1.13, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1132"
              geometry={nodes['Sphere 1132'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-54.34, 151.43, -25.34]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1133"
              geometry={nodes['Sphere 1133'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[31.92, -20.56, -68.45]}
              rotation={[-Math.PI, 0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1134"
              geometry={nodes['Sphere 1134'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.34, -149.23, -54.34]}
              rotation={[-Math.PI, 0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1135"
              geometry={nodes['Sphere 1135'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[32.17, 0.77, -68.98]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1136"
              geometry={nodes['Sphere 1136'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[31.92, 22.76, -68.45]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1137"
              geometry={nodes['Sphere 1137'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[31.84, 44.37, -68.28]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1138"
              geometry={nodes['Sphere 1138'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[32.17, 65.98, -68.98]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1139"
              geometry={nodes['Sphere 1139'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[31.59, 87.98, -67.75]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1140"
              geometry={nodes['Sphere 1140'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[30.69, 109.58, -65.81]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1141"
              geometry={nodes['Sphere 1141'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[28.79, 131.58, -61.75]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1142"
              geometry={nodes['Sphere 1142'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[20.18, -167.64, -43.28]}
              rotation={[-Math.PI, 0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1143"
              geometry={nodes['Sphere 1143'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[25.34, 151.43, -54.34]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1144"
              geometry={nodes['Sphere 1144'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-31.92, -20.56, 68.45]}
              rotation={[0, -0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1145"
              geometry={nodes['Sphere 1145'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-31.84, -42.17, 68.28]}
              rotation={[0, -0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1146"
              geometry={nodes['Sphere 1146'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-25.34, -149.23, 54.34]}
              rotation={[0, -0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1147"
              geometry={nodes['Sphere 1147'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-32.17, 0.77, 68.98]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1148"
              geometry={nodes['Sphere 1148'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-31.92, 22.76, 68.45]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1149"
              geometry={nodes['Sphere 1149'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-31.84, 44.37, 68.28]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1150"
              geometry={nodes['Sphere 1150'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-32.17, 65.98, 68.98]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1151"
              geometry={nodes['Sphere 1151'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-31.59, 87.98, 67.75]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1152"
              geometry={nodes['Sphere 1152'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-30.69, 109.58, 65.81]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1153"
              geometry={nodes['Sphere 1153'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-28.79, 131.58, 61.75]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1154"
              geometry={nodes['Sphere 1154'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-20.18, -167.64, 43.28]}
              rotation={[0, -0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1155"
              geometry={nodes['Sphere 1155'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[20.18, 169.84, -43.28]}
              rotation={[-Math.PI, 0.44, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1156"
              geometry={nodes['Sphere 1156'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-43.28, 169.84, -20.18]}
              rotation={[Math.PI, -1.13, Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1157"
              geometry={nodes['Sphere 1157'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-25.34, 151.43, 54.34]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 10"
              geometry={nodes['Sphere 10'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[75.53, -20.56, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 101"
              geometry={nodes['Sphere 101'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[75.34, -42.17, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 102"
              geometry={nodes['Sphere 102'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[76.12, -63.78, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 103"
              geometry={nodes['Sphere 103'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[59.96, -149.23, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 104"
              geometry={nodes['Sphere 104'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[76.12, 0.77, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 105"
              geometry={nodes['Sphere 105'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[75.53, 22.76, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 106"
              geometry={nodes['Sphere 106'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[75.34, 44.37, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 107"
              geometry={nodes['Sphere 107'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[76.12, 65.98, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 108"
              geometry={nodes['Sphere 108'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[74.75, 87.98, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 109"
              geometry={nodes['Sphere 109'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[72.61, 109.58, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1010"
              geometry={nodes['Sphere 1010'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[68.13, 131.58, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1011"
              geometry={nodes['Sphere 1011'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[47.75, -167.64, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1012"
              geometry={nodes['Sphere 1012'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[59.96, 151.43, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1013"
              geometry={nodes['Sphere 1013'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-75.53, -20.56, 0]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1014"
              geometry={nodes['Sphere 1014'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-75.34, -42.17, 0]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1015"
              geometry={nodes['Sphere 1015'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.13, -129.38, 0]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1016"
              geometry={nodes['Sphere 1016'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-59.96, -149.23, 0]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1017"
              geometry={nodes['Sphere 1017'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-76.12, 0.77, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1018"
              geometry={nodes['Sphere 1018'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-75.53, 22.76, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1019"
              geometry={nodes['Sphere 1019'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-75.34, 44.37, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1020"
              geometry={nodes['Sphere 1020'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-76.12, 65.98, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1021"
              geometry={nodes['Sphere 1021'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-74.75, 87.98, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1022"
              geometry={nodes['Sphere 1022'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-72.61, 109.58, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1023"
              geometry={nodes['Sphere 1023'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-68.13, 131.58, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1024"
              geometry={nodes['Sphere 1024'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-47.75, -167.64, 0]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1025"
              geometry={nodes['Sphere 1025'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[47.75, 169.84, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1026"
              geometry={nodes['Sphere 1026'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-59.96, 151.43, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 9"
              geometry={nodes['Sphere 9'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 0.77, -76.12]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 91"
              geometry={nodes['Sphere 91'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 22.76, -75.53]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 92"
              geometry={nodes['Sphere 92'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 44.37, -75.34]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 93"
              geometry={nodes['Sphere 93'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 65.98, -76.12]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 94"
              geometry={nodes['Sphere 94'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 87.98, -74.75]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 95"
              geometry={nodes['Sphere 95'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 109.58, -72.61]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 96"
              geometry={nodes['Sphere 96'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 131.58, -68.13]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 97"
              geometry={nodes['Sphere 97'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, -167.64, -47.75]}
              rotation={[-Math.PI, 0, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 98"
              geometry={nodes['Sphere 98'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 151.43, -59.96]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 8"
              geometry={nodes['Sphere 8'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, -20.56, 75.53]}
              rotation={[0, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 81"
              geometry={nodes['Sphere 81'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, -149.23, 59.96]}
              rotation={[0, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 7"
              geometry={nodes['Sphere 7'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 0.77, 76.12]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 71"
              geometry={nodes['Sphere 71'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 22.76, 75.53]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 72"
              geometry={nodes['Sphere 72'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 44.37, 75.34]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 6"
              geometry={nodes['Sphere 6'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 65.98, 76.12]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 5"
              geometry={nodes['Sphere 5'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 87.98, 74.75]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 4"
              geometry={nodes['Sphere 4'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 109.58, 72.61]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 3"
              geometry={nodes['Sphere 3'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 131.58, 68.13]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 82"
              geometry={nodes['Sphere 82'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, -167.64, 47.75]}
              rotation={[0, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 99"
              geometry={nodes['Sphere 99'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 169.84, -47.75]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1027"
              geometry={nodes['Sphere 1027'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-47.75, 169.84, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 1158"
              geometry={nodes['Sphere 1158'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-20.18, 169.84, 43.28]}
              rotation={[0, -0.44, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 12114"
              geometry={nodes['Sphere 12114'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[-33.77, 169.84, 33.77]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes['Sphere 2'].geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 151.43, 59.96]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials.corn}
              castShadow
              receiveShadow
              position={[0, 169.84, 47.75]}
              scale={[1, 1, 0.81]}
            />
          </group>
        </group>
        <group name="broccoli"  ref={broccoliRef} position={brocolliPosition}  scale={[0.15, 0.13, 0.21]}{...broccoliBind()}>
          <group name="head" position={[-2.33, 10.09, 10.25]}>
            <mesh
              name="Subdiv 9"
              geometry={nodes['Subdiv 9'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-95.62, 60.86, -86.89]}
              rotation={[-1.94, 0.2, 1.29]}
              scale={[0.85, 1, 0.76]}
            />
            <mesh
              name="Subdiv 2"
              geometry={nodes['Subdiv 2'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[50.27, 158.75, 39.35]}
              rotation={[2.91, 1.15, -2.82]}
              scale={[1, 1, 0.76]}
            />
            <mesh
              name="Subdiv 6"
              geometry={nodes['Subdiv 6'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[167.27, 54.98, 18.07]}
              rotation={[-2.86, 0.64, -1.91]}
              scale={[1.14, 1, 0.76]}
            />
            <mesh
              name="Subdiv 4"
              geometry={nodes['Subdiv 4'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-41.27, 24.07, 128.81]}
              rotation={[-2.99, 0.36, -2.95]}
              scale={[1.49, 1, 0.76]}
            />
            <mesh
              name="Subdiv 3"
              geometry={nodes['Subdiv 3'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[70.1, 41.78, -67.97]}
              rotation={[-0.96, 1.05, 0.62]}
              scale={[0.81, 1, 0.76]}
            />
            <mesh
              name="Subdiv 21"
              geometry={nodes['Subdiv 21'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[70.3, 66.62, -41.56]}
              rotation={[-3.11, 0.25, -3.01]}
              scale={[1, 1, 0.76]}
            />
            <mesh
              name="Subdiv 8"
              geometry={nodes['Subdiv 8'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-15.4, 29.61, -125.89]}
              rotation={[-2.66, 0.04, -3.06]}
              scale={1}
            />
            <mesh
              name="Subdiv 22"
              geometry={nodes['Subdiv 22'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-10.15, 72.44, -73.93]}
              rotation={[-2.44, 0.08, -3.05]}
              scale={1}
            />
            <mesh
              name="Subdiv"
              geometry={nodes.Subdiv.geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-47.47, 139.16, -31.56]}
              rotation={[0.13, -0.72, 0.19]}
              scale={[1, 1, 0.76]}
            />
            <mesh
              name="Subdiv 10"
              geometry={nodes['Subdiv 10'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-26.53, 89.79, 62.23]}
              rotation={[-0.13, -0.32, 0.16]}
              scale={1}
            />
            <mesh
              name="Subdiv 5"
              geometry={nodes['Subdiv 5'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-120.43, 88.66, -17.85]}
              rotation={[-0.13, -0.32, 1.02]}
              scale={1}
            />
            <mesh
              name="Subdiv1"
              geometry={nodes.Subdiv1.geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-144.54, 43.72, -17.64]}
              rotation={[1.58, -0.54, 1.92]}
              scale={1}
            />
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[-2.43, 58.47, 11.52]}
              rotation={[-0.03, 0.19, 0.15]}
              scale={[1.56, 1.56, 1.19]}
            />
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials.head}
              castShadow
              receiveShadow
              position={[77.05, 38.72, 40.3]}
              rotation={[0.1, 0.21, 0.08]}
              scale={1}
            />
          </group>
          <mesh
            name="foot"
            geometry={nodes.foot.geometry}
            material={materials.foot}
            castShadow
            receiveShadow
            position={[-4.94, -150.82, 10.66]}
          />
        </group>
        <group name="tomato" ref={tomatoRef} position={tomatoPosition} scale={[0.12, 0.08, 0.12]}{...tomatoBind()}>
          <mesh
            name="tomato1"
            geometry={nodes.tomato1.geometry}
            material={materials.tomato}
            castShadow
            receiveShadow
            position={[4.46, -49.27, 2.02]}
            scale={1.03}
          />
          <group name="rop and leaves1" position={[0.69, 149.22, -0.09]}>
            <mesh
              name="leave12"
              geometry={nodes.leave12.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[86.31, -20.56, 67.73]}
              rotation={[-3.1, 0.68, 3.11]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave13"
              geometry={nodes.leave13.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-31.3, -28.34, -80.7]}
              rotation={[-Math.PI, 1.2, 0]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave14"
              geometry={nodes.leave14.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-9.42, -18.64, -93.24]}
              rotation={[-2.82, 1.44, -0.21]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="leave15"
              geometry={nodes.leave15.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-73.14, -15.41, 52.31]}
              rotation={[-Math.PI, -0.52, 0.07]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="rop1"
              geometry={nodes.rop1.geometry}
              material={materials['rop and leave']}
              castShadow
              receiveShadow
              position={[-22.2, 48.13, 5.23]}
              rotation={[0, 0, -2.53]}
              scale={2.77}
            />
          </group>
        </group>
        <group name="oinion" ref={onionRef} position={onionPosition} rotation={[0.19, -0.1, -0.48]} scale={[0.14, 0.11, 0.17]}{...onionBind()}>
          <group name="leaves1" position={[-0.79, 109.34, 9.76]}>
            <mesh
              name="leave16"
              geometry={nodes.leave16.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[12.14, -27.36, -2.06]}
              rotation={[-0.14, -0.93, -0.51]}
              scale={[0.87, 0.87, 0.48]}
            />
            <mesh
              name="leave17"
              geometry={nodes.leave17.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-22.8, -10.06, -0.63]}
              rotation={[0.26, -0.89, 0.27]}
              scale={[1, 1, 0.55]}
            />
            <mesh
              name="leave18"
              geometry={nodes.leave18.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-3.27, -20.52, 10.55]}
              rotation={[-2.95, -0.1, 2.98]}
              scale={[0.57, 0.57, 0.37]}
            />
            <mesh
              name="leave19"
              geometry={nodes.leave19.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[6.27, 22.43, -9]}
              scale={[0.57, 0.57, 0.4]}
            />
          </group>
          <mesh
            name="oinion1"
            geometry={nodes.oinion1.geometry}
            material={materials.oinion}
            castShadow
            receiveShadow
            position={[0, -79.28, 0]}
          />
        </group>
        <group name="carrot" ref={carrotRef}position={carrotPosition} rotation={[0, 0, 0.44]} scale={[0.28, 0.16, 0.19]}{...carrotBind()}>
          <mesh
            name="leave20"
            geometry={nodes.leave20.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[7.15, 105.74, 17.58]}
            rotation={[-3.1, 0.36, -2.99]}
            scale={0.89}
          />
          <mesh
            name="leave21"
            geometry={nodes.leave21.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[18.69, 106.75, 5.97]}
            rotation={[-0.04, 0.24, 0.07]}
            scale={[1, 1.09, 1]}
          />
          <mesh
            name="leave22"
            geometry={nodes.leave22.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[-10.54, 99.15, 5.2]}
            rotation={[-3.09, -0.28, -2.97]}
            scale={[1, 1.09, 1]}
          />
          <mesh
            name="leave23"
            geometry={nodes.leave23.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[-7.44, 108.73, -1.66]}
            rotation={[-3.06, 0.36, 2.92]}
            scale={1}
          />
          <mesh
            name="leave24"
            geometry={nodes.leave24.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[-10.16, 160.22, 8.07]}
            rotation={[0.08, 0, 0]}
            scale={[-1, 1, 1]}
          />
          <mesh
            name="carrot1"
            geometry={nodes.carrot1.geometry}
            material={materials.carrot}
            castShadow
            receiveShadow
            position={[-5.55, -24.25, 0]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[80.2, 173.99, 41.34]}
          scale={0.58}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[46.8, -65.32, 1018.52]}
          rotation={[0, 0, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
