<script>
	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
	import TitleDot from '$lib/component/Title-dot.svelte';
	import Btn from '$lib/component/btn-black-shadow.svelte';
</script>

<section>
	<!-- <TitleDot title="Notre savoir faire" /> -->
	<!-- <h2>Notre savoir <span>faire</span></h2> -->

	<div class="wrapper__card">
		<CardDotWhite
			title="Post-production audio"
			subtitle={`Sound Design
	Mixage (broadcast, 5.1)
	 Mastering`}
			txt="Découvrir"
			href="/fr/expertise/#post-production-audio"
			videoSrc="https://videos.pexels.com/video-files/7087632/7087632-uhd_2732_1440_25fps.mp4"
			imgSrc="../assets/AudioVisuel.webp"
		/>

		<CardDotWhite
			title="Création originale"
			subtitle={`Identité sonore
		 Habillage sonore 
		Composition musicale`}
			txt="Explorer"
			href="/fr/expertise/#creation-originale"
			videoSrc="https://www.pexels.com/fr-fr/download/video/19277040-uhd_3840_2160_24fps.mp4"
			imgSrc="../assets/MarkSonore.webp"
		/>
		<CardDotWhite
			title="Voix"
			subtitle={`Voix off
	Doublage / Dubbing / ADR
	Voice over`}
			txt="Écouter"
			href="/fr/expertise/#Voix"
			videoSrc="https://www.pexels.com/fr-fr/download/video/7586638-hd_1920_1080_24fps.mp4"
			imgSrc="../assets/Voix.webp"
		/>
	</div>
</section>

<style>
	section {
		padding: var(--space-md) 0; /* Marges réduites pour un enchaînement plus compact */
		background-color: var(--white-off);
	}

	.wrapper__card {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-md);
		align-items: stretch;
		justify-content: center;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 var(--space-md);
	}

	@media screen and (max-width: 768px) {
		section {
			padding: var(--space-md) 0;
		}
		
		.wrapper__card {
			flex-direction: column;
			gap: 10px;
			padding: 0;
		}
	}
</style>
