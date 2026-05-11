<script>
	import Bilingue from '../assets/bilingue.png';
	import ButtonRed from '$lib/component/btn-white.svelte';
	import ComSonore from "../assets/ComSonore.webp";
	import MarkSonore from "../assets/MarkSonore2.webp";
	import AudioVisuel from "../assets/AudioVisuel2.webp";
	import VoixMulti from "../assets/Voix.webp";
	import Mixage from "../assets/Mixage3.jpg";

	const services = [
		{
			label: 'Sound communication',
			desc: 'Sonic branding & audio identity <br> (sonic logo, musical identity, brand voice, product sound design)',
			link: '/en/services/#1',
			image: ComSonore
		},
		{
			label: 'Audio marketing',
			desc: 'Creative audio for brand communication <br> (radio commercials, podcasts, event soundscapes, spatial audio, IVR systems, on-hold messages)',
			link: '/en/services/#2',
			image: MarkSonore
		},
		{
			label: 'Audiovisual & Digital Media',
			desc: 'Voices, sound design & soundtrack creation <br> (TV commercials, cinema ads, corporate films, institutional videos, motion design, VR, e-learning)',
			link: '/en/services/#3',
			image: "https://images.pexels.com/photos/4941721/pexels-photo-4941721.jpeg?_gl=1*sihbeq*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcwJHQxNzYzMDE1OTUxJGo2MCRsMCRoMA."
		},
		{
			label: 'Multilingual Dubbing & Localization',
			desc: 'Dubbing, lip sync & voice-over recording for international content <br> (audioguides, e-learning, documentaries, translation & adaptation)',
			link: '/en/services/#4',
			image: "https://images.pexels.com/photos/8001238/pexels-photo-8001238.jpeg?_gl=1*1t4lt56*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcxJHQxNzYzMDE2MDU2JGo1NSRsMCRoMA."
		},
		{
			label: 'Mixing & Post-Production',
			desc: 'High-end audio mixing and finishing <br> (stereo, 5.1, 7.1, binaural/ambisonic VR, PAD-ready broadcast delivery)',
			link: '/en/services/#5',
			image: Mixage
		}
	];

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
	let triggers = [];

	onMount(() => {
		// Animation du texte uniquement (l'image reste fixe) avec alternance de direction
		gsap.utils.toArray('.cardo').forEach((el, i) => {
			const txt = el.querySelector('.wrapper__service-txt');
			const isEven = i % 2 !== 0; 

			gsap.from(txt, {
				x: isEven ? -80 : 80, 
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			});
		});

		const onLoad = () => ScrollTrigger.refresh();
		window.addEventListener('load', onLoad);

		return () => {
			window.removeEventListener('load', onLoad);
		};
	});

	onDestroy(() => {
		triggers.forEach((t) => t?.kill());
		triggers = [];
	});
</script>

<section>
	<h2>Our Services</h2>

	<div class="wrapper__cards">
		{#each services as service}
			<div class="cardo">
				<div class="cardo-img">
					<img src={service.image} alt="" />
				</div>
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{@html service.desc}</p>
					<div class="wrapper-button">
						<ButtonRed txt="learn more" href={service.link} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding: var(--space-xl) 0;
		background-color: var(--white);
	}

	h2 {
		font-size: var(--fs-h2);
		text-align: center;
		margin-bottom: var(--space-xl);
		color: var(--ardoise);
	}

	.wrapper__cards {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-md);
	}

	.cardo {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
		background: var(--white);
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-lg);
		min-height: 450px;
	}

	/* Alternance Image / Texte */
	.cardo:nth-child(even) .cardo-img {
		order: 2;
	}

	.cardo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--space-lg);
		background-color: #2c2c2c;
		color: var(--white);
		gap: var(--space-md);
	}

	.cardo:nth-child(even) .wrapper__service-txt {
		order: 1;
	}

	h3 {
		font-size: var(--fs-h3);
		color: var(--white);
		margin: 0;
	}

	p {
		font-size: var(--fs-body);
		line-height: 1.6;
		color: var(--grey);
		max-width: 90%;
	}

	.wrapper-button {
		margin-top: var(--space-sm);
	}

	@media screen and (max-width: 968px) {
		.cardo {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.cardo:nth-child(even) .cardo-img {
			order: 0;
		}
		
		.cardo:nth-child(even) .wrapper__service-txt {
			order: 1;
		}

		.cardo img {
			height: 300px;
		}

		.wrapper__service-txt {
			padding: var(--space-md);
			text-align: center;
			align-items: center;
		}

		p {
			max-width: 100%;
		}
	}
</style>
