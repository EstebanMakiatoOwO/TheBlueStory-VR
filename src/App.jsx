import React from 'react'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { EarthScene } from './scenes/EarthScene'
import { Transition } from './components/Transition'
import './App.css'

const store = createXRStore()

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          padding: '10px 20px',
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={() => store.enterVR()}
      >
        Enter VR
      </button>
      <Canvas style={{ background: 'black', width: '100%', height: '100%' }}>
        <XR store={store}>
          <Transition onTransitionComplete={() => console.log('Transition complete')}>
            <EarthScene />
          </Transition>
        </XR>
      </Canvas>
    </div>
  )
}
