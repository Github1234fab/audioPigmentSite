<script>
	import { onMount } from 'svelte';
	import Btn from '$lib/component/btn-white.svelte';

	export let title;
	export let subtitle;
	export let txt;
	export let href = '';
	export let videoSrc; 
	export let imgSrc; 

	let isDesktop = false;
	let videoRef;

	onMount(() => {
		isDesktop = window.innerWidth > 1023;
		if (videoRef) {
			videoRef.play().catch(error => {
				console.log("Autoplay prevented, waiting for interaction", error);
			});
		}
	});
</script>

<div class="card">
	<div class="wrapper__txt">
		<div class="title">{title}</div>
		<div class="subtitle">{subtitle}</div>
		<Btn {txt} {href} />
	</div>

	{#if videoSrc}
		<video
			bind:this={videoRef}
			class="video-background"
			autoplay
			muted
			loop
			playsinline
			preload="auto"
			poster={imgSrc}
		>
			<source src={videoSrc} type="video/mp4" />
			<track kind="captions" />
		</video>
	{:else}
		<img src={imgSrc} alt={title} class="video-background" loading="lazy" />
	{/if}
</div>

<style>
	.card {
		width: 100%;
		height: 550px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #1a1a1a; /* Fond de secours très sombre */
	}

	.video-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1; /* On le met en positif mais derrière le texte */
		filter: brightness(0.6);
	}

	.wrapper__txt {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 15px;
		z-index: 10;
		width: 90%; /* Un peu de marge sur les côtés */
		max-width: 500px;
		padding: 35px 25px;
		background: rgba(0, 0, 0, 0.25); /* Verre sombre */
		backdrop-filter: blur(15px); /* Effet poli */
		-webkit-backdrop-filter: blur(15px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.title {
		font-family: var(--bebas);
		font-size: 2.8rem;
		font-weight: var(--black);
		margin-bottom: 20px;
		color: white;
		width: fit-content; /* Épouse la longueur du texte */
		margin: 0 auto 15px; /* Centrage et espace sous le titre */
		text-align: center;
		border: 2.5px solid rgba(255, 255, 255, 0.425);
		padding: 15px 30px; /* Moins de padding vertical pour un look plus serré */
		border-radius: 5px;
	}

	.subtitle {
		font-family: var(--raleway);
		font-size: 1.3rem;
		font-weight: var(--extra-bold);
		white-space: pre-line;
		text-align: center;
		color: rgb(255, 255, 255);
	}

	@media screen and (max-width: 768px) {
		.card {
			height: 600px;
		}
		.title {
			font-family: var(--bebas);
			font-size: 1.8rem;
			font-weight: var(--black);
			padding: 10px 20px;
			width: fit-content;
			margin: 0 auto 10px;
		}
		.subtitle {
			font-size: 1.1rem;
			font-weight: 500;
		}
		.wrapper__txt {
			gap: 30px;
			padding: 20px 15px;
		}
	}
</style>