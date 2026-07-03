"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [enabled, setEnabled] = useState(false);

  // References for rendering and physics values
  const scrollValue = useRef(0);
  const mouseValue = useRef({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });
  const clickPosition = useRef({ x: 0, y: 0 });
  const clickProgress = useRef(1.0); // 1.0 means inactive

  useEffect(() => {
    // Disable WebGL on mobile/touch screens or when reduced motion is preferred to maximize scrolling performance
    const isMobileOrTouch = window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!isMobileOrTouch && !reduced) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    // 1. Subscribe to scroll
    const unsubscribeScroll = scrollYProgress.on("change", (latest) => {
      scrollValue.current = latest;
    });

    // 2. Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // 3. Track mouse clicks to emit shockwaves
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Left click only
      
      clickPosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      clickPosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      clickProgress.current = 0.0; // Reset progress to trigger wave expansion
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });

    return () => {
      unsubscribeScroll();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [scrollYProgress]);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc5a374, 5.0, 30);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x1e3a8a, 4.0, 30);
    blueLight.position.set(-5, -5, 2);
    scene.add(blueLight);

    // --- Geometries & Materials ---
    
    // 1. Custom Cylinder geometry displaced mathematically to form a stylized molar tooth
    const toothGeo = new THREE.CylinderGeometry(1.0, 0.5, 2.2, 32, 24);
    const posAttr = toothGeo.attributes.position;
    const count = posAttr.count;

    for (let i = 0; i < count; i++) {
      let x = posAttr.getX(i);
      let y = posAttr.getY(i); // ranges from -1.1 to 1.1
      let z = posAttr.getZ(i);

      // Normalize Y value to a range of 0.0 (bottom) to 1.0 (top)
      const ny = (y + 1.1) / 2.2;
      const angle = Math.atan2(z, x);

      if (ny > 0.65) {
        // Crown area: Flare out and sculpt 4 cusps (lobes) on top
        const flare = 1.15 + (ny - 0.65) * 0.45;
        x *= flare;
        z *= flare;

        // Shape 4 distinct dental cusps on the top crown face
        if (ny > 0.92) {
          y += (Math.sin(angle * 4.0) * 0.16) - 0.04;
          // Add a central fissure indentation
          const distFromCenter = Math.sqrt(x * x + z * z);
          if (distFromCenter < 0.8) {
            y -= 0.12 * (1.0 - distFromCenter);
          }
        }
      } else if (ny < 0.42) {
        // Root area: split into 2 roots along the X axis
        const rootProgress = (0.42 - ny) / 0.42; // 0 at neck, 1 at bottom tip
        
        // Bifurcation / split along X axis
        if (x > 0) {
          x += 0.38 * rootProgress;
        } else {
          x -= 0.38 * rootProgress;
        }

        // Taper the tips of the roots
        const taper = 1.0 - rootProgress * 0.65;
        x *= taper;
        z *= taper;
        
        // Curve roots slightly inward for realism
        y += rootProgress * 0.08;
      } else {
        // Cervical neck area: slight constriction/narrowing
        const neckFactor = 0.88 + 0.12 * Math.sin(((ny - 0.42) / 0.23) * Math.PI / 2.0);
        x *= neckFactor;
        z *= neckFactor;
      }

      posAttr.setXYZ(i, x, y, z);
    }

    toothGeo.computeVertexNormals();

    // Outer wireframe mesh (hologram contour)
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xc5a374, // Gold
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      metalness: 0.95,
      roughness: 0.15,
    });
    const outerMesh = new THREE.Mesh(toothGeo, outerMat);

    // Inner glowing solid mesh (translucent glass/crystal core)
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xc5a374, // Gold
      transparent: true,
      opacity: 0.05, // very subtle glowing inner volume
      roughness: 0.2,
      metalness: 0.8,
      side: THREE.DoubleSide,
    });
    const innerMesh = new THREE.Mesh(toothGeo, innerMat);
    innerMesh.scale.set(0.92, 0.92, 0.92); // slightly smaller to sit inside

    // Group both together to handle transformations as a single unit
    const toothGroup = new THREE.Group();
    toothGroup.add(outerMesh);
    toothGroup.add(innerMesh);
    scene.add(toothGroup);

    // 2. Custom Shader-driven Particle System
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // GLSL shaders with click-activated shockwave dynamics running on GPU
    const vertexShader = `
      uniform float uTime;
      uniform float uScroll;
      uniform float uMouseX;
      uniform float uMouseY;
      uniform float uClickProgress;
      uniform vec2 uClickPosition;
      varying vec3 vPosition;
      
      void main() {
        vPosition = position;
        vec3 pos = position;
        
        // Base rippling wave structure
        float dist = length(pos.xy);
        pos.z += sin(dist * 1.5 - uTime * 1.0) * 0.35 * (1.0 + uScroll * 1.8);
        pos.y += cos(pos.x * 1.2 + uTime * 0.7) * 0.22 * uScroll;
        
        // Mouse parallax drift
        pos.x += uMouseX * 0.45 * (1.0 - dist * 0.08);
        pos.y += uMouseY * 0.45 * (1.0 - dist * 0.08);
        
        // Interactive Click Shockwave Ripple
        if (uClickProgress < 1.0) {
          // Scale mouse coordinate to particle space bounds
          vec2 clickWorld = uClickPosition * vec2(8.0, 6.0);
          float distToClick = distance(pos.xy, clickWorld);
          
          // Ripple expands outwards over time
          float waveRadius = uClickProgress * 12.0;
          float waveWidth = 2.0;
          
          // Gaussian distribution of displacement force along the wavefront
          float pulse = exp(-pow((distToClick - waveRadius) / waveWidth, 2.0));
          
          // Push force dissipates as the wave expands
          float strength = 2.5 * (1.0 - uClickProgress);
          
          // Push particles along Z (out-of-screen) and XY (away from click center)
          pos.z += pulse * strength * 2.0;
          if (distToClick > 0.1) {
            vec2 dir = normalize(pos.xy - clickWorld);
            pos.xy += dir * pulse * strength * 1.8;
          }
        }
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Base size pulsing
        gl_PointSize = (15.0 / -mvPosition.z) * (1.0 + 0.32 * sin(uTime * 2.2 + dist));
        
        // Increase spark sizes along click wavefront
        if (uClickProgress < 1.0) {
          vec2 clickWorld = uClickPosition * vec2(8.0, 6.0);
          float distToClick = distance(pos.xy, clickWorld);
          float waveRadius = uClickProgress * 12.0;
          float pulse = exp(-pow((distToClick - waveRadius) / 1.5, 2.0));
          gl_PointSize *= (1.0 + pulse * 2.0 * (1.0 - uClickProgress));
        }
      }
    `;

    const fragmentShader = `
      varying vec3 vPosition;
      uniform vec3 uColor;
      
      void main() {
        // Soft glowing particles
        vec2 temp = gl_PointCoord - vec2(0.5);
        float r = dot(temp, temp);
        if (r > 0.25) discard;
        
        float alpha = 1.0 - (r * 4.0);
        gl_FragColor = vec4(uColor, alpha * 0.48);
      }
    `;

    const shaderUniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouseX: { value: 0 },
      uMouseY: { value: 0 },
      uClickProgress: { value: 1.0 },
      uClickPosition: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color(0xc5a374) },
    };

    const particleMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: shaderUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- Responsive Adjustments ---
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);

      if (width < 768) {
        // Mobile layout
        toothGroup.position.set(0, 0, 0);
        toothGroup.scale.set(0.65, 0.65, 0.65);
      } else if (width < 1024) {
        // Tablet layout
        toothGroup.position.set(1.2, 0.2, 0);
        toothGroup.scale.set(0.9, 0.9, 0.9);
      } else {
        // Desktop layout
        toothGroup.position.set(2.2, 0.4, 0);
        toothGroup.scale.set(1.2, 1.2, 1.2);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const tick = () => {
      const time = clock.getElapsedTime();
      
      // Smooth mouse easing (lerping)
      mouseValue.current.x += (mouseTarget.current.x - mouseValue.current.x) * 0.08;
      mouseValue.current.y += (mouseTarget.current.y - mouseValue.current.y) * 0.08;

      // Animate click ripple progress
      if (clickProgress.current < 1.0) {
        clickProgress.current += 0.025; // wave finishes in ~40 frames (~0.6s)
      }

      // Update shader uniforms
      shaderUniforms.uTime.value = time;
      shaderUniforms.uScroll.value = scrollValue.current;
      shaderUniforms.uMouseX.value = mouseValue.current.x;
      shaderUniforms.uMouseY.value = mouseValue.current.y;
      shaderUniforms.uClickProgress.value = clickProgress.current;
      shaderUniforms.uClickPosition.value.set(
        clickPosition.current.x,
        clickPosition.current.y
      );

      // 1. Rotate central tooth group (auto-rotation + mouse tilt tracking)
      toothGroup.rotation.y = time * 0.08 + scrollValue.current * 2.2 + mouseValue.current.x * 0.4;
      toothGroup.rotation.x = time * 0.05 + scrollValue.current * 1.2 - mouseValue.current.y * 0.3;
      
      // 2. Parallax vertical position of tooth group based on scroll
      toothGroup.position.y = (window.innerWidth < 768 ? 0 : 0.4) - scrollValue.current * 1.8;

      // 3. Pulse transparency of outer wireframe and inner core (offset phases for breathing effect)
      outerMat.opacity = 0.14 + 0.06 * Math.sin(time * 0.8) + scrollValue.current * 0.08;
      innerMat.opacity = 0.04 + 0.02 * Math.sin(time * 0.8 + Math.PI) + scrollValue.current * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      
      toothGeo.dispose();
      outerMat.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-85"
      style={{ zIndex: 1 }}
    />
  );
}
