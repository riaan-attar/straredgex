import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Atom = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.5;
      groupRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={groupRef} scale={0.7}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FEBD59" emissive="#FEBD59" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      
      {/* Orbit 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#FEBD59" emissive="#FEBD59" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Orbit 2 */}
      <mesh rotation={[Math.PI / 2, Math.PI / 3, 0]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#FEBD59" emissive="#FEBD59" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Orbit 3 */}
      <mesh rotation={[Math.PI / 2, -Math.PI / 3, 0]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#FEBD59" emissive="#FEBD59" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Electrons */}
      <mesh position={[1, 0, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.5, 0.866, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.5, -0.866, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const Lightbulb = () => {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Glass Bulb */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={0.1} 
          chromaticAberration={0.05} 
          anisotropy={0.1} 
          distortion={0.1} 
          distortionScale={0.5} 
          temporalDistortion={0.0} 
          clearcoat={1} 
          attenuationDistance={0.5} 
          attenuationColor="#ffffff" 
          color="#f0f0f0" 
        />
      </mesh>
      
      {/* Base Connector */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.7, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screw Threads */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.3} />
      </mesh>
      
      {/* Base Tip */}
      <mesh position={[0, -0.8, 0]}>
        <sphereGeometry args={[0.3, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.8} />
      </mesh>
      
      {/* The Atom inside */}
      <group position={[0, 1.5, 0]}>
        <Atom />
      </group>
    </group>
  );
};

export const InteractiveBulb = () => {
  return (
    <div className="w-full h-[250px] md:h-[280px] cursor-grab active:cursor-grabbing rounded-custom overflow-hidden bg-forest/50">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FEBD59" />
        
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <Lightbulb />
        </Float>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
};

export default InteractiveBulb;
