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
		<img src={Logo} class="hero-logo" alt="Audio Pigment Logo" />
		<h1>French voice over, dubbing & audio post-production studio</h1>
		<h2>
			Specializing in multilingual voice-over & dubbing, sonic branding, music composition, and mixing
		</h2>
		<div class="wrapper__buttons">
			<Button txt="Get in touch" href="/en/contact" />
			<ButtonWhite txt="Hear our work" href="/en/realisations" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--ardoise); 
		min-height: 85vh;
		max-height: 900px;
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
		margin-bottom: var(--space-md);
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
		gap: var(--space-xs);
		background: none;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
	}

	h1 {
		font-family: var(--bebas);
		font-size: 2.8rem;
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
		margin: 0 auto;
		line-height: 1.4;
		text-shadow: none;
		text-transform: none;
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
			min-height: 100svh;
			max-height: none;
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
