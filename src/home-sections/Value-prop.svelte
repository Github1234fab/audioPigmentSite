<script>
	import Button from '$lib/component/btn-black-border.svelte';
	import SliderLogos from '$lib/component/Slider-Logos.svelte';
	// import VantaTopology from '../lib/component/Vanta-topology.svelte';
</script>

<section>
	<!-- 
	<VantaTopology config={{ color: 0xE74C3C, backgroundColor: 0x21222c }} /> -->
	<div class="wrapper__section-txt">
		<h2>Voix, sound design, identité sonore ...</h2>
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
		<Button txt="Contactez-nous" href="/fr/contact" />
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
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 800px;
		margin-bottom: 0px;
		color: white;
		margin-top: 50px;
		gap: 30px;
	}
	.wrapper__section-txt h2 {
		font-family: var(--bebas);
		font-size: 4.5rem;
		color: white;
		margin-bottom: 0px;
		font-weight: 400;
		letter-spacing: -1.5px;
		width: 100%;
	}
	.wrapper__section-txt h3 {
		font-family: var(--raleway);
		font-size: 2rem;
		color: white;
		margin-top: 0px;
		font-weight: var(--bold);
		width: 100%;
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
