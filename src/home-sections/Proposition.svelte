<script>
	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
	import Btn from '$lib/component/btn-black-shadow.svelte';

	// On utilise des versions moins lourdes (HD au lieu de UHD quand c'est possible)
	const v1 = "https://videos.pexels.com/video-files/7087632/7087632-hd_1920_1080_25fps.mp4";
	const i1 = "https://images.pexels.com/videos/7087632/pictures/6.jpg";
	
	const v2 = "https://videos.pexels.com/video-files/19277040/19277040-hd_1920_1080_24fps.mp4"; 
	const i2 = "https://images.pexels.com/videos/19277040/pictures/6.jpg";

	const v3 = "https://videos.pexels.com/video-files/7586638/7586638-hd_1920_1080_24fps.mp4";
	const i3 = "https://images.pexels.com/videos/7586638/pictures/6.jpg";
</script>

<section>
	<div class="wrapper__card">
		<CardDotWhite
			title="Post-production audio"
			subtitle={`Sound Design
	Mixage (broadcast, 5.1)
	Mastering`}
			txt="Découvrir"
			href="/fr/expertise/#post-production-audio"
			videoSrc={v1}
			imgSrc={i1}
		/>

		<CardDotWhite
			title="Création originale"
			subtitle={`Identité sonore
		Habillage sonore
		Composition musicale`}
			txt="Explorer"
			href="/fr/expertise/#creation-originale"
			videoSrc={v2}
			imgSrc={i2}
		/>
		<CardDotWhite
			title="Voix"
			subtitle={`Voix off
	Doublage / Dubbing / ADR
	Voice over`}
			txt="Écouter"
			href="/fr/expertise/#Voix"
			videoSrc={v3}
			imgSrc={i3}
		/>
	</div>
</section>

<style>
	section {
		padding: var(--space-md) 0;
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
