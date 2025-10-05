import { Stars, Environment, useVideoTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export function EarthScene() {
  const earthRef = useRef()
  
  const videoTexture = useVideoTexture("/textures/tierra.mp4", {
    loop: true,
    muted: true,
    start: true
  })

  useFrame((state, delta) => {
    // Rotate the Earth
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.5  // Made rotation faster
    }

    // Orbit camera around Earth
    const radius = 10
    const speed = 0.2
    const time = state.clock.elapsedTime * speed
    
    // Move camera in a circular path
    state.camera.position.x = Math.sin(time) * radius
    state.camera.position.z = Math.cos(time) * radius
    state.camera.position.y = 2
    
    // Always look at Earth's center
    state.camera.lookAt(new Vector3(0, 0, 0))
  })
  
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      {/* Center the Earth at origin */}
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]}/>
        <meshStandardMaterial 
          map={videoTexture}
          roughness={0.5}
          metalness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Lighting for consistent visibility during orbit */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="sunset" />
    </>
  )
}
