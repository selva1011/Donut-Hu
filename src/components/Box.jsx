import { Canvas } from '@react-three/fiber'
import React from 'react'

const Box = () => {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            <directionalLight castShadow intensity={1} position={[4, 10, 4]} />
            <ambientLight />
        </Canvas>
    )
}

export default Box