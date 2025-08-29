<script>
	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
	import TitleDot from '$lib/component/Title-dot.svelte';
	import Btn from '$lib/component/btn-black-shadow.svelte';


</script>

<section>
	<!-- <TitleDot title="Notre savoir faire" /> -->
	<h2>Notre savoir <span>faire</span></h2>
	<video
			class="video-background"
			src="https://videos.pexels.com/video-files/7087632/7087632-uhd_2732_1440_25fps.mp4"
			
			width="500"
			autoplay
			muted
			loop
			id="myVideo"
		>
			<track kind="captions" />
			Votre navigateur ne supporte pas la vidéo HTML5.
		</video> 

	<div class="wrapper__card">
		<CardDotWhite
			title="Post-production audio"
			subtitle={`Sound Design
	Mixage (broadcast, 5.1)
	 Mastering`}
			txt="Découvrir"
			href="/fr/expertise/#post-production-audio"
			videoSrc="https://videos.pexels.com/video-files/7087632/7087632-uhd_2732_1440_25fps.mp4"
		/>

		<CardDotWhite
			title="Création originale"
			subtitle={`Identité sonore
		 Habillage sonore 
		Composition musicale`}
			txt="Explorer"
			href="/fr/expertise/#creation-originale"
			videoSrc="https://www.pexels.com/fr-fr/download/video/19277040-uhd_3840_2160_24fps.mp4"
		/>
		<CardDotWhite
			title="Voix"
			subtitle={`Voix off
	Doublage/Dubbing/ADR
	Voice over`}
			txt="En savoir +"
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
		padding: 1rem;
		/* background-color: rgb(232, 226, 226); */
		color: var(--black);
		min-height: 70vh;
	}
	section h2 {
		font-family: var(--bebas);
		font-weight: var(--bold);
		font-size: 4.5rem;
		font-weight: 400;
		margin-top: 50px;
		text-align: center;
		letter-spacing: -2px;
	}
	section h2 span {
		color: var(--red);
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
			margin-bottom: 100px;
			margin-top: 50px;
		}
	}
</style>
