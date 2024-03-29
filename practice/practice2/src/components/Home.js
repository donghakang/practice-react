// import Footer from "./components/footer";


import * as THREE from "three";

import React, { Suspense, useRef, useState } from "react";
import "../App.scss";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useSpring, animated } from "react-spring";
import { OrbitControls, useGLTF, softShadows, Html } from "@react-three/drei";
import { Link } from "react-router-dom";

import Nav from "./Nav";

import Title from "./ui/Title"
import Statue from "./ui/Statue"
import Mac from "./ui/Laptop"

let StatueClicked = false;
let MacClicked = false;
let PhoneClicked = false;

softShadows();
const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 2, -10]} intensity={0.5} color="red" />
      <pointLight position={[10, 3, -5]} intensity={1.5} color="blue" />
      <pointLight position={[30, -10, -30]} intensity={1.5} color="green" />
      <directionalLight
        castShadow
        position={[0, 40, 40]}
        intensity={5.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-radius={8}
      />
    </group>
  );
};

const Ground = () => {
  const { viewport } = useThree();
  return (
    <group>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -20, 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#cccccc" />
      </mesh>
    </group>
  );
};

/// - Individual objects

/*
function Phone(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/phone.gltf')

  const [hover, setHover] = useState(false)
  const animate = useSpring({ opacity: hover ? 1 : 0 })

  const vec        = new THREE.Vector3(2, 2, 2);
  const vec_origin = new THREE.Vector3(1, 1, 1);

  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    group.current.rotation.y -= 0.04
    group.current.rotation.z = 0.27 * Math.sin(time) ;         // Back and forth animation
    if (hover) {
      group.current.scale.lerp(vec, 0.1);
    } else {
      group.current.scale.lerp(vec_origin, 0.1);
    }
  })

  return (

    <group position={[-20, 0, 10]}>
      <group ref={group} {...props} dispose={null}>
        <group scale={[.7, .7, .7]} position={[0, 0, 2.5]} rotation={[Math.PI / 2, 0, 0]}>
          <group
            onPointerDown={(e) => {
              PhoneClicked = !PhoneClicked;
              MacClicked = false;
              StatueClicked = false;

              window.appHistory.push("/project")
              // window.location.href = 'https://www.github.com/donghakang'; 
            }}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <mesh position={[0, -5, 0]} rotation={[0, 0, 0]} scale={[10, 10, 30]}>
              <boxBufferGeometry position={[0, 0, 0]} />
              <meshStandardMaterial transparent={true} opacity={0.0} />
            </mesh>
          </group>
          <mesh castShadow material={materials.material_0} geometry={nodes.mesh_0.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials.Phone_body} geometry={nodes.mesh_1.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials.Ariel} geometry={nodes.mesh_2.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_3.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials.phone_Face} geometry={nodes.mesh_4.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.003']} geometry={nodes.mesh_5.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials.Screen} geometry={nodes.mesh_6.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.004']} geometry={nodes.mesh_7.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.005']} geometry={nodes.mesh_8.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.010']} geometry={nodes.mesh_9.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.006']} geometry={nodes.mesh_10.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.007']} geometry={nodes.mesh_11.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.008']} geometry={nodes.mesh_12.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials['Material.009']} geometry={nodes.mesh_13.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh castShadow material={materials.SVGMat} geometry={nodes.mesh_14.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
        </group>

      </group>
      <Html scaleFactor={80}>
        <animated.div style={animate} className="content">
          CONTACT
        </animated.div>
      </Html>
    </group>

  )
}
*/

function Objects(props) {
  const obj = useRef();
  useFrame(() => {
    // if (!(PhoneClicked || MacClicked || StatueClicked)) {
    //   obj.current.rotation.y += 0.005
    // }
    // obj.current.rotation.y += 0.005
  });

  return (
    <group ref={obj}>
      <Mac />
      <Statue />
      {/* < Phone /> */}
    </group>
  );
}

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [10, 10, 20], fov: 100 }}
        style={{
          width: "70vw",
          height: "100vh",
          position: "absolute",
          top: "0%",
          left: "30vw",
        }}
      >
        <Light />

        <Suspense fallback={null}>
          <Objects />
        </Suspense>
        {/* <OrbitControls/> */}
      </Canvas>
      {/* <Footer /> */}
      <Title />
    </div>
  );
}

export default Home;
