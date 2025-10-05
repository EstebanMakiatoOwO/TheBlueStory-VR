import React, { useRef } from 'react'
import { Stars, Environment, useTexture, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RepeatWrapping } from 'three'
import { useXR } from '@react-three/xr'
import { TextureTransition } from '../components/TextureTransition'

export function EarthScene({ onTextureTransitionComplete }) {
  const earthRef = useRef()
  const starsRef = useRef()
  const { isPresenting } = useXR()
  
  // Load both textures
  const textureA = useTexture(`${import.meta.env.BASE_URL}textures/tierra.png`)
  const textureB = useTexture(`${import.meta.env.BASE_URL}textures/tierra_ocean_colors.jpg`) // Will be updated with new texture
  textureA.wrapS = textureA.wrapT = RepeatWrapping
  textureB.wrapS = textureB.wrapT = RepeatWrapping

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
        <Stars 
          radius={80} 
          depth={40} 
          count={2000} 
          factor={4} 
          saturation={0} 
          fade 
        />
      </group>
      
      
      <group position={[0, isPresenting ? 1.6 : 0, -4]}>
        <TextureTransition
          textureA={textureA}
          textureB={textureB}
          onComplete={onTextureTransitionComplete}
          speed={0.3}
        >
          <mesh ref={earthRef} >
            <sphereGeometry args={[5, 32, 32]}/>
          </mesh>
        </TextureTransition>
      </group>

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <Environment preset="sunset" />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  )
}
