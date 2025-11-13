<script>
	import Lolo from '../../../assets/Portrait-lolo.jpg';
	import Rom from '../../../assets/Portrait-rom.jpg';
	import Logo from '../../../assets/audio-pigment-logo.jpg';

	import { onMount } from 'svelte';
</script>

<section>
	<h1>Audio Pigment <br /> – <br /></h1>
	<h2>Creative Sound Studio since 1999</h2>

	<p>
		Founded in 1999, Audio Pigment is a <strong>voice recording studio</strong> and
		<strong>sound communication agency</strong>, recognized for its work creating and producing
		sound for communication, audiovisual, and media projects. We combine
		<strong>technical precision, creative sensibility</strong>
		, and <strong>attention to detail</strong> to deliver <strong>premium, tailor-made </strong> productions. Specializing
		in  <strong>voice-over, dubbing, lip sync, sound design, original music, post-production, and mixing</strong>, we support
		our clients in producing radio spots, TV commercials, corporate and animated films, sonic branding,
		motion design, podcasts, e- learning content, museum installations, immersive projects, and more.
	</p>

	<h2>Shaping Emotions… Creating Meaningful Impact…</h2>

	<p>
		At <strong> Audio Pigment</strong>, authenticity and emotion remain at the heart of every project. With
		backgrounds in music and marketing, we bring together <strong>creative vision and strategic thinking</strong>  ,
		serving  <strong>communication goals, impact, and clarity</strong> . In an ever-evolving technological landscape,
		our tools keep advancing — yet our true value <strong>remains deeply human</strong> . 
		From <strong>voice production and
			mixing </strong>to <strong>strategic audio design and musical composition</strong> , every project is crafted as <strong>a unique
				piece</strong> , where creativity serves impact, image, storytelling, and identity.
	</p>

	<div class="wrapper__fondators">
		<h4>THE FOUNDERS:</h4>
		<div class="wrapper__fondators-img">
			<div class="wrapper__fondators-img-container">
				<img src={Lolo} alt="Laurent Guillot - fondateur de Audio Pigemnt" />
				<p>Laurent Guillot</p>
			</div>
			<div class="wrapper__fondators-img-container">
				<img src={Rom} alt="Romain Noiret - fondateur de Audio Pigemnt" />
				<p>Romain Noiret</p>
			</div>
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
		background-image: url('/bg-apropos.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		color: white;
		height: 100%;
		gap: 20px;
		z-index: 0;
		position: relative;
	}
	section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(23, 23, 23, 0.644); /* Couleur de superposition avec opacité */
		z-index: 1; /* Assure que le pseudo-élément est derrière le contenu */
	}

	section h1 {
		font-family: var(--bebas);
		color: white;
		font-size: 5rem;
		margin-top: 50px;
		font-weight: 600;
		letter-spacing: -2px;
		z-index: 2;
	}
	section h2 {
		font-family: var(--bebas);
		font-weight: var(--bold);
		color: white;
		font-size: 2.5rem;
		margin-top: 0px;
		letter-spacing: -1px;
		z-index: 2;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-top: 20px;
		margin-bottom: 100px;
		max-width: 800px;
		font-weight: var(--medium);
		z-index: 2;
	}
	section p span {
		font-weight: var(--extra-bold);
	}
	.wrapper__fondators {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		z-index: 2;
	}
	.wrapper__fondators h4 {
		font-family: var(--bebas);
		color: white;
		font-size: 1.7rem;
		text-align: center;
		font-weight: 400;
	}
	.wrapper__fondators-img {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 15px;
		margin-top: 30px;
	}
	.wrapper__fondators-img img {
		width: 100%;
		height: 300px;
		border-radius: 10px;
		object-fit: cover;
	}
	.wrapper__fondators img:hover {
		transform: scale(1.05);
		transition: transform 0.3s ease-in-out;
	}

	@media (max-width: 768px) {
		section h1 {
			font-size: 3.2rem;
			font-weight: 500;
		}
		section h2 {
			font-size: 1.3rem;
			letter-spacing: -0.5px;
		}
		section p {
			font-size: 1rem;
			max-width: 90%;
		}
		.wrapper__fondators {
			flex-direction: column;
			gap: 20px;
		}
		.wrapper__fondators img {
			width: 150px;
			height: 150px;
		}
	}
</style>
