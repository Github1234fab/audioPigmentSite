<script>
	import { onMount } from 'svelte';
	import Button from '$lib/component/btn-black.svelte';
	import ButtonWhite from '$lib/component/btn-white.svelte';
	import Logo from '../assets/logos/PIGMENT.jpg';

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
		<img src={Logo} class="hero-logo" alt="Logo Audio Pigment" />
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
		background-color: var(--ardoise); 
		min-height: 90vh; /* Augmenté légèrement pour étirer l'espace vertical */
		max-height: 950px;
		position: relative;
		overflow: hidden;
		padding: 0;
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
		z-index: 1;
	}

	.hero-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% + 2px);
		object-fit: cover;
		z-index: 0;
	}

	.hero-logo {
		width: 120px;
		height: auto;
		margin-bottom: 3.5rem; /* Sauts de ligne généreux sous le logo */
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-md);
	}

	.wrapper__txt {
		position: relative;
		z-index: 4;
		width: 100%;
		padding: var(--space-md);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.2rem; /* Espace parfait entre H1 et H2 */
		background: none;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
	}

	h1 {
		font-family: var(--bebas);
		font-size: 3.5rem; /* Titre grossi comme demandé */
		color: var(--ardoise);
		width: 90%;
		margin: 0 auto;
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.1;
	}

	h2 {
		font-family: var(--font-main);
		font-size: 1.3rem;
		color: var(--ardoise-light);
		font-weight: 500;
		max-width: 750px; /* Centrage et largeur optimisée */
		margin: 0 auto;
		line-height: 1.4;
		text-shadow: none;
		text-transform: none;
	}

	.wrapper__buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 4.5rem; /* Pousse les boutons élégamment vers le bas */
		gap: var(--space-sm);
	}

	@media screen and (max-width: 768px) {
		section {
			min-height: 100svh;
			max-height: none;
			padding: var(--space-xl) 0;
		}

		.wrapper__txt {
			background: none;
			backdrop-filter: none;
			gap: 1rem;
		}

		.hero-logo {
			margin-bottom: 2.2rem;
		}

		h1 {
			font-size: 2.6rem;
		}

		h2 {
			font-size: 1.1rem;
		}

		.wrapper__buttons {
			flex-direction: column;
			width: 100%;
			max-width: 300px;
			margin-top: 3rem;
		}
	}
</style>
