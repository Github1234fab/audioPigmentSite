<!-- <script>
	import Button from '$lib/component/btn-black-border.svelte';
	import SliderLogos from '$lib/component/Slider-logo-english.svelte';

</script>

<section>

	<div class="wrapper__section-txt">
		<h2>Together, let’s shape emotion and make it memorable !</h2>

		<div class="wrapper__h4">
			<h4>Over 25 years of experience</h4>
			<h4>3 studios</h4>
			<h4>50+ languages</h4>
			<h4>International network</h4>
		</div>

		<p>
			<strong>Recognized players</strong> in high-end audio production, both in
			<strong>France </strong>and <strong>internationally</strong>, we specialize in voice-over,
			dubbing, sound design, original music, post-production, and mixing.

			<br /><br />We combine
			<strong
				>technical precision, creative intuition, and attention to detail to deliver premium,
				tailor-made productions</strong
			>
			.
			<br /><br /> At<strong>Audio Pigment</strong> , each project is
			<strong
				>crafted as a unique piece, where expertise, experience, and creativity come together to
				serve impact, picture, storytelling, and identity</strong
			>
			.
			<br /><br /> <strong>Since 1999</strong>, we’ve been trusted by
			<strong>leading brands and institutions</strong>, including: L’Oréal, Chanel, Hermès, Air
			France, Accor, Ferrero, Burger King, Lego, Disneyland Paris, Procter &amp; Gamble, Total
			Energies, and many more…
			<br /><br />And we’re proud to keep earning their trust today.
		</p>
		<Button txt="Get in touch" href="/fr/contact" />
	</div>
	<div class="wrapper__slider-logos">
		<SliderLogos />
	</div>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background-color: var(--ardoise);
		min-height: 100vh;
		z-index: 0;
		gap: 40px;
		overflow: hidden;
		z-index: 0;
	}
	.wrapper__slider-logos {
		width: 100%;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 800px;
		margin-bottom: 0px;
		color: white;
		margin-top: 50px;
		gap: 30px;
	}

	.wrapper__section-txt h2 {
		font-family: var(--bebas);
		font-size: 4.5rem;
		color: white;
		margin-bottom: 0px;
		font-weight: 400;
		letter-spacing: -1.5px;
		width: 100%;
	}

	section h4 {
		font-family: var(--raleway);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: white;
		font-weight: var(--regular);
		margin-top: 0px;
		border: 1px solid grey;
		padding: 20px 40px;
	}
	.wrapper__h4 {
		gap: 5px;
		margin-top: 30px;
		display: flex;
	}
	p {
		font-family: var(--raleway);
		font-size: 1rem;
		color: white;
		margin-top: 20px;
		max-width: 800px;
		line-height: 1.5;
		margin-top: 50px;
		margin-bottom: 30px;
	}
	@media screen and (max-width: 768px) {
		.wrapper__h4 {
			gap: 5px;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
		}
		.wrapper__slider-logos {
			width: 100%;
		}
		.wrapper__section-txt {
			font-size: 2.5rem;
		}
		.wrapper__section-txt h2 {
			font-size: 3.5rem;
		}
	}
</style> -->


<script>
	import Button from '$lib/component/btn-black.svelte';
	import SliderLogos from '$lib/component/Slider-Logos.svelte';

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let wrapperH4; // ref sur le conteneur des h4
	let tl; // timeline pour cleanup

	onMount(() => {
		// 1) Timeline unique avec stagger = comportement cohérent desktop & mobile
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperH4,
				start: 'top 70%',
				end: 'top 20%',
				scrub: 1,
				onLeave: (self) => tl.progress(0).pause(), // reset en bas
				onLeaveBack: (self) => tl.progress(0).pause(), // reset en haut
				// markers: true,
				invalidateOnRefresh: true
			}
		});

		tl.from(wrapperH4.querySelectorAll('h4'), {
			x: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
			stagger: 0.15 // décalage entre chaque h4
		});

		const onLoad = () => ScrollTrigger.refresh();
		window.addEventListener('load', onLoad);

		return () => {
			window.removeEventListener('load', onLoad);
		};
	});

	onDestroy(() => {
		tl?.scrollTrigger?.kill();
		tl?.kill();
	});
</script>

