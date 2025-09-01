<script>
	// import ThreeComponent from '$lib/component/Three-component.svelte';
	// import ThreeComponent from '$lib/component/Vumetre-three.svelte';
	import Button from '$lib/component/btn-black.svelte';
	import ButtonWhite from '$lib/component/btn-white.svelte';
	import Test from '$lib/component/Test.svelte';
	let videoEl;
	import { onMount } from 'svelte';

	onMount(() => {
    if (videoEl) {
      videoEl.playbackRate = 0.7; // ralentit la vidéo à 0.5x
    }
  });
</script>

<section>
	<Test/>
	<!-- <video  bind:this={videoEl} autoplay muted loop playsinline preload="none" class="background-video">
		<source
			src="https://media.istockphoto.com/id/1454642601/fr/vid%C3%A9o/animation-danneaux-blancs-propres-contexte-abstrait-animation-en-boucle.mp4?s=mp4-640x640-is&k=20&c=hixbyptzm0VbyLkRg0rU8pJNWcptp3yJ7EHmGk-sJr4="
			type="video/mp4"
		/>
	</video> -->

	<div class="wrapper__txt">

		<h1>Agence de communication sonore</h1>
		<h2>
			Studio post production son, voix off, doublage, identité sonore, sound design, composition
			musicale, mixage
		</h2>
		<!-- <div class="wrapper__component">
			<ThreeComponent />
		</div> -->
		<div class="wrapper__buttons">
			<Button txt="Nous contacter" href="/fr/contact" />
			<ButtonWhite txt="Nous écouter" href="/fr/realisations" />
		</div>
	</div>
</section>

<style>
	/* .background-video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		z-index: 0;
		object-fit: cover;
		filter: brightness(1);
	
	} */
	
	section {
		z-index: 0;
		height: 50rem;
		position: relative;
		background-color: transparent;
		/* background-image: url('../assets/Hero-image/B.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed; */
	}
	section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* background: linear-gradient(rgb(255, 255, 255) 0%, rgba(83, 4, 4, 0.552) 40%, rgba(83, 4, 4, 0.521) 70%,  rgba(255, 255, 255, 0.579) 100% ); */
		z-index: 1;

	}


	/* =======================
	ESSAI II
	====================== */

	/* .wrapper__component {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 100%;
		width: 100%;
	} */

	.wrapper__txt {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-family: var(--raleway);
		color: rgb(14, 14, 14);
		z-index: 4;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0px;
		background-color: transparent;
	}
	.wrapper__buttons {
		display: flex;
		margin-top: 50px;
	}

	h1 {
		font-family: var(--bebas);
		font-size: 4rem;
		color: rgb(80, 78, 78);
		width: 90%;
		margin: 0 auto;
		font-weight: var(--black);
		letter-spacing: -3.8px;
		/* text-transform: uppercase; */
	}

	h2 {
		color: rgb(49, 47, 47);
		font-size: 1.3rem;
		font-weight: var(--medium);
		width: 90%;
		margin: 0 auto;
	}

	@media screen and (max-width: 768px) {
		section {
			height: 1000px;
		}
		.wrapper__txt {
			position: absolute;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
			gap: 30px;
		}
		.wrapper__buttons {
			display: flex;
			flex-direction: column;
			margin-top: 10px;
			gap: 0px;
		}

		h1 {
			font-size: 3.2rem;
			margin-top: 5rem;
			line-height: 1.2;
		}
		h2 {
			font-size: 1rem;
		}
	}
</style>
