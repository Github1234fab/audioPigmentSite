<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ComSonore from '../../../assets/ComSonore.webp';
	import MarkSonore from '../../../assets/MarkSonore2.webp';
	import AudioVisuel from '../../../assets/AudioVisuel2.webp';
	import Voix from '../../../assets/Voix.webp';
	import Mixage from '../../../assets/Mixage3.jpg';

	import BtnBlack from '$lib/component/btn-black-shadow.svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const cards = gsap.utils.toArray('.service-card');
		cards.forEach((card, i) => {
			const titleBlock = card.querySelector('.wrapper__service-txt');
			gsap.from(titleBlock, {
				x: i % 2 === 0 ? 100 : -100,
				opacity: 0,
				duration: 1.2,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: card,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			});
		});
	});

	const services = [
		{
			id: '1',
			label: 'Sound Communication',
			subLabel: `Sonic branding & audio identity (sonic logo, musical identity, brand voice, product sound design)`,
			desc: `A <strong>sonic identity</strong> is far more than a simple musical logo: it’s a brand’s signature sound. 
            It brings together elements <strong>(musical creation, voice, sound design)</strong> that express its values and make it identifiable, even without visuals.
            <br/><br/>Extending to a full <strong>sound charter</strong>, it integrates into the global communication strategy to strengthen recognition, consistency, and emotional impact.
            <br/><br/>At Audio Pigment, we accompany each project <strong>from strategic thinking to creation and production</strong>: defining intent, musical and/or vocal design, artistic direction, recording, and mixing.
            <br/>Our expertise allows us to develop relevant, unique, and lasting sonic signatures, capable of evolving with the brand while preserving its identity.
            <br/><br/>A sonic identity is deployed across all media (audiovisual, digital, telephone, or event) to ensure a consistent and recognizable presence.
            In a world saturated with sound, we help brands <strong>stand out, be heard, and be remembered</strong> with accuracy and emotion.`,
			link: '/en/contact',
			image: ComSonore,
			alt: "Person using a microphone in a recording studio"
		},
		{
			id: '2',
			label: 'Audio Marketing',
			subLabel: `Radio spots, podcasts, event sound creation, space sound, IVR, telephone messages…`,
			desc: `In a landscape saturated with messages, being heard requires real expertise. 
            <strong>Audio marketing</strong> brings together all forms of audio communication <strong>(radio spots, podcasts, event sound creations, space soundtracks, interactive voice servers, or telephone messages…)</strong> and aims to create a strong, consistent, and memorable link between a brand and its target audience.
            <br/><br/>At Audio Pigment, we design each project as a truly <strong>bespoke production</strong> where we <strong>support our clients</strong>: message design and writing, voice selection and direction, musical creation and/or sound design, sound branding, and final mixing adapted to radio, web, or event broadcast standards.
            <br/><br/>We pay particular attention to the consistency between voice, tone, and the sound universe to guarantee <strong>impact, relevance, and emotion</strong>, transforming every broadcast into an identifiable and striking listening experience.`,
			link: '/en/contact',
			image: MarkSonore,
			alt: "Audio marketing production"
		},
		{
			id: '3',
			label: 'Audiovisual & Digital',
			subLabel: `Sound branding, musical creation & voice-over (TV ads, cinema ads, corporate films, animation, motion design, e-learning…)`,
			desc: `In audiovisual as in digital, <strong>sound and voice</strong> bring images to life. 
            They capture attention, highlight emotions, pace the staging, and make each project more immersive.
            <br/><br/>At Audio Pigment, we design and produce all sound creation: <strong>sound design, musical branding, original composition, casting, recording, and voice direction.</strong>
            <br/>Our work ranges from <strong>TV or cinema advertisements</strong> to <strong>corporate films and digital content</strong>, to <strong>animated films and immersive productions</strong> (planetariums, exhibitions, or artistic creations).
            <br/><br/>In communication, we put our artistic standards at the service of efficiency: a <strong>just and embodied voice</strong>, an <strong>original music</strong> or a <strong>bespoke sound design</strong>, a <strong>global consistency between image, rhythm, and intention</strong>, so that each spot, each film, finds its own tone and impact.
            <br/><br/>In animation, sound becomes an essential element of credibility and emotion: it shapes spaces, gives life to characters, and creates the link between the viewer and the story. 
            Our <strong>professional actors</strong>, directed in studio by our teams, lend their voices with accuracy and sensitivity.`,
			link: '/en/contact',
			image: "https://images.pexels.com/photos/4941721/pexels-photo-4941721.jpeg",
			alt: "Audiovisual production"
		},
		{
			id: '4',
			label: 'Multilingual Dubbing / Localization',
			subLabel: `Dubbing, lip sync, voice-over recording, translation + adaptation (audioguide, elearning, report…)`,
			desc: `Dubbing and localization allow a film, spot, or any audiovisual production to cross linguistic borders <strong>without losing its authenticity and effectiveness.</strong>
            <br/><br/>This work requires <strong>precision and know-how</strong>: rigorous translation and adaptation of dialogues for natural lip-sync and adjustment to cultural uses, attentive artistic direction to restore personality and acting nuances, recordings with professional dubbing actors, and precise mixing to reintegrate voices into the original soundtrack.
            <br/><br/>At Audio Pigment, we master this entire technical and artistic chain (from translation to master delivery) to guarantee credible versions, faithful to the spirit of the work and <strong>adapted to each culture.</strong>
            <br/><br/>Whether it’s a film, brand video, institutional or digital content, we consider localization and dubbing as a balancing art between <strong>technique, interpretation, and fidelity</strong>, so that the language changes, but not the emotion.`,
			link: '/en/contact',
			image: "https://images.pexels.com/photos/8001238/pexels-photo-8001238.jpeg",
			alt: "Dubbing session"
		},
		{
			id: '5',
			label: 'Mixing & Broadcast Post-pro',
			subLabel: `Stereo mix, multichannel 5.1 / 7.1, VR Binaural / Ambisonic mix, Broadcast normalization PAD`,
			desc: `Mixing is the final step where all sound elements find their balance. 
            It is both a <strong>technical work of precision</strong> and an <strong>artistic act</strong>, aiming to create consistency between voices, music, sound design, and the entire sound universe.
            <br/><br/>At Audio Pigment, each project is treated in a calibrated acoustic environment, with high-precision digital tools and above all, an <strong>expert ear</strong> capable of making the right artistic and technical decisions.
            <br/><br/>Mixing consists of finding the perfect balance between different sources: levels, frequency treatment, dynamics management, stereo or multichannel spatialization <strong>(5.1, 7.1, or immersive formats)</strong>, and compliance with broadcast standards <strong>(EBU R128, ITU BS.1770, or cinema and web specifications)</strong>.
            <br/><br/>But beyond the tools, it is above all <strong>human judgment</strong> that makes the difference: prioritizing sound layers, giving clarity to the message, and ensuring a broadcast faithful to the vision of the director or client.`,
			link: '/en/contact',
			image: Mixage,
			alt: "Mixing console"
		}
	];
