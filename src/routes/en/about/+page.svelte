<script>
	import Lolo from '../../../assets/Portrait-lolo.jpg';
	import Rom from '../../../assets/Portrait-rom.jpg';
</script>

<section>
	<!-- Optimized background image in HTML for high priority -->
	<img 
		src="/bg-apropos.webp" 
		alt="" 
		class="bg-img" 
		fetchpriority="high" 
		decoding="async"
	/>

	<div class="content-wrapper">
		<h1>Audio Pigment <br /> – <br /></h1>
		<h2>Creative Sound Studio since 1999</h2>

		<p>
			Founded in 1999, Audio Pigment is a communication agency specialized in <span>sound design and production</span>
			for the communication, audiovisual, and media sectors. <br /><br />

			We combine <span>technical precision, attention to detail</span> and
			<span>artistic approach</span>
			to offer high-end productions, <span>tailor-made.</span> <br /><br />

			Specialists in voice-over, dubbing, sound design, musical creation, post-production, and mixing, we support our clients in producing radio spots and TV commercials, corporate films, animated films, sound identity creation, motion design, podcasts, e-learnings, museum installations, and immersive projects, etc...
		</p>

		<h2>Shaping Emotions… Creating Meaningful Impact…</h2>

		<p>
			Shaping Emotions… Creating Meaningful Impact… At Audio Pigment, <span>authenticity</span> and <span>emotion</span> remain at the heart of every project. <br /><br />
			Coming from the music and marketing worlds, we combine
			<span>creative sense and strategic thinking</span>, at the service of
			<span>communication objectives, impact, and clarity.</span> <br /><br />

			In an era where technology evolves and our tools diversify, our added value
			remains deeply human... <br /><br />
		</p>

		<div class="wrapper__fondators">
			<h4>The founders</h4>
			<div class="wrapper__fondators-img">
				<div class="wrapper__fondators-img-container">
					<img 
						src={Lolo} 
						alt="Laurent Guillot" 
						loading="lazy" 
						decoding="async"
						width="280"
						height="350"
					/>
					<p>Laurent Guillot</p>
				</div>
				<div class="wrapper__fondators-img-container">
					<img 
						src={Rom} 
						alt="Romain Noiret" 
						loading="lazy" 
						decoding="async"
						width="280"
						height="350"
					/>
					<p>Romain Noiret</p>
				</div>
			</div>
		</div>
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
		color: white;
		min-height: 100vh;
		overflow: hidden;
		width: 100%;
	}

	.bg-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		filter: brightness(0.4);
	}

	.content-wrapper {
		position: relative;
		z-index: 2;
		padding: var(--space-xl) var(--space-md);
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
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
		margin-bottom: var(--space-md);
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
		font-weight: 700; /* Bold to create a balanced reading pace */
		color: var(--white-off);
		font-size: 1.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-md);
	}

	section p {
		font-family: var(--font-main);
		font-size: 1.1rem;
		line-height: 1.8;
		margin-bottom: var(--space-xl);
		font-weight: 400;
		color: var(--white-off);
	}

	section p span {
		font-weight: 700;
		color: var(--white);
	}

	.wrapper__fondators {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: var(--space-lg);
	}

	.wrapper__fondators h4 {
		font-family: var(--font-heading);
		color: var(--white);
		font-size: 1.5rem;
		text-transform: uppercase;
	}

	.wrapper__fondators-img {
		display: flex;
		justify-content: center;
		gap: var(--space-lg);
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
		border-color: var(--accent);
	}

	.wrapper__fondators-img img {
		width: 280px;
		height: 350px;
		border-radius: 0;
		object-fit: cover;
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
		.wrapper__fondators-img {
			flex-direction: column;
			align-items: center;
		}
		.wrapper__fondators-img-container {
			backdrop-filter: none;
			background: rgba(0, 0, 0, 0.5);
		}
	}
</style>
