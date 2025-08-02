<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { browser } from '$app/environment';

	const NUM_LEDS = 11;
	const LED_WIDTH = 0.5;
	const LED_HEIGHT = 0.059;
	const LED_SPACING = 0.14;

	const LED_COLORS = [
		'#E74C3C',
		'#E74C3C',
		'#E74C3C',
		'#E74C3C', // rouge corail vif
		'#CE3B32',
		'#CE3B32',
		'#CE3B32', // une teinte un peu plus sombre
		'#B8352D',
		'#B8352D',
		'#B8352D', // plus foncé encore
		'#9F2B26',
		'#9F2B26', // rouge sombre
		'#7F221E',
		'#7F221E',
		'#7F221E'
	];

	let container;
	let renderer, scene, camera;
	let ledMeshes = [];
	let vumeterGroup;
	let animationId;

	let containerWidth = 0;
	let containerHeight = 0;
	let numVumeters = 9;
	let levels = [];

	// Fonction améliorée : crée un vumètre en LED sphériques avec matériau lumineux
	function createVuMeter(x) {
		const group = new THREE.Group();
		const meshes = [];

		for (let i = 0; i < NUM_LEDS; i++) {
			// Géométrie sphère pour LED (plus LED-like)
			const geometry = new THREE.BoxGeometry(LED_WIDTH, LED_HEIGHT, 0.005);

			// Matériau MeshStandardMaterial avec émission et metalness/roughness pour effet réaliste
			const material = new THREE.MeshStandardMaterial({
				color: '#222', // Couleur LED éteinte
				emissive: '#000000', // Luminosité LED éteinte
				emissiveIntensity: 0,
				metalness: 1.65,
				roughness: 0.24,
				transparent: true,
				opacity: 0.85
			});

			const mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(x, i * (LED_HEIGHT + LED_SPACING), 0);
			group.add(mesh);
			meshes.push(mesh);
		}

		vumeterGroup.add(group);
		return meshes;
	}

	function updateLeds() {
		if (ledMeshes.length === 0) return;

		for (let v = 0; v < numVumeters; v++) {
			const level = levels[v] ?? 0;
			const litCount = Math.floor(level * NUM_LEDS);
			const meshes = ledMeshes[v];
			if (!meshes) continue;

			for (let i = 0; i < NUM_LEDS; i++) {
				const mesh = meshes[i];
				if (i < litCount) {
					// LEDs allumées, couleur rouge corail par ex.
					const emColor = new THREE.Color(LED_COLORS[i] || '');
					mesh.material.color.set(emColor);
					mesh.material.emissive.set(emColor);
					mesh.material.emissiveIntensity = 1.5;
					mesh.material.opacity = 1;
				} else {
					// LEDs éteintes, bleu sombre avec faible lueur
					mesh.material.color.set('#ffffff');
					mesh.material.emissive.set('#ffffff');
					mesh.material.emissiveIntensity = 2.5;
					mesh.material.opacity = 0.2;
				}
				mesh.material.needsUpdate = true;
			}
		}
	}

	function layoutVumeters() {
		if (!vumeterGroup) return;

		vumeterGroup.clear();
		ledMeshes = [];

		const spacing = LED_WIDTH + 0.25; // un peu plus d’espacement pour la forme sphère
		const totalWidth = numVumeters * spacing;
		let startX = -totalWidth / 2 + spacing / 2;

		for (let i = 0; i < numVumeters; i++) {
			const xPos = startX + i * spacing;
			const meshes = createVuMeter(xPos);
			ledMeshes.push(meshes);
		}

		vumeterGroup.position.y = -(NUM_LEDS * (LED_HEIGHT + LED_SPACING)) / 2;
	}

	function onResize() {
		if (!container) return;

		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;

		if (containerWidth < 480) {
			numVumeters = 3;
		} else if (containerWidth < 768) {
			numVumeters = 6;
		} else {
			numVumeters = 9;
		}

		layoutVumeters();

		renderer.setSize(containerWidth, containerHeight);
		camera.aspect = containerWidth / containerHeight;
		camera.updateProjectionMatrix();
	}

	if (browser) {
		// TOUJOURS encapsuler dans browser pour éviter SSR errors
		onMount(() => {
			containerWidth = container.clientWidth;
			containerHeight = container.clientHeight;

			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setSize(containerWidth, containerHeight);
			container.appendChild(renderer.domElement);

			scene = new THREE.Scene();
			scene.background = new THREE.Color(0xffffff);

			camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 100);
			camera.position.set(0, 0, 5);

			scene.add(new THREE.AmbientLight(0xffffff, 0.8));
			const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
			directionalLight.position.set(5, 5, 5);
			scene.add(directionalLight);

			vumeterGroup = new THREE.Group();
			scene.add(vumeterGroup);

			layoutVumeters();

			levels = new Array(numVumeters).fill(0);

			window.addEventListener('resize', onResize);
			onResize();

			let time = 0;
			function animate() {
				time += 0.02;

				levels = levels.map((_, i) => Math.sin(time + i * 0.9) * 0.5 + 0.5);

				updateLeds();
				renderer.render(scene, camera);

				animationId = requestAnimationFrame(animate);
			}
			animate();

			return () => {
				window.removeEventListener('resize', onResize);
				if (animationId) cancelAnimationFrame(animationId);
				if (renderer) renderer.dispose();
			};
		});

		onDestroy(() => {
			window.removeEventListener('resize', onResize);
			if (animationId) cancelAnimationFrame(animationId);
			if (renderer) renderer.dispose();
		});
	}
