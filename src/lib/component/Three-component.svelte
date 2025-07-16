<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let container;
	let cleanupFunction;

	onMount(() => {
		if (!browser) return;

		const initThreeJS = async () => {
			try {
				// Attendre que Three.js soit chargé via CDN
				while (!window.THREE) {
					await new Promise(resolve => setTimeout(resolve, 100));
				}

				// Attendre que l'élément container soit prêt
				while (!container) {
					await new Promise(resolve => setTimeout(resolve, 50));
				}

				const THREE = window.THREE;
				
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
					const width = window.innerWidth;
					if (width < 400) {
						group.position.y += 260;
						group.scale.set(0.7, 0.6, 1);
					} else if (width < 600) {
						group.position.y += 310;
						group.scale.set(0.7, 0.6, 1);
					} else if (width < 768) {
						group.scale.set(0.5, 0.5, 0.5);
					} else if (width < 1024) {
						group.scale.set(0.75, 0.75, 0.75);
					} else {
						group.scale.set(1, 1, 0.8);
					}
				}

				let animationId;
				function animate() {
					animationId = requestAnimationFrame(animate);
					group.children.forEach((filament) => {
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

				// Fonction de nettoyage
				cleanupFunction = () => {
					if (animationId) {
						cancelAnimationFrame(animationId);
					}
					window.removeEventListener('mousemove', onMouseMove);
					window.removeEventListener('resize', onWindowResize);
					
					// Nettoyer les ressources Three.js
					if (group) {
						group.children.forEach(child => {
							if (child.geometry) child.geometry.dispose();
							if (child.material) child.material.dispose();
						});
					}
					
					if (renderer) {
						renderer.dispose();
						if (container && container.contains(renderer.domElement)) {
							container.removeChild(renderer.domElement);
						}
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