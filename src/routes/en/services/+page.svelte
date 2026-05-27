<script>
	import { onMount, onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ComSonore from '../../../assets/ComSonore.webp';
	import MarkSonore from '../../../assets/MarkSonore2.webp';
	import AudioVisuel from '../../../assets/AudioVisuel2.webp';
	import Voix from '../../../assets/Voix.webp';
	import Mixage from '../../../assets/Mixage3.jpg';

	import BtnBlack from '$lib/component/btn-black-shadow.svelte';

	let triggers = [];
	let activeServiceId = null;

	function toggleService(id) {
		if (activeServiceId === id) {
			activeServiceId = null;
		} else {
			activeServiceId = id;
			// Scroll smoothly to the service card
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}, 150);
		}
		// Refresh GSAP ScrollTrigger immediately after Svelte renders the expanded view
		setTimeout(() => {
			if (typeof window !== 'undefined' && ScrollTrigger) {
				ScrollTrigger.refresh();
			}
		}, 200);
	}

	function handleHashChange() {
		if (typeof window !== 'undefined') {
			const hash = window.location.hash;
			if (hash) {
				activeServiceId = hash.replace('#', '');
				setTimeout(() => {
					const el = document.getElementById(activeServiceId);
					if (el) {
						el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				}, 150);
			}
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger);

			// Init active service from hash
			const hash = window.location.hash;
			if (hash) {
				activeServiceId = hash.replace('#', '');
				setTimeout(() => {
					const el = document.getElementById(activeServiceId);
					if (el) {
						el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				}, 150);
			}

			window.addEventListener('hashchange', handleHashChange);

			if (window.innerWidth > 1023) {
				const cards = gsap.utils.toArray('.service-card');
				cards.forEach((card, i) => {
					const contentElements = card.querySelectorAll('.wrapper__service-txt h3, .wrapper__service-txt h4');
					const anim = gsap.from(contentElements, {
						x: i % 2 === 0 ? 40 : -40,
						opacity: 0,
						duration: 0.8,
						stagger: 0.1,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: card,
							start: 'top 80%',
							toggleActions: 'play none none none'
						}
					});
					triggers.push(anim);
				});
			}
		}
	});

	onDestroy(() => {
		triggers.forEach((t) => t.kill());
		if (typeof window !== 'undefined') {
			if (ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill());
			window.removeEventListener('hashchange', handleHashChange);
		}
	});

	const services = [
		{
			id: '1',
			label: 'Sound Communication',
			subLabel: `Sonic branding & audio identity (sonic logo, musical identity, brand voice, product sound design)`,
			desc: `A <strong>sonic identity</strong> is far more than a simple musical logo: it’s a brand’s signature sound. 
			<br/> It brings together elements <strong>(musical creation, voice, sound design)</strong> that express its values and make it identifiable, even without visuals.
<br/>	<br/>	Extending to a full <strong>sound charter</strong>, it integrates into the global communication strategy to strengthen recognition, consistency, and emotional impact. <br/>	<br/>	
At Audio Pigment, we accompany each project <strong> from strategic thinking to creation and production </strong> : defining intentions, musical and/or vocal design, artistic direction, recording and mixing.<br/>	
Our expertise allows us to develop relevant, unique and durable sonic signatures, capable of evolving with the brand while preserving its identity.<br/>	<br/>	
A sonic identity is deployed across all media (audiovisual, digital, telephone or event) to ensure a consistent and recognizable presence.
In a world saturated with sound, we help brands to <strong>stand out, be heard and be remembered</strong>, with accuracy and emotion.`,
			link: '/en/contact',
			image: ComSonore,
			alt: 'Sonic branding Audio Pigment'
		},
		{
			id: '2',
			label: 'Audio Marketing',
			subLabel: `Radio spots, podcasts, event sound creation, space soundtracks, IVR, telephone messages…`,
			desc: `In a landscape saturated with messages, being heard requires real expertise.
The <strong> audio marketing </strong> reúne all forms of audio communication <strong> (radio spots,
podcasts, event sound creations, space soundtracks, interactive voice servers
or telephone messages…)</strong> and aims to create a strong, consistent and memorable
link between a brand and its target audience. <br> <br>
At Audio Pigment, we design each project as a truly <strong> bespoke production </strong> in which we <strong> accompany our clients </strong>: message design and writing,
selection and direction of voices, musical creation and/or sound design, sound branding, and
final mixing adapted to radio, web or event broadcast standards. <br> <br>
We pay particular attention to the consistency between voice, tone and the sound
universe to guarantee <strong> impact, relevance and emotion</strong>, to transform each broadcast
into an identifiable and striking listening experience.`,
			link: '/en/contact',
			image: MarkSonore
		},
		{
			id: '3',
			label: 'Audiovisual & digital ',
			subLabel: `Sound branding, musical creation & voice-over (TV ads, cinema ads, corporate films, animation, motion design, e-learning…)`,
			desc: `In audiovisual as in digital, <strong> sound and voice </strong> give life to the image.
They capture attention, highlight emotions, pace the staging and make each
project more immersive. <br><br>
At Audio Pigment, we design and produce all sound creation: <strong> sound
design, musical branding, original composition, casting, recording and direction of
voices.</strong> <br>
Our work ranges from <strong> TV or cinema advertisements,</strong> to <strong> corporate films and digital content</strong>,
to <strong> animated films and immersive productions </strong> (planetariums, exhibitions, or
artistic creations).<br><br>
In the field of communication, we put our artistic requirements at the service of
efficiency: a <strong> just and embodied voice</strong>, an <strong>original music</strong> or a <strong> bespoke sound design</strong>,
a <strong>global consistency between image, rhythm and intention</strong>, so that each spot,
each film, finds its own tone and impact.<br><br>
In animation, where everything is created from scratch, sound becomes an essential element of
credibility and emotion: it shapes spaces, gives life to characters and creates the link
between the viewer and the story.
Our <strong>professional actors</strong>, directed in studio by our teams, lend their voices with
accuracy and sensitivity to embody characters and give body to the narration.<br><br>
Whether it’s a commercial, a corporate production or a narrative universe
immersive, our approach remains the same: <strong>build a coherent, expressive
and identity-based soundscape</strong>, where each sound, each voice, each silence participates in telling the story and
serving the image.`,
			link: '/en/contact',
			image: AudioVisuel
		},
		{
			id: '4',
			label: 'Multilingual Dubbing / Localization',
			subLabel: `Dubbing, lip sync, voice-over recording, translation + adaptation (audioguide, elearning, report…)`,
			desc: `Dubbing and localization allow a film, a spot or any audiovisual production
to cross linguistic borders <strong> without losing its authenticity and efficiency. </strong> <br><br>
This work requires <strong> precision and know-how </strong>: rigorous translation and adaptation of dialogues
for natural lip sync and adjustment to cultural uses, attentive
artistic direction to restore personality and acting nuances, recordings
with professional dubbing actors, then precise mixing to reintegrate the voices
into the original soundtrack and recreate the sound universe.<br><br>
At Audio Pigment, we master this entire technical and artistic chain (from
translation to master delivery) to guarantee credible versions, faithful to the spirit
of the work and <strong> adapted to each culture</strong>.<br><br>
Whether it’s a film, a brand video, an institutional or digital content, we
consider localization and dubbing as a balancing art between <strong> technique,
interpretation and fidelity to the work</strong>, so that the language changes, but not the emotion.`,
			link: '/en/contact',
			image: Voix
		},
		{
			id: '5',
			label: 'Mixing & Broadcast Post-pro',
			subLabel: `Stereo mix, multichannel 5.1 / 7.1, VR Binaural / Ambisonic mix, Broadcast normalization PAD`,
			desc: `Mixing is the final stage where all sound elements take their balance.
It is both a <strong> technical work of precision</strong> and an <strong> artistic act</strong>, aiming to create a
consistency between the voices, the music, the sound design and the entire sound universe. <br><br>
At Audio Pigment, each project is treated in a calibrated acoustic environment,
with high-precision digital tools and above all, an <strong> expert ear</strong> capable of
making the right artistic and technical decisions. <br><br>
Mixing consists of finding the perfect balance between the different sources: adjustment of
levels, frequency processing, dynamics management, stereo spatialization or
multichannel <strong> (5.1, 7.1, or immersive formats)</strong> and compliance with broadcast standards <strong> (EBU R128,
ITU BS.1770, or cinema and web specifications)</strong>.
But beyond the tools, it is above all <strong> the judgment of the human ear</strong> that makes the
difference: prioritizing the sound planes, giving clarity to the message, preserving
the emotional intention and ensuring a broadcast faithful to the vision of the director or the client. <br><br>
We also provide <strong> technical conformation and broadcast normalization</strong>,
guaranteeing that the delivered masters respect all broadcast constraints and are
immediately exploitable, without compromise on quality.`,
			link: '/en/contact',
			image: Mixage,
			alt: 'Audio Pigment Mixing'
		}
	];