</script>

<div bind:this={container}></div>

<!-- <script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { browser } from '$app/environment';

  const NUM_LEDS = 9;
  const LED_WIDTH = 0.23;
  const LED_HEIGHT = 0.1;
  const LED_SPACING = 0.14;

  const LED_COLORS = [
    '#E74C3C',
		'#E74C3C',
		'#E74C3C',
		'#E74C3C', // rouge corail vif
		'#CE3B32',
		'#CE3B32',
		'#CE3B32', // une teinte un peu plus sombre
		'#B8352D',
		'#B8352D',
		'#B8352D', // plus foncé encore
		'#9F2B26',
		'#9F2B26', // rouge sombre
		'#7F221E',
		'#7F221E',
		'#7F221E'
  ];

  let container;
  let renderer, scene, camera;
  let ledMeshes = [];
  let vumeterGroup;
  let animationId;

  let containerWidth = 0;
  let containerHeight = 0;
  let numVumeters = 9;
  let levels = [];

  // Fonction améliorée : crée un vumètre en LED sphériques avec matériau lumineux
  function createVuMeter(x) {
    const group = new THREE.Group();
    const meshes = [];

    for(let i = 0; i < NUM_LEDS; i++) {
      // Géométrie sphère pour LED (plus LED-like)
      const geometry = new THREE.SphereGeometry(LED_WIDTH / 2, 16, 16);

      // Matériau MeshStandardMaterial avec émission et metalness/roughness pour effet réaliste
      const material = new THREE.MeshStandardMaterial({
        color: '#222',              // couleur LED éteinte
        emissive: '#000000',        // émission LED éteinte
        emissiveIntensity: 0,
        metalness: 0.6,
        roughness: 0.45,
        transparent: true,
        opacity: 0.8
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, i * (LED_HEIGHT + LED_SPACING), 0);
      group.add(mesh);
      meshes.push(mesh);
    }

    vumeterGroup.add(group);
    return meshes;
  }

  function updateLeds() {
    if (ledMeshes.length === 0) return;

    for(let v = 0; v < numVumeters; v++) {
      const level = levels[v] ?? 0;
      const litCount = Math.floor(level * NUM_LEDS);
      const meshes = ledMeshes[v];
      if (!meshes) continue;

      for(let i = 0; i < NUM_LEDS; i++) {
        const mesh = meshes[i];
        if(i < litCount) {
          // Couleur et émission fortes, intensité élevée pour LED allumée
          const emColor = new THREE.Color(LED_COLORS[i] || '#0f0');
          mesh.material.color.set(emColor);
          mesh.material.emissive.set(emColor);
          mesh.material.emissiveIntensity = 1.5;
          mesh.material.opacity = 1;
        } else {
          // LED éteinte, emission coupée, couleur plus sombre
          mesh.material.color.set('#111');
          mesh.material.emissive.set('#000');
          mesh.material.emissiveIntensity = 0;
          mesh.material.opacity = 0.5;
        }
        mesh.material.needsUpdate = true;
      }
    }
  }

  function layoutVumeters() {
    if (!vumeterGroup) return;

    vumeterGroup.clear();
    ledMeshes = [];

    const spacing = LED_WIDTH + 0.15; // un peu plus d’espacement pour la forme sphère
    const totalWidth = numVumeters * spacing;
    let startX = -totalWidth / 2 + spacing / 2;

    for(let i = 0; i < numVumeters; i++) {
      const xPos = startX + i * spacing;
      const meshes = createVuMeter(xPos);
      ledMeshes.push(meshes);
    }

    vumeterGroup.position.y = -(NUM_LEDS * (LED_HEIGHT + LED_SPACING)) / 2;
  }

  function onResize() {
    if (!container) return;

    containerWidth = container.clientWidth;
    containerHeight = container.clientHeight;

    if(containerWidth < 480) {
      numVumeters = 3;
    } else if(containerWidth < 768) {
      numVumeters = 6;
    } else {
      numVumeters = 9;
    }

    layoutVumeters();

    renderer.setSize(containerWidth, containerHeight);
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
  }

  if (browser) {  // TOUJOURS encapsuler dans browser pour éviter SSR errors
    onMount(() => {
      containerWidth = container.clientWidth;
      containerHeight = container.clientHeight;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerWidth, containerHeight);
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);

      scene.add(new THREE.AmbientLight(0xffffff, 0.8));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      vumeterGroup = new THREE.Group();
      scene.add(vumeterGroup);

      layoutVumeters();

      levels = new Array(numVumeters).fill(0);

      window.addEventListener('resize', onResize);
      onResize();

      let time = 0;
      function animate() {
        time += 0.03;

        levels = levels.map((_, i) =>
          (Math.sin(time + i * 0.9) * 0.5 + 0.5)
        );

        updateLeds();
        renderer.render(scene, camera);

        animationId = requestAnimationFrame(animate);
      }
      animate();

      return () => {
        window.removeEventListener('resize', onResize);
        if(animationId) cancelAnimationFrame(animationId);
        if(renderer) renderer.dispose();
      };
    });

    onDestroy(() => {
      window.removeEventListener('resize', onResize);
      if(animationId) cancelAnimationFrame(animationId);
      if(renderer) renderer.dispose();
    });
  }
</script>

<style>
  div {
    width: 100%;
    height: 320px;
    border-radius: 8px;
    overflow: hidden;
  }
</style>

<div bind:this={container}></div> -->

<style>
	div {
		width: 100%;
		height: 320px;
		border-radius: 8px;
		overflow: hidden;
	}
</style>
