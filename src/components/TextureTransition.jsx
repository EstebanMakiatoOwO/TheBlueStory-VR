import React, { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { ShaderMaterial } from 'three'

const textureTransitionShader = {
  uniforms: {
    textureA: { value: null },
    textureB: { value: null },
    progress: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D textureA;
    uniform sampler2D textureB;
    uniform float progress;
    varying vec2 vUv;

    void main() {
      vec4 colorA = texture2D(textureA, vUv);
      vec4 colorB = texture2D(textureB, vUv);
      gl_FragColor = mix(colorA, colorB, smoothstep(0.0, 1.0, progress));
    }
  `
}

export function TextureTransition({ 
  textureA, 
  textureB, 
  onComplete,
  children,
  startDelay = 5000 // 5 seconds delay
}) {
  const [transitionMaterial] = useState(() => {
    const material = new ShaderMaterial({
      ...textureTransitionShader,
      transparent: true
    })
    material.uniforms.textureA.value = textureA
    material.uniforms.textureB.value = textureB
    return material
  })

  const state = useRef({
    started: false,
    progress: 0,
    completed: false
  })

  // Start transition after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      state.current.started = true
    }, startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  useFrame(() => {
    if (!state.current.started || state.current.completed) return

    if (state.current.progress < 1) {
      // Very slow increment for smooth transition
      state.current.progress += 0.001
      
      // Smooth easing
      const smoothProgress = Math.sin(state.current.progress * Math.PI * 0.5)
      transitionMaterial.uniforms.progress.value = smoothProgress

      if (state.current.progress >= 1) {
        state.current.completed = true
        onComplete?.()
      }
    }
  })

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      material: transitionMaterial
    })
  )
}
