import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Clone } from '@react-three/drei'

export function Alien(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/Alien.gltf')
  const { nodes, materials } = scene // Acessa diretamente sem `useGraph`
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    

    actions.Idle.reset().fadeIn(0.5).play()

    return() => actions['Idle'].fadeOut(0.5)
    
  }, [actions])

  return (
    <group ref={group} {...props}>

      <Clone object={scene} />
     
    </group>
  )
}

useGLTF.preload('/models/Alien.gltf')
