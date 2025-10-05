import { Stars, Environment, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, RepeatWrapping } from 'three'

export function EarthScene() {
  const earthRef = useRef()
  
  // Usar imagen en lugar de video
  const texture = useTexture("/textures/tierra.png")
  texture.wrapS = texture.wrapT = RepeatWrapping

  useFrame((state, delta) => {
    // Rotate the Earth
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2  // Rotación más suave
    }

    // Orbit camera around Earth
    const radius = 8 // Reducido para mejor vista en móviles
    const speed = 0.1 // Más lento para mejor rendimiento
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
      <Stars radius={80} depth={40} count={2000} factor={4} saturation={0} fade />
      
      {/* Center the Earth at origin */}
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 24, 24]}/> {/* Reducida la geometría para mejor rendimiento */}
        <meshStandardMaterial 
          map={texture}
          roughness={0.7}
          metalness={0.3}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Lighting optimizado */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <Environment preset="sunset" />
    </>
  )
}
