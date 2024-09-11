import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ThreeDModel() {
  const { scene } = useGLTF('/path-to-your-model.glb'); // Replace with your model path

  return (
    <Canvas
      camera={{ position: [0, 1, 3], fov: 50 }}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeDModel;
