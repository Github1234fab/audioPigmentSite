<script>
	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
	import TitleDot from '$lib/component/Title-dot.svelte';
	import Btn from '$lib/component/btn-black-shadow.svelte';
</script>

<section>
	<TitleDot title="Our know-how." />

	<div class="wrapper__card">
		<CardDotWhite
			title="Audio Post-production"
			subtitle={`Sound Design
Mixing (broadcast, 5.1)
Localization`}
			txt="Experience"
			href="/fr/expertise/#post-production-audio"
		/>

		<CardDotWhite
			title="Sound Creation"
			subtitle={`Sonic Branding
Original Music
Soundscaping &amp; Design`}
			txt="Explore"
			href="/fr/expertise/#creation-originale"
		/>
		<CardDotWhite
			title="Voices"
			subtitle={`Voice over
Dubbing & ADR

Voice Acting`}
			txt="Listen"
			href="/fr/expertise/#Voix"
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
		background-color: rgb(232, 226, 226);

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

	@media screen and (max-width: 768px) {
		.wrapper__card {
			flex-direction: column;
			gap: 20px;
			margin: 0px;
			padding: 0px;
		}
	}
</style>
