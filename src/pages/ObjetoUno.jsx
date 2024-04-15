import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
// import { FontLoader } from 'three/examples/jsm/Addons.js';
// import { TextGeometry } from 'three/examples/jsm/Addons.js';

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

        // //font
        // const fontLoader = new FontLoader();
        // const ttfLoader = new TTFLoader();
        // ttfLoader.load('font/BricolageGrotesque_24pt-ExtraBold.ttf', (json) => {
        //   // First parse the font.
        //   const bricolageFont = fontLoader.parse(json);
        //   // Use parsed font as normal.
        //   const textGeometry = new TextGeometry('hello world', {
        //     height: 2,
        //     size: 10,
        //     font: bricolageFont,
        //   });
        //   const textMaterial = new THREE.MeshNormalMaterial();
        //   const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        //   textMesh.position.x = -46;
        //   textMesh.position.y = -10;
        //   test.scene.add(textMesh);
        // });
      

        
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
