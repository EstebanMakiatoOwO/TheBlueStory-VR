import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { Stars } from '@react-three/drei'

const store = createXRStore()

export default function App() {

  return (
    <>
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <Canvas>
        <XR store={store}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <mesh position={[0, 1, -15]}>
            <sphereGeometry args={[2, 32, 32]}/>
            <meshStandardMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  )
}