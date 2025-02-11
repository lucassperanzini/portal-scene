import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'


export default function Frog(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Frog.gltf')
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
      actions.Idle.reset().fadeIn(0.5).play()
  
      return() => actions['Idle'].fadeOut(0.5)
      
    }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <skinnedMesh
            name="Frog"
            geometry={nodes.Frog.geometry}
            material={materials.Atlas}
            skeleton={nodes.Frog.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Frog.gltf')