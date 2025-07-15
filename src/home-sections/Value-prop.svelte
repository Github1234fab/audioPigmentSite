<script>
	import Button from '$lib/component/btn-black-border.svelte';
	import SliderLogos from '$lib/component/Slider-logos.svelte';
	// import VantaTopology from '../lib/component/Vanta-topology.svelte';
</script>

<section>

	<!-- <VantaTopology config={{ color: 0xE74C3C, backgroundColor: 0x21222c }} /> -->
	<h2>Ensemble, créons des émotions, marquons les esprits</h2>

	<div class="wrapper__h4">
		<h4>3 studios</h4>
		<h4>+ 40 langues</h4>
		<h4>Réseau International</h4>
	</div>

	<p>
		Acteurs reconnus de la production sonore, en France comme à l’international, nous sommes
		spécialisés dans la voix off, le doublage, le sound design, la création musicale, la
		postproduction, et le mixage. <br />

		Nous conjuguons exigence technique, sens du détail et approche artistique pour des productions
		haut de gamme, conçues sur mesure. <br /><br />

		Chez Audio Pigment, chaque projet est pensé comme une pièce unique, où notre savoir-faire, notre
		expérience, et notre créativité sont mis au service de l’impact, de l’image, du récit et de
		l’identité.

		<br /><br />Depuis 1999, nous accompagnons de grandes marques et institutions telles que :
		L’Oréal, Chanel, Air France, Disneyland Paris, Ferrero, bioMérieux, Caisse d’Epargne, Puy du
		Fou, Point S, Orange, EDF, Région Auvergne-Rhône-Alpes, et beaucoup d’autres… Et nous sommes
		fiers de la confiance qu’ils continuent de nous accorder aujourd’hui…
	</p>
	<Button txt="Contactez-nous" />
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

	section h2 {
		font-family: var(--bebas);
		font-size: 2.9rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
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
			width: 300px;
		}
	}
</style>
