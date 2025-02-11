import React from 'react'
import { Canvas } from '@react-three/fiber'
import ImportedDesign from './ImportedDesign'
import { Text } from '@react-three/drei'

const Donut = () => {
    return (
        <Canvas camera={{ position: [2, 2, 3] }} >
            <ImportedDesign path="/donutfinal.glb" scale={2} position={[0, 0, 0]} />
            {/* <OrbitControls /> */}
            {/* <AnimatedBox /> */}
            <directionalLight castShadow intensity={1} position={[4, 10, 4]} />
            <ambientLight />
        </Canvas>
    )
}

export default Donut