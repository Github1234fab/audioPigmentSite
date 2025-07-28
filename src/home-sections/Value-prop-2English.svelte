<script>
	import BtnBlack from '$lib/component/btn-black.svelte';
	import BtnWhite from '$lib/component/btn-white.svelte';
</script>

<section>
	<video autoplay muted loop playsinline class="background-video">
		<source
			src="https://videos.pexels.com/video-files/7087627/7087627-uhd_2732_1440_25fps.mp4"
			type="video/mp4"
		/>
	</video>

	<div class="wrapper__section-txt">
		<h2>Our commitment to exceptional sound quality.</h2>
		<h3>
			At AUDIO PIGMENT, every project is listened to, crafted, and refined with care, expertise, and
			creativity. By your side.
		</h3>

		<p>
			Attentive listening, sharp technical skills, and a commitment to tailor-made sound — for
			maximum impact.
			<br /><br />
			To understand, to feel, to convey — that’s our craft.
			<br />
			You can trust us.
			<br />
			Voice, sound design, sonic identity (…)
			<br />

			<strong>Together, let’s shape emotion — and make it memorable.</strong>
		</p>
		<div class="wrapper__buttons">
			<BtnBlack txt="Get in touch" href="/fr/contact" />
			<BtnWhite txt="Have a listen" href="/en/services" />
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
		font-size: 3.5rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -1.5px;
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
		section h2 {
		font-family: var(--bebas);
		font-size: 3rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -1.5px;
	}
	}
</style>
