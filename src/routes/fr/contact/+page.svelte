<script>
</script>

<main>
	<a href="#contact-form" class="hero-contact" title="Faites défiler jusqu'au formulaire de contact">
		<h1>CONTACTEZ-NOUS</h1>
		<p class="subtitle">Une idée, un projet, une question ?<br>Notre équipe est à <strong>votre écoute.</strong></p>
	</a>

	<section class="content-contact">
		<div class="container-grid">
			<div class="info-side">
				<div class="info-block">
					<h3>Audio Pigment</h3>
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
			
			<div class="map-side">
				<div class="map-container">
					<iframe 
						src="https://maps.google.com/maps?q=10%20Rue%20Nicola%C3%AF%2C%2069007%20Lyon%2C%20France&t=&z=15&ie=UTF8&iwloc=&output=embed" 
						width="100%" 
						height="100%" 
						style="border:0;" 
						allowfullscreen="" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade"
						title="Carte Audio Pigment"
					></iframe>
				</div>
			</div>
		</div>
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
		padding: 85px var(--space-md); /* Hauteur réduite pour aérer le plan en dessous */
		background: radial-gradient(circle at 15% 15%, rgba(220, 38, 38, 0.4) 0%, transparent 45%),
		            linear-gradient(135deg, var(--ardoise) 0%, #0a0a0a 100%);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		width: 100%;
	}

	.hero-contact:hover {
		filter: brightness(1.08);
	}

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
		font-size: 2.8rem;
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
		font-weight: var(--bold);
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

	.map-side {
		width: 100%;
		height: 450px;
	}

	.map-container {
		width: 100%;
		height: 100%;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		border: 1px solid var(--grey-light);
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
		
		.map-side {
			height: 350px;
		}
	}
</style>