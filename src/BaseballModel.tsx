import {FC, Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber'
import Baseball from './Baseball';
import { useContextBridge } from '@react-three/drei';
import { BaseballContext } from './BaseballContext';
import * as THREE from 'three'

const BaseballModel : FC <{}> = () => {
    const ContextBridge = useContextBridge(BaseballContext);
    return (
        <Canvas style={{ background: "#456180", height: "100%" }}>
            <ContextBridge>
                    <ambientLight intensity={1} />
                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Suspense fallback={null}>
                    <primitive object={new THREE.AxesHelper(10)} />
                        <Baseball scale={20}/>
                    </Suspense>
            </ContextBridge>
        </Canvas>
    )
}

export default BaseballModel;