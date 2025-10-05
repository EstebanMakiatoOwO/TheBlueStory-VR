import React, { useState } from 'react'
import { EarthScene } from '../scenes/EarthScene'
import { Transition } from './Transition'

export function SceneController() {
  const [transitionPhase, setTransitionPhase] = useState('texture') // 'texture', 'camera', 'complete'

  const handleTextureTransitionComplete = () => {
    setTransitionPhase('camera')
  }

  const handleCameraTransitionComplete = () => {
    setTransitionPhase('complete')
  }

  return transitionPhase === 'texture' ? (
    <EarthScene onTextureTransitionComplete={handleTextureTransitionComplete} />
  ) : (
    <Transition onTransitionComplete={handleCameraTransitionComplete}>
      <EarthScene onTextureTransitionComplete={() => {}} />
    </Transition>
  )
}
