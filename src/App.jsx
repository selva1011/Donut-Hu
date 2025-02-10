import { Canvas } from '@react-three/fiber'
import React from 'react'
import AnimatedBox from './components/AnimatedBox'
import { FirstPersonControls, OrbitControls, Text } from '@react-three/drei'
import ImportedDesign from './components/ImportedDesign'
import Donut from './components/donut'

const App = () => {
  return (
    <div className='h-screen w-screen bg-black'>
      <h1 className='text-4xl mx-auto absolute z-10 bg-transparent'>selva</h1>
      {/* <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 5] }}>
      <Text
      position={[0, 0, 0]} // Centered in the scene
      fontSize={0.5} // Adjust text size
      color="white" // Text color
      anchorX="center" // Align text to center
      anchorY="middle"
    >
      Selva
    </Text>
      </Canvas> */}
     <Donut />
    </div>
  )
}

export default App