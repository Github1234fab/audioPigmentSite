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
		<h2>Together, let’s shape emotion and make it memorable !</h2>

		<p>
			At <strong>AUDIO PIGMENT</strong>, every project is listened to, crafted, and refined with <strong>care, expertise and
			creativity.</strong> <strong>By your side.</strong>
		</p>
		
		<p>
			<strong>Attentive listening</strong>, <strong>sharp technical skills</strong> and
			<strong>the commitment to tailor-made sound</strong> for maximum impact.
		</p>

		<p>
			<strong>To understand</strong>, <strong>to feel</strong>,
			<strong>to convey</strong>: that’s our craft. <strong>You can trust us.</strong>
		</p>

		<div class="wrapper__buttons">
			<BtnBlack txt="Get in touch" href="/fr/contact" />
			<BtnWhite txt="Discover more" href="/fr/services" />
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
		max-width: 900px;
	}

	.wrapper__section-txt h2 {
		font-family: var(--font-heading);
		font-size: var(--fs-h2);
		line-height: 1.2;
		color: var(--white);
		font-weight: 400;
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
		background: radial-gradient(
			circle at center,
			rgba(15, 23, 42, 0.5) 0%,
			rgba(0, 0, 0, 0.85) 100%
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
