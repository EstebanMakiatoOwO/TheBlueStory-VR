import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { VRButton, XR, useXR, createXRStore } from '@react-three/xr'
import { EarthScene } from './scenes/EarthScene'
import { Transition } from './components/Transition'
import { Menu } from './components/Menu'
import './App.css'

const store = createXRStore()

function Scene() {
  const { isPresenting } = useXR()

  useEffect(() => {
    if (isPresenting) {
      console.log('VR session started')
    } else {
      console.log('VR session ended')
    }
  }, [isPresenting])

  return (
    <>
      <Transition onTransitionComplete={() => console.log('Transition complete')}>
        <EarthScene />
      </Transition>
    </>
  )
}

export default function App() {
  const [showMenu, setShowMenu] = useState(true)
  const [vrSupported, setVRSupported] = useState(false)

  useEffect(() => {
    // Check if WebXR is supported
    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-vr')
        .then(supported => {
          setVRSupported(supported)
          console.log('VR Support:', supported)
        })
    }
  }, [])

  const handleStartVR = async () => {
    if (!vrSupported) {
      alert('VR is not supported in your browser or no VR device is connected')
      return
    }
    
    try {
      setShowMenu(false)
      store.enterVR()
    } catch (error) {
      console.error('Error entering VR:', error)
      setShowMenu(true)
    }
  }

  const handleStartNonVR = () => {
    setShowMenu(false)
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      {showMenu ? (
        <Menu onStartVR={handleStartVR} onStartNonVR={handleStartNonVR} />
      ) : (
        <>
          <VRButton store={store} />
          <Canvas style={{ background: 'black', width: '100%', height: '100%' }}>
            <XR referenceSpace="local" store={store}>
              <Scene />
            </XR>
          </Canvas>
        </>
      )}
    </div>
  )
}
