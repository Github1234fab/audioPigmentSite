<script>
	import { onMount } from 'svelte';
	import Button from '$lib/component/btn-black.svelte';
	import ButtonWhite from '$lib/component/btn-white.svelte';
	import Test from '$lib/component/Test.svelte';

	let videoRef;

	onMount(() => {
		if (videoRef) {
			videoRef.play().catch(error => {
				console.log("Autoplay prevented by browser, waiting for interaction", error);
			});
		}
	});
</script>

<section class="section">
	<video
		bind:this={videoRef}
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		class="hero-video"
		aria-hidden="true"
		poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto/v1763025454/FOND_AP_2025_Boucle_MOV_hkwxu1.jpg"
	>
		<source
			src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto/v1763025454/FOND_AP_2025_Boucle_MOV_hkwxu1.mp4"
			type="video/mp4"
		/>
	</video>

	<div class="wrapper__txt">
		<h1>Agence de communication sonore</h1>
		<h2>
			Studio post production son, voix off, doublage, identité sonore, sound design, composition
			musicale, mixage
		</h2>
		<div class="wrapper__buttons">
			<Button txt="Nous contacter" href="/fr/contact" />
			<ButtonWhite txt="Nous écouter" href="/fr/realisations" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		/* background-image supprimée pour ne pas masquer la vidéo */
		background-color: var(--ardoise); 
		min-height: 100vh;
		min-height: 100svh;
		position: relative;
		overflow: hidden;
		padding: 0;
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%);
		z-index: 1;
	}

	.hero-video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.wrapper__txt {
		position: relative;
		z-index: 4;
		width: 100%;
		max-width: 1000px;
		padding: var(--space-md);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
		border-radius: var(--radius-lg);
	}

	h1 {
		font-family: var(--font-heading);
		font-size: var(--fs-h1);
		color: var(--ardoise);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1;
		margin-bottom: var(--space-xs);
		text-wrap: balance;
	}

	h2 {
		font-family: var(--font-main);
		font-size: var(--fs-h3);
		color: var(--ardoise-light);
		font-weight: 500;
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.4;
		text-wrap: balance;
	}

	.wrapper__buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: var(--space-md);
		gap: var(--space-sm);
	}

	@media screen and (max-width: 768px) {
		section {
			padding: var(--space-xl) 0;
		}

		.wrapper__txt {
			background: none;
			backdrop-filter: none;
		}

		.wrapper__buttons {
			flex-direction: column;
			width: 100%;
			max-width: 300px;
		}
	}
</style>
