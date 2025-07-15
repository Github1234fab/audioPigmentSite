<!-- <script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let vantaRef;
	let vantaEffect;

	onMount(() => {
		if (!browser) return;

		const initVanta = async () => {
			try {
				// Attendre que les scripts CDN soient chargés
				while (!window.THREE || !window.VANTA || !window.VANTA.WAVES) {
					await new Promise(resolve => setTimeout(resolve, 100));
				}
				
				// Attendre que l'élément soit prêt
				while (!vantaRef) {
					await new Promise(resolve => setTimeout(resolve, 50));
				}

				// Vérifier qu'il n'y a pas déjà un effet
				if (!vantaEffect) {
					vantaEffect = window.VANTA.WAVES({
						el: vantaRef,
						THREE: window.THREE,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.00,
						minWidth: 200.00,
						scale: 1.0,
						scaleMobile: 1.0,
						color: 0x3f5efc,
						backgroundColor: 0x191919,
						shininess: 30,
						waveHeight: 15,
						waveSpeed: 1,
						zoom: 0.75
					});

					console.log('Vanta Waves initialisé avec succès');
				}

			} catch (error) {
				console.error('Erreur lors de l\'initialisation de Vanta Waves:', error);
			}
		};

		initVanta();
	});

	onDestroy(() => {
		if (vantaEffect?.destroy) {
			try {
				vantaEffect.destroy();
			} catch (error) {
				console.error('Erreur lors de la destruction de Vanta:', error);
			}
			vantaEffect = null;
		}
	});
</script>

{#if browser}
	<div bind:this={vantaRef} class="vanta-container"></div>
{/if}

<style>
	.vanta-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
	}
</style>  -->

<!-- ======================================== -->

<!-- <script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let vantaRef;
	let vantaEffect;

	onMount(() => {
		if (!browser) return;

		const initVanta = async () => {
			try {
				// Attendre que les scripts CDN soient chargés
				while (!window.THREE || !window.VANTA || !window.VANTA.TOPOLOGY) {
					await new Promise(resolve => setTimeout(resolve, 100));
				}
				
				// Attendre que l'élément soit prêt
				while (!vantaRef) {
					await new Promise(resolve => setTimeout(resolve, 50));
				}

				// Vérifier qu'il n'y a pas déjà un effet
				if (!vantaEffect) {
					vantaEffect = window.VANTA.TOPOLOGY({
						el: vantaRef,
						THREE: window.THREE,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.00,
						minWidth: 200.00,
						scale: 1.0,
						scaleMobile: 1.0,
						color: 0xff3f81,
						backgroundColor: 0x23153c,
						spacing: 16.0,
						noise: 3.0,
						chaos: 0.6,
						resolution: 1.0,
						speed: 1.0,
						density: 0.3,
						stretch: 0.0,
						amplitude: 8.0
					});

					console.log('Vanta Topology initialisé avec succès');
				}

			} catch (error) {
				console.error('Erreur lors de l\'initialisation de Vanta Topology:', error);
			}
		};

		initVanta();
	});

	onDestroy(() => {
		if (vantaEffect?.destroy) {
			try {
				vantaEffect.destroy();
			} catch (error) {
				console.error('Erreur lors de la destruction de Vanta:', error);
			}
			vantaEffect = null;
		}
	});
</script>

{#if browser}
	<div bind:this={vantaRef} class="vanta-container"></div>
{/if}

<style>
	.vanta-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 2;
	}
</style> -->

<!-- ======================================== -->

<!-- <script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let vantaRef;
	let vantaEffect;

	onMount(() => {
		if (!browser) return;

		const initVanta = async () => {
			try {
				// Attendre que les scripts CDN soient chargés
				while (!window.THREE || !window.VANTA || !window.VANTA.CIRCLES) {
					await new Promise(resolve => setTimeout(resolve, 100));
				}
				
				// Attendre que l'élément soit prêt
				while (!vantaRef) {
					await new Promise(resolve => setTimeout(resolve, 50));
				}

				// Vérifier qu'il n'y a pas déjà un effet
				if (!vantaEffect) {
					vantaEffect = window.VANTA.CIRCLES({
						el: vantaRef,
						THREE: window.THREE,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.00,
						minWidth: 200.00,
						scale: 1.0,
						scaleMobile: 1.0,
						color: 0x3f5efc,
						color2: 0xff006e,
						backgroundColor: 0x23153c,
						size: 1.0,
						quantity: 5,
						speed: 1.0,
						forceAnimate: true,
						opacity: 0.5,
						spacing: 15.0,
						noise: 3.0,
						chaos: 0.6
					});

					console.log('Vanta Circles initialisé avec succès');
				}

			} catch (error) {
				console.error('Erreur lors de l\'initialisation de Vanta Circles:', error);
			}
		};

		initVanta();
	});

	onDestroy(() => {
		if (vantaEffect?.destroy) {
			try {
				vantaEffect.destroy();
			} catch (error) {
				console.error('Erreur lors de la destruction de Vanta:', error);
			}
			vantaEffect = null;
		}
	});
