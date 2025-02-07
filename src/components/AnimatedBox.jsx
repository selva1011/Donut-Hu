import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedBox = () => {
    const boxref = useRef()

    useFrame(() => {
        boxref.current.rotation.x += 0.005;
        boxref.current.rotation.y += 0.005;
        boxref.current.rotation.z += 0.005;
    });

    return (
        <mesh ref={boxref}>
            <sphereGeometry  args={[1.5, 32, 32]}/>
            <meshStandardMaterial wireframe color={0x00ff00} />
        </mesh>
    )
}

export default AnimatedBox