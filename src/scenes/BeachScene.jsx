import React from 'react'
import { Environment, MeshDistortMaterial, OrbitControls, Cloud, useTexture, PointerLockControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

export function BeachScene() {
  // Carga mapas de arena
  const sandTexture = useTexture(`${import.meta.env.BASE_URL}textures/materials/sand/aerial_beach_01_diff_1k.jpg`)
  const sandDisplacement = useTexture(`${import.meta.env.BASE_URL}textures/materials/sand/aerial_beach_01_disp_1k.png`)
  const sandRoughness = useTexture(`${import.meta.env.BASE_URL}textures/materials/sand/aerial_beach_01_rough_1k.jpg`)
  sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping
  sandDisplacement.wrapS = sandDisplacement.wrapT = THREE.RepeatWrapping
  sandRoughness.wrapS = sandRoughness.wrapT = THREE.RepeatWrapping

  // Geometría personalizada para la arena con pendiente
  const sandWidth = 100
  const sandHeight = 300 // alargado para que la arena llegue hasta la luna
  const sandSegmentsW = 300
  const sandSegmentsH = 160 // más segmentos para suavidad
  const sandGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const uvs = []
    for (let i = 0; i <= sandSegmentsH; i++) {
      for (let j = 0; j <= sandSegmentsW; j++) {
        const x = (j / sandSegmentsW - 0.5) * sandWidth
        const y = (i / sandSegmentsH - 0.5) * sandHeight
        let z = 0
        if (y < 0) {
          z = -Math.pow(Math.abs(y) / (sandHeight * 0.5), 2) * 50 // curva cuadrática suave
        }
        vertices.push(x, z, y)
        uvs.push(j / sandSegmentsW, i / sandSegmentsH)
      }
    }
    const indices = []
    for (let i = 0; i < sandSegmentsH; i++) {
      for (let j = 0; j < sandSegmentsW; j++) {
        const a = i * (sandSegmentsW + 1) + j
        const b = a + sandSegmentsW + 1
        indices.push(a, b, a + 1)
        indices.push(b, b + 1, a + 1)
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    geometry.setIndex(indices)
    geometry.computeVertexNormals()
    return geometry
  }, [])

  // Posición inicial de la cámara
  const { camera } = useThree()
  React.useEffect(() => {
    camera.position.set(10, 5, 3.5  ) // ejemplo: mueve la cámara a otro lado
    camera.lookAt(0, 1, -30)
  }, [camera])

  // Rotación de estrellas alrededor de la luna
  const starsRef = React.useRef()
  useFrame((_, delta) => {
    if (starsRef.current) {
      // Rotar el grupo de estrellas alrededor de la luna (eje X, centro en la luna)
      starsRef.current.position.set(50, 0, 5)
      starsRef.current.rotation.z += delta * 0.1
    }
  })

  // Animar la luna descendiendo usando useFrame para no afectar las nubes
  const moonY = React.useRef(16)
  useFrame(() => {
    if (moonY.current > 2) {
      moonY.current -= 1
    }
  })

  return (
    <>
      {/* Suelo de arena con pendiente */}
      <mesh geometry={sandGeometry} rotation={[0, 0, 0]}>
        <meshStandardMaterial 
          map={sandTexture}
          displacementMap={sandDisplacement}
          displacementScale={0.2}
          roughnessMap={sandRoughness}
          roughness={1}
        />
      </mesh>
      {/* Mar animado que sube y baja */}
      <AnimatedWater position={[0, 0.2, -30]} />
      {/* Cielo nocturno */}
      <color attach="background" args={["#000"]} />
      {/* Estrellas como en la escena de la tierra, girando alrededor de la luna */}
      <group ref={starsRef} >
        <Stars
          radius={80}
          depth={40}
          count={2000}
          factor={5}
          saturation={0}
          fade
        />
      </group>
      {/* Luna brillante */}
      <mesh position={[0, moonY.current, -120]} rotation={[0, 18, 0]}>
        <sphereGeometry args={[30, 32, 50]} />
        <meshStandardMaterial 
          map={useTexture(`${import.meta.env.BASE_URL}textures/luna.jpg`)}
          color="#fff"
          metalness={0.2}
          roughness={0.7}
          emissive="#e0eafc"
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* Muchas nubes reutilizadas en diferentes posiciones para mejor rendimiento */}
      {[ // Nubes
        [0, 10, -10], [-20, 12, -25], [20, 14, -35], [10, 16, -20],
        [15, 18, -30], [-15, 14, -40], [25, 12, -50], [-25, 16, -45],
      ].map((pos, i) => (
        <Cloud key={i} position={[...pos]} opacity={0.4 + (i%4)*0.05} speed={0.2} width={14} depth={2} segments={12} />
      ))}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} />
      <PointerLockControls />
    </>
  )
}

function AnimatedWater(props) {
  const ref = React.useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      // Agua más calmada: menor amplitud y menor velocidad
      ref.current.position.y = 0.05 + Math.sin(clock.getElapsedTime() * 0.3) * 0.12
    }
  })
  return (
    <mesh ref={ref} {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 60, 64, 64]} />
      <meshPhysicalMaterial 
        color="#2196f3"
        metalness={0.5}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={0.8}
        transmission={0.7}
        opacity={0.7}
        transparent
      />
      <MeshDistortMaterial 
        color="#007bd5" 
        distort={0.15} // menos distorsión
        speed={0.5} // olas más lentas
        transparent 
        opacity={0.7} 
      />
    </mesh>
  )
}
