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
         
            <h2 className="mt-4 text-green-700 text-lg font-bold">
                This is a modern React landing page with sidebar animation using GSAP if u refresh page.
                <br/>
                User can ctrl model by scroll😁 just try and explore😫😎
            </h2>

        </div>
    );
};

export default Landing;
