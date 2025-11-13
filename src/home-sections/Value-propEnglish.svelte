<script>
	import Button from '$lib/component/btn-white.svelte';
	import SliderLogos from '$lib/component/Slider-Logos.svelte';

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let wrapperh4; // ref sur le conteneur des h4
	let tl; // timeline pour cleanup

	onMount(() => {
		// 1) Timeline unique avec stagger = comportement cohérent desktop & mobile
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperh4,
				start: 'top 70%',
				end: 'top 20%',
				scrub: 1,
				onLeave: (self) => tl.progress(0).pause(), // reset en bas
				onLeaveBack: (self) => tl.progress(0).pause(), // reset en haut
				// markers: true,
				invalidateOnRefresh: true
			}
		});

		tl.from(wrapperh4.querySelectorAll('div'), {
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
		<h2>Voice, dubbing, post-production …</h2>
		
				<h3>Together, let’s shape emotion and make it memorable !</h3>
				<div class="wrapper__h4" bind:this={wrapperh4}>
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-thumbs-up icon"></i>
						<h4>25+ Years Of Experience</h4>
					</div>
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-microphone-lines icon"></i>
						<h4>3 studios</h4>
					</div>
		
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-flag icon"></i>
						<h4>50+ Languages</h4>
					</div>
		
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-earth-americas icon"></i>
						<h4>/ International Network</h4>
					</div>
				</div>
		
		<div class="container">
			<div class="wrapper__p">
			<p>
				<strong>Recognized players</strong> in high-end audio production, both in <strong>France</strong> and <strong>internationally</strong> ,
we specialize in voice-over, dubbing, sound design, original music, post-production, and mixing.
We combine <strong>technical precision, creative intuition</strong> and <strong>attention to detail </strong> to deliver <strong>premium, tailor-made</strong>
productions.

At <strong>Audio Pigment</strong> , each project is <strong>crafted as a unique piece </strong> , where <strong>expertise, experience</strong> , and <strong>creativity</strong> 

come together to serve <strong>impact, picture, storytelling</strong> , and <strong>identity</strong> .
<strong>Since 1999</strong>, we’ve been trusted by <strong>leading brands</strong>  and <strong>institutions</strong>, including:

L’Oréal, Chanel, Hermès, Air France, Accor, Ferrero, Burger King, Lego, Disneyland Paris, Procter &amp; Gamble,

Total Energies, and many more…
And we’re proud to keep earning their <strong>trust </strong> today.
			</p>
			
		</div>
	
		</div>
		<div class="wrapper-button">
			<Button txt="Get in touch" href="/fr/contact" />
		</div>
		
	
		<div class="wrapper__slider-logos">
			<h4>Our customers are satisfied</h4>
			<SliderLogos />
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
		background-image: url('../assets/bg-valueProp.webp');
		/* background-image: radial-gradient(
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
		); */
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 100vh;
		z-index: 0;
		overflow: hidden;
		z-index: 0;
		margin-top: 10px;
	}
	section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.231);
		z-index: -1;
	}
	.wrapper-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -50px;
		margin-bottom: 0px;
	}
	.wrapper__slider-logos {
		width: 100%;
	}
	.container {
	display: flex;
		gap: 20px;
		max-width: 1200px;
		margin: 0 auto;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0);
		border-radius: 10px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	/* .img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	} */
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 0px;
		color: white;
		margin-top: 100px;
		gap: 80px;
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
		color: white;
		margin-top: 0px;
		font-weight: var(--bold);
		width: 100%;
		letter-spacing: -2.5px;
	}
	.wrapper__title-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		background: linear-gradient(to top, rgba(23, 23, 23, 0.518), rgba(119, 115, 115, 0.307));
		padding: 10px 10px;
		border-radius: 8px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	.icon {
		font-size: 1.5rem;
		color: white;
	}
	section h4 {
		font-family: var(--raleway);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: white;
		font-weight: var(--bold);
		margin-top: 0px;
		padding: 0px 10px;
		/* background: linear-gradient(90deg, #e74c3b, #e52e71); */
		border-radius: 5px;
	}
	.wrapper__h4 {
		gap: 10px;
		margin-top: 0px;
		display: flex;
	}
	p {
		font-family: var(--raleway);
		font-size: 1.1rem;
		color: white;
		margin-top: 20px;
		max-width: 800px;
		line-height: 1.5;
		margin-top: 0px;
		margin-bottom: 30px;
		font-weight: 500;
		text-align: left;
	}
	.wrapper__slider-logos{
		margin-top: 50px;
	}
	.wrapper__slider-logos h4{
		font-family: var(--bebas);
		font-size: 2rem;
		color: white;
		font-weight: 500;
		margin-bottom: 0px;
		font-weight: var(--bold);
		text-align: left;
		margin-left: 2%;
		letter-spacing: -1px;
		
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
		section h4 {
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
