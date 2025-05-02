import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

function ScrollingCat() {
  const scroll = useScroll();
  const group = useRef();
  const { scene } = useGLTF('/cat.glb'); // ensure cat.glb is in public folder

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = scroll.offset * Math.PI * 2;
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.5}
      position={[0, -1, 0]} // adjust position as needed
    />
  );
}

export default ScrollingCat;