</script>

{#if browser}
	<div bind:this={vantaRef} class="vanta-container"></div>
{/if}

<style>
	.vanta-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 2;
	}
</style>
 -->

<!-- ============================================= -->

<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// Props pour configurer l'effet
	export let effect = 'WAVES'; // WAVES, TOPOLOGY, TRUNK, BIRDS, CELLS, CLOUDS, DOTS, FOG, GLOBE, HALO, NET, RINGS, RIPPLE
	export let config = {};

	let vantaRef;
	let vantaEffect;

	// Configurations par défaut pour chaque effet qui fonctionne
	const defaultConfigs = {
		WAVES: {
			color: 0x3f5efc,
			backgroundColor: 0x111111,
			shininess: 30,
			waveHeight: 15,
			waveSpeed: 1,
			zoom: 0.75
		},
		TOPOLOGY: {
			color: 0xff3f81,
			backgroundColor: 0x111111,
			spacing: 16.0,
			noise: 3.0,
			chaos: 0.6,
			resolution: 1.0,
			speed: 1.0,
			density: 0.3,
			stretch: 0.0,
			amplitude: 8.0
		},
		TRUNK: {
			color: 0x8b4513,
			backgroundColor: 0x2f1b14,
			spacing: 0.0,
			chaos: 4.0,
			scale: 1.0,
			scaleMobile: 1.0
		},
		BIRDS: {
			color1: 0xff4081,
			color2: 0x448aff,
			backgroundColor: 0x1a1a2e,
			quantity: 3,
			speedLimit: 5,
			separation: 20,
			alignment: 20,
			cohesion: 20,
			backgroundAlpha: 0.0
		},
		CELLS: {
			color1: 0x74C3C,
			color2: 0x74C3C,
			backgroundColor: 0x111111,
			size: 1,
			speed: 1.0,
			scale: 1.0,
			scaleMobile: 1.0
		},
		CLOUDS: {
			color: 0x3f8fbf,
			backgroundColor: 0x1f1f3a,
			skyColor: 0x68b8d7,
			cloudShadowColor: 0x183550,
			sunColor: 0xff9919,
			sunGlareColor: 0xff6633,
			sunlightColor: 0xff9933,
			speed: 1.0
		},
		DOTS: {
			color: 0x3f5efc,
			color2: 0xff006e,
			backgroundColor: 0x23153c,
			size: 4.0,
			spacing: 25.0,
			showLines: true
		},
		FOG: {
			color: 0x3f5efc,
			backgroundColor: 0x191919,
			lowColor: 0x1f1f3a,
			midColor: 0x3f5efc,
			highColor: 0x68b8d7,
			speed: 1.0,
			zoom: 1.0
		},
		GLOBE: {
			color: 0x3f5efc,
			backgroundColor: 0x23153c,
			size: 1.0,
			spacing: 15.0
		},
		HALO: {
			color: 0xE74C3C,
			backgroundColor: 0x191919,
			size: 1.0,
			amplitudeFactor: 5.0,
			xOffset: 0.03,
			yOffset: 0.0
		},
		NET: {
			color: 0x3f54576,
			backgroundColor: 0x111111,
			points: 10,
			maxDistance: 20,
			spacing: 15,
			showDots: true
		},
		RINGS: {
			color: 0x3f5efc,
			backgroundColor: 0x191919,
			quantity: 5,
			speed: 3.0,
			scale: 2.0,
			scaleMobile: 1.0
		},
		RIPPLE: {
			color: 0x3f5efc,
			backgroundColor: 0x191919,
			quantity: 2,
			speed: 1.0,
			scale: 1.0,
			scaleMobile: 1.0
		}
	};

	onMount(() => {
  if (!browser) return;

  const initVanta = async () => {
    try {
      const p5Effects = ['TRUNK', 'TOPOLOGY'];

      // Attendre que la lib requise soit chargée
      if (p5Effects.includes(effect)) {
        while (!window.p5) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      } else {
        while (!window.THREE) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      }

      // Attendre que VANTA soit chargé
      while (!window.VANTA) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      // Attendre que l'élément ref soit prêt
      while (!vantaRef) {
        await new Promise((resolve) => setTimeout(resolve, 30));
      }

      if (!vantaEffect) {
        const finalConfig = {
          el: vantaRef,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          ...defaultConfigs[effect],
          ...config
        };

        // Ajouter THREE uniquement si nécessaire
        if (!p5Effects.includes(effect)) {
          finalConfig.THREE = window.THREE;
        }

        vantaEffect = window.VANTA[effect](finalConfig);
        console.log(`✅ Vanta "${effect}" initialisé avec succès`);
      }
    } catch (error) {
      console.error(`❌ Erreur Vanta (${effect}) :`, error);
    }
  };

  initVanta();
});

</script>

{#if browser}
	<div bind:this={vantaRef} class="vanta-container"></div>
{/if}

<style>
	.vanta-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		opacity: 1;
	}
</style>
