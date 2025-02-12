
import './App.css'
import {useThree } from "@react-three/fiber";
import {CameraControls, OrbitControls} from '@react-three/drei'
import { Environment } from '@react-three/drei';
import { Alien } from './Componentes/Alien';
import Frog from './Componentes/Frog';
import { MonsterPortal } from './Componentes/MonsterPortal';
import Orc from './Componentes/Orc';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as THREE from 'three'

function App() {

const [active,setActive] = useState(null)
const controlsRef = useRef()
const {scene, camera} = useThree()


useEffect(() => {
   if(active){

      const targetPosition = new THREE.Vector3()
     const p = scene.getObjectByName(active).getWorldPosition(targetPosition)
     

   }
   // console.log(position)
   // gsap.to(portalMaterial.current, {
   //    blend: worldActive ? 1 : 0,
   //    duration: 0.5,
   //    ease: "linear",
   //  });



  
 }, [active]);
 

return(
<>

<Environment preset='sunset'></Environment>
<ambientLight intensity={1}/>
<CameraControls></CameraControls>

   <MonsterPortal active={active} setActive={setActive} colorText={'#803286'} rotation-y={Math.PI / 8}  name='Alien' position-x={-3}texture={'./image.webp'}>
      <Alien position-y={-1} scale={0.6}></Alien>
   </MonsterPortal>

   <MonsterPortal active={active} setActive={setActive} colorText={'#c8a730'}  name='Oto' texture={'./sapo5.webp'}>
      <Frog position-y={-1}  scale={0.6}></Frog>
   </MonsterPortal>
   
   <MonsterPortal active={active} setActive={setActive}  colorText={'#9db056'}rotation-y={-Math.PI / 8}  name='Orc' position-x={3} texture={'./ORC3.webp'}>
      <Orc position-y={-1} scale={0.6}></Orc>
   </MonsterPortal>
 


</>

)
}
export default App
