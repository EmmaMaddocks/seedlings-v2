import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";


export default function VegPatch({ ...props }) {
  
  const vegRef = useRef();

  const { nodes, materials } = useSpline('https://prod.spline.design/4iTxW86PfX5mI2uR/scene.splinecode')
  return (
    <>
      <color attach="background"  />
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-526.839}
          shadow-camera-right={526.839}
          shadow-camera-top={526.839}
          shadow-camera-bottom={-526.839}
          position={[-137.74, 439.11, 506.76]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 0.2, 1]}
        />
        <group name="House" position={[21.92, 6.95, -15.05]} scale={0.23}>
          <group name="fencecarrots" position={[691.99, -612.2, 23.63]} scale={1.42}>
            <mesh
              name="Cube 8"
              geometry={nodes['Cube 8'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[206.8, 0, -203.1]}
              scale={[0.14, 1.44, 0.14]}
            />
            <mesh
              name="Cube 7"
              geometry={nodes['Cube 7'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[206.8, 0, 201.71]}
              scale={[0.14, 1.44, 0.14]}
            />
            <mesh
              name="Cube 12"
              geometry={nodes['Cube 12'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[0.22, 39.53, 208.6]}
              rotation={[-Math.PI, 0, Math.PI / 2]}
              scale={[0.15, 1.63, 0.15]}
            />
            <mesh
              name="Cube 11"
              geometry={nodes['Cube 11'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[202.74, 39.53, 0]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.15, 1.63, 0.15]}
            />
            <mesh
              name="Cube 10"
              geometry={nodes['Cube 10'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[-0.22, 39.53, -200.42]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.15, 1.63, 0.15]}
            />
            <mesh
              name="Cube 9"
              geometry={nodes['Cube 9'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[-210.47, 0, -200.42]}
              scale={[0.14, 1.44, 0.14]}
            />
            <mesh
              name="Cube 6"
              geometry={nodes['Cube 6'].geometry}
              material={materials.woodenbeans}
              castShadow
              receiveShadow
              position={[-210.47, 0, 201.71]}
              scale={[0.14, 1.44, 0.14]}
            />
          </group>
          <group name="fences" position={[-103.39, -547.15, 45.35]}>
            <group
              name="fence1"
              position={[926.09, 0, -998.49]}
              rotation={[Math.PI, 0, -Math.PI]}
              scale={[1.21, 1, 1.08]}
            >
              <mesh
                name="Cube 53"
                geometry={nodes['Cube 53'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[29.04, 45.72, 193.19]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 52"
                geometry={nodes['Cube 52'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-194.46, 45.72, -5.09]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 49"
                geometry={nodes['Cube 49'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[121.65, -33.16, 196.12]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 51"
                geometry={nodes['Cube 51'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-220.66, -33.16, -104.45]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 50"
                geometry={nodes['Cube 50'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-219.73, -33.16, 108.56]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 71"
                geometry={nodes['Cube 71'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-66.29, -33.16, 196.78]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
            </group>
            <group
              name="fence2"
              position={[-926.09, 0, -986.26]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1.21, 1, 1]}
            >
              <mesh
                name="Cube 531"
                geometry={nodes['Cube 531'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[29.04, 45.72, 193.19]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 521"
                geometry={nodes['Cube 521'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-194.46, 45.72, -5.09]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 491"
                geometry={nodes['Cube 491'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[121.65, -33.16, 196.12]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 511"
                geometry={nodes['Cube 511'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-220.66, -33.16, -104.45]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 501"
                geometry={nodes['Cube 501'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-219.73, -33.16, 108.56]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 72"
                geometry={nodes['Cube 72'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-66.29, -33.16, 196.78]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
            </group>
            <group name="fence3" position={[926.09, 0, 1015.29]} scale={[-1.21, 1, 1]}>
              <mesh
                name="Cube 532"
                geometry={nodes['Cube 532'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[29.04, 45.72, 193.19]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 522"
                geometry={nodes['Cube 522'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-194.46, 45.72, -5.09]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 492"
                geometry={nodes['Cube 492'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[121.65, -33.16, 196.12]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 512"
                geometry={nodes['Cube 512'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-220.66, -33.16, -104.45]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 502"
                geometry={nodes['Cube 502'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-219.73, -33.16, 108.56]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 73"
                geometry={nodes['Cube 73'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-66.29, -33.16, 196.78]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
            </group>
            <group name="fence4" position={[-936.56, 0, 1015.29]}>
              <mesh
                name="Cube 533"
                geometry={nodes['Cube 533'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[29.04, 45.72, 193.19]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 523"
                geometry={nodes['Cube 523'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-194.46, 45.72, -5.09]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.8, 1, 0.15]}
              />
              <mesh
                name="Cube 493"
                geometry={nodes['Cube 493'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[121.65, -33.16, 196.12]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 513"
                geometry={nodes['Cube 513'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-220.66, -33.16, -104.45]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 503"
                geometry={nodes['Cube 503'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-219.73, -33.16, 108.56]}
                rotation={[0, -1.57, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
              <mesh
                name="Cube 74"
                geometry={nodes['Cube 74'].geometry}
                material={materials.fences}
                castShadow
                receiveShadow
                position={[-66.29, -33.16, 196.78]}
                rotation={[0, 0, 0]}
                scale={[2.63, 1.22, 1.1]}
              />
            </group>
          </group>
          <group name="carrots" position={[669.11, -681.87, 40.61]} scale={1.42}>
            <group name="carrot7" position={[146.31, 16.48, 106.23]}>
              <mesh
                name="leave"
                geometry={nodes.leave.geometry}
                material={materials['leave Material']}
                castShadow
                receiveShadow
                position={[-0.96, 49.94, 8.37]}
                rotation={[-3.08, 0.36, -3.05]}
                scale={0.43}
              />
              <mesh
                name="leave1"
                geometry={nodes.leave1.geometry}
                material={materials['leave1 Material']}
                castShadow
                receiveShadow
                position={[4.5, 50.7, 2.84]}
                rotation={[-0.05, 0.24, 0.12]}
                scale={[0.48, 0.52, 0.48]}
              />
              <mesh
                name="leave2"
                geometry={nodes.leave2.geometry}
                material={materials['leave2 Material']}
                castShadow
                receiveShadow
                position={[-9.21, 46.37, 2.48]}
                rotation={[-3.11, -0.29, -3.02]}
                scale={[0.48, 0.52, 0.48]}
              />
              <mesh
                name="leave3"
                geometry={nodes.leave3.geometry}
                material={materials['leave3 Material']}
                castShadow
                receiveShadow
                position={[-7.97, 51, -0.79]}
                rotation={[-3.04, 0.36, 2.86]}
                scale={0.48}
              />
              <mesh
                name="leave4"
                geometry={nodes.leave4.geometry}
                material={materials['leave4 Material']}
                castShadow
                receiveShadow
                position={[-10.53, 75.4, 3.84]}
                rotation={[0.08, 0, 0.05]}
                scale={[-0.48, 0.48, 0.48]}
              />
              <mesh
                name="carrot"
                geometry={nodes.carrot.geometry}
                material={materials.carrot}
                castShadow
                receiveShadow
                position={[-3.8, -12.15, 0]}
                rotation={[0, 0, 0.05]}
                scale={0.48}
              />
            </group>
            <group name="carrot 3" position={[-98.9, 3.39, 106.23]} rotation={[0, 0, 0.05]} scale={0.48}>
              <mesh
                name="leave5"
                geometry={nodes.leave5.geometry}
                material={materials['leave5 Material']}
                castShadow
                receiveShadow
                position={[7.15, 105.74, 17.58]}
                rotation={[-3.1, 0.36, -2.99]}
                scale={0.89}
              />
              <mesh
                name="leave6"
                geometry={nodes.leave6.geometry}
                material={materials['leave6 Material']}
                castShadow
                receiveShadow
                position={[18.69, 106.75, 5.97]}
                rotation={[-0.04, 0.24, 0.07]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave7"
                geometry={nodes.leave7.geometry}
                material={materials['leave7 Material']}
                castShadow
                receiveShadow
                position={[-10.54, 99.15, 5.2]}
                rotation={[-3.09, -0.28, -2.97]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave8"
                geometry={nodes.leave8.geometry}
                material={materials['leave8 Material']}
                castShadow
                receiveShadow
                position={[-7.44, 108.73, -1.66]}
                rotation={[-3.06, 0.36, 2.92]}
                scale={1}
              />
              <mesh
                name="leave9"
                geometry={nodes.leave9.geometry}
                material={materials['leave9 Material']}
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
            <group name="carrot 2" position={[22.73, 9.68, 106.23]} rotation={[0, 0, 0.05]} scale={0.48}>
              <mesh
                name="leave10"
                geometry={nodes.leave10.geometry}
                material={materials['leave10 Material']}
                castShadow
                receiveShadow
                position={[7.15, 105.74, 17.58]}
                rotation={[-3.1, 0.36, -2.99]}
                scale={0.89}
              />
              <mesh
                name="leave11"
                geometry={nodes.leave11.geometry}
                material={materials['leave11 Material']}
                castShadow
                receiveShadow
                position={[18.69, 106.75, 5.97]}
                rotation={[-0.04, 0.24, 0.07]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave12"
                geometry={nodes.leave12.geometry}
                material={materials['leave12 Material']}
                castShadow
                receiveShadow
                position={[-10.54, 99.15, 5.2]}
                rotation={[-3.09, -0.28, -2.97]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave13"
                geometry={nodes.leave13.geometry}
                material={materials['leave13 Material']}
                castShadow
                receiveShadow
                position={[-7.44, 108.73, -1.66]}
                rotation={[-3.06, 0.36, 2.92]}
                scale={1}
              />
              <mesh
                name="leave14"
                geometry={nodes.leave14.geometry}
                material={materials['leave14 Material']}
                castShadow
                receiveShadow
                position={[-10.16, 160.22, 8.07]}
                rotation={[0.08, 0, 0]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="carrot2"
                geometry={nodes.carrot2.geometry}
                material={materials.carrot}
                castShadow
                receiveShadow
                position={[-5.55, -24.25, 0]}
              />
            </group>
            <group name="carrot 6" position={[-137.44, -65.43, -109.09]} rotation={[0, 0, 0.05]} scale={0.5}>
              <mesh
                name="leave15"
                geometry={nodes.leave15.geometry}
                material={materials['leave15 Material']}
                castShadow
                receiveShadow
                position={[7.15, 105.74, 17.58]}
                rotation={[-3.1, 0.36, -2.99]}
                scale={0.89}
              />
              <mesh
                name="leave16"
                geometry={nodes.leave16.geometry}
                material={materials['leave16 Material']}
                castShadow
                receiveShadow
                position={[18.69, 106.75, 5.97]}
                rotation={[-0.04, 0.24, 0.07]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave17"
                geometry={nodes.leave17.geometry}
                material={materials['leave17 Material']}
                castShadow
                receiveShadow
                position={[-10.54, 99.15, 5.2]}
                rotation={[-3.09, -0.28, -2.97]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave18"
                geometry={nodes.leave18.geometry}
                material={materials['leave18 Material']}
                castShadow
                receiveShadow
                position={[-7.44, 108.73, -1.66]}
                rotation={[-3.06, 0.36, 2.92]}
                scale={1}
              />
              <mesh
                name="leave19"
                geometry={nodes.leave19.geometry}
                material={materials['leave19 Material']}
                castShadow
                receiveShadow
                position={[-10.16, 160.22, 8.07]}
                rotation={[0.08, 0, 0]}
                scale={[-1, 1, 1]}
              />
            </group>
            <group name="carrot 5" position={[14.68, -6.08, -104.52]} rotation={[0, 0, 0.05]} scale={0.5}>
              <mesh
                name="leave20"
                geometry={nodes.leave20.geometry}
                material={materials['leave20 Material']}
                castShadow
                receiveShadow
                position={[7.15, 105.74, 17.58]}
                rotation={[-3.1, 0.36, -2.99]}
                scale={0.89}
              />
              <mesh
                name="leave21"
                geometry={nodes.leave21.geometry}
                material={materials['leave21 Material']}
                castShadow
                receiveShadow
                position={[18.69, 106.75, 5.97]}
                rotation={[-0.04, 0.24, 0.07]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave22"
                geometry={nodes.leave22.geometry}
                material={materials['leave22 Material']}
                castShadow
                receiveShadow
                position={[-10.54, 99.15, 5.2]}
                rotation={[-3.09, -0.28, -2.97]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave23"
                geometry={nodes.leave23.geometry}
                material={materials['leave23 Material']}
                castShadow
                receiveShadow
                position={[-7.44, 108.73, -1.66]}
                rotation={[-3.06, 0.36, 2.92]}
                scale={1}
              />
              <mesh
                name="leave24"
                geometry={nodes.leave24.geometry}
                material={materials['leave24 Material']}
                castShadow
                receiveShadow
                position={[-10.16, 160.22, 8.07]}
                rotation={[0.08, 0, 0]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="carrot3"
                geometry={nodes.carrot3.geometry}
                material={materials.carrot}
                castShadow
                receiveShadow
                position={[-5.55, -24.25, 0]}
              />
            </group>
            <group name="carrot 4" position={[142.92, -64.7, -102.89]} rotation={[0, 0, 0.05]} scale={0.5}>
              <mesh
                name="leave25"
                geometry={nodes.leave25.geometry}
                material={materials['leave25 Material']}
                castShadow
                receiveShadow
                position={[7.15, 105.74, 17.58]}
                rotation={[-3.1, 0.36, -2.99]}
                scale={0.89}
              />
              <mesh
                name="leave26"
                geometry={nodes.leave26.geometry}
                material={materials['leave26 Material']}
                castShadow
                receiveShadow
                position={[18.69, 106.75, 5.97]}
                rotation={[-0.04, 0.24, 0.07]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave27"
                geometry={nodes.leave27.geometry}
                material={materials['leave27 Material']}
                castShadow
                receiveShadow
                position={[-10.54, 99.15, 5.2]}
                rotation={[-3.09, -0.28, -2.97]}
                scale={[1, 1.09, 1]}
              />
              <mesh
                name="leave28"
                geometry={nodes.leave28.geometry}
                material={materials['leave28 Material']}
                castShadow
                receiveShadow
                position={[-7.44, 108.73, -1.66]}
                rotation={[-3.06, 0.36, 2.92]}
                scale={1}
              />
              <mesh
                name="leave29"
                geometry={nodes.leave29.geometry}
                material={materials['leave29 Material']}
                castShadow
                receiveShadow
                position={[-10.16, 160.22, 8.07]}
                rotation={[0.08, 0, 0]}
                scale={[-1, 1, 1]}
              />
            </group>
          </group>
          <mesh
            name="landplant"
            geometry={nodes.landplant.geometry}
            material={materials.woodendark}
            castShadow
            receiveShadow
            position={[689.17, -711.87, 25.81]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.12, 2.12, 0.15]}
          />
          <group name="grass" position={[-164.27, -637.41, 44.16]}>
            <group name="grass4" position={[777.35, 4.97, 834.16]} rotation={[0, 0.33, 0]} scale={[1.36, 1.7, 1.62]}>
              <mesh
                name="Subdiv 2"
                geometry={nodes['Subdiv 2'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[38, -24.29, 0]}
                rotation={[0, 0, -0.24]}
                scale={[0.41, 1.8, 0.33]}
              />
              <mesh
                name="Subdiv 8"
                geometry={nodes['Subdiv 8'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[14.66, -63.77, 26.99]}
                rotation={[3.14, 0.51, 3.12]}
                scale={[0.48, 1.64, 0.38]}
              />
              <mesh
                name="Subdiv 5"
                geometry={nodes['Subdiv 5'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-49.12, -72.29, 1.8]}
                rotation={[0, -0.09, 0]}
                scale={[0.34, 1.17, 0.27]}
              />
              <mesh
                name="Subdiv 7"
                geometry={nodes['Subdiv 7'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-15.16, -55.87, 28.2]}
                rotation={[0.06, 0.54, -0.01]}
                scale={[0.73, 2.38, 0.34]}
              />
              <mesh
                name="Subdiv 6"
                geometry={nodes['Subdiv 6'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[48.45, -52.74, 22.33]}
                rotation={[-3.04, -0.4, -3.07]}
                scale={[0.73, 2.39, 0.34]}
              />
              <mesh
                name="Subdiv 3"
                geometry={nodes['Subdiv 3'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[64.2, -64.79, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.34]}
              />
              <mesh
                name="Subdiv 4"
                geometry={nodes['Subdiv 4'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-23.91, -46.17, 0]}
                rotation={[0, 0, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Subdiv"
                geometry={nodes.Subdiv.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[39.91, -25.22, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[4.91, -15.06, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
            </group>
            <group
              name="grass3"
              position={[-894.68, 4.97, -924.17]}
              rotation={[0, -0.26, 0]}
              scale={[0.99, 1.24, 1.18]}
            >
              <mesh
                name="Subdiv 21"
                geometry={nodes['Subdiv 21'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[38, -24.29, 0]}
                rotation={[0, 0, -0.24]}
                scale={[0.41, 1.8, 0.33]}
              />
              <mesh
                name="Subdiv 81"
                geometry={nodes['Subdiv 81'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[14.66, -63.77, 26.99]}
                rotation={[3.14, 0.51, 3.12]}
                scale={[0.48, 1.64, 0.38]}
              />
              <mesh
                name="Subdiv 51"
                geometry={nodes['Subdiv 51'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-49.12, -72.29, 1.8]}
                rotation={[0, -0.09, 0]}
                scale={[0.34, 1.17, 0.27]}
              />
              <mesh
                name="Subdiv 71"
                geometry={nodes['Subdiv 71'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-15.16, -55.87, 28.2]}
                rotation={[0.06, 0.54, -0.01]}
                scale={[0.73, 2.38, 0.34]}
              />
              <mesh
                name="Subdiv 61"
                geometry={nodes['Subdiv 61'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[48.45, -52.74, 22.33]}
                rotation={[-3.04, -0.4, -3.07]}
                scale={[0.73, 2.39, 0.34]}
              />
              <mesh
                name="Subdiv 31"
                geometry={nodes['Subdiv 31'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[64.2, -64.79, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.34]}
              />
              <mesh
                name="Subdiv 41"
                geometry={nodes['Subdiv 41'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-23.91, -46.17, 0]}
                rotation={[0, 0, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Subdiv1"
                geometry={nodes.Subdiv1.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[39.91, -25.22, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[4.91, -15.06, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
            </group>
            <group name="grass2" position={[-813.9, 4.97, 504.37]} rotation={[0, 0.33, 0]} scale={[1.36, 1.7, 1.62]}>
              <mesh
                name="Subdiv 22"
                geometry={nodes['Subdiv 22'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[38, -24.29, 0]}
                rotation={[0, 0, -0.24]}
                scale={[0.41, 1.8, 0.33]}
              />
              <mesh
                name="Subdiv 82"
                geometry={nodes['Subdiv 82'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[14.66, -63.77, 26.99]}
                rotation={[3.14, 0.51, 3.12]}
                scale={[0.48, 1.64, 0.38]}
              />
              <mesh
                name="Subdiv 52"
                geometry={nodes['Subdiv 52'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-49.12, -72.29, 1.8]}
                rotation={[0, -0.09, 0]}
                scale={[0.34, 1.17, 0.27]}
              />
              <mesh
                name="Subdiv 72"
                geometry={nodes['Subdiv 72'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-15.16, -55.87, 28.2]}
                rotation={[0.06, 0.54, -0.01]}
                scale={[0.73, 2.38, 0.34]}
              />
              <mesh
                name="Subdiv 62"
                geometry={nodes['Subdiv 62'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[48.45, -52.74, 22.33]}
                rotation={[-3.04, -0.4, -3.07]}
                scale={[0.73, 2.39, 0.34]}
              />
              <mesh
                name="Subdiv 32"
                geometry={nodes['Subdiv 32'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[64.2, -64.79, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.34]}
              />
              <mesh
                name="Subdiv 42"
                geometry={nodes['Subdiv 42'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-23.91, -46.17, 0]}
                rotation={[0, 0, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Subdiv2"
                geometry={nodes.Subdiv2.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[39.91, -25.22, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[4.91, -15.06, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
            </group>
            <group name="grass1" position={[855.38, 51.22, -694.15]} rotation={[0, 0.33, 0]} scale={[1.28, 1.59, 1.52]}>
              <mesh
                name="Subdiv 23"
                geometry={nodes['Subdiv 23'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[38, -24.29, 0]}
                rotation={[0, 0, -0.24]}
                scale={[0.41, 1.8, 0.33]}
              />
              <mesh
                name="Subdiv 83"
                geometry={nodes['Subdiv 83'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[14.66, -63.77, 26.99]}
                rotation={[3.14, 0.51, 3.12]}
                scale={[0.48, 1.64, 0.38]}
              />
              <mesh
                name="Subdiv 53"
                geometry={nodes['Subdiv 53'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-49.12, -72.29, 1.8]}
                rotation={[0, -0.09, 0]}
                scale={[0.34, 1.17, 0.27]}
              />
              <mesh
                name="Subdiv 73"
                geometry={nodes['Subdiv 73'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-15.16, -55.87, 28.2]}
                rotation={[0.06, 0.54, -0.01]}
                scale={[0.73, 2.38, 0.34]}
              />
              <mesh
                name="Subdiv 63"
                geometry={nodes['Subdiv 63'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[48.45, -52.74, 22.33]}
                rotation={[-3.04, -0.4, -3.07]}
                scale={[0.73, 2.39, 0.34]}
              />
              <mesh
                name="Subdiv 33"
                geometry={nodes['Subdiv 33'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[64.2, -64.79, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.34]}
              />
              <mesh
                name="Subdiv 43"
                geometry={nodes['Subdiv 43'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-23.91, -46.17, 0]}
                rotation={[0, 0, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Subdiv3"
                geometry={nodes.Subdiv3.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[39.91, -25.22, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.73, 2.37, 0.44]}
              />
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[4.91, -15.06, 0]}
                scale={[0.73, 2.37, 0.44]}
              />
            </group>
          </group>
          <group name="trees" position={[0, -195.31, -869.08]}>
            <group name="tree2" position={[-1195.04, 223.94, 0]} scale={[-0.9, 1, 1]}>
              <mesh
                name="Cube 38"
                geometry={nodes['Cube 38'].geometry}
                material={materials.woodendark}
                castShadow
                receiveShadow
                position={[-385.54, -773.2, -87.37]}
                rotation={[-1.47, 0.01, -1.89]}
                scale={[0.91, 0.92, 0.89]}
              />
              <mesh
                name="Cube 43"
                geometry={nodes['Cube 43'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-166.32, 14.7, -98.76]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={2.43}
              />
              <mesh
                name="Cube 431"
                geometry={nodes['Cube 431'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-257.37, -130.96, 242.3]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.36}
              />
              <mesh
                name="Cube 432"
                geometry={nodes['Cube 432'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[282.58, -130.96, -31.73]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.36}
              />
            </group>
            <group name="tree1" position={[1083.45, 0, 0]}>
              <mesh
                name="Cube 42"
                geometry={nodes['Cube 42'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-103.05, 488.54, -98.76]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={2.43}
              />
              <mesh
                name="Cube 41"
                geometry={nodes['Cube 41'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[-194.1, 342.88, 242.3]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.36}
              />
              <mesh
                name="Cube 40"
                geometry={nodes['Cube 40'].geometry}
                material={materials.tree}
                castShadow
                receiveShadow
                position={[345.85, 342.87, -31.73]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.36}
              />
              <mesh
                name="Cube 37"
                geometry={nodes['Cube 37'].geometry}
                material={materials.woodendark}
                castShadow
                receiveShadow
                position={[-428.6, -584.73, 117.74]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.12}
              />
            </group>
          </group>
          <mesh
            name="landbottom"
            geometry={nodes.landbottom.geometry}
            material={materials['landbottom Material']}
            castShadow
            receiveShadow
            position={[-108.31, -902.81, 54.62]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[21.59, 4.39, 1.3]}
          />
          <mesh
            name="landgrass"
            geometry={nodes.landgrass.geometry}
            material={materials.grass}
            castShadow
            receiveShadow
            position={[-108.31, -749.15, 54.62]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[21.59, 4.39, 0.8]}
          />
        </group>
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.41}
          far={100000}
          near={-100000}
          position={[631.64, 415.25, 654.68]}
          rotation={[-0.57, 0.68, 0.38]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} />

          <OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
				/>
        </group>
      </>
    )
  }
  

