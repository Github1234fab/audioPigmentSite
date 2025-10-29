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
	<video autoplay muted loop playsinline class="background-video">
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
	.background-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		height: 100%;
		z-index: 0;
		gap: 40px;
		color: white;
		position: relative;
	}
	section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.723); /* Couleur de superposition noire avec opacité */
		z-index: 1;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 3.7rem;
		color: white;
		margin-top: 50px;
		font-weight: var(--bold);
		letter-spacing: -1.5px;
		z-index: 3;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: white;
		font-weight: var(--regular);
		margin-top: 0px;
		z-index: 3;
	}
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
		perspective: 800px;
		z-index: 3;
		margin-bottom: 5rem;
		align-items: stretch;  
	}

	.feature-card {
		display: grid;
		grid-template-rows: auto auto 1fr;
		grid-template-rows: auto auto 1fr;
		justify-items: center;   
		 /* display: flex; */
		 height: 100%;                      /* important pour égaliser la hauteur */
		 align-content: center;
		/* align-items: center;
		justify-content: center; 
		 flex-direction: column;  */
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 1.5rem;
		transition: all 0.3s ease;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		transform: rotateY(0deg);
	}

	.feature-card:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.3);

		scale: 1.05;
	}

	.feature-card:hover .icon {
		transform: scale(1.1);
		transition: transform 0.3s ease;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(255, 254, 254);
		margin: 10px;
		background-color: var(--red);

		height: 60px;
		aspect-ratio: 1;
		border-radius: 50%;
	}

	.title {
		font-family: var(--bebas);
		color: white;
		display: flex;
		align-items: center;
		align-self: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: Bolder;
		margin-top: 30px;
	}

	.feature-card p {
		padding: 20px;
		color: white;
		line-height: 1.5;
		font-size: 1.2rem;
		font-family: var(--raleway);
		text-align: bottom;
		font-weight: 500;
	}
	@media (max-width: 1000px) {
		.features-grid {
			display: grid;
			grid-template-columns: 1fr, 1fr;
			gap: 1.5rem;
			padding: 2rem;
			max-width: 100%;
			width: 100%;
			margin: 0 auto;
			z-index: 3;
		}
	}
	@media (max-width: 769px) {
		.features-grid {
			display: grid;
			grid-template-columns: auto;
			gap: 1.5rem;
			max-width: 100%;
			width: 100%;
			margin: 0 auto;
			z-index: 3;
		}

		.feature-card {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background: rgba(21, 21, 21, 0.231);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 8px;
			transition: all 0.3s ease;
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			transform: rotateY(0deg);
			margin: 0 auto;
			min-width: 100%;
		}
		section h2 {
			font-size: 2rem;
		}
		.title {
			font-size: 1.2rem;
		}

		.feature-card p {
			font-size: 0.8rem;
		}
		section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0.5rem;
		height: 100%;
		z-index: 0;
		gap: 40px;
		color: white;
		position: relative;
	}
	}
</style>
