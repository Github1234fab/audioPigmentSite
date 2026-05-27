<script>
	import ButtonRed from '$lib/component/btn-white.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let triggers = [];

	const services = [
		{
			label: 'Communication sonore',
			desc: 'Audio branding / Identité sonore <br> (signature sonore, identité musicale, voix de marque, sound design produit…)',
			link: '/fr/services/#1',
			image: "/assets/ComSonore.webp"
		},
		{
			label: 'Marketing sonore',
			desc: 'Spot radio, podcast, création sonore événementiel, sonorisation d’espace, svi, message téléphonique…',
			link: '/fr/services/#2',
			image: "/assets/MarkSonore2.webp"
		},
		{
			label: 'Audiovisuel & Digital',
			desc: 'Habillage sonore & voix off <br> (pub TV, pub cinéma, film corporate, institutionnel, motion design, e-learning…)',
			link: '/fr/services/#3',
			image: "/assets/AudioVisuel2.webp"
		},
		{
			label: 'Doublage multilingue / Localisation',
			desc: 'Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation <br> (audioguide, elearning, reportage…)',
			link: '/fr/services/#4',
			image: "/assets/VoixMulti.webp"
		},
		{
			label: 'Mixage & Post-prod broadcast',
			desc: 'Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser »',
			link: '/fr/services/#5',
			image: "/assets/Mixage.webp"
		}
	];

	onMount(() => {
		if (typeof window !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger);
			if (window.innerWidth > 1023) {
				gsap.utils.toArray('.cardo').forEach((el, i) => {
					const contentElements = el.querySelectorAll('.wrapper__service-txt > *');
					const isEven = i % 2 !== 0;

					const anim = gsap.from(contentElements, {
						x: isEven ? -40 : 40,
						opacity: 0,
						duration: 0.8,
						stagger: 0.1, // Les éléments apparaissent les uns après les autres
						ease: 'power2.out',
						scrollTrigger: {
							trigger: el,
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
		triggers.forEach(t => t.kill());
		if (ScrollTrigger) ScrollTrigger.getAll().forEach(t => t.kill());
	});
</script>

<section>
	<h2>Nos prestations</h2>

	<div class="wrapper__cards">
		{#each services as service, i}
			<div class="cardo">
				<div class="cardo-img">
					<img 
						src={service.image} 
						alt={service.label} 
						loading={i < 2 ? "eager" : "lazy"} 
						fetchpriority={i < 2 ? "high" : "low"}
						decoding="async" 
						width="800"
						height="450"
					/>
				</div>
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{@html service.desc}</p>
					<div class="wrapper-button">
						<ButtonRed txt="En Savoir +" href={service.link} />
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
		color: var(--ardoise);
		text-align: center;
		margin-bottom: var(--space-lg);
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
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
		min-height: 450px;
	}

	.cardo-img {
		background-color: #1a1a1a;
	}

	.cardo:nth-child(even) .cardo-img {
		order: 2;
	}

	.cardo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		will-change: transform;
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
		font-family: var(--bebas);
		font-size: 2.2rem;
		font-weight: var(--black);
		color: var(--white);
		margin: 0;
		line-height: 1.1;
	}

	p {
		font-family: var(--raleway);
		font-size: 1.15rem;
		line-height: 1.6;
		color: var(--white);
		font-weight: var(--bold);
		max-width: 95%;
		margin: 0;
	}

	.wrapper-button {
		margin-top: 1.8rem;
	}

	@media screen and (max-width: 1024px) {
		section {
			padding: var(--space-lg) 0;
		}
		.cardo {
			grid-template-columns: 1fr;
			min-height: auto;
			box-shadow: none;
			border: 1px solid #eee;
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
	}
</style>