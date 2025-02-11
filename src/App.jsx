import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import AnimatedBox from './components/AnimatedBox'
import { FirstPersonControls, OrbitControls, Text } from '@react-three/drei'
import ImportedDesign from './components/ImportedDesign'
import Donut from './components/donut'
import RowColour from './components/RowColour'

const App = () => {
  const [click, setClick] = useState(true)
  return (
    <div className='h-screen w-screen bg-[radial-gradient(circle,rgba(163,240,255,0.96),rgba(0,149,157,0.98))]"'>
      <h1 className='text-4xl mx-auto absolute z-10 bg-transparent hidden'>selva</h1>
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
      <div className='fixed z-2 h-16 p-auto w-full flex justify-center items-center bg-none text-black'>
        <button className='text-2xl text-[#004963] font-semibold' onClick={() => setClick(!click)}>{click ? "Hide Me!!" : "Click me!!"}</button>
      </div>
      {click ? <Donut /> : null}
     <div className='fixed bottom-4 h-16 flex justify-center items-center w-full'>
      <RowColour />
     </div>

    </div>
  )
}

export default App