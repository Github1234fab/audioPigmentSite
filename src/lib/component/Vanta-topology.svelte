<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let config = {};

	let vantaRef;
	let vantaEffect;

	const defaultConfig = {
		el: null, // sera défini dynamiquement
		scale: 1.0,
		scaleMobile: 1.0,
		backgroundColor: 0x23153c,
		// ...autres options en fonction de ton besoin
	};

	async function ready() {
		while (!window.p5 || !window.VANTA?.TOPOLOGY) {
			await new Promise((r) => setTimeout(r, 50));
		}
		while (!vantaRef) await new Promise((r) => setTimeout(r, 10));

		const finalConfig = {
			...defaultConfig,
			...config,
			el: vantaRef,
		};

		vantaEffect = window.VANTA.TRUNK(finalConfig);
	}

	onMount(() => {
		if (!browser) return;
		ready();
	});

	onDestroy(() => {
		if (vantaEffect?.destroy) vantaEffect.destroy();
	});
</script>

<div bind:this={vantaRef} class="vanta-topology"></div>

<style>
	.vanta-topology {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
        opacity: 0.4;
	}
</style>
