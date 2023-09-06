import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
  const panorama = useGLTF('assets/models/panorama.glb') 

  panorama.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.specular = 0;
    }
  });

  return (<primitive object={panorama.scene} scale={[10,10,10]} position={[100, 10, 0]} />)
}
 
export default function Scene() {
  
return (
    <Model />
  );
}