import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';

const ImportedDesign = ({ path, ...props }) => {
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    const { scene } = useGLTF(path);

    return (
        <group ref={modelRef} {...props}>
            <primitive object={scene} />
            <OrbitControls enablePan={false} enableZoom={false} target={modelRef.current?.position} />
        </group>
    );
};

export default ImportedDesign;
