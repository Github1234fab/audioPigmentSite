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
		<h2><strong>Together, let’s shape emotion and make it memorable !</strong></h2>
<br>
		<p>
			At <strong>AUDIO PIGMENT</strong> , every project is listened to, crafted, and refined with <strong>care, expertise</strong> , and <strong>creativity</strong> .

			<strong>By your side</strong>.
			<br>
			<br>

			
			<strong>Attentive listening, sharp technical skills</strong>, and a commitment to <strong>tailor-made sound </strong> for maximum impact.
			<br>
			<br>

			
			To <strong>understand</strong> , to <strong>feel</strong>, to <strong>convey</strong>: that’s our craft.
			<br>
			<br>
			You can trust us.
		</p>

		<!-- <p>
			Chez AUDIO PIGMENT, chaque projet est pensé, écouté, façonné avec précision par l’expertise
			humaine, pour créer un impact optimal. Une écoute exigeante, un savoir-faire affûté, et le
			goût du sur-mesure. Comprendre, ressentir, transmettre : c’est notre métier. Faisons-nous
			confiance.
		</p> -->
		<div class="wrapper__buttons">
			<BtnBlack txt="Get in touch" href="/fr/contact" />
			<BtnWhite txt="Discover more" href="/fr/services" />
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
		background-color: transparent;
		min-height: 100vh;
		z-index: 0;
		position: relative;
		overflow: hidden;
		z-index: 0;
		padding: 5rem;
	}

	.wrapper__section-txt h2 {
		font-family: var(--bebas);
		font-size: 3rem;
		line-height: 1.4;
		color: white;
		font-weight: var(--bold);
		width: 100%;
	}

	.wrapper__section-txt p {
		font-family: var(--raleway);
		font-size: 1.5rem;
		line-height: 1.6;
		font-weight: var(--regular);
		color: white;
		margin-bottom: 20px;
	}
	/* .wrapper__section-txt p span {
		font-weight: var(--extra-bold);
		font-family: var(--bebas);
	} */

	.wrapper__buttons {
		display: flex;
		/* flex-direction: column; */
		margin-bottom: 50px;
		gap: 10px;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 50px;
		color: white;
		z-index: 2;
		position: relative;
		padding: 50px;
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
		.wrapper__section-txt p {
			font-family: var(--raleway);
			font-size: 1rem;
			line-height: 1.6;
			margin-top: 0px;
			font-weight: var(--regular);
			color: white;
			padding: 0px 0px;
			margin-bottom: 3rem;
		}
		section {
			background-image: url('https://images.pexels.com/photos/14828529/pexels-photo-14828529.jpeg?w=600&h=400&auto=compress&cs=tinysrgb');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			height: 100%;
			padding: 0.5rem;
		}
		.background-video {
			display: none;
		}
		.wrapper__section-txt h2 {
			font-family: var(--bebas);
			font-size: 2rem;
			line-height: 1.4;
			color: white;
			font-weight: var(--bold);
			margin-top: 0px;
			padding: 20px 0px;
			width: 100%;
		}
	}
</style>
