import React, { useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, ShaderMaterial } from 'three'
import { useXR, XROrigin } from '@react-three/xr'

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
  const { isPresenting } = useXR()
  const [fadeMaterial] = useState(() => new ShaderMaterial({
    ...fadeShader,
    transparent: true,
    depthTest: false,
    depthWrite: false
  }))

  const originRef = useRef()
  const transitionState = useRef({
    progress: 0,
    started: false,
    completed: false
  })

  useFrame(() => {
    if (!transitionState.current.started || transitionState.current.completed) return

    const state = transitionState.current
    if (state.progress < 1) {
      state.progress += 0.005

      if (originRef.current) {
        // Move XROrigin for VR position
        const z = -15 + (12 * state.progress)
        originRef.current.position.z = z
      }

      // Fade effect in last 30% of journey
      if (state.progress > 0.7) {
        const fadeProgress = (state.progress - 0.7) / 0.3
        fadeMaterial.uniforms.opacity.value = fadeProgress
      }
    } else if (!state.completed) {
      state.completed = true
      onTransitionComplete?.()
    }
  })

  useEffect(() => {
    // Start transition after delay
    const timer = setTimeout(() => {
      transitionState.current.started = true
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <XROrigin 
        ref={originRef} 
        position={[0, 0, -15]}
      >
        {children}
      </XROrigin>
      {!isPresenting && (
        <mesh position={[0, 0, -0.1]} renderOrder={999}>
          <planeGeometry args={[2, 2]} />
          <primitive object={fadeMaterial} attach="material" />
        </mesh>
      )}
    </>
  )
}
