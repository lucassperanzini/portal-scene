import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Clone } from '@react-three/drei'

export function Alien({hovered,...props}) {
  const group = useRef()
  const { scene, animations,nodes, materials } = useGLTF('/models/Alien.gltf')
  const { actions } = useAnimations(animations, group)


 useEffect(() => {

      const anim = hovered? 'Yes':'Idle'
      actions[anim].reset().fadeIn(0.5).play()
  
      return() => actions[anim].fadeOut(0.5)
      
    }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Scene">
      <group name="CharacterArmature">
        <skinnedMesh
          name="Alien"
          geometry={nodes.Alien.geometry}
          material={materials.Atlas}
          skeleton={nodes.Alien.skeleton}
        />
        <primitive object={nodes.Root} />
      </group>
    </group>
  </group>
  )
}

useGLTF.preload('/models/Alien.gltf')
