import { useTexture } from "@react-three/drei"
import { RoundedBox } from "@react-three/drei"
import { MeshPortalMaterial } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import Sphere from "./sphere"
import { DoubleSide } from 'three';
import { Text } from "@react-three/drei"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function MonsterPortal({hovered,setHover,active,setActive,children, texture,name,colorText,fonte ='./font.ttf', ...props}) {

  const map = useTexture(texture)
  const portalMaterial = useRef()



  useEffect(() => {
    if (portalMaterial.current) {
      const worldActive = active === name;
      gsap.to(portalMaterial.current, {
        blend: worldActive ? 1 : 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  
  }, [active]);


  return (
    <group  {...props}  >
    <Text font={fonte} color={colorText} fontSize={0.4} position-z={0.051} position-y={-1.3}>{name}</Text>
    <RoundedBox name={name} onPointerEnter={()=>setHover(name)} onPointerLeave={()=>setHover(null)} onDoubleClick={()=>setActive(active === name? null : name )} args={[2,3,0.1]}>
         
       <MeshPortalMaterial ref={portalMaterial} side={DoubleSide}  >
          {children}
          <Environment preset='sunset'></Environment>
          <ambientLight intensity={2.5}/>
          <Sphere Envtexture={map}  scale={6}/>
       </MeshPortalMaterial>
    </RoundedBox>

    </group>
  )
}

