import React from 'react'
import { Stars, Environment, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, RepeatWrapping } from 'three'

export function EarthScene() {
  const earthRef = useRef()
  const starsRef = useRef()
  
  const texture = useTexture(`${import.meta.env.BASE_URL}textures/tierra.png`)
  texture.wrapS = texture.wrapT = RepeatWrapping

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2
    }
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.1
    }
  })
  
  return (
    <>
      <group ref={starsRef}>
        <Stars radius={80} depth={40} count={2000} factor={4} saturation={0} fade />
      </group>
      
      <mesh ref={earthRef} position={[0, 0, -4]}>
        <sphereGeometry args={[2, 24, 24]}/> 
        <meshStandardMaterial 
          map={texture}
          roughness={0.7}
          metalness={0.3}
          envMapIntensity={0.8}
        />
      </mesh>

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <Environment preset="sunset" />
    </>
  )
}
