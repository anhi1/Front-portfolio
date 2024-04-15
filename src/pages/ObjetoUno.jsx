import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const ObjetoUno = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2c2d30);
        const camera = new THREE.PerspectiveCamera(15, width / height, 0.01, 1000);
        scene.fog = new THREE.Fog(0x000000, 10, 40)
        scene.add(camera);
        camera.position.z = 6;
        camera.position.x = 6;
    
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.maxPolarAngle= Math.PI;
        controls.screenSpacePanning = true;
        controls.enableDamping = true;
        controls.enableZoom = false; // Desactivar el zoom

       

        
        const geometry = new THREE.BoxGeometry(1,1,1); // dimensiones x,y,z
        const material = new THREE.MeshPhongMaterial({ color: 0xeaeaea });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        // camera.lookAt(cube.position); // la cámara estará mirando directamente hacia el cubo desde su posición actual

        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // color - intensidad
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 15);
        pointLight.position.set(1,2,2);
        scene.add(pointLight);
        
        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            cube.rotation.y = elapsedTime;
            cube.rotation.x = elapsedTime;
            cube.position.y = Math.sin(elapsedTime);
            renderer.render(scene, camera); // Agregado para renderizar la escena en cada fotograma
            requestAnimationFrame(animate);
        }
        animate();

        // Clean up the scene (para que no aparezcan varios canvas)
        return () => {
            currentRef.removeChild(renderer.domElement);
        }

    }, []);
    

    return (
        <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
           
        </div>
    );
}


export default ObjetoUno;
