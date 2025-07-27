<!-- <script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
  
	let container;
	let cleanupFunction;
  
	onMount(() => {
	  // Cette fonction attend que THREE soit disponible, avec timeout (5s max)
	  const waitForThree = () =>
		new Promise((resolve, reject) => {
		  let elapsed = 0;
		  const interval = 100;
		  const maxWait = 5000;
		  const timer = setInterval(() => {
			if (window.THREE) {
			  clearInterval(timer);
			  resolve();
			} else {
			  elapsed += interval;
			  if (elapsed >= maxWait) {
				clearInterval(timer);
				reject(new Error('Timeout waiting for THREE'));
			  }
			}
		  }, interval);
		});
  
	  // Attend aussi que le container soit lié (existe)
	  const waitForContainer = () =>
		new Promise((resolve) => {
		  if (container) resolve();
		  else {
			const check = setInterval(() => {
			  if (container) {
				clearInterval(check);
				resolve();
			  }
			}, 50);
		  }
		});
  
	  const initThreeJS = async () => {
		try {
		  await waitForThree();
		  await waitForContainer();
  
		  const THREE = window.THREE;
  
		  // Création de la scène, caméra, renderer
		  const scene = new THREE.Scene();
		  const camera = new THREE.PerspectiveCamera(
			95,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		  );
		  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		  renderer.setSize(container.clientWidth, container.clientHeight);
		  container.appendChild(renderer.domElement);
  
		  scene.background = new THREE.Color(0xffffff);
  
		  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		  scene.add(ambientLight);
  
		  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
		  directionalLight1.position.set(1, 1, 1);
		  scene.add(directionalLight1);
  
		  const directionalLight2 = new THREE.DirectionalLight(0x000000, 0.6);
		  directionalLight2.position.set(-1, -1, -1);
		  scene.add(directionalLight2);
  
		  const group = new THREE.Group();
		  const numberOfFilaments = 50;
		  const pointsPerFilament = 200;
  
		  for (let i = 0; i < numberOfFilaments; i++) {
			const points = [];
			for (let j = 0; j < pointsPerFilament; j++) {
			  const x = (Math.random() - 0.5) * 800;
			  const y = (Math.random() - 0.5) * 800;
			  const z = (Math.random() - 0.5) * 800;
			  points.push(new THREE.Vector3(x, y, z));
			}
  
			const path = new THREE.CatmullRomCurve3(points);
			const geometry = new THREE.TubeGeometry(path, 64, 1.5, 8, false);
			const material = new THREE.MeshPhongMaterial({
			  color: 0xe74c3c,
			  shininess: 300,
			  specular: 0x6b717f,
			  transparent: true,
			  opacity: 0.3
			});
  
			const filament = new THREE.Mesh(geometry, material);
			group.add(filament);
		  }
  
		  scene.add(group);
  
		  camera.position.z = 1000;
  
		  function updateScale() {
			// Toujours réinitialiser position.y avant modification pour éviter accumulation
			group.position.y = 0;
			const width = window.innerWidth;
			if (width < 400) {
			  group.position.y += 320;
			  group.scale.set(0.6, 0.8, 0.7);
			} else if (width < 600) {
			  group.position.y += 280;
			  group.scale.set(0.7, 0.7, 1);
			} else if (width < 768) {
			  group.position.y += 260;
			  group.scale.set(0.9, 0.7, 1.1);
			} else if (width < 1024) {
			  group.position.y += 200;
			  group.scale.set(1, 1, 1);
			} else {
			  group.position.y += 180;
			  group.scale.set(1, 1, 1.2);
			}
		  }
  
		  let animationId;
		  function animate() {
			animationId = requestAnimationFrame(animate);
			group.children.forEach(filament => {
			  filament.rotation.x += 0.001;
			  filament.rotation.y += 0.001;
			});
			renderer.render(scene, camera);
		  }
  
		  function onMouseMove(event) {
			const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
			group.rotation.x = mouseY * 2;
			group.rotation.y = mouseX * 2;
		  }
  
		  function onWindowResize() {
			if (container) {
			  camera.aspect = container.clientWidth / container.clientHeight;
			  camera.updateProjectionMatrix();
			  renderer.setSize(container.clientWidth, container.clientHeight);
			  updateScale();
			}
		  }
  
		  window.addEventListener('mousemove', onMouseMove, false);
		  window.addEventListener('resize', onWindowResize, false);
  
		  updateScale();
		  animate();
  
		  cleanupFunction = () => {
			if (animationId) {
			  cancelAnimationFrame(animationId);
			}
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onWindowResize);
  
			// Nettoyer ressources Three.js
			group.children.forEach(child => {
			  if (child.geometry) child.geometry.dispose();
			  if (child.material) child.material.dispose();
			});
  
			renderer.dispose();
  
			if (container && container.contains(renderer.domElement)) {
			  container.removeChild(renderer.domElement);
			}
		  };
  
		  console.log('Three.js initialisé avec succès');
		} catch (error) {
		  console.error('Erreur lors de l\'initialisation de Three.js:', error);
		}
	  };
  
	  initThreeJS();
	});
  
	onDestroy(() => {
	  if (cleanupFunction) {
		cleanupFunction();
	  }
	});
  </script>
  
  {#if browser}
	<div bind:this={container} class="three-container"></div>
  {/if}
  
  <style>
	.three-container {
	  position: relative;
	  width: 100%;
	  height: 100vh;
	  z-index: -1;
	  overflow: hidden;
	}
  </style>
   -->


   <script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
  
	let container;
	let cleanupFunction;
  
	onMount(() => {
	  // Fonction pour vérifier si c'est un mobile
	  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
	  // Fonction attend que window.THREE soit disponible (max 5s)
	  const waitForThree = () =>
		new Promise((resolve, reject) => {
		  let elapsed = 0;
		  const interval = 100;
		  const maxWait = 5000;
		  const timer = setInterval(() => {
			if (window.THREE) {
			  clearInterval(timer);
			  resolve();
			} else {
			  elapsed += interval;
			  if (elapsed >= maxWait) {
				clearInterval(timer);
				reject(new Error('Timeout waiting for THREE'));
			  }
			}
		  }, interval);
		});
  
	  // Attend que le container soit monté (existe dans le DOM)
	  const waitForContainer = () =>
		new Promise((resolve) => {
		  if (container) resolve();
		  else {
			const check = setInterval(() => {
			  if (container) {
				clearInterval(check);
				resolve();
			  }
			}, 50);
		  }
		});
  
	  const initThreeJS = async () => {
		try {
		  await waitForThree();
		  await waitForContainer();
  
		  const THREE = window.THREE;
  
		  // Création scène, caméra, renderer
		  const scene = new THREE.Scene();
		  const camera = new THREE.PerspectiveCamera(
			95,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		  );
  
		  // Désactive antialias sur mobile, active sinon
		  const renderer = new THREE.WebGLRenderer({
			antialias: !isMobile,
			precision: isMobile ? 'mediump' : 'highp',
			alpha: true
		  });
  
		  renderer.setSize(container.clientWidth, container.clientHeight);
		  container.appendChild(renderer.domElement);
  
		  scene.background = new THREE.Color(0xffffff);
  
		  // Lumières
		  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		  scene.add(ambientLight);
  
		  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
		  directionalLight1.position.set(1, 1, 1);
		  scene.add(directionalLight1);
  
		  const directionalLight2 = new THREE.DirectionalLight(0x000000, 0.6);
		  directionalLight2.position.set(-1, -1, -1);
		  scene.add(directionalLight2);
  
		  // Allègement de la scène sur mobile
		  const numberOfFilaments = isMobile ? 20 : 50;
		  const pointsPerFilament = isMobile ? 100 : 200;
  
		  const group = new THREE.Group();
  
		  // Création filaments
		  for (let i = 0; i < numberOfFilaments; i++) {
			const points = [];
			for (let j = 0; j < pointsPerFilament; j++) {
			  const x = (Math.random() - 0.5) * 800;
			  const y = (Math.random() - 0.5) * 800;
			  const z = (Math.random() - 0.5) * 800;
			  points.push(new THREE.Vector3(x, y, z));
			}
  
			const path = new THREE.CatmullRomCurve3(points);
			const geometry = new THREE.TubeGeometry(path, 64, 1.5, 8, false);
			const material = new THREE.MeshPhongMaterial({
			  color: 0xe74c3c,
			  shininess: 300,
			  specular: 0x6b717f,
			  transparent: true,
			  opacity: 0.3,
			});
  
			const filament = new THREE.Mesh(geometry, material);
			group.add(filament);
		  }
  
		  scene.add(group);
		  camera.position.z = 1000;
  
		  function updateScale() {
			group.position.y = 0;
			const width = window.innerWidth;
			if (width < 400) {
			  group.position.y += 320;
			  group.scale.set(1, 1.1, 1);
			} else if (width < 600) {
			  group.position.y += 280;
			  group.scale.set(0.7, 0.7, 1);
			} else if (width < 768) {
			  group.position.y += 260;
			  group.scale.set(0.9, 0.7, 1.1);
			} else if (width < 1024) {
			  group.position.y += 200;
			  group.scale.set(1, 1, 1);
			} else {
			  group.position.y += 180;
			  group.scale.set(1, 1, 1.2);
			}
		  }
  
		  let animationId;
  
		  function animate() {
			animationId = requestAnimationFrame(animate);
			group.children.forEach(filament => {
			  filament.rotation.x += 0.001;
			  filament.rotation.y += 0.001;
			});
			renderer.render(scene, camera);
		  }
  
		  // Gère déplacement souris sur desktop
		  function onMouseMove(event) {
			const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
			group.rotation.x = mouseY * 2;
			group.rotation.y = mouseX * 2;
		  }
  
		  // Gère déplacement tactile sur mobile
		  function onTouchMove(event) {
			if (event.touches.length > 0) {
			  const touch = event.touches[0];
			  const mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
			  const mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
			  group.rotation.x = mouseY * 2;
			  group.rotation.y = mouseX * 2;
			}
		  }
  
		  function onWindowResize() {
			if (container) {
			  camera.aspect = container.clientWidth / container.clientHeight;
			  camera.updateProjectionMatrix();
			  renderer.setSize(container.clientWidth, container.clientHeight);
			  updateScale();
			}
		  }
  
		  // Ajout des écouteurs
		  window.addEventListener('mousemove', onMouseMove, false);
		  window.addEventListener('touchmove', onTouchMove, false);
		  window.addEventListener('resize', onWindowResize, false);
  
		  updateScale();
		  animate();
  
		  // Nettoyage lors de la destruction
		  cleanupFunction = () => {
			if (animationId) cancelAnimationFrame(animationId);
  
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('resize', onWindowResize);
  
			group.children.forEach(child => {
			  if (child.geometry) child.geometry.dispose();
			  if (child.material) child.material.dispose();
			});
  
			renderer.dispose();
  
			if (container && container.contains(renderer.domElement)) {
			  container.removeChild(renderer.domElement);
			}
		  };
  
		  console.log('Three.js initialisé avec succès');
		} catch (error) {
		  console.error('Erreur lors de l\'initialisation de Three.js:', error);
		}
	  };
  
	  initThreeJS();
	});
  
	onDestroy(() => {
	  if (cleanupFunction) {
		cleanupFunction();
	  }
	});
  </script>
  
  {#if browser}
	<div bind:this={container} class="three-container"></div>
  {/if}
  
  <style>
	.three-container {
	  position: relative;
	  width: 100%;
	  height: 100vh;
	  z-index: -1;
	  overflow: hidden;
	}
  </style>
  