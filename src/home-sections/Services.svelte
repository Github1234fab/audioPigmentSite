
<script>
	import Bilingue from '../assets/bilingue.png';
	import Button from '$lib/component/btn-black.svelte';

	const services = [
		{
			label: 'Communication sonore',
			desc: 'Audio branding / Identité sonore (signature sonore, identité musicale, voix de marque, sound design produit…).',
			link: '/fr/services/#1',
			image: 'https://images.pexels.com/photos/776153/pexels-photo-776153.jpeg'
		},
		{
			label: 'Marketing Sonore',
			desc: 'Spot radio, podcast, création sonore événementiel, sonorisation d’espace, svi, message téléphonique…',
			link: '/fr/services/#2',

			image: 'https://images.pexels.com/photos/1271380/pexels-photo-1271380.jpeg'
		},
		{
			label: 'Audiovisuel & digital',
			desc: 'Habillage sonore &amp; voix off (pub TV, pub cinéma, film corporate, institutionnel, motion design, e-learning…)',
			link: '/fr/services/#3',
			image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg'
		},
		{
			label: 'Doublage multinlingue / Localisation',
			desc: 'Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation (audioguide, elearning, reportage…)',
			link: '/fr/services/#4',
			image: 'https://images.pexels.com/photos/8828605/pexels-photo-8828605.jpeg'
		},
		{
			label: 'Mixage & Post pro broadcast',
			desc: 'Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser »',
			link: '/fr/services/#5',
			image: 'https://images.pexels.com/photos/7899457/pexels-photo-7899457.png'
		}
	];

	import { onMount, onDestroy } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
//   import { afterNavigate } from "$app/navigation"; // si SvelteKit

  gsap.registerPlugin(ScrollTrigger);
  let triggers = [];

  onMount(() => {
    // Un tween + trigger par .card
    gsap.utils.toArray(".cardo").forEach((el, i) => {
      const tween = gsap.from(el, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        // petit décalage seulement visuel, pas un stagger global
        delay: i * 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // l’élément entre bien dans le viewport
          end: "top 30%",     // nécessaire pour bien “sentir” le scrub
          scrub: 1,           // lisser avec le scroll
          // markers: true,   // décommente pour débug
        }
      });
      triggers.push(tween.scrollTrigger);
    });

    // Recalcule après le chargement images / fonts
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    // Si SvelteKit : rafraîchir après navigation
    // afterNavigate(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("load", onLoad);
    };
  });

  onDestroy(() => {
    triggers.forEach(t => t?.kill());
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
					<Button txt="En Savoir +" href={service.link} />
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
		background: linear-gradient(rgb(255, 255, 255), #ebe8e8, rgb(242, 238, 238));
		
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
	.wrapper-button{
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
		align-self: flex-start;
		margin-left: 120px;
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
		/* .wrapper__services-cards {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		} */

		/* .service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			padding: 1rem;
			height: 400px;
			width: 100%;
		} */
		.wrapper__service-txt h3 {
			font-size: 1.8rem;
		}
		section h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
	}
</style>
