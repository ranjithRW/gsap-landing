// components/Landing.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Landing = () => {
    const titleRef = useRef();

    useEffect(() => {
        gsap.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div className="ml-64 p-10">
            <h1 ref={titleRef} className="text-4xl font-bold text-green-800 ">
                Welcome to My Website
            </h1>
            <p className="mt-6 text-gray-700 text-lg">
                This is a modern React landing page with sidebar animation using GSAP.
            </p>

        </div>
    );
};

export default Landing;
