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

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768;
    const initialScale = isDesktop ? 1.95 : (isTablet ? 1.75 : 1.6);
    const cameraZ = isDesktop ? 9.8 : 9.5;

    // ---------- Scene / camera / renderer ----------
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, cameraZ);

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
    // Scale up to make the bulb prominent on desktop
    root.scale.set(initialScale, initialScale, initialScale);
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
      
      // Adjust bulb size for Desktop vs Tablet vs Mobile
      const isDesk = window.innerWidth >= 1024;
      const isTab = window.innerWidth >= 768;
      const scale = isDesk ? 1.95 : (isTab ? 1.75 : 1.6);
      root.scale.set(scale, scale, scale);
      camera.position.z = isDesk ? 9.8 : 9.5;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // ---------- Intersection Observer to pause rendering ----------
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0 });
    intersectionObserver.observe(mount);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      if (!isVisible) return; // Pause rendering when not visible to fix lag

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
      intersectionObserver.disconnect();
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
      className="w-full h-full min-h-[550px] lg:min-h-[580px] xl:min-h-[620px] relative"
    >
      <div
        ref={mountRef}
        className="w-full h-full min-h-[550px] lg:min-h-[580px] xl:min-h-[620px]"
      />
      {/* Orbital Services */}
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .orbit-wrapper {
          --radius: 160px;
        }
        @media (min-width: 768px) {
          .orbit-wrapper {
            --radius: 235px;
          }
        }
        @media (min-width: 1024px) {
          .orbit-wrapper {
            --radius: 268px;
          }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 overflow-visible">
        <div className="-translate-y-20 md:-translate-y-24">
          <div 
            className="relative orbit-wrapper"
            style={{ animation: 'orbit-spin 40s linear infinite' }}
          >
            {[
            { name: 'Google Ads', icon: 'ads_click', color: 'text-[#4285F4]' },
            { name: 'Meta Ads', icon: 'campaign', color: 'text-[#0668E1]' },
            { name: 'Website', icon: 'web', color: 'text-[#34A853]' },
            { name: 'SEO', icon: 'query_stats', color: 'text-[#EA4335]' },
            { name: 'Email Marketing', icon: 'mail', color: 'text-[#9333EA]' },
          ].map((service, i, arr) => {
            const angle = (i * 2 * Math.PI) / arr.length;
            const x = Math.sin(angle);
            const y = -Math.cos(angle);
            
            return (
              <div
                key={service.name}
                className="absolute top-0 left-0"
                style={{
                  transform: `translate(calc(${x} * var(--radius) - 50%), calc(${y} * var(--radius) - 50%))`
                }}
              >
                <div style={{ animation: 'counter-spin 40s linear infinite' }} className="group relative pointer-events-auto cursor-help">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-brand-amber/40 flex items-center justify-center hover:scale-110 hover:border-rust transition-all duration-300 ${service.color}`}>
                    <span className="material-symbols-outlined text-[22px] md:text-[26px]">{service.icon}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink text-bg-cream text-[11px] md:text-xs px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-xl pointer-events-none">
                    {service.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
