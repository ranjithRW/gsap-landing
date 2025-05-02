import React from 'react';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import ScrollingCat from './model/ScrollingCat';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Landing />

      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <ScrollControls pages={2} damping={4}>
          <ScrollingCat />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
