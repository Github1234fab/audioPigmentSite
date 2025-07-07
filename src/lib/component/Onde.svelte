<script>
	import * as THREE from 'three';

	let scene, camera, renderer, mesh, clock;

	function init() {
		// 1️⃣ Initialisation de la scène
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 2;

		renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		clock = new THREE.Clock();

		// 2️⃣ Création du Shader Material
		const material = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0.0 },
				color: { value: new THREE.Color(0x0099ff) }
			},
			vertexShader: `
      uniform float time;
      void main() {
        vec3 pos = position;
        pos.y += sin(pos.x * 5.0 + time) * 0.1; // Déformation sinusoïdale
        pos.y += sin(pos.x * 8.0 + time * 1.5) * 0.05; // Superposition d'une deuxième onde
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
			fragmentShader: `
      uniform vec3 color;
      void main() {
        gl_FragColor = vec4(color, 1.0);
      }
    `,
			wireframe: true // Mode filaire pour donner un effet numérique
		});

		// 3️⃣ Création d'un plan pour représenter l'onde
		const geometry = new THREE.PlaneGeometry(3, 0.5, 100, 10);
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		animate();
	}

	function animate() {
		requestAnimationFrame(animate);
		mesh.material.uniforms.time.value = clock.getElapsedTime();
		renderer.render(scene, camera);
	}

	// 4️⃣ Ajustement à la taille de l’écran
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	});

	init();
</script>
