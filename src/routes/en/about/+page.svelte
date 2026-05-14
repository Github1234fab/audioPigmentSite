<script>
	import Lolo from '../../../assets/Portrait-lolo.jpg';
	import Rom from '../../../assets/Portrait-rom.jpg';
</script>

<section>
	<h1>Audio Pigment</h1>
	<h2>Creative Sound Studio since 1999</h2>

	<p>
		Founded in 1999, Audio Pigment is a <strong>voice recording studio</strong> and
		<strong>sound communication agency</strong>, recognized for its work creating and producing
		sound for communication, audiovisual, and media projects. We combine
		<strong>technical precision, creative sensibility</strong>, and <strong>attention to detail</strong> to deliver <strong>premium, tailor-made</strong> productions. 
        <br/><br/>
        Specializing in <strong>voice-over, dubbing, lip sync, sound design, original music, post-production, and mixing</strong>, we support our clients in producing radio spots, TV commercials, corporate and animated films, sonic branding, motion design, podcasts, e-learning content, museum installations, immersive projects, and more.
	</p>

	<h2>Shaping Emotions… Creating Meaningful Impact…</h2>

	<p>
		At <strong>Audio Pigment</strong>, authenticity and emotion remain at the heart of every project. With
		backgrounds in music and marketing, we bring together <strong>creative vision and strategic thinking</strong>,
		serving <strong>communication goals, impact, and clarity</strong>. In an ever-evolving technological landscape,
		our tools keep advancing — yet our true value <strong>remains deeply human</strong>. 
        <br/><br/>
		From <strong>voice production and mixing</strong> to <strong>strategic audio design and musical composition</strong>, every project is crafted as <strong>a unique piece</strong>, where creativity serves impact, image, storytelling, and identity.
	</p>

	<div class="wrapper__fondators">
		<h4>THE FOUNDERS:</h4>
		<div class="wrapper__fondators-img">
			<div class="wrapper__fondators-img-container">
				<img src={Lolo} alt="Laurent Guillot - Founder of Audio Pigment" />
				<p>Laurent Guillot</p>
			</div>
			<div class="wrapper__fondators-img-container">
				<img src={Rom} alt="Romain Noiret - Founder of Audio Pigment" />
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
		color: var(--white);
		min-height: 100vh;
		gap: 20px;
		z-index: 0;
		position: relative;
		padding: var(--space-xl) var(--space-md);
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(23, 23, 23, 0.7);
		backdrop-filter: blur(5px);
		z-index: 1;
	}

	section h1 {
		font-family: var(--font-heading);
		font-size: 2.8rem;
		color: var(--white);
		font-weight: 800;
		letter-spacing: -0.04em;
		position: relative;
		width: fit-content;
		padding-bottom: 1.5rem;
		z-index: 2;
	}

	section h1::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 4px;
		background: var(--accent);
		border-radius: 4px;
	}

	section h2 {
		font-family: var(--font-heading);
		font-weight: 300;
		color: var(--white-off);
		font-size: 1.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		z-index: 2;
		margin-top: 0;
	}

	section p {
		font-family: var(--font-main);
		font-size: 1.1rem;
		line-height: 1.8;
		margin-top: var(--space-md);
		margin-bottom: var(--space-xl);
		max-width: 850px;
		font-weight: 400;
		z-index: 2;
		color: var(--white-off);
	}

	section p strong {
		font-weight: 700;
		color: var(--white);
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
		font-family: var(--font-heading);
		color: var(--white);
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--space-md);
	}

	.wrapper__fondators-img {
		display: flex;
		justify-content: center;
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.wrapper__fondators-img-container {
		background: rgba(255, 255, 255, 0.05);
		padding: var(--space-sm);
		border-radius: 0;
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		transition: var(--transition);
	}

	.wrapper__fondators-img-container:hover {
		transform: translateY(-10px);
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--accent);
	}

	.wrapper__fondators-img img {
		width: 280px;
		height: 350px;
		border-radius: 0;
		object-fit: cover;
		margin-bottom: var(--space-sm);
	}

	.wrapper__fondators-img-container p {
		margin: 0;
		padding: 0.5rem;
		font-family: var(--font-heading);
		font-size: 1.2rem;
		color: var(--white);
	}

	@media (max-width: 768px) {
		section h1 { 
			font-size: 2.4rem; 
			letter-spacing: -1px;
			line-height: 1.2;
			padding-bottom: 1.5rem;
			margin-top: 40px;
			margin-bottom: 2.5rem;
		}
		section h2 { font-size: 1.3rem; }
		.wrapper__fondators-img {
			flex-direction: column;
			gap: 20px;
			align-items: center;
			width: 100%;
		}
		.wrapper__fondators-img-container {
			width: 90%;
			max-width: 300px;
		}
		.wrapper__fondators-img img {
			width: 100%;
			height: auto;
			aspect-ratio: 4/5;
		}
	}
</style>
