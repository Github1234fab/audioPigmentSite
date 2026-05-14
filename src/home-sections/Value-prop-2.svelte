<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import BtnBlack from '$lib/component/btn-black.svelte';
	import BtnWhite from '$lib/component/btn-white.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let sectionRef;
	let contentRef;

	onMount(() => {
		gsap.from(contentRef.children, {
			y: 50,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<section bind:this={sectionRef}>
	<video autoplay muted loop playsinline preload="none" class="background-video">
		<source
			src="https://videos.pexels.com/video-files/7087627/7087627-uhd_2732_1440_25fps.mp4"
			type="video/mp4"
		/>
	</video>

	<div class="wrapper__section-txt" bind:this={contentRef}>
		<h2>Ensemble, créons des émotions, marquons les esprits</h2>

		<p>
			Chez AUDIO PIGMENT, chaque projet est écouté, pensé et façonné avec <strong>soin, expertise et
			inventivité.</strong> À <strong>vos côtés.</strong>
		</p>
		
		<p>
			Une <strong>écoute attentive</strong>, un <strong>savoir-faire affûté </strong> et
			<strong>le soin du sur-mesure</strong> pour un impact optimal.
		</p>

		<p>
			<strong>Comprendre</strong>, <strong>ressentir</strong>,
			<strong>transmettre</strong> : c’est notre métier. <strong>Faites-nous confiance.</strong>
		</p>

		<div class="wrapper__buttons">
			<BtnBlack txt="Contactez-nous" href="/fr/contact" />
			<BtnWhite txt="Découvrez nos services" href="/fr/services" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: transparent;
		min-height: 100vh;
		position: relative;
		overflow: hidden;
		padding: var(--space-xl) var(--space-md);
	}

	.wrapper__section-txt {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
		max-width: 1000px;
		padding: 4rem; /* Espace interne pour l'effet de cadre */
		background: rgba(0, 0, 0, 0.3); /* Verre sombre translucide */
		backdrop-filter: blur(20px); /* Flou puissant pour l'effet poli */
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.1); /* Bordure fine de "tranche" */
		border-radius: var(--radius-lg);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
		text-align: center;
	}

	.wrapper__section-txt h2 {
		font-family: var(--font-heading);
		font-size: var(--fs-h2);
		line-height: 1.2;
		color: var(--white);
		font-weight: 300; /* Plus fin et premium */
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin: 0;
	}

	.wrapper__section-txt p {
		font-family: var(--font-main);
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--white-off);
		margin: 0;
		text-wrap: balance;
		opacity: 0.9;
	}

	strong {
		color: var(--white);
		font-weight: 700;
	}

	.wrapper__buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
		margin-top: var(--space-md);
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		/* Dégradé plus riche : mélange d'ardoise profonde et de bleu nuit pour éviter le côté "terne" */
		background: radial-gradient(
			circle at center,
			rgba(15, 23, 42, 0.5) 0%, /* Bleu nuit translucide au centre */
			rgba(0, 0, 0, 0.85) 100% /* Noir profond sur les bords */
		);
		z-index: 1;
		backdrop-filter: blur(1px);
		-webkit-backdrop-filter: blur(1px);
	}

	.background-video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}

	@media screen and (max-width: 768px) {
		section {
			padding: var(--space-lg) var(--space-sm);
		}

		.wrapper__section-txt {
			padding: 2rem 1.5rem;
		}

		.wrapper__section-txt h2 {
			font-size: 1.8rem;
		}

		.wrapper__section-txt p {
			font-size: 1.1rem;
		}

		.wrapper__buttons {
			flex-direction: column;
			width: 100%;
			max-width: 300px;
		}
	}
</style>
