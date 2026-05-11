<script>
	// Version plus simple sans icônes
	const features = [
		{
			title: 'EXPERIENCE',
			iconClass: 'fa-solid fa-user-tie fa-2xl',
			p: 'Plus de <strong>25 ans d’expérience</strong> créative et technique'
		},
		{
			title: 'ARTISTIQUE',
			iconClass: 'fa-solid fa-palette fa-2xl',
			p: '<strong>Direction artistique soignée</strong> , relecture, réécoute, vérification systématique'
		},
		{
			title: 'STUDIOS',
			iconClass: 'fa-solid fa-microphone-lines fa-2xl',
			p: '<strong>3 studios</strong>  d’enregistrement et post production son, <strong>haut de gamme</strong> '
		},
		{
		title: 'SUIVI LIVE',
			iconClass: 'fa-solid fa-headset fa-2xl',
			p: '<strong>Suivi clients</strong>  en direct, <strong>au studio ou à distance</strong> via connexion internet sécurisée '
		},
		{
			title: 'VOIX PRO',
			iconClass: 'fa-solid fa-users fa-2xl',
			p: '<strong>Comédiens voix professionnels natifs</strong> , couvrant plus de <strong>50 nationalités</strong> '
		},
		{
			title: 'INTERNATIONAL',
			iconClass: 'fa-solid fa-globe fa-2xl',
			p: 'Interconnexion avec des <strong>studios partenaires du monde entier</strong>  pour des enregistrement <strong>en temps réel</strong>  à distance'
		},
		{
			title: 'CASTING',
			iconClass: 'fa-solid fa-comment-dots fa-2xl',
			p: '<strong>Casting</strong> voix sur mesure'
		},
		{
			title: 'ACCOMPAGNEMENT',
			iconClass: 'fa-solid fa-history fa-2xl',
			p: '<strong>Suivi des projets</strong> dans la durée (mises à jour, séries sur plusieurs années), <strong>gestion des urgences</strong>'
		},
		{
			title: 'RESEAU PRO',
			iconClass: 'fa-solid fa-user-check fa-2xl',
			p: 'Mise à disposition de notre <strong>réseau de partenaires </strong>: artistique, technique, traduction/adaptation'
		}
	];
</script>

<section>
	<video autoplay muted loop playsinline preload="none" class="background-video desktop-only">
		<source src="https://www.pexels.com/fr-fr/download/video/27660115/" type="video/mp4" />
	</video>
	<h2>Nos Atouts</h2>
	<p class="section-intro">Ce qui fait la force d'Audio Pigment</p>
	<div class="features-grid">
		{#each features as feature}
			<div class="feature-card">
			
				<div class="title">{feature.title}</div>
				<i class="{feature.iconClass} icon"></i>
				<p>{@html feature.p}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--space-xl) var(--space-md);
		color: var(--white);
		position: relative;
		overflow: hidden;
		min-height: 80vh;
	}

	.background-video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.6) 50%,
			rgba(0, 0, 0, 0.8) 100%
		);
		z-index: 1;
	}

	h2 {
		position: relative;
		z-index: 3;
		font-size: var(--fs-h2);
		margin-bottom: var(--space-xs);
		color: var(--white);
	}

	.section-intro {
		position: relative;
		z-index: 3;
		font-size: var(--fs-body);
		color: var(--grey);
		margin-bottom: var(--space-lg);
		max-width: 600px;
	}

	.features-grid {
		position: relative;
		z-index: 3;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-md);
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		padding: var(--space-md);
		transition: var(--transition);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-sm);
	}

	.feature-card:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-5px);
		border-color: var(--accent);
	}

	.icon {
		width: 60px;
		height: 60px;
		background-color: var(--accent);
		color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 1.5rem;
		margin-bottom: var(--space-xs);
		transition: var(--transition);
	}

	.feature-card:hover .icon {
		transform: rotate(10deg) scale(1.1);
	}

	.title {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--white);
		letter-spacing: 0.02em;
	}

	.feature-card p {
		font-size: var(--fs-small);
		line-height: 1.6;
		color: var(--grey-light);
		margin: 0;
	}

	@media (max-width: 768px) {
		.background-video.desktop-only {
			display: none;
		}
		section {
			background: var(--ardoise);
			padding: var(--space-lg) var(--space-sm);
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: var(--space-sm);
		}
	}
</style>
