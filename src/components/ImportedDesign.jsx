import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useEffect } from "react";

const ImportedDesign = ({ path, ...props }) => {
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    const { scene } = useGLTF(path);

    useEffect(() => {
        const part = scene.getObjectByName("Icing"); 
        if (part) {
          part.material.color.set(0xFF0000); // Green
        }
      }, [scene]);

    //#FF869FFF

    return (
        <group ref={modelRef} {...props}>
            <primitive object={scene} />
            <OrbitControls enablePan={false} enableZoom={false} target={modelRef.current?.position} />
        </group>
    );
};

export default ImportedDesign;
