import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ImportedDesign = ({ path, ...props }) => {
    const modelRef = useRef();
    const selectedColour = useSelector((state) => state.color.selectedColor)

    console.log("selva", selectedColour)

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    const { scene } = useGLTF(path);

    useEffect(() => {
        const part = scene.getObjectByName("Icing");
        if (part) {
            if (selectedColour) {
                part.material.color.set(selectedColour);
            } 
        }
    }, [scene, selectedColour]);

    //#FF869FFF

    return (
        <group ref={modelRef} {...props}>
            <primitive object={scene} />
            <OrbitControls enablePan={false} enableZoom={false} target={modelRef.current?.position} />
        </group>
    );
};

export default ImportedDesign;
