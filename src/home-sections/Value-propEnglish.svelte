<script>
	import Button from '$lib/component/btn-white.svelte';
	import SliderLogos from '$lib/component/Slider-Logos-English.svelte';
	import { onMount } from 'svelte';

	let wrapperh4;
</script>

<section>
	<div class="wrapper__section-txt">
		<h2>Voice, dubbing, post-production …</h2>
		
		<h3>Together, let’s shape emotion and make it memorable !</h3>
		<div class="wrapper__h4" bind:this={wrapperh4}>
			<div class="wrapper__title-icon">
				<i class="fa-solid fa-thumbs-up icon"></i>
				<h4>25+ Years Of Experience</h4>
			</div>
			<div class="wrapper__title-icon">
				<i class="fa-solid fa-microphone-lines icon"></i>
				<h4>3 studios</h4>
			</div>

			<div class="wrapper__title-icon">
				<i class="fa-solid fa-flag icon"></i>
				<h4>50+ Languages</h4>
			</div>

			<div class="wrapper__title-icon">
				<i class="fa-solid fa-earth-americas icon"></i>
				<h4>International Network</h4>
			</div>
		</div>
		
		<div class="container">
			<div class="wrapper__p">
				<p>
					<strong>Recognized players</strong> in high-end audio production, both in <strong>France</strong> and <strong>internationally</strong> ,
					we specialize in voice-over, dubbing, sound design, original music, post-production, and mixing. <br />

					We combine <strong>technical precision</strong>, <strong>creative intuition</strong> and
					<strong>attention to detail </strong> 
					to deliver 
					<strong>premium, tailor-made</strong> productions. <br /><br />

					At <strong>Audio Pigment</strong>, each project is <strong>crafted as a unique piece</strong>, where our <strong>expertise</strong>, our
					<strong>experience</strong>
					, and our <strong>creativity</strong> are put at the service of <strong>impact</strong>, of
					<strong>picture</strong>
					, <strong>storytelling</strong> and <strong>identity</strong>.

					<br /><br /> <strong>Since 1999</strong>, we’ve been trusted by
					<strong>leading brands</strong>
					and <strong>institutions</strong> including: L’Oréal, Chanel, Air France, Disneyland Paris,
					Ferrero, bioMérieux, Caisse d’Epargne, Puy du Fou, Point S, Orange, EDF, Région
					Auvergne-Rhône-Alpes and many more…

					<br /><br />And we’re proud to keep earning their <strong>trust</strong> today.
				</p>
			</div>
		</div>

		<div class="wrapper-button">
			<Button txt="Get in touch" href="/en/contact" />
		</div>
	</div> 

	<div class="wrapper__slider-logos">
		<h4>Our customers are satisfied</h4>
		<SliderLogos />
	</div>
</section>

<style>
	section {
		position: relative;
		text-align: center;
		padding: var(--space-xl) 0;
		background-image: url('../assets/bg-valueProp.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 100vh;
		overflow: hidden;
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.wrapper__section-txt {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 var(--space-md);
	}

	.wrapper__section-txt h2 {
		font-family: var(--raleway);
		font-size: var(--fs-h3);
		color: white;
		font-weight: var(--medium);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin: 0;
	}

	.wrapper__section-txt h3 {
		font-family: var(--bebas);
		font-size: var(--fs-h2);
		color: white;
		font-weight: var(--medium);
		letter-spacing: 0.02em;
		margin: 0;
		text-wrap: balance;
		text-transform: uppercase;
	}

	.wrapper__h4 {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
		width: 100%;
	}

	.wrapper__title-icon {
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 10px 28px;
		border-radius: 50px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		transition: var(--transition);
		cursor: default;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
	}

	.wrapper__title-icon:hover {
		background: rgba(0, 0, 0, 0.8);
		transform: translateY(-2px);
		border-color: var(--accent);
	}

	.icon {
		font-size: 1.1rem;
		color: var(--accent);
	}

	h4 {
		font-family: var(--raleway);
		font-size: 0.95rem;
		font-weight: var(--bold);
		color: var(--white);
		margin: 0;
		white-space: nowrap;
		letter-spacing: 0.02em;
	}

	.wrapper__p {
		text-align: left;
		background: rgba(0, 0, 0, 0.3);
		padding: var(--space-md);
		border-radius: var(--radius-md);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	p {
		font-family: var(--raleway);
		font-size: var(--fs-body);
		line-height: 1.6;
		color: var(--white-off);
		margin: 0;
	}

	strong {
		color: var(--white);
		font-weight: var(--extra-bold);
	}

	.wrapper-button {
		margin: var(--space-md) 0;
	}

	.wrapper__slider-logos {
		position: relative;
		z-index: 2;
		width: 100%;
		margin-top: var(--space-lg);
		padding: 0;
		overflow: hidden;
	}

	.wrapper__slider-logos h4 {
		font-family: var(--bebas);
		font-size: var(--fs-h3);
		font-weight: var(--medium);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: var(--sm);
		text-align: center;
		color: var(--white);
		white-space: normal;
		padding: 0 var(--sm);
	}

	@media (max-width: 768px) {
		section {
			padding: var(--space-lg) var(--space-sm);
			background-attachment: scroll;
		}

		.wrapper__title-icon {
			width: auto;
			padding: 10px 20px;
			backdrop-filter: none;
			-webkit-backdrop-filter: none;
			background: rgba(0, 0, 0, 0.8);
		}

		.wrapper__section-txt {
			gap: var(--space-md);
			padding: 0 var(--space-xs);
		}

		.wrapper__p {
			text-align: center;
			padding: var(--space-sm);
			backdrop-filter: none;
			-webkit-backdrop-filter: none;
			background: rgba(0, 0, 0, 0.5);
		}
	}

	@media (max-width: 500px) {
		section {
			padding-left: 5px;
			padding-right: 5px;
		}
		.wrapper__section-txt {
			padding: 0;
		}
	}
</style>
