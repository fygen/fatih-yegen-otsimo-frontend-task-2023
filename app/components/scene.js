"use client"
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Link from 'next/link';


export default function Scene({}) {
    const gltf = useLoader(GLTFLoader, './models/a.gltf')
    return (
        <>
            <Link href="/" className='object-right'> back to main</Link>
            <Canvas className="aspect-video" camera={{ position: [-0.5, 1, 2] }} shadows>
                <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
                <primitive
                    object={gltf.scene}
                    position={[0, 1, 0]}
                    children-0-castShadow
                />
                <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
                    <meshStandardMaterial />
                </Circle>
                <OrbitControls autoRotate target={[0, 1, 0]} />
                <axesHelper args={[5]} />
                <Stats />
            </Canvas>
        </>
    )
}