</script>

<section>
	<h1>Our Services</h1>
	<div class="wrapper__services-cards">
		{#each services as service, i}
			<div class="service-card" id={service.id}>
				<div 
					class="wrapper__img-title {i % 2 !== 0 ? 'reverse' : ''}"
					on:click={() => toggleService(service.id)}
					on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleService(service.id); }}
					role="button"
					tabindex="0"
					aria-expanded={activeServiceId === service.id}
					style="cursor: pointer; user-select: none;"
				>
					<img
						class="img"
						src={service.image}
						alt={service.alt}
						loading={i < 2 ? 'eager' : 'lazy'}
						width="800"
						height="500"
					/>
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<h4>{service.subLabel}</h4>
						<div class="expand-indicator">
							<span>{activeServiceId === service.id ? 'Close -' : 'Learn more +'}</span>
						</div>
					</div>
				</div>
				{#if activeServiceId === service.id}
					<div class="wrapper__p-cta">
						<p>{@html service.desc}</p>
						<div class="wrapper-btn">
							<BtnBlack txt="Get in touch" href={service.link} />
							<button class="btn-reduce" on:click|stopPropagation={() => toggleService(service.id)}>
								Collapse
							</button>
						</div>
					</div>
				{/if}
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
		font-size: 2.8rem;
		margin-bottom: var(--space-xl);
		margin-top: var(--space-xl);
		font-weight: 800;
		letter-spacing: -0.04em;
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
		font-family: var(--raleway);
		height: 100%;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 18px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		height: auto;
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
		background-color: #2c2c2c;
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
		display: block;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.wrapper__img-title:hover .img {
		transform: scale(1.04);
	}

	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 2;
		gap: var(--space-md);
		padding: var(--space-lg);
		height: 400px;
		background-color: #2c2c2c;
		position: relative;
	}

	.expand-indicator {
		margin-top: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--accent);
		color: var(--white);
		padding: 8px 24px;
		font-family: var(--font-main);
		font-size: 0.9rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-radius: 30px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		z-index: 5;
	}

	.wrapper__img-title:hover .expand-indicator {
		background-color: var(--white-pure);
		color: var(--accent);
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
	}
	.wrapper__service-txt h3 {
		margin: 0;
		color: var(--white-pure);
		font-size: 2.2rem;
		font-family: var(--font-heading);
		font-weight: var(--black);
		line-height: 1.1;
		text-align: center;
	}
	.wrapper__service-txt h4 {
		color: white;
		font-size: 1.1rem;
		font-family: var(--font-main);
		text-align: center;
		line-height: 1.4;
		font-weight: var(--bold);
		letter-spacing: 0.02em;
		opacity: 0.9;
	}
	.wrapper__p-cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
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
		gap: 1.5rem;
	}

	.btn-reduce {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: 1px solid var(--ardoise);
		font-family: var(--font-main);
		font-weight: 700;
		color: var(--ardoise);
		padding: 12px 32px;
		font-size: 1rem;
		cursor: pointer;
		border-radius: var(--radius-sm);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
	}

	.btn-reduce:hover {
		transform: translateY(-2px);
		background-color: var(--ardoise);
		color: var(--white-pure);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	@media screen and (max-width: 1024px) {
		section {
			padding: 2rem 0.5rem;
		}
		section h1 {
			font-size: 2.4rem;
		}
		.wrapper__img-title {
			display: flex;
			flex-direction: column;
		}
		.img {
			height: 300px;
		}
		.wrapper__service-txt {
			height: auto;
			padding: 2rem 1rem;
		}
		.wrapper__service-txt h3 {
			font-size: 1.8rem;
		}
		.service-card {
			box-shadow: none;
			border: 1px solid #eee;
			width: 100%;
		}
		.wrapper__p-cta p {
			padding: 1.5rem;
			font-size: 1rem;
		}
		.wrapper-btn {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
		.btn-reduce {
			width: auto;
			min-width: 200px;
		}
	}
</style>
