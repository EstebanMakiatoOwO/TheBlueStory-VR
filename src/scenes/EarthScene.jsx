import { Stars, Environment, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, RepeatWrapping } from 'three'

export function EarthScene() {
  const earthRef = useRef()
  
  const texture = useTexture(`${import.meta.env.BASE_URL}textures/tierra.png`)
  texture.wrapS = texture.wrapT = RepeatWrapping

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2 
    }

    if (!state.xr.isPresenting) {
      const radius = 8 
      const speed = 0.1 
      const time = state.clock.elapsedTime * speed
      
      state.camera.position.x = Math.sin(time) * radius
      state.camera.position.z = Math.cos(time) * radius
      state.camera.position.y = 2
      
      state.camera.lookAt(new Vector3(0, 0, 0))
    }
  })
  
  return (
    <>
      <Stars radius={80} depth={40} count={2000} factor={4} saturation={0} fade />
      
      <mesh ref={earthRef} position={[0, 1.6, -3]}>
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
