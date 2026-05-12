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

	onMount(() => {
		isDesktop = window.innerWidth > 1023;
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
			class="video-background"
			src={videoSrc}
			autoplay
			muted
			loop
			playsinline
			preload="auto"
			poster={imgSrc}
		>
			<track kind="captions" />
			Votre navigateur ne supporte pas la vidéo HTML5.
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
		z-index: 10; /* Toujours au-dessus de tout */
		width: 100%;
		padding: 20px;
	}

	.title {
		font-family: var(--font-heading);
		font-size: 2.6rem;
		font-weight: 300;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.4);
		padding: 25px 20px;
		border-radius: 2px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.subtitle {
		font-family: var(--font-main);
		font-size: 1.3rem;
		font-weight: 700;
		white-space: pre-line;
		color: white;
	}

	@media screen and (max-width: 768px) {
		.card {
			height: 600px;
		}
		.title {
			font-size: 1.8rem;
			padding: 15px 10px;
		}
		.subtitle {
			font-size: 1.1rem;
			font-weight: 500;
		}
		.wrapper__txt {
			gap: 40px;
		}
	}
</style>
