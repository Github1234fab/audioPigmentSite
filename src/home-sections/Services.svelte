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
			label: 'Communication sonore',
			desc: 'Audio branding / Identité sonore <br> (signature sonore, identité musicale, voix de marque, sound design produit…)',
			link: '/fr/services/#1',
			image: ComSonore
		},
		{
			label: 'Marketing sonore',
			desc: 'Spot radio, podcast, création sonore événementiel, sonorisation d’espace, svi, message téléphonique…',
			link: '/fr/services/#2',

			image: MarkSonore
		},
		{
			label: 'Audiovisuel & Digital',
			desc: 'Habillage sonore & voix off <br> (pub TV, pub cinéma, film corporate, institutionnel, motion design, e-learning…)',
			link: '/fr/services/#3',
			image: "https://images.pexels.com/photos/4941721/pexels-photo-4941721.jpeg?_gl=1*sihbeq*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcwJHQxNzYzMDE1OTUxJGo2MCRsMCRoMA."
		},
		{
			label: 'Doublage multilingue / Localisation',
			desc: 'Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation <br> (audioguide, elearning, reportage…)',
			link: '/fr/services/#4',
			image: "https://images.pexels.com/photos/8001238/pexels-photo-8001238.jpeg?_gl=1*1t4lt56*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcxJHQxNzYzMDE2MDU2JGo1NSRsMCRoMA."
		},
		{
			label: 'Mixage & Post-prod broadcast',
			desc: 'Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser »',
			link: '/fr/services/#5',
			image: Mixage
		}
	];

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	//   import { afterNavigate } from "$app/navigation"; // si SvelteKit

	gsap.registerPlugin(ScrollTrigger);
	let triggers = [];

	onMount(() => {
		// Animation du texte uniquement (l'image reste fixe) avec alternance de direction
		gsap.utils.toArray('.cardo').forEach((el, i) => {
			const txt = el.querySelector('.wrapper__service-txt');
			const isEven = i % 2 !== 0; // i=0 est la 1ère carte (impaire visuellement)

			gsap.from(txt, {
				x: isEven ? -80 : 80, // Arrive de gauche si le texte est à gauche, sinon de droite
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
				<div class="cardo-img">
					<img src={service.image} alt="" />
				</div>
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{@html service.desc}</p>
					<!-- <a class="button" href={service.link} aria-label="button">En savoir +</a> -->
					<div class="wrapper-button">
						<ButtonRed txt="En Savoir +" href={service.link} />
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- </div> -->
</section>

<style>
	section {
		padding: var(--space-xl) 0;
		background-color: var(--white);
	}

	h2 {
		font-size: var(--fs-h2);
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

	/* On supprime les effets de hover qui font bouger la structure */

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
		background-color: var(--ardoise);
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
