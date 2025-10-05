import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { EarthScene } from './scenes/EarthScene'
import { Transition } from './components/Transition'
import { Menu } from './components/Menu'
import './App.css'

// Create XR store at the root level
const xrStore = createXRStore()

function Scene() {
  return (
    <Transition onTransitionComplete={() => console.log('Transition complete')}>
      <EarthScene />
    </Transition>
  )
}

export default function App() {
  const [showMenu, setShowMenu] = useState(true)

  const handleStartVR = async () => {
    try {
      setShowMenu(false)
      // Small delay to ensure scene is mounted
      setTimeout(() => {
        xrStore.enterVR()
      }, 100)
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
        <Canvas style={{ background: 'black', width: '100%', height: '100%' }}>
          <XR store={xrStore}>
            <Scene />
          </XR>
        </Canvas>
      )}
    </div>
  )
}
