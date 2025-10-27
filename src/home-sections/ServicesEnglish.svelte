<!-- <script>
	import Collapse from '$lib/component/Collapse.svelte';

	let datas = [
		{
			title: 'Communication sonore',
			p: 'Nous créons des expériences sonores immersives qui captivent et engagent votre public. \n Notre expertise en design sonore et en production audio garantit une communication efficace et mémorable.'
		},
		{
			title: 'Production audio',
			p: 'De la conception à la réalisation, nous produisons des contenus audio de haute qualité adaptés à vos besoins spécifiques. \n Que ce soit pour des podcasts, des publicités ou des projets audiovisuels, nous sommes là pour vous accompagner.'
		},
		{
			title: 'Consultation en stratégie sonore',
			p: "Nous vous aidons à développer une stratégie sonore cohérente qui renforce votre identité de marque et améliore l'expérience utilisateur. \n Notre approche personnalisée garantit que chaque projet résonne avec votre audience."
		},
        {
			title: 'Doublage Multilingue/localisation',
			p: "Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation (audioguide, elearning, reportage…) "
		},
        {
			title: 'Mixage & post prod boradcast',
			p: "Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser."
		}
	];
</script>

<section>
	<h2>Nos prestations</h2>
    <div class="wrapper__collapses">
	{#each datas as data}
		<Collapse title={data.title} p={data.p} />
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
		background-color: white;
		color: var(--black);
		height: 100%;
		margin-bottom: 2rem;
		
	}
    .wrapper__collapses {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin-top: 30px;
    }

	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 1rem;
        margin-top: 50px;
	}
</style> -->
<!-- 
<script>
	import ButtonWhite from '$lib/component/btn-black.svelte';

	const services = [
		{
			label: 'Sound communication',
			desc: 'Sonic branding &amp; audio identity',
			infos: '(sonic logo, musical identity, brand voice, product sound design)',
			link: '/en/services/#1',
			image: 'https://images.pexels.com/photos/7859937/pexels-photo-7859937.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Audio marketing',
			desc: 'Creative audio for brand communication',
			infos:
				'(radio commercials, podcasts, event soundscapes, spatial audio, IVR systems, on-hold messages)',
			link: '/en/services/#2',

			image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Audiovisual & Digital Media',
			desc: 'Voices, sound design &amp; soundtrack creation',
			infos:
				'(TV commercials, cinema ads, corporate films, institutional videos, motion design, VR, e-learning)',
			link: '/en/services/#3',
			image: 'https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Multilingual Dubbing & Localization',
			desc: 'Dubbing, lip sync &amp; voice-over recording for international content',
			infos: '(audioguides, e-learning, documentaries, translation &amp; adaptation)',
			link: '/en/services/#4',
			image: 'https://images.pexels.com/photos/4476164/pexels-photo-4476164.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Mixing & Post-Production',
			desc: 'High-end audio mixing and finishing',
			infos:
				'((stereo, 5.1, 7.1, binaural/ambisonic VR, PAD-ready broadcast delivery))',

			link: '/en/services/#5',
			image: 'https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		}
	];
</script>

<section>
	<h2>Our services</h2>
	<div class="wrapper__services-cards">
		{#each services as service}
			{#if service.link}
				<a
					class="service-card"
					href={service.link}
					style={service.image ? `background-image: url(${service.image});` : ''}
				>
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<p>{service.desc}</p>
						<p>{service.infos}</p>
					</div>
				</a>
			{:else}
				<div
					class="service-card"
					style={service.image ? `background-image: url(${service.image});` : ''}
				>
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<p>{service.desc}</p>
					</div>
				</div>
			{/if}
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
	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 3rem;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -1.5px;
	}
	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);
	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-end;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		margin-bottom: 0.6rem;
		z-index: 2;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-end;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 12px;
		box-shadow: 0 10px 20px rgba(50, 50, 50, 0.328);
		padding: 2rem;
		height: 600px;
		width: 400px;
		transition: transform 0.15s;
		position: relative;
		z-index: 0;
	}
	.service-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		height: 100%;
		width: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.832), rgba(255, 255, 255, 0));
	}
	.service-card:hover {
		transform: translateY(-5px) scale(1.04);
		box-shadow: 0 3px 16px rgba(50, 50, 50, 0.18);
		transition: 0.4s ease-in-out;
	}

	.wrapper__service-txt h3 {
		margin-bottom: 1rem;
		color: rgb(255, 255, 255);
		font-size: 2rem;
	}
	.wrapper__service-txt p {
		margin-bottom: 1rem;
		color: white;
		font-size: 1rem;
	}
	a {
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.wrapper__services-cards {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			padding: 1rem;
			height: 400px;
			width: 100%;
		}
		.wrapper__service-txt h3 {
			font-size: 1.8rem;
		}
		section h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
	}
