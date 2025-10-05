import React, { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Vector3, ShaderMaterial } from 'three'

// Shader for smooth fade transition
const fadeShader = {
  uniforms: {
    opacity: { value: 0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float opacity;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, opacity);
    }
  `
}

export function Transition({ children, onTransitionComplete }) {
  const { camera } = useThree()
  const [fadeMaterial] = useState(() => new ShaderMaterial({
    ...fadeShader,
    transparent: true,
    depthTest: false,
    depthWrite: false
  }))

  useEffect(() => {
    const startTransition = () => {
      // Set initial position
      camera.position.set(0, 1.7, -15) // Human eye level height
      
      // Walking animation
      let progress = 0
      let stepPhase = 0
      const animate = () => {
        if (progress < 1) {
          progress += 0.005 // Very slow movement forward
          stepPhase += 0.1 // Controls up/down movement frequency
          
          // Calculate position
          const z = -15 + (12 * progress) // Move from -15 to -3
          const y = 1.7 + Math.sin(stepPhase) * 0.05 // Slight up and down movement
          
          // Update camera position
          camera.position.set(0, y, z)
          
          // Make camera look slightly up at the Earth as we get closer
          const lookAtY = 2 + (progress * 0.5) // Gradually look up more
          camera.lookAt(new Vector3(0, lookAtY, -3))

          // Smooth fade transition in last 30% of journey
          if (progress > 0.7) {
            const fadeProgress = (progress - 0.7) / 0.3 // Normalize to 0-1
            fadeMaterial.uniforms.opacity.value = fadeProgress
          }
          
          requestAnimationFrame(animate)
        } else {
          onTransitionComplete?.()
        }
      }
      animate()
    }
    
    // Start transition after 5 seconds
    const timer = setTimeout(startTransition, 5000)
    
    // Cleanup
    return () => clearTimeout(timer)
  }, [camera, onTransitionComplete, fadeMaterial])

  return (
    <>
      {children}
      <mesh position={[0, 0, -0.1]} renderOrder={999}>
        <planeGeometry args={[2, 2]} />
        <primitive object={fadeMaterial} attach="material" />
      </mesh>
    </>
  )
}
