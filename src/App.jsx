import { Canvas } from '@react-three/fiber'
import React from 'react'
import AnimatedBox from './components/AnimatedBox'
import { FirstPersonControls, OrbitControls, Text } from '@react-three/drei'
import ImportedDesign from './components/ImportedDesign'

const App = () => {
  return (
    <div className='h-screen w-screen bg-black'>
      
      <Canvas camera={{position: [2, 2, 3]}} >
     
        <ImportedDesign path="/donutfinal.glb"  scale={2} position={[0, 0, 0]}/>
        
        {/* <OrbitControls /> */}
        
        {/* <AnimatedBox /> */}
        <directionalLight position={[4, 10, 4]} />
        <ambientLight />
      </Canvas>
    </div>
  )
}

export default App