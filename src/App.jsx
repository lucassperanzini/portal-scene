
import './App.css'
import { Canvas } from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import { Environment } from '@react-three/drei';
import { Alien } from './Componentes/Alien';
import Frog from './Componentes/Frog';
import { MonsterPortal } from './Componentes/MonsterPortal';
import Orc from './Componentes/Orc';
import { useState } from 'react';

function App({canvasSize}) {

const [active,setActive] = useState(null)

return(
<>
<Canvas camera={{position:[0,0,10], fov:30}}  style={{width:canvasSize + '%', height:'100vh'}} >
<Environment preset='sunset'></Environment>
<ambientLight intensity={1}/>

   <MonsterPortal active={active} setActive={setActive} colorText={'#803286'} rotation-y={Math.PI / 8}  name='Alien' position-x={-3}texture={'./image.webp'}>
      <Alien position-y={-1} scale={0.6}></Alien>
   </MonsterPortal>

   <MonsterPortal active={active} setActive={setActive} colorText={'#c8a730'}  name='Oto' texture={'./sapo5.webp'}>
      <Frog position-y={-1}  scale={0.6}></Frog>
   </MonsterPortal>
   
   <MonsterPortal active={active} setActive={setActive}  colorText={'#9db056'}rotation-y={-Math.PI / 8}  name='Orc' position-x={3} texture={'./ORC3.webp'}>
      <Orc position-y={-1} scale={0.6}></Orc>
   </MonsterPortal>
 
<OrbitControls></OrbitControls>

</Canvas>
</>

)
}
export default App
