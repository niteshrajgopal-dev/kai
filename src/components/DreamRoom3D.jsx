import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function DreamRoom3D() {
  const mountRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(25, 20, 25);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Floor (45cm x 20m converted to reasonable scale)
    const floorGeometry = new THREE.PlaneGeometry(45, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xe8d5b7, 
      side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls (height 6m based on floor plan)
    const wallHeight = 6;
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xdedede });

    // Left wall
    const leftWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, wallHeight, 20),
      wallMaterial
    );
    leftWall.position.set(-22.5, wallHeight / 2, 0);
    leftWall.castShadow = true;
    scene.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, wallHeight, 20),
      wallMaterial
    );
    rightWall.position.set(22.5, wallHeight / 2, 0);
    rightWall.castShadow = true;
    scene.add(rightWall);

    // Back wall
    const backWall = new THREE.Mesh(
      new THREE.BoxGeometry(45, wallHeight, 0.2),
      wallMaterial
    );
    backWall.position.set(0, wallHeight / 2, -10);
    backWall.castShadow = true;
    scene.add(backWall);

    // Front wall
    const frontWall = new THREE.Mesh(
      new THREE.BoxGeometry(45, wallHeight, 0.2),
      wallMaterial
    );
    frontWall.position.set(0, wallHeight / 2, 10);
    frontWall.castShadow = true;
    scene.add(frontWall);

    // Playstation/Media area (top left)
    const mediaDesk = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.8, 5),
      new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    mediaDesk.position.set(-15, 0.4, -6);
    mediaDesk.castShadow = true;
    scene.add(mediaDesk);

    // TV/Monitor for media area
    const tvStand = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 3, 4),
      new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    tvStand.position.set(-15, 2, -6);
    tvStand.castShadow = true;
    scene.add(tvStand);

    // Central furniture/couch (6' x 6' from plan)
    const couch = new THREE.Mesh(
      new THREE.BoxGeometry(6, 1.5, 6),
      new THREE.MeshStandardMaterial({ color: 0x4a5568 })
    );
    couch.position.set(-3, 0.75, -2);
    couch.castShadow = true;
    scene.add(couch);

    // Furnication area (top right - PE x 7m)
    const furnicationTable = new THREE.Mesh(
      new THREE.BoxGeometry(7, 0.8, 6),
      new THREE.MeshStandardMaterial({ color: 0xcd853f })
    );
    furnicationTable.position.set(12, 0.4, -5);
    furnicationTable.castShadow = true;
    scene.add(furnicationTable);

    // PE/Fitness equipment area
    const fitnessEquip1 = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 2, 1.5),
      new THREE.MeshStandardMaterial({ color: 0x2c3e50 })
    );
    fitnessEquip1.position.set(-8, 1, 3);
    fitnessEquip1.castShadow = true;
    scene.add(fitnessEquip1);

    const fitnessEquip2 = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      new THREE.MeshStandardMaterial({ color: 0x34495e })
    );
    fitnessEquip2.position.set(-5, 0.75, 3);
    fitnessEquip2.castShadow = true;
    scene.add(fitnessEquip2);

    // Computing/zone area (right side)
    const computingDesk = new THREE.Mesh(
      new THREE.BoxGeometry(6, 0.8, 3),
      new THREE.MeshStandardMaterial({ color: 0x654321 })
    );
    computingDesk.position.set(12, 0.4, 3);
    computingDesk.castShadow = true;
    scene.add(computingDesk);

    // Computer monitors
    const monitor = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 2, 3),
      new THREE.MeshStandardMaterial({ color: 0x1a1a1a })
    );
    monitor.position.set(12, 1.5, 3);
    monitor.castShadow = true;
    scene.add(monitor);

    // Furniture (bottom left area)
    const cabinet = new THREE.Mesh(
      new THREE.BoxGeometry(3, 2, 2),
      new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    cabinet.position.set(-15, 1, 5);
    cabinet.castShadow = true;
    scene.add(cabinet);

    // Computing Dizcenser zone (bottom right)
    const dizcenserUnit = new THREE.Mesh(
      new THREE.BoxGeometry(5, 2.5, 5),
      new THREE.MeshStandardMaterial({ color: 0x607d8b })
    );
    dizcenserUnit.position.set(15, 1.25, 6);
    dizcenserUnit.castShadow = true;
    scene.add(dizcenserUnit);

    // Additional decorative elements
    const rug = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ color: 0xb8860b })
    );
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.01, 0);
    scene.add(rug);

    // Animation
    let rotationSpeed = 0.002;
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (isRotating && !isDragging.current) {
        camera.position.x = camera.position.x * Math.cos(rotationSpeed) - camera.position.z * Math.sin(rotationSpeed);
        camera.position.z = camera.position.z * Math.cos(rotationSpeed) + camera.position.x * Math.sin(rotationSpeed);
        camera.lookAt(0, 0, 0);
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Mouse controls
    const handleMouseDown = (e) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      const radius = Math.sqrt(
        camera.position.x ** 2 + camera.position.z ** 2
      );
      const angle = Math.atan2(camera.position.z, camera.position.x);
      const newAngle = angle + deltaX * 0.01;

      camera.position.x = radius * Math.cos(newAngle);
      camera.position.z = radius * Math.sin(newAngle);
      camera.position.y = Math.max(5, Math.min(30, camera.position.y - deltaY * 0.1));

      camera.lookAt(0, 0, 0);

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const direction = e.deltaY > 0 ? 1 : -1;
      
      const distance = Math.sqrt(
        camera.position.x ** 2 + camera.position.y ** 2 + camera.position.z ** 2
      );
      
      const newDistance = Math.max(15, Math.min(50, distance + direction * zoomSpeed * 5));
      const scale = newDistance / distance;
      
      camera.position.multiplyScalar(scale);
      camera.lookAt(0, 0, 0);
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('wheel', handleWheel);

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">My Dream Room - 3D Interactive Model</h1>
        <p className="text-sm opacity-90">Geometry & Measurement Design Project</p>
      </div>
      
      <div className="flex-1 relative" ref={mountRef} />
      
      <div className="bg-gray-800 text-white p-4 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            {isRotating ? '⏸ Pause Rotation' : '▶ Auto Rotate'}
          </button>
          
          <div className="text-sm space-y-1">
            <p><strong>Controls:</strong></p>
            <p>🖱️ Click & Drag to rotate | Scroll to zoom</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-gray-700 p-3 rounded">
            <h3 className="font-bold mb-1 text-blue-300">📐 Room Dimensions</h3>
            <p>Width: 45 cm (scaled)</p>
            <p>Length: 20 m</p>
            <p>Wall Height: 6 m</p>
          </div>
          
          <div className="bg-gray-700 p-3 rounded">
            <h3 className="font-bold mb-1 text-purple-300">🎮 Key Areas</h3>
            <p>• Playstation/Media Zone (4.5×5 m)</p>
            <p>• Computing Zone (6×3 m)</p>
            <p>• PE/Fitness Area (1.5×19.5 m)</p>
          </div>
          
          <div className="bg-gray-700 p-3 rounded">
            <h3 className="font-bold mb-1 text-green-300">🛋️ Furniture</h3>
            <p>• Central Couch (6'×6')</p>
            <p>• Furnication Table (7×6 m)</p>
            <p>• Storage Cabinets</p>
          </div>
        </div>
      </div>
    </div>
  );
}



