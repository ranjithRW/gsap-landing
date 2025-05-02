// components/Sidebar.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Sidebar = () => {
  const sidebarRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -250, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="fixed left-0 top-0 h-full w-64 bg-green-700 text-white p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