</style> -->

<script>
	import Bilingue from '../assets/bilingue.png';
	import Button from '$lib/component/btn-black.svelte';

	const services = [
		{
			label: 'Sound communication',
			desc: 'Sonic branding &amp; audio identity',
			link: '/en/services/#1',
			image: 'https://images.pexels.com/photos/776153/pexels-photo-776153.jpeg'
		},
		{
			label: 'Audio marketing',
			desc: 'Creative audio for brand communication',
			link: '/en/services/#2',
			image: 'https://images.pexels.com/photos/1271380/pexels-photo-1271380.jpeg'
		},
		{
			label: 'Audiovisual & Digital Media',
			desc: 'Voices, sound design &amp; soundtrack creation',
			link: '/en/services/#3',
			image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg'
		},
		{
			label: 'Multilingual Dubbing & Localization',
			desc: 'Dubbing, lip sync &amp; voice-over recording for international content',
			link: '/en/services/#4',
			image: 'https://images.pexels.com/photos/8828605/pexels-photo-8828605.jpeg'
		},
		{
			label: 'Mixing & Post-Production',
			desc: 'High-end audio mixing and finishing',
			link: '/en/services/#5',
			image: 'https://images.pexels.com/photos/7899457/pexels-photo-7899457.png'
		}
	];

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	//   import { afterNavigate } from "$app/navigation"; // si SvelteKit

	gsap.registerPlugin(ScrollTrigger);
	let triggers = [];

	onMount(() => {
		// Un tween + trigger par .card
		gsap.utils.toArray('.cardo').forEach((el, i) => {
			const tween = gsap.from(el, {
				x: 80,
				opacity: 0,
				duration: 2,
				ease: 'power3.out',
				// petit décalage seulement visuel, pas un stagger global
				delay: i * 0.1,
				scrollTrigger: {
					trigger: el,
					start: 'top 80%', // l’élément entre bien dans le viewport
					end: 'top 30%', // nécessaire pour bien “sentir” le scrub
					scrub: 1 // lisser avec le scroll
					// markers: true,   // décommente pour débug
				}
			});
			triggers.push(tween.scrollTrigger);
		});

		// Recalcule après le chargement images / fonts
		const onLoad = () => ScrollTrigger.refresh();
		window.addEventListener('load', onLoad);

		// Si SvelteKit : rafraîchir après navigation
		// afterNavigate(() => ScrollTrigger.refresh());

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
	<h2>Nos prestations</h2>
	<!-- <div class="wrapper__services-cards"> -->

	<div class="wrapper__cards">
		{#each services as service}
			<div class="cardo">
				<!-- href={service.link} -->
				<img src={service.image} alt="" />
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{service.desc}</p>
					<!-- <a class="button" href={service.link} aria-label="button">En savoir +</a> -->
					<div class="wrapper-button">
						<Button txt="Learn more" href={service.link} />
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- </div> -->
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
		overflow: hidden;
	}
	.wrapper__cards {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		margin-top: 0px;
		margin-bottom: 10rem;
	}
	.cardo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		border-radius: 12px 10px 12px 12px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.462);
		width: 80vw;
	}
	.cardo img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 12px 10px 0px 0px;
	}
	.wrapper-button {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 50px;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 3rem;
		margin-top: 50px;
		font-weight: 200;
		letter-spacing: -2px;
		color: var(--ardoise);
		font-weight: var(--bold);
	}

	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		padding: 0.5rem 1rem;
		z-index: 2;
		border-radius: 0px 0px 12px 12px;
		/* background-color: rgb(157, 154, 154); */
		background-color: rgb(105, 99, 99);
		width: 100%;
		margin-top: 0px;
	}

	.wrapper__service-txt h3 {
		color: white;
		font-size: 2rem;
		font-family: var(--bebas);
		margin-top: 20px;
	}
	.wrapper__service-txt p {
		color: white;
		font-size: 1rem;
		font-weight: 600;
		font-family: var(--bebas);
	}
	/* a {
		text-decoration: none;
	} */

	@media screen and (max-width: 768px) {
		.wrapper__service-txt h3 {
			font-size: 1.8rem;
		}
		section h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
			line-height: 50px;
			margin-bottom: 50px;
		}
		.wrapper__cards {
			gap: 2rem;
			margin-bottom: 5rem;
		}
		.cardo {
			width: 90vw;
		}
	}
</style>
