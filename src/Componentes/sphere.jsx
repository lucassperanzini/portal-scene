import { useTexture } from "@react-three/drei"
import * as THREE from 'three'
export default function Sphere({Envtexture, ...props}){

    return(
        <mesh {...props} >
        <sphereGeometry ></sphereGeometry>
        <meshStandardMaterial  side={THREE.BackSide} map={Envtexture}/>
  </mesh>
    )
}