</script>

<section>
	<h1>Our Services</h1>
	<div class="wrapper__services-cards">
		{#each services as service, i}
			<div class="service-card" id={service.id}>
				<div class="wrapper__img-title {i % 2 !== 0 ? 'reverse' : ''}">
					<img class="img" src={service.image} alt={service.alt} />
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<h4>{service.subLabel}</h4>
					</div>
				</div>
				<div class="wrapper__p-cta">
					<p>{@html service.desc}</p>
					<div class="wrapper-btn">
						<BtnBlack txt="Get in touch" href={service.link} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		color: var(--black);
		height: 100%;
		margin-bottom: 2rem;
	}

	section h1 {
		font-family: var(--font-heading);
		font-size: var(--fs-h1);
		margin-bottom: var(--space-xl);
		margin-top: var(--space-xl);
		font-weight: 800;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		position: relative;
		width: fit-content;
		padding-bottom: 1.5rem;
	}

	section h1::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 4px;
		background: var(--accent);
		border-radius: 4px;
	}

	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--font-main);
		height: 100%;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: var(--radius-lg);
		box-shadow: 0 0px 20px rgba(50, 50, 50, 0.148);
		height: 100%;
		max-width: 1200px;
		position: relative;
		z-index: 0;
		overflow: hidden;
	}

	.wrapper__img-title {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		gap: 0;
		border: 1px solid rgba(0, 0, 0, 0.05);
		background-color: transparent;
		overflow: hidden;
	}

	.wrapper__img-title.reverse .img {
		grid-column: 2;
	}

	.wrapper__img-title.reverse .wrapper__service-txt {
		grid-column: 1;
		grid-row: 1;
	}

	.img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: center;
	}

	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 2;
		gap: var(--space-sm);
		padding: var(--space-lg);
		max-height: 400px;
		background-color: #2c2c2c;
	}

	.wrapper__service-txt h3 {
		margin-bottom: 0rem;
		color: var(--white);
		font-size: 2.2rem;
		font-family: var(--font-heading);
		line-height: 1.1;
		text-align: center;
		text-transform: uppercase;
	}

	.wrapper__service-txt h4 {
		color: var(--grey-light);
		font-size: 0.9rem;
		font-family: var(--font-main);
		text-align: center;
		line-height: 1.4;
		font-weight: 500;
	}

	.wrapper__p-cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 0rem;
		z-index: 2;
		width: 100%;
		background-image: url(../../../assets/bg-Actu.webp);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.wrapper__p-cta p {
		color: var(--ardoise);
		font-family: var(--font-main);
		font-weight: 400;
		font-size: 1.05rem;
		line-height: 1.7;
		max-width: 900px;
		padding: var(--space-lg);
	}

	.wrapper-btn {
		margin-bottom: var(--space-lg);
		display: flex;
		justify-content: center;
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		section {
			padding: 2rem 0;
			width: 100%;
		}

		section h1 {
			font-family: var(--font-heading);
			font-size: 2.4rem;
			font-weight: 800;
			letter-spacing: -1px;
			line-height: 1.2;
			margin-bottom: 2.5rem;
			margin-top: 40px;
			padding-bottom: 1.5rem; /* Harmonisé */
		}

		.wrapper__img-title {
			grid-template-columns: 1fr;
		}

		.wrapper__img-title.reverse .img,
		.wrapper__img-title.reverse .wrapper__service-txt {
			grid-column: auto;
			grid-row: auto;
		}

		.img {
			max-height: 300px;
		}

		.wrapper__service-txt h3 {
			font-size: 1.7rem;
		}

		.service-card {
			width: 92%;
			margin: 0 auto;
		}
	}
</style>
