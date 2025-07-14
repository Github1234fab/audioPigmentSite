<script>
	// Version plus simple sans icônes
	const features = [
		"Plus de 25 ans d'expérience créative, technique, et artistique",
		"Direction artistique soignée et exigeante reconnue",
		"3 studios d'enregistrement et post production son, haut de gamme",
		"Casting de comédiens voix professionnels natifs, couvrant plus de 50 nationalités",
		"Casting voix sur mesure pour chaque projet",
		"Interconnexion avec des studios partenaires du monde entier pour des enregistrement en temps réel à distance",
		"Gestion des urgences",
		"Suivi des projets dans la durée (mises à jour, séries sur plusieurs années…)",
		"Accompagnement rigoureux : relectures, ré-écoutes, vérifications systématiques…"
	];
</script>

<div class="features-grid">
	{#each features as feature, index}
		<div class="feature-card">
			<div class="card-number">{index + 1}</div>
			<p>{feature}</p>
		</div>
	{/each}
</div>

<style>
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.feature-card {
		display: flex	;
		align-items: flex-end;
		justify-content: flex-end;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 1.5rem;
		position: relative;
		transition: all 0.3s ease;
		border: 1px solid rgb(203, 203, 203);
	}

	.feature-card:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
	}

	.card-number {
		position: absolute;
		top: 5%;
		left: 5%;
		background-color: var(--ardoise);
		font-family: var(--bebas);
		color: white;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		font-weight: 400;
	}

	.feature-card p {
		padding: 20px;
		color: var(--ardoise);
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
