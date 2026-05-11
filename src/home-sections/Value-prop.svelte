<script>
	import Button from '$lib/component/btn-white.svelte';
	import SliderLogos from '$lib/component/Slider-Logos.svelte';
	import { onMount } from 'svelte';

	let wrapperh4;
</script>

<section>
	<div class="wrapper__section-txt">
		<h2>Identité sonore, Sound design, Voix ...</h2>
		

		<!-- On bind le conteneur des h4 -->
		<!-- <div class="wrapper__h4" bind:this={wrapperH4}>
			<h4>+ 25 ans d'expérience</h4>
			<h4>3 studios</h4>
			<h4>+ 50 langues</h4>
			<h4>Réseau International</h4>
		</div> -->

				<h3>Ensemble, créons des émotions, marquons les esprits !</h3>
				<div class="wrapper__h4" bind:this={wrapperh4}>
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-thumbs-up icon"></i>
						<h4>+ 25 ans d'expérience</h4>
					</div>
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-microphone-lines icon"></i>
						<h4>3 studios</h4>
					</div>
		
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-flag icon"></i>
						<h4>+ 50 langues</h4>
					</div>
		
					<div class="wrapper__title-icon">
						<i class="fa-solid fa-earth-americas icon"></i>
						<h4>Réseau International</h4>
					</div>
				</div>
		
		<div class="container">
			<div class="wrapper__p">
			<p>
				<strong>Acteurs reconnus</strong> de la production sonore, <strong>en France</strong> comme
				<strong>à l’international</strong>, nous sommes spécialisés dans la voix off, le doublage,
				le sound design, la création musicale, la postproduction, et le mixage. <br />

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
			
		</div>
	
		</div>
		<div class="wrapper-button">
			<Button txt="Contactez-nous" href="/fr/contact" />
		</div>
		
	
	</div> <!-- Fermeture de wrapper__section-txt AVANT le slider -->

	<div class="wrapper__slider-logos">
		<h4>Nos clients sont satisfaits</h4>
		<SliderLogos />
	</div>
</section>

<style>
	section {
		position: relative;
		text-align: center;
		padding: var(--space-xl) 0; /* Plus de padding horizontal pour le bord à bord */
		background-image: url('../assets/bg-valueProp.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 100vh;
		overflow: hidden;
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.wrapper__section-txt {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 var(--space-md);
	}

	.wrapper__section-txt h2 {
		font-family: var(--font-main);
		font-size: var(--fs-h3);
		color: var(--white);
		font-weight: 400;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin: 0;
	}

	.wrapper__section-txt h3 {
		font-family: var(--font-heading);
		font-size: var(--fs-h2);
		color: var(--white);
		font-weight: 400; /* Plus fin */
		letter-spacing: 0.02em;
		margin: 0;
		text-wrap: balance;
		text-transform: uppercase;
	}

	.wrapper__h4 {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
		width: 100%;
	}

	.wrapper__title-icon {
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 10px 28px;
		border-radius: 50px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		transition: var(--transition);
		cursor: default;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
	}

	.wrapper__title-icon:hover {
		background: rgba(0, 0, 0, 0.8);
		transform: translateY(-2px);
		border-color: var(--accent);
	}

	.icon {
		font-size: 1.1rem;
		color: var(--accent);
	}

	h4 {
		font-family: var(--font-main);
		font-size: 0.95rem;
		font-weight: 700; /* Plus épais pour la lisibilité */
		color: var(--white);
		margin: 0;
		white-space: nowrap;
		letter-spacing: 0.02em;
	}

	.wrapper__p {
		text-align: left;
		background: rgba(0, 0, 0, 0.3);
		padding: var(--space-md);
		border-radius: var(--radius-md);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	p {
		font-family: var(--font-main);
		font-size: var(--fs-body);
		line-height: 1.6;
		color: var(--white-off);
		margin: 0;
	}

	strong {
		color: var(--white);
		font-weight: 700;
	}

	.wrapper-button {
		margin: var(--space-md) 0;
	}

	.wrapper__slider-logos {
		position: relative;
		z-index: 2; /* Pour être au-dessus de l'overlay */
		width: 100%; /* Bord à bord naturel sans padding sur le parent */
		margin-top: var(--space-lg);
		padding: 0;
		overflow: hidden;
		
	}

	.wrapper__slider-logos h4 {
		font-family: var(--font-heading);
		font-size: var(--fs-h3);
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: var(--space-sm);
		text-align: center;
		color: var(--white);
		white-space: normal;
		padding: 0 var(--space-sm);
	}

	@media (max-width: 768px) {
		section {
			padding: var(--space-lg) var(--space-sm);
			background-attachment: scroll;
		}

		.wrapper__title-icon {
			width: auto;
			padding: 10px 20px;
		}

		.wrapper__section-txt {
			gap: var(--space-md);
			padding: 0 var(--space-xs);
		}

		.wrapper__p {
			text-align: center;
			padding: var(--space-sm);
		}
	}

	@media (max-width: 500px) {
		section {
			padding-left: 5px;
			padding-right: 5px;
		}
		.wrapper__section-txt {
			padding: 0;
		}
	}
</style>
