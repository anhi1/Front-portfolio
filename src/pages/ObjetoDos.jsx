import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

const ObjetoDos = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z= 4
        scene.add(camera);

        //sphere
        const geometry = new THREE.SphereGeometry( 0.8, 32, 16 ); 
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
        const sphere = new THREE.Mesh( geometry, material ); 
        scene.add(sphere);
        sphere.position.x = 2
        
        //torus
        const geometry1 = new THREE.TorusKnotGeometry( 0.3, 0.1, 100, 16 ); 
        const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
        const torusKnot = new THREE.Mesh( geometry1, material1 );
        scene.add(torusKnot);
        torusKnot.position.set(-2, -1, 0) //  x /y /z
        // torusKnot.position.x= -2
        // torusKnot.position.y= -1
        torusKnot.scale.set(2,2 ,0)
        // torusKnot.scale.x=2
        // torusKnot.scale.y=2
        

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement)

        //cube
        const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshBasicMaterial()
        )
        scene.add(cube)
        cube.position.z= -5

        //render the escene
        const animate = () =>{
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()
        renderer.render(scene, camera)

        //clean up the scene (para que no aparescan varios canvas)
        return() =>{
        currentMount.removeChild(renderer.domElement)
        }

    }, []);

    return (
        <div className="Contenedor3D" ref={mountRef} style={{ width: '100%', height: '100vh' }}>
            
        </div>
    );
}

export default ObjetoDos;
