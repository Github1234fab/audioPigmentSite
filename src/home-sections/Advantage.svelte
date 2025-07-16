<script>
	// Version plus simple sans icônes
	const features = [
		{
			title: 'EXPERIENCE',
			iconClass: 'fa-solid fa-user-tie fa-2xl',
			p: "Plus de 25 ans d'expérience créative, technique, et artistique"
		},
		{
			title: 'ARTISTIQUE',
			iconClass: 'fa-solid fa-palette fa-2xl',
			p: 'Direction artistique soignée et exigeante reconnue'
		},
		{
			title: 'STUDIOS',
			iconClass: 'fa-solid fa-microphone-lines fa-2xl',
			p: "3 studios d'enregistrement et post production son, haut de gamme"
		},
		{
			title: 'CASTING',
			iconClass: 'fa-solid fa-users fa-2xl',
			p: 'Casting de comédiens voix professionnels natifs, couvrant plus de 50 nationalités'
		},
		{
			title: 'VOIX PRO',
			iconClass: 'fa-solid fa-comment-dots fa-2xl',
			p: 'Casting voix sur mesure pour chaque projet'
		},
		{
			title: 'INTERNATIONAL',
			iconClass: 'fa-solid fa-globe fa-2xl',
			p: 'Interconnexion avec des studios partenaires du monde entier pour des enregistrements à distance en temps réel'
		},
		{
			title: 'SAV',
			iconClass: 'fa-solid fa-headset fa-2xl',
			p: 'Gestion des urgences'
		},
		{
			title: 'SUIVI',
			iconClass: 'fa-solid fa-history fa-2xl',
			p: 'Suivi des projets sur la durée (mises à jour, séries...)'
		},
		{
			title: 'ACCOMPAGNEMENT',
			iconClass: 'fa-solid fa-user-check fa-2xl',
			p: 'Accompagnement rigoureux : relectures, ré-écoutes, vérifications…'
		}
	];
</script>

<section>
	<h2>Nos Atouts</h2>
	<div class="features-grid">
		{#each features as feature}
			<div class="feature-card">
				<i class="{feature.iconClass} icon"></i>
				<div class="title">{feature.title}</div>
				<p>{feature.p}</p>
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
		padding: 2rem;
		background-color: var(--red);
		height: 100%;
		z-index: 0;
		gap: 40px;
		color: white;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 2.9rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
	}
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.feature-card {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 1.5rem;
		transition: all 0.3s ease;
		border: 1px solid rgb(203, 203, 203);
	}

	.feature-card:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(255, 254, 254);
		margin: 10px;
		background-color: var(--red);
		border: 1px solid rgb(203, 203, 203);
		height: 60px;
		aspect-ratio: 1;
		border-radius: 50%;
	}

	.title {
		font-family: var(--raleway);
		color: white;
		display: flex;
		align-items: center;
		align-self: center;
		justify-content: center;
		font-size: 1rem;
		font-weight: 600;
		margin-top: 30px;
	}

	.feature-card p {
		padding: 20px;
		color: white;
		line-height: 1.5;
		font-size: 0.9rem;
		font-family: var(--raleway);
		text-align: bottom;
	}

	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
			padding: 1rem;
		}
	}
</style>
