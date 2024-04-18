import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ObjetoDos = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbc542b);
    

    // Cargar textura de imagen PNG para la imagen encima
    const textureLoader1 = new THREE.TextureLoader();
    const texture = textureLoader1.load("public/punto1.svg");

    // Crea un Mesh con un PlaneGeometry para la imagen encima
    const geometryA = new THREE.PlaneGeometry(5, 5); // Ajusta el tamaño según sea necesario
    const materialA = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    }); 
    const imagePlane = new THREE.Mesh(geometryA, materialA);
    imagePlane.position.x=-2
    imagePlane.position.z=1
    imagePlane.position.y=1
    scene.add(imagePlane);

    // camara
    const camera = new THREE.PerspectiveCamera(
      70,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    scene.add(camera);

    //sphere
    const geometry = new THREE.SphereGeometry(0.8, 32, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x0000 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphere.position.x = 2;

    //TORUS
    // const geometry1 = new THREE.TorusKnotGeometry(0.3, 0.1, 100, 16);
    // const materialTorus2 = new THREE.MeshStandardMaterial({
    //   color: 0x7a7a7a,
    //   alphaHash: true,
    // });
    // const torusKnot = new THREE.Mesh(geometry1, materialTorus2);
    // scene.add(torusKnot);
    // torusKnot.position.set(-2, -1, 0); //  x /y /z
    // torusKnot.scale.set(2, 2, 2);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.target = new THREE.Vector3(3,3,3) //x, y,z
    controls.enableDamping = true;

    //cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({
        color: 0x6f6d6d,
      })
    );
    scene.add(cube);
    cube.position.z = -5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 8); // color - intensidad
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 500);
    pointLight.position.set(5, 5, 2);
    scene.add(pointLight);


    const group = new THREE.Group();
    scene.add(group);

    group.add(sphere);
    group.add(cube);
    // group.add(torusKnot);

    const animate = () => {
      controls.update();
      imagePlane.rotation.z += 0.00;
      imagePlane.rotation.z += 0.01;
    

      group.rotation.x += 0.01;
      group.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
    renderer.render(scene, camera);

    //clean up the scene (para que no aparescan varios canvas)
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="Contenedor3D"
      ref={mountRef}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};

export default ObjetoDos;
