<script>
	import Button from '$lib/component/btn-black-border.svelte';
	import SliderLogos from '$lib/component/Slider-logo-english.svelte';
	// import VantaTopology from '../lib/component/Vanta-topology.svelte';
</script>

<section>
	<!-- 
	<VantaTopology config={{ color: 0xE74C3C, backgroundColor: 0x21222c }} /> -->
	<div class="wrapper__section-txt">
		<h2>Together, let’s shape emotion and make it memorable !</h2>

		<div class="wrapper__h4">
			<h4>Over 25 years of experience</h4>
			<h4>3 studios</h4>
			<h4>50+ languages</h4>
			<h4>International network</h4>
		</div>

		<p>
			<strong>Recognized players</strong> in high-end audio production, both in
			<strong>France </strong>and <strong>internationally</strong>, we specialize in voice-over,
			dubbing, sound design, original music, post-production, and mixing.

			<br /><br />We combine
			<strong
				>technical precision, creative intuition, and attention to detail to deliver premium,
				tailor-made productions</strong
			>
			.
			<br /><br /> At<strong>Audio Pigment</strong> , each project is
			<strong
				>crafted as a unique piece, where expertise, experience, and creativity come together to
				serve impact, picture, storytelling, and identity</strong
			>
			.
			<br /><br /> <strong>Since 1999</strong>, we’ve been trusted by
			<strong>leading brands and institutions</strong>, including: L’Oréal, Chanel, Hermès, Air
			France, Accor, Ferrero, Burger King, Lego, Disneyland Paris, Procter &amp; Gamble, Total
			Energies, and many more…
			<br /><br />And we’re proud to keep earning their trust today.
		</p>
		<Button txt="Get in touch" href="/fr/contact" />
	</div>
	<div class="wrapper__slider-logos">
		<SliderLogos />
	</div>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background-color: var(--ardoise);
		min-height: 100vh;
		z-index: 0;
		gap: 40px;
		overflow: hidden;
		z-index: 0;
	}
	.wrapper__slider-logos {
		width: 100%;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 800px;
		margin-bottom: 0px;
		color: white;
		margin-top: 50px;
		gap: 30px;
	}

	.wrapper__section-txt h2 {
		font-family: var(--bebas);
		font-size: 4.5rem;
		color: white;
		margin-bottom: 0px;
		font-weight: 400;
		letter-spacing: -1.5px;
		width: 100%;
	}

	section h4 {
		font-family: var(--raleway);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: white;
		font-weight: var(--regular);
		margin-top: 0px;
		border: 1px solid grey;
		padding: 20px 40px;
	}
	.wrapper__h4 {
		gap: 5px;
		margin-top: 30px;
		display: flex;
	}
	p {
		font-family: var(--raleway);
		font-size: 1rem;
		color: white;
		margin-top: 20px;
		max-width: 800px;
		line-height: 1.5;
		margin-top: 50px;
		margin-bottom: 30px;
	}
	@media screen and (max-width: 768px) {
		.wrapper__h4 {
			gap: 5px;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
		}
		.wrapper__slider-logos {
			width: 100%;
		}
		.wrapper__section-txt {
			font-size: 2.5rem;
		}
		.wrapper__section-txt h2 {
			font-size: 3.5rem;
		}
	}
</style>
