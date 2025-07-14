<script>
	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
</script>

<section>
	<h2>Nos solutions audios sur mesure</h2>

	<div class="wrapper__card">
		<CardDotWhite
			title="Post-production audio"
			subtitle={`Sound Design
	Mixage (broadcast, 5.1)
	 Mastering`}
			txt="Découvrir"
		/>
		<CardDotWhite
			title="Création originale"
			subtitle={`Identité sonore
		 Habillage sonore 
		Composition musicale`}
			txt="Explorer"
		/>
		<CardDotWhite
			title="Voix"
			subtitle={`Voix off
	Doublage/Dubbing/ADR
	Voice over`}
			txt="En savoir +"
		/>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: rgb(216, 216, 216);
		color: var(--black);
		min-height: 70vh;

	}
	section h2 {
		font-family: var(--raleway);
		font-size: 2.7rem;
		margin-bottom: 0.5rem;
		color: var(--black);
		margin-top: 50px;
		letter-spacing: -1.4px;
		padding: 20px 40px;
		border: 1px solid grey;
	}
	.wrapper__card {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-items: center;
		justify-content: center;
		margin: 100px;
		padding: 0px;
	}
</style>
