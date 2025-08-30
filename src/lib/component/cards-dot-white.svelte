<!-- <script>
	export let title;
	export let subtitle;
	import Btn from '$lib/component/btn-white.svelte';
	export let txt;
	export let href = ''; // destination du lien
	export let videoSrc;
	export let imgSrc;
</script>

<div class="card">
	<div class="dot"></div>
	<div class="wrapper__txt">
		<div class="title">{title}</div>
		<div class="subtitle">{subtitle}</div>
		<Btn {txt} {href} />
			<video
			class="video-background"
			src={videoSrc}
			width="500"
			autoplay
			muted
			loop
		>
			<track kind="captions" />
			Votre navigateur ne supporte pas la vidéo HTML5.
		</video> 
		<img src={imgSrc} alt="blabla">
	</div>
</div>

<style>
	.card {
		aspect-ratio: 1.6;
		height: 350px;
		border-radius: 0px;
		padding: 1rem;
		position: relative;
		background-color: var(--red);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: black;
		font-family: var(--raleway);
		z-index: 0;
		box-shadow: 0px 0px 20px rgb(150, 150, 150);
	}
	.video-background{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: cover;
		filter: brightness(0.);
	}
	.wrapper__txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 10px;
		/* background-color: rgb(255, 255, 255); */
		height: 320px;
		aspect-ratio: 1.3;
	}
	/* .card:hover .dot {
		width: 10px;
		aspect-ratio: 1;
		animation: moveDot 10s linear infinite;
	} */

	/* .dot {
		width: 0px;
		aspect-ratio: 1;
		background-color: rgba(255, 0, 0, 1);
		border-radius: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		z-index: 2;
		box-shadow: 0px 0px 5px rgb(20, 20, 20);
	} */

	.title {
		font-size: 2rem;
		font-weight: var(--bold);
		margin-bottom: 10px;
		font-family: var(--raleway);
		text-align: center;
		color: white;
		letter-spacing: -0.8px;
		width: 100%;
	}

	.subtitle {
		font-size: 1rem;
		font-weight: var(--bold);
		margin-bottom: 0px;
		white-space: pre-line;
		text-align: center;
		color: white;
	}
	img{
		height: 300px;
		width: 300px;
	}

	@keyframes moveDot {
		0% {
			top: 0%;
			left: 0%;
		}
		25% {
			top: 0%;
			left: 100%;
		}
		50% {
			top: 100%;
			left: 100%;
		}
		75% {
			top: 100%;
			left: 0%;
		}
		100% {
			top: 0%;
			left: 0%;
		}
	}

	@media screen and (max-width: 490px) {
		.card {
			height: 300px;
			width: 300px;
			aspect-ratio: 0;
		}
		.wrapper__txt {
			height: 300px;
			width: 100%;
			aspect-ratio: 0;
		}
		.title {
			font-size: 1.5rem;
		}
		.subtitle {
			font-size: 0.9rem;
		}
	}
</style> -->


<script>
	import { onMount } from 'svelte';
	import Btn from '$lib/component/btn-white.svelte';
  
	export let title;
	export let subtitle;
	export let txt;
	export let href = '';
	export let videoSrc; // prop pour la vidéo externe
	export let imgSrc;   // prop pour fallback image
  
	let videoEl;
  
	onMount(() => {
	  if (videoEl && videoSrc) {
		videoEl.src = videoSrc;
		// tente de lancer la vidéo (ignore erreurs autoplay)
		videoEl.play().catch(() => {});
	  }
	});
  </script>
  
  <div class="card">
	<div class="wrapper__txt">
	  <div class="title">{title}</div>
	  <div class="subtitle">{subtitle}</div>
	  <Btn {txt} {href} />
  
	  {#if videoSrc}
		<video
		  bind:this={videoEl}
		  class="video-background"
		  autoplay
		  muted
		  loop
		  playsinline
		  preload="none"
		>
		  <track kind="captions" />
		  Votre navigateur ne supporte pas la vidéo HTML5.
		</video>
	  {:else if imgSrc}
		<img src={imgSrc} alt={title} class="video-background" />
	  {/if}
	</div>
  </div>
  
  <style>
	.card {
	  /* aspect-ratio: 1.8; */
	  width: 100vw;
	  height: 350px;
	  border-radius: 0px;
	  padding: 1rem;
	  position: relative;
	  background-color: transparent;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: black;
	  font-family: var(--raleway);
	  box-shadow: 0px 0px 20px rgb(150, 150, 150);
	  overflow: hidden;
	}
  
	.video-background {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	  z-index: -1;
	  filter: brightness(0.8);
	}
  
	.wrapper__txt {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  text-align: center;
	  gap: 10px;
	  z-index: 1;
	}
  
	.title {
	  font-size: 2rem;
	  font-weight: var(--black);
	  margin-bottom: 10px;
	  color: white;
	  width: 100%;
	  text-align: center;
	  border: 1px solid rgba(255, 255, 255, 0.425);
	  padding: 10px 20px;
	  border-radius: 5px;
	}
  
	.subtitle {
	  font-size: 1rem;
	  font-weight: var(--extra-bold);
	  white-space: pre-line;
	  text-align: center;
	  color: rgb(255, 255, 255);
	}



/* ==== Optimisation mobile ==== */
@media screen and (max-width: 768px) {
	.card {
	  aspect-ratio: none;
	  width: 90%;
	  height: 350px;
	  border-radius: 0px;
	  padding: 1rem;
	  position: relative;
	  background-color: var(--red);
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: black;
	  font-family: var(--raleway);
	  box-shadow: 0px 0px 20px rgb(150, 150, 150);
	  overflow: hidden;
	}
  

}

@media screen and (max-width: 468px) {
	.card {
	  aspect-ratio: none;
	  width: 300px;
	  height: 350px;
	  border-radius: 0px;
	  padding: 1rem;
	  position: relative;
	  background-color: var(--red);
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: black;
	  font-family: var(--raleway);
	  box-shadow: 0px 0px 20px rgb(150, 150, 150);
	  overflow: hidden;
	}
  

}

</style>
  