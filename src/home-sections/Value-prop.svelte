<script>
	import Button from '$lib/component/btn-black.svelte';
	import SliderLogos from '$lib/component/Slider-Logos.svelte';



	import { onMount, onDestroy } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
//   import { afterNavigate } from "$app/navigation"; // si SvelteKit

  gsap.registerPlugin(ScrollTrigger);
  let triggers = [];

  onMount(() => {
    // Un tween + trigger par .card
    gsap.utils.toArray("h4").forEach((el, i) => {
      const tween = gsap.from(el, {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        // petit décalage seulement visuel, pas un stagger global
        delay: i * 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",   // l’élément entre bien dans le viewport
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

	<div class="wrapper__section-txt">
		<h2> Identité sonore, Sound design, Voix ... </h2>
		<h3>Ensemble, créons des émotions, marquons les esprits</h3>

		<div class="wrapper__h4">
			<h4>+ 25 ans d'expérience</h4>
			<h4>3 studios</h4>
			<h4>+ 50 langues</h4>
			<h4>Réseau International</h4>
		</div>

		<p>
			<strong>Acteurs reconnus</strong> de la production sonore, <strong>en France</strong> comme
			<strong>à l’international</strong>, nous sommes spécialisés dans la voix off, le doublage, le
			sound design, la création musicale, la postproduction, et le mixage. <br />

			Nous conjuguons <strong>exigence technique</strong>, <strong>sens du détail </strong> et
			<strong>approche artistique</strong>
			pour des productions
			<strong>haut de gamme</strong>, conçues <strong>sur mesure</strong>. <br /><br />

			Chez <strong>Audio Pigment</strong>, chaque projet est pensé comme une
			<strong>pièce unique</strong>, où notre <strong>savoir-faire</strong>, notre
			<strong>expérience</strong>
			, et notre <strong>créativité</strong> sont mis au service de <strong>l’impact</strong>, de
			<strong>l’image</strong>
			, du <strong>récit</strong> et de <strong>l’identité</strong>.

			<br /><br /> <strong>Depuis 1999</strong> , nous accompagnons de
			<strong>grandes marques</strong>
			et <strong>institutions</strong> telles que : L’Oréal, Chanel, Air France, Disneyland Paris,
			Ferrero, bioMérieux, Caisse d’Epargne, Puy du Fou, Point S, Orange, EDF, Région
			Auvergne-Rhône-Alpes et beaucoup d’autres…

			<br /><br />Et nous sommes fiers de la confiance qu’ils continuent de nous accorder
			aujourd’hui…
		</p>
		<div class="wrapper__slider-logos">
			<SliderLogos />
		</div>
		<div class="wrapper-button">
		<Button txt="Contactez-nous" href="/fr/contact" />
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
		background-image: radial-gradient(circle at top right, rgb(255,255,255) 0%, rgb(255,255,255) 48%,rgb(248,248,248) 48%, rgb(248,248,248) 53%,rgb(240,240,240) 53%, rgb(240,240,240) 56%,rgb(229,229,229) 56%, rgb(229,229,229) 69%,rgb(229,229,229) 69%, rgb(229,229,229) 100%);		background-size: cover;
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
	}
	.wrapper__section-txt h2 {
		font-family: var(--bebas);
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
		font-family: var(--raleway);
		/* font-size: 2rem; */
		font-size: 3.5rem;
		color: var(--ardoise);
		margin-top: 0px;
		font-weight: var(--bold);
		width: 100%;
		letter-spacing: -3px;
	}

	section h4 {
		font-family: var(--raleway);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: white;
		font-weight: var(--medium);
		margin-top: 0px;
		padding: 10px 30px;
		background-color: var(--red);
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
		section{
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
			font-size: 3.5rem;
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
	}
</style>
