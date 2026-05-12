<script>
	import { onMount } from 'svelte';
	import Form from '$lib/component/Form.svelte';
	
	let mapContainer;
	const center = { lat: 45.7380, lng: 4.8455 };
	const zoom = 15;
	let map;

	onMount(() => {
		window.initMap = () => {
			map = new google.maps.Map(mapContainer, {
				center,
				zoom,
				styles: [
					{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] },
					{ "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }
				]
			});
			new google.maps.Marker({ position: center, map });
		};
	});
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEwpAek6JuWKBWxCZRWHIpJpFtLmngzLE&callback=initMap"
		async
		defer
	></script>
</svelte:head>

<main>
	<section class="hero-contact">
		<h1>Contactez-nous</h1>
		<p class="subtitle">Une idée, un projet, une question ?<br>Notre équipe est à <strong>votre écoute.</strong></p>
	</section>

	<section class="content-contact">
		<div class="container-grid">
			<div class="info-side">
				<div class="info-block">
					<h3>Studio Lyon</h3>
					<p>10 Rue Nicolaï<br>69007 Lyon, France</p>
				</div>
				<div class="info-block">
					<h3>Téléphone</h3>
					<p><a href="tel:+33472734721">+33 (0)4 72 73 47 21</a></p>
				</div>
				<div class="info-block">
					<h3>Email</h3>
					<p><a href="mailto:contact@audiopigment.com">contact@audiopigment.com</a></p>
				</div>
			</div>
			
			<div class="form-side">
				<Form />
			</div>
		</div>
	</section>

	<section class="map-section">
		<div bind:this={mapContainer} class="map-container"></div>
	</section>
</main>

<style>
	main {
		background-color: var(--white-off);
		padding-top: 100px; /* Espace pour le header */
	}

	.hero-contact {
		position: relative;
		text-align: center;
		padding: 140px var(--space-md);
		/* Dégradé multicouche : Lumière rouge + Dégradé sombre */
		background: radial-gradient(circle at 15% 15%, rgba(220, 38, 38, 0.4) 0%, transparent 45%),
		            linear-gradient(135deg, var(--ardoise) 0%, #0a0a0a 100%);
		overflow: hidden;
	}

	/* Texture studio */
	.hero-contact::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size: 30px 30px;
		opacity: 0.15;
		pointer-events: none;
		z-index: 1;
	}

	h1 {
		font-family: var(--font-heading);
		font-size: clamp(3rem, 10vw, 5rem);
		color: var(--white);
		font-weight: 800;
		letter-spacing: -0.05em;
		text-transform: uppercase;
		position: relative;
		width: fit-content;
		margin: 0 auto 1.5rem;
		line-height: 0.9;
		z-index: 2;
	}

	.subtitle {
		font-family: var(--font-main);
		font-size: 1.3rem;
		color: var(--white-off);
		max-width: 600px;
		margin: 0 auto;
		font-weight: 300;
		line-height: 1.6;
		letter-spacing: 0.05em;
		position: relative;
		z-index: 2;
	}

	.subtitle strong {
		color: var(--accent);
		font-weight: 700;
	}

	.content-contact {
		padding: var(--space-xl) var(--space-md);
	}

	.container-grid {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: var(--space-xl);
		max-width: 1200px;
		margin: 0 auto;
		align-items: start;
	}

	.info-side {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.info-block h3 {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		color: var(--ardoise);
	}

	.info-block p {
		font-family: var(--font-main);
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--ardoise-light);
	}

	.info-block a {
		color: var(--accent);
		text-decoration: none;
		font-weight: 600;
		transition: var(--transition);
	}

	.info-block a:hover {
		color: var(--ardoise);
	}

	.map-section {
		padding: 0 var(--space-md) var(--space-xl);
	}

	.map-container {
		width: 100%;
		height: 500px;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
	}

	@media (max-width: 968px) {
		.container-grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.info-side {
			text-align: center;
		}

		.hero-contact {
			padding: var(--space-lg) var(--space-md);
		}
	}
</style>