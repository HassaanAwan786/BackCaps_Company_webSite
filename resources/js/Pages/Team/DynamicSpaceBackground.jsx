import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DynamicSpaceBackground = ({ themeColors }) => {
    const mountRef = useRef(null);
    const starsRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: themeColors.starColor,
            size: 0.1,
            transparent: true,
            opacity: 0.3
        });
        const starVertices = [];
        for (let i = 0; i < 8000; i++) {
            starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        starsRef.current = stars;
        scene.add(stars);

        camera.position.z = 25;

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0001;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount && mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
            // Cleanup three.js memory
            starGeometry.dispose();
            starMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    // Update star color when theme changes
    useEffect(() => {
        if (starsRef.current && themeColors) {
            starsRef.current.material.color.setHex(themeColors.starColor);
        }
    }, [themeColors]);

    return (
        <div ref={mountRef} className="fixed inset-0 z-0 bg-[#02020a]">
            <div className={`absolute top-[10%] left-[20%] w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none transition-all duration-1000 opacity-20 ${themeColors.bgGlow}`} />
        </div>
    );
};

export default DynamicSpaceBackground;
