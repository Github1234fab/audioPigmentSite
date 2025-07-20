<script>
	import BtnBlack from '$lib/component/btn-black.svelte';
	import BtnWhite from '$lib/component/Btn-White.svelte';
</script>

<section>
	<video autoplay muted loop playsinline class="background-video">
		<source
			src="https://videos.pexels.com/video-files/7087627/7087627-uhd_2732_1440_25fps.mp4"
			type="video/mp4"
		/>
	</video>

	<div class="wrapper__section-txt">
		<h2>Notre engagement pour une qualité sonore exceptionnelle</h2>
		<h3>
			Chaque projet mérite son histoire sonore unique : chez Audio Pigment, l’évidence c’est
			l’exception.
		</h3>

		<p>
			Chez AUDIO PIGMENT, chaque projet est pensé, écouté, façonné avec précision par l’expertise
			humaine, pour créer un impact optimal. Une écoute exigeante, un savoir-faire affûté, et le
			goût du sur-mesure. Comprendre, ressentir, transmettre : c’est notre métier. Faisons-nous
			confiance.
		</p>
		<div class="wrapper__buttons">
			<BtnBlack txt="Contactez-nous" href="/fr/contact" />
			<BtnWhite txt="Découvrez nos services" href="/fr/services" />
		</div>
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
		background-color: transparent;
		min-height: 100vh;
		z-index: 0;
		gap: 40px;
		position: relative;
		overflow: hidden;
		z-index: 0;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 2.9rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1rem;
		margin-bottom: 0.5rem;
		line-height: 1.8;
		color: white;
		font-weight: var(--regular);
		margin-top: 0px;
		padding: 20px 40px;
		width: 100%;
	}
	section h3 {
		font-family: var(--raleway);
		font-size: 1.5rem;
		font-weight: var(--medium);
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 0px;
		letter-spacing: -1px;
	}
	.wrapper__buttons {
		display: flex;
		/* flex-direction: column; */
		margin-bottom: 50px;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		color: white;
		z-index: 2;
		position: relative;
		padding: 2rem;
	}
	section::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0) 0%,
			rgb(0, 0, 0, 0.5) 	50%,
		 rgba(0, 0, 0, 0) 100%
		);
		z-index: 1;
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		-webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	}
	.background-video {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: -1;
	}

	@media screen and (max-width: 768px) {
		.wrapper__buttons {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
		}
		section p {
			width: 100%;
			padding: 20px 0px;
				}
	}
</style>
