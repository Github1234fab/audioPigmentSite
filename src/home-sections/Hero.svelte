<script>
	import Button from '$lib/component/btn-black.svelte';
	import ButtonWhite from '$lib/component/btn-white.svelte';
	import Test from '$lib/component/Test.svelte';
</script>

<section class="section">
	<video
		autoplay
		loop
		muted
		playsinline
		preload="metadata"
		poster="/BG-hero"
		class="hero-video"
		aria-hidden="true"
	>
		<source src="/APBG.mov" type="video/mp4" />
	</video>

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
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url('/BG-hero.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 0;
		height: 60rem;
		position: relative;
	}
	.section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.202);
		z-index: 1;
	}

	.hero-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}

	.wrapper__txt {
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
		background: linear-gradient(
			rgba(255, 255, 255, 0.006) 0%,
			#c0c0c057 40%,
			rgba(255, 255, 255, 0)
		);
		margin-top: -100px;
	}
	.wrapper__buttons {
		display: flex;
		margin-top: 50px;
		gap: 20px;
	}

	h1 {
		font-family: var(--bebas);
		font-size: 4rem;
		color: var(--ardoise);
		width: 90%;
		margin: 0 auto;
		font-weight: var(--black);
		letter-spacing: -3.8px;
		/* text-transform: uppercase; */
	}

	h2 {
		color: var(--ardoise);
		font-size: 1.3rem;
		font-weight: var(--medium);
		width: 90%;
		letter-spacing: -1px;
		margin: 0 auto;
	}

	@media screen and (max-width: 768px) {
		section {
			height: 55rem;
		}
		.section::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0);
			z-index: 1;
		}
		.wrapper__txt {
			position: absolute;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
			gap: 30px;
			margin-top: 20px;
		}
		.wrapper__buttons {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 10px auto;
			gap: 0px;
			/* width: 100%; */
		}

		h1 {
			font-size: 3rem;
			line-height: 1.2;
			letter-spacing: -2.6px;
			padding: 20px;
			width: 100%;
			margin: 0 auto;
			hyphens: auto;
			-webkit-hyphens: auto;

			overflow-wrap: normal;
		}
		h2 {
			font-size: 1.2rem;
		}
	}
</style>
