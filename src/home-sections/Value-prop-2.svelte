<script>
	import BtnBlack from '$lib/component/btn-black.svelte';
	import BtnWhite from '$lib/component/btn-white.svelte';
</script>

<section>
	<video autoplay muted loop playsinline preload="none" class="background-video">
		<source
			src="https://videos.pexels.com/video-files/7087627/7087627-uhd_2732_1440_25fps.mp4"
			type="video/mp4"
		/>
	</video>

	<div class="wrapper__section-txt">
		<!-- <h2>Notre engagement pour une qualité sonore exceptionnelle</h2> -->
		<!-- <h3>
			Chaque projet mérite son histoire sonore unique : chez Audio Pigment, l’évidence c’est
			l’exception.
		</h3> -->
		<h3><span>Voix</span> <span>sound design</span> <span>identité sonore</span></h3>
		<br />
		<h4><strong>Ensemble, créons des émotions, marquons les esprits</strong></h4>

		<p>
			Chez AUDIO PIGMENT, chaque projet est écouté, pensé et façonné avec soin, expertise et
			inventivité. À vos côtés. <br />
			Une <strong>écoute attentive</strong>, un <strong>savoir-faire affûté </strong> et
			<strong>le goût du sur-mesure</strong>
			pour un impact optimal.

			<br /><strong>Comprendre</strong>, <strong>ressentir</strong>, <strong>transmettre</strong> :
			c’est notre métier.
			<br />Faites nous confiance
		</p>

		<!-- <p>
			Chez AUDIO PIGMENT, chaque projet est pensé, écouté, façonné avec précision par l’expertise
			humaine, pour créer un impact optimal. Une écoute exigeante, un savoir-faire affûté, et le
			goût du sur-mesure. Comprendre, ressentir, transmettre : c’est notre métier. Faisons-nous
			confiance.
		</p> -->
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
		height: 70vh;
		z-index: 0;
		gap: 40px;
		position: relative;
		overflow: hidden;
		z-index: 0;
	}
	/* .wrapper__section-txt h2 {
		font-family: var(--raleway);
		font-size: 3rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
		font-weight: 800;
		letter-spacing: -1.5px;
	} */
	.wrapper__section-txt h4 {
		font-family: var(--bebas);
		font-size: 2.4rem;
		line-height: 1.4;
		color: white;
		font-weight: var(--bold);
		margin-top: 0px;
		padding: 20px 40px;
		width: 100%;
	}
	.wrapper__section-txt h3 span {
		border: 1px solid white;
		padding: 15px 20px;
		border-radius: 3px;
	}

	.wrapper__section-txt h3 {
		font-family: var(--raleway);
		font-size: 2rem;
		font-weight: var(--medium);
		margin-bottom: 0rem;
		color: white;
		letter-spacing: -1px;
	}
	.wrapper__section-txt p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-top: 0px;
		font-weight: var(--regular);
		color: white;
		padding: 0px 0px;
		margin-bottom: 3rem;
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
			rgb(0, 0, 0, 0.5) 50%,
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
		section {
			background-image: url('https://images.pexels.com/photos/14828529/pexels-photo-14828529.jpeg?w=600&h=400&auto=compress&cs=tinysrgb');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
		.background-video {
			display: none;
		}
		/* section h2 {
		font-family: var(--bebas);
		font-size: 3rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -1.5px;
	} */
	}
</style>
