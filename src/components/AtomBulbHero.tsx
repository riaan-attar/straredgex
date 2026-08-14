import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ACCENT = 0xfebd59; // brand-amber
const ACCENT_STROKE = 0xc9782e; // rust (darker/saturated for outline)

export default function AtomBulbHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // ---------- Scene / camera / renderer ----------
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---------- Lighting ----------
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const key = new THREE.PointLight(ACCENT, 3.0, 40);
    key.position.set(4, 5, 6);
    scene.add(key);

    const rim = new THREE.PointLight(0xffffff, 0.8, 40);
    rim.position.set(-6, -2, -4);
    scene.add(rim);

    // ---------- Root group ----------
    const root = new THREE.Group();
    // Scale up significantly to make the bulb prominent
    root.scale.set(1.6, 1.6, 1.6);
    scene.add(root);

    // ================= BULB (glass shell + outline) =================
    // Classic bulb profile
    const profile = [
      // Base tip
      [0.001, -1.6],
      [0.15, -1.55],
      [0.22, -1.45],
      // Thread base (subtle ridges)
      [0.32, -1.4],
      [0.35, -1.3],
      [0.32, -1.2],
      [0.35, -1.1],
      [0.32, -1.0],
      [0.35, -0.9],
      [0.32, -0.8],
      // Neck taper
      [0.35, -0.7],
      [0.45, -0.4],
      [0.6, -0.1],
      // Bulb sphere
      [0.78, 0.2],
      [0.92, 0.5],
      [1.0, 0.8],
      [1.0, 1.1],
      [0.9, 1.45],
      [0.7, 1.7],
      [0.4, 1.88],
      [0.001, 1.95],
    ];

    const bulbPoints = profile.map(([x, y]) => new THREE.Vector2(x, y));
    const bulbGeo = new THREE.LatheGeometry(bulbPoints, 64);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.05, // reduced to not muddy the outline
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const bulbMesh = new THREE.Mesh(bulbGeo, glassMat);
    root.add(bulbMesh);

    // Outline strokes
    const edgesGeo = new THREE.EdgesGeometry(bulbGeo, 10);
    const outlineMat = new THREE.LineBasicMaterial({
      color: ACCENT_STROKE,
      transparent: true,
      opacity: 1.0, // Full opacity for strong contrast
    });
    const bulbOutline = new THREE.LineSegments(edgesGeo, outlineMat);
    root.add(bulbOutline);

    // Filament base plate
    const baseGlowGeo = new THREE.CircleGeometry(0.3, 32);
    const baseGlowMat = new THREE.MeshBasicMaterial({
      color: ACCENT_STROKE,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const baseGlow = new THREE.Mesh(baseGlowGeo, baseGlowMat);
    baseGlow.rotation.x = -Math.PI / 2;
    baseGlow.position.y = -0.7;
    root.add(baseGlow);

    // ================= ATOM (nucleus + orbiting electrons) =================
    const atomGroup = new THREE.Group();
    atomGroup.position.y = 0.5; // Centered in the bulb sphere
    root.add(atomGroup);

    const nucleusGeo = new THREE.SphereGeometry(0.25, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: ACCENT_STROKE,
      emissive: ACCENT_STROKE,
      emissiveIntensity: 0.5,
      roughness: 0.2,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    atomGroup.add(nucleus);

    const orbitMat = new THREE.MeshBasicMaterial({
      color: ACCENT_STROKE,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const electronMat = new THREE.MeshStandardMaterial({
      color: ACCENT_STROKE,
      emissive: ACCENT_STROKE,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });

    const orbitRadius = 0.85;
    const tilts = [
      { x: 0.4, y: 0, speed: 0.8 },
      { x: 0.4, y: (Math.PI * 2) / 3, speed: 0.6 },
      { x: 0.4, y: -(Math.PI * 2) / 3, speed: 1.0 },
    ];

    const electrons: { pivot: THREE.Group, speed: number }[] = [];
    tilts.forEach((t, i) => {
      const tiltGroup = new THREE.Group();
      tiltGroup.rotation.x = t.x;
      tiltGroup.rotation.y = t.y;
      atomGroup.add(tiltGroup);

      const torusGeo = new THREE.TorusGeometry(orbitRadius, 0.015, 8, 64);
      const torus = new THREE.Mesh(torusGeo, orbitMat);
      tiltGroup.add(torus);

      const pivot = new THREE.Group();
      pivot.rotation.z = (i / tilts.length) * Math.PI * 2;
      tiltGroup.add(pivot);

      const electronGeo = new THREE.SphereGeometry(0.06, 16, 16);
      
      const electronsPerOrbit = 3;
      for (let j = 0; j < electronsPerOrbit; j++) {
        const electron = new THREE.Mesh(electronGeo, electronMat);
        const angle = (j / electronsPerOrbit) * Math.PI * 2;
        electron.position.set(Math.cos(angle) * orbitRadius, Math.sin(angle) * orbitRadius, 0);
        pivot.add(electron);
      }

      electrons.push({ pivot, speed: t.speed });
    });

    // ================= Rays =================
    const rayGroup = new THREE.Group();
    const rayCount = 12;
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * Math.PI * 2;
      const rayGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.8, 6);
      const rayMat = new THREE.MeshBasicMaterial({
        color: ACCENT_STROKE,
        transparent: true,
        opacity: 0.8,
      });
      const ray = new THREE.Mesh(rayGeo, rayMat);
      const dist = 2.4;
      // Center rays around the bulb's top sphere
      ray.position.set(Math.cos(angle) * dist, 0.6 + Math.sin(angle) * dist * 0.7, 0);
      ray.rotation.z = angle + Math.PI / 2;
      rayGroup.add(ray);
    }
    root.add(rayGroup);

    // ---------- Pointer tracking for 3D interaction ----------
    const pointer = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    let isHovering = false;

    function handlePointerMove(e: PointerEvent) {
      if (!mount) return;
      const rect = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      isHovering = true;
    }

    function handlePointerLeave() {
      pointer.x = 0;
      pointer.y = 0;
      isHovering = false;
    }

    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerleave', handlePointerLeave);

    // ---------- Resize handling ----------
    function handleResize() {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Speed up electrons when hovering
      const speedMult = isHovering ? 3.0 : 1.0;
      electrons.forEach((e) => {
        e.pivot.rotation.z += (e.speed * speedMult) * delta;
      });

      // Aggressive 3D rotation following the mouse
      targetRotation.y += (pointer.x * 1.5 - targetRotation.y) * 0.08;
      targetRotation.x += (pointer.y * -1.0 - targetRotation.x) * 0.08;

      // Lock orientation to face camera with small oscillation, overridden by hover
      const autoOscillation = isHovering ? 0 : Math.sin(elapsed * 1.5) * 0.1;
      root.rotation.y = autoOscillation + targetRotation.y;
      root.rotation.x = targetRotation.x;
      // Hover vertically slightly
      root.position.y = -0.2 + Math.sin(elapsed * 1.2) * 0.05;

      rayGroup.children.forEach((ray, i) => {
        const mesh = ray as THREE.Mesh;
        const opacityBoost = isHovering ? 0.3 : 0;
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0.5 + opacityBoost + Math.sin(elapsed * 3 + i) * 0.5;
      });

      nucleus.scale.setScalar(1 + (isHovering ? 0.2 : 0) + Math.sin(elapsed * 3) * 0.05);

      renderer.render(scene, camera);
    }
    animate();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerleave', handlePointerLeave);

      [bulbGeo, edgesGeo, baseGlowGeo, nucleusGeo].forEach((g) => g.dispose());
      [glassMat, outlineMat, baseGlowMat, orbitMat, electronMat].forEach((m) => m.dispose());

      rayGroup.children.forEach((ray) => {
        const mesh = ray as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      electrons.forEach((e) => {
        e.pivot.children.forEach((child) => {
          const mesh = child as THREE.Mesh;
          mesh.geometry.dispose();
          (mesh.material as THREE.Material).dispose();
        });
      });

      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="bulb-anchor"
      style={{
        width: '100%',
        height: '100%',
        minHeight: 550,
        position: 'relative'
      }}
    >
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: 550,
        }}
      />
    </div>
  );
}
