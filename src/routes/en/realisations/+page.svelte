<script>
	import Card from '$lib/component/Card-realisation.svelte';

	const allRealisations = [
		{
			title: "Mystery Series",
			type: "Audio Series",
			technique: "3D Sound Design",
			link: "/en/realisations/serie-mystere",
			image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
		},
		{
			title: "Company X",
			type: "Corporate",
			technique: "Sound Design & Mixing",
			link: "/en/realisations/entreprise-x",
			image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
		},
		{
			title: "The Magic Book",
			type: "Audiobooks",
			technique: "Studio Voice Recording",
			link: "/en/realisations/livre-magique",
			image: "https://images.pexels.com/photos/5904937/pexels-photo-5904937.jpeg"
		},
		{
			title: "Innovative Podcast",
			type: "Podcast",
			technique: "Field Recording",
			link: "/en/realisations/podcast-innovant",
			image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
		},
		{
			title: "Future TV Series",
			type: "TV/VOD",
			technique: "Cinematic Audio Post-production",
			link: "/en/realisations/serie-tv-futur",
			image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
		},
		{
			title: "Cartoon Animation",
			type: "Animation",
			technique: "Sound Creation",
			link: "/en/realisations/animation-cartoon",
			image: "https://images.pexels.com/photos/1301832/pexels-photo-1301832.jpeg"
		},
		{
			title: "Nature Documentary",
			type: "Documentaries",
			technique: "Field Recording",
			link: "/en/realisations/documentaire-nature",
			image: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg"
		},
		{
			title: "True Crime Series",
			type: "Audio Series",
			technique: "Special Editing & Mixing",
			link: "/en/realisations/serie-true-crime",
			image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
		},
		{
			title: "Corporate Tech",
			type: "Corporate",
			technique: "Sound Branding",
			link: "/en/realisations/corporate-tech",
			image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
		},
		{
			title: "Classic Book",
			type: "Audiobooks",
			technique: "Professional Voice Over",
			link: "/en/realisations/livre-classique",
			image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
		}
	];

	let selectedType = "All";
	$: productionTypes = Array.from(new Set(allRealisations.map((r) => r.type)));

	$: filteredRealisations =
		selectedType === "All"
			? allRealisations
			: allRealisations.filter((r) => r.type === selectedType);
</script>

<section>
	<h1>Our achievements</h1>
	<div class="filters">
		<button class:selected={selectedType === "All"} on:click={() => (selectedType = "All")}>All</button>
		{#each productionTypes as type}
			<button class:selected={selectedType === type} on:click={() => (selectedType = type)}
				>{type}</button
			>
		{/each}
	</div>

	<div class="cards-grid">
		{#each filteredRealisations as realisation}
			<Card
				title={realisation.title}
				image={realisation.image}
			/>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--space-xl) var(--space-md);
		background-color: var(--white);
		color: var(--ardoise);
		height: 100%;
	}

	section h1 {
		font-family: var(--font-heading);
		font-size: var(--fs-h1);
		margin-bottom: var(--space-xl);
		margin-top: var(--space-xl);
		font-weight: 800;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		position: relative;
		width: fit-content;
		padding-bottom: 1.5rem;
	}

	section h1::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 4px;
		background: var(--accent);
		border-radius: 4px;
	}

	.filters {
		display: flex;
		gap: 0.8rem;
		flex-wrap: wrap;
		margin-bottom: var(--space-xl);
		justify-content: center;
	}

	.filters button {
		background-color: var(--white);
		border: 1px solid var(--grey-light);
		color: var(--ardoise);
		padding: 10px 24px;
		cursor: pointer;
		font-family: var(--font-main);
		font-size: 0.85rem;
		font-weight: 700;
		transition: var(--transition);
		border-radius: 50px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.filters button:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.filters button.selected {
		background-color: var(--accent);
		color: var(--white);
		border-color: var(--accent);
		box-shadow: var(--shadow-md);
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		width: 100%;
		max-width: 1200px;
		margin-top: 50px;
	}

	@media (max-width: 768px) {
		section h1 {
			font-size: 2.4rem;
			letter-spacing: -1px;
			line-height: 1.2;
			padding-bottom: 1.5rem;
			margin-top: 40px;
			margin-bottom: 2.5rem;
		}
		.cards-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>