<section>
	<div class="wrapper__section-txt">
		<h2>Sonic branding, Sound design, Voice-over </h2>
		<h3>Together, let’s shape emotion and make it memorable !</h3>

		<!-- On bind le conteneur des h4 -->
		<div class="wrapper__h4" bind:this={wrapperH4}>
			<h4>Over 25 years of experience</h4>
			<h4>3 studios</h4>
			<h4>50+ languages</h4>
			<h4>International network</h4>
		</div>

		<p>
			<strong>Recognized players</strong> in high-end audio production, both in
			<strong>France </strong>and <strong>internationally</strong>, we specialize in voice-over,
			dubbing, sound design, original music, post-production, and mixing.

			<br /><br />We combine
			<strong
				>technical precision, creative intuition, and attention to detail to deliver premium,
				tailor-made productions</strong
			>
			.
			<br /><br /> At<strong>Audio Pigment</strong> , each project is
			<strong
				>crafted as a unique piece, where expertise, experience, and creativity come together to
				serve impact, picture, storytelling, and identity</strong
			>
			.
			<br /><br /> <strong>Since 1999</strong>, we’ve been trusted by
			<strong>leading brands and institutions</strong>, including: L’Oréal, Chanel, Hermès, Air
			France, Accor, Ferrero, Burger King, Lego, Disneyland Paris, Procter &amp; Gamble, Total
			Energies, and many more…
			<br /><br />And we’re proud to keep earning their trust today.
		</p>

		<div class="wrapper__slider-logos">
			<SliderLogos />
		</div>
		<div class="wrapper-button">
			<Button txt="Get in touch" href="/fr/contact" />
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background-image: radial-gradient(
			circle at top right,
			rgb(255, 255, 255) 0%,
			rgb(255, 255, 255) 48%,
			rgb(248, 248, 248) 48%,
			rgb(248, 248, 248) 53%,
			rgb(240, 240, 240) 53%,
			rgb(240, 240, 240) 56%,
			rgb(229, 229, 229) 56%,
			rgb(229, 229, 229) 69%,
			rgb(229, 229, 229) 69%,
			rgb(229, 229, 229) 100%
		);
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 100vh;
		z-index: 0;
		gap: 30px;
		overflow: hidden;
		z-index: 0;
	}
	.wrapper-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 100px;
	}
	.wrapper__slider-logos {
		width: 100%;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 0px;
		color: white;
		margin-top: 100px;
		gap: 20px;
		width: 100%;
	}
	.wrapper__section-txt h2 {
		font-family: var(--raleway);
		/* font-size: 3.5rem; */
		font-size: 2rem;
		color: var(--ardoise);
		margin-bottom: 0px;
		font-weight: 400;
		letter-spacing: -1.5px;
		width: 100%;
		line-height: 60px;
	}
	.wrapper__section-txt h3 {
		font-family: var(--bebas);
		font-size: 3.5rem;
		color: var(--ardoise);
		margin-top: 0px;
		font-weight: var(--bold);
		width: 100%;
		letter-spacing: -2.5px;
	}
	

	section h4 {
		font-family: var(--raleway);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: white;
		font-weight: var(--medium);
		margin-top: 0px;
		padding: 10px 30px;
		background: linear-gradient(90deg, #e74c3b, #e52e71);
		border-radius: 5px;
	}
	.wrapper__h4 {
		gap: 20px;
		margin-top: 30px;
		display: flex;
	}
	p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		color: var(--ardoise);
		margin-top: 20px;
		max-width: 800px;
		line-height: 1.5;
		margin-top: 50px;
		margin-bottom: 30px;
		font-weight: 500;
	}

	@media screen and (max-width: 768px) {
		section {
			height: 100%;
		}
		.wrapper__h4 {
			gap: 5px;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
		}
		.wrapper__slider-logos {
			width: 100%;
		}
		.wrapper__section-txt {
			font-size: 2.5rem;
		}
		.wrapper__section-txt h2 {
			font-size: 1.5rem;
			line-height: 30px;
		}
		.wrapper__section-txt {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			max-width: 100%;
			margin-bottom: 0px;
			color: white;
			margin-top: 50px;
			gap: 20px;
		}
		.wrapper__section-txt h3 {
		font-family: var(--bebas);
		font-size: 3rem;
		color: var(--ardoise);
		margin-top: 0px;
		font-weight: var(--bold);
		width: 100%;
		letter-spacing: -2.2px;
	}
	section h4{
		font-size: 1rem;
		padding: 8px 20px;
	}
	p {
		font-family: var(--raleway);
		font-size: 1rem;
		color: var(--ardoise);
		margin-top: 20px;
		max-width: 800px;
		line-height: 1.5;
		margin-top: 50px;
		margin-bottom: 30px;
		font-weight: 500;
		text-align: left;
	}
	}
</style>

