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
			title="Audio Post-production"
			subtitle={`Sound Design
Mixing (broadcast, 5.1)
Localization`}
			txt="Experience"
			href="/fr/expertise/#post-production-audio"
			videoSrc="https://videos.pexels.com/video-files/7087632/7087632-uhd_2732_1440_25fps.mp4"
			imgSrc="../assets/heroBanner-A.jpeg"
		/>

		<CardDotWhite
			title="Sound Creation"
			subtitle={`Sonic Branding
Original Music
Soundscaping & Design`}
			txt="Explore"
			href="/fr/expertise/#creation-originale"
			videoSrc="https://www.pexels.com/fr-fr/download/video/19277040-uhd_3840_2160_24fps.mp4"
		/>
		<CardDotWhite
			title="Voices"
			subtitle={`Voice over
Dubbing & ADR
Voice Acting`}
			txt="Listen"
			href="/fr/expertise/#Voix"
			videoSrc="https://www.pexels.com/fr-fr/download/video/7586638-hd_1920_1080_24fps.mp4"
		/>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--black);
		min-height: 70vh;
	}

	.wrapper__card {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		align-items: center;
		justify-content: center;
		margin-top: 0px;
		padding: 0px;
	}

	@media screen and (max-width: 768px) {
		section {
			min-height: 100%;
			padding: 0;
		}
		.wrapper__card {
			flex-direction: column;
			gap: 2px;
			margin: 0px;
			padding: 0px;
		}
	}
</style>
