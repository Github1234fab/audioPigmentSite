<script>
	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
	import TitleDot from '$lib/component/title-dot.svelte';
</script>

<section>
	<TitleDot
		title="Notre savoir faire"/>

	<div class="wrapper__card">
		<CardDotWhite
			title="Post-production audio"
			subtitle={`Sound Design
	Mixage (broadcast, 5.1)
	 Mastering`}
			txt="Découvrir"
		/>
		<CardDotWhite
			title="Post-production audio"
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
