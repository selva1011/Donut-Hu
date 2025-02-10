import React from 'react'
import { Canvas } from '@react-three/fiber'
import ImportedDesign from './ImportedDesign'
import { Text } from '@react-three/drei'

const Donut = () => {
    return (
        <Canvas camera={{ position: [2, 2, 3] }} >
                 {/* <Text position={[0, 1.5, 0]} fontSize={0.5} color="white">
                    Selva
                  </Text> */}
            <ImportedDesign path="/donutfinal.glb" scale={2} position={[0, 0, 0]} />
            {/* <OrbitControls /> */}
            {/* <AnimatedBox /> */}
            <directionalLight position={[4, 10, 4]} />
            <ambientLight />
        </Canvas>
    )
}

export default Donut