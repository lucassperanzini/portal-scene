
import './App.css'
import {useThree } from "@react-three/fiber";
import {CameraControls, OrbitControls} from '@react-three/drei'
import { Environment } from '@react-three/drei';
import { Alien } from './Componentes/Alien';
import Frog from './Componentes/Frog';
import { MonsterPortal } from './Componentes/MonsterPortal';
import Orc from './Componentes/Orc';
import { use, useEffect, useState } from 'react';
import { useRef } from 'react';
import * as THREE from 'three'
import { useCursor } from '@react-three/drei';

function Experience() {

const [active,setActive] = useState(null)
const controlsRef = useRef()

const [hovered,setHover]= useState(null)
useCursor(hovered)

const {scene} = useThree()


useEffect(() => {
   if(active){

     const targetPosition = new THREE.Vector3()
     scene.getObjectByName(active).getWorldPosition(targetPosition)
     controlsRef.current.smoothTime = 0.5; // 🔥 Define a duração da animação (em segundos)
     controlsRef.current.setLookAt(
      0,
      0,
      7,
      targetPosition.x,
      targetPosition.y,
      targetPosition.z,
      true

     )

   }else{
      controlsRef.current.setLookAt(0,0,10,0,0,0,true)
   }



  
 }, [active]);
 

return(
<>

<Environment preset='sunset'></Environment>
<ambientLight intensity={1}/>
<CameraControls enableScroll={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI/6} ref={controlsRef}></CameraControls>

   <MonsterPortal hovered={hovered} setHover={setHover} active={active} setActive={setActive} colorText={'#803286'} rotation-y={Math.PI / 8}  name='Alien' position-x={-3}texture={'./image.webp'}>
      <Alien position-y={-1} hovered={hovered ==='Alien'} scale={0.6}></Alien>
   </MonsterPortal>

   <MonsterPortal hovered={hovered} setHover={setHover} active={active} setActive={setActive} colorText={'#c8a730'}  name='Frog' texture={'./sapo5.webp'}>
      <Frog position-y={-1} hovered={hovered ==='Frog'}  scale={0.6}></Frog>
   </MonsterPortal>
   
   <MonsterPortal hovered={hovered} setHover={setHover} active={active} setActive={setActive}  colorText={'#9db056'}rotation-y={-Math.PI / 8}  name='Orc' position-x={3} texture={'./ORC3.webp'}>
      <Orc position-y={-1} hovered={hovered ==='Orc'} scale={0.6}></Orc>
   </MonsterPortal>
 


</>

)
}
export default Experience
