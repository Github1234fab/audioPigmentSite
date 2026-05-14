<script>
	import Btn from '$lib/component/btn-white.svelte';
	import SConnect from '../../../assets/studios/SCS.png';

	const slides = [
		{ src: '/studios/Studio1.webp', alt: 'studio 1' },
		{ src: '/studios/Studio7.webp', alt: 'studio 7' },
		{ src: '/studios/Studio6.webp', alt: 'studio 6' },
		{ src: '/studios/Studio15.webp', alt: 'studio 15' },
		{ src: '/studios/Studio14.webp', alt: 'studio 14' },
		{ src: '/studios/Studio2.webp', alt: 'studio 2' },
		{ src: '/studios/Studio5.webp', alt: 'studio 5' },
		{ src: '/studios/Studio4.webp', alt: 'studio 4' },
		{ src: '/studios/Studio10.webp', alt: 'studio 10' },
		{ src: '/studios/Studio11.webp', alt: 'studio 11' },
		{ src: '/studios/Studio9.webp', alt: 'studio 9' },
		{ src: '/studios/Studio12.webp', alt: 'studio 12' },
		{ src: '/studios/Studio13.webp', alt: 'studio 13' },
		{ src: '/studios/Studio8.webp', alt: 'studio 8' }
	];

	let index = 0;

	const go = (n) => (index = (n + slides.length) % slides.length);
	const next = () => go(index + 1);
	const prev = () => go(index - 1);

	// clavier
	const onKey = (e) => {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	};

	// swipe basique
	let startX = 0;
	const onTouchStart = (e) => (startX = e.touches[0].clientX);
	const onTouchEnd = (e) => {
		const dx = e.changedTouches[0].clientX - startX;
		if (Math.abs(dx) > 30) dx < 0 ? next() : prev();
	};
</script>

<section>
	<div class="wrapper__studios">
		<h1>Our Studios</h1>
		<div class="container__info-desc">
			<div class="wrapper__info-studio">
				<strong>3 state-of-the-art studios, equipped with:</strong>

				<ul>
					<li>Pro Tools Ultimate + HDX</li>
					<li>Source Connect PRO</li>
					<li>FOCAL + GENELEC monitoring</li>
					<li>MERGING + AVID i/o</li>
					<li>AVALON preamps</li>
					<li>LIP-SYNC dubbing</li>
					<li>5.1 mixing</li>
				</ul>
				<img class="label" src={SConnect} alt="Certified source-connect studio" />
			</div>
			<div class="slider" role="region" aria-roledescription="carousel" aria-label="Studios">
				<div class="viewport" on:touchstart={onTouchStart} on:touchend={onTouchEnd}>
					<div class="track" style="transform: translateX(-{index * 100}%);" aria-live="polite">
						{#each slides as s, i (s.src)}
							<div class="slide" aria-hidden={i !== index}>
								<img class="img" src={s.src} alt={s.alt} />
							</div>
						{/each}
					</div>
				</div>

				<button class="nav prev" on:click={prev} aria-label="Previous slide">‹</button>
				<button class="nav next" on:click={next} aria-label="Next slide">›</button>

				<div class="dots" role="tablist" aria-label="Slide navigation">
					{#each slides as _, i}
						<button
							class="dot"
							class:active={i === index}
							on:click={() => go(i)}
							role="tab"
							aria-selected={i === index}
							aria-controls={'slide-' + i}
							tabindex={i === index ? 0 : -1}
							aria-label={`Go to slide ${i + 1}`}
						></button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="nous-ecouter">
	<h2>CRAFTED SOUND. MADE TO MOVE.</h2>
	<p>
		Based in France, Audio Pigment provides high-end voice-over, dubbing, sound design, and audio
		post-production services — where technical precision meets artistic creativity.
	</p>
	<div class="wrapper__btn">
		<Btn txt="Hear our work" href="/en/realisations" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 100%;
		z-index: 0;
		gap: 10px;
		position: relative;
		background-image: url(../../../assets/bg-Actu.webp);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.container__info-desc {
		display: grid;
		grid-template-columns: minmax(350px, 1fr) 2fr;
		gap: 30px;
		z-index: 4;
		padding: var(--space-lg) var(--space-md);
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		align-items: stretch;
	}

	.wrapper__studios h1 {
		font-family: var(--font-heading);
		font-size: 2.8rem;
		color: var(--ardoise);
		font-weight: 800;
		letter-spacing: -0.04em;
		margin-bottom: var(--space-xl);
		position: relative;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 1.5rem;
		margin-top: 50px;
	}

	.wrapper__studios h1::after {
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

	.label {
		width: auto;
		height: 60px;
		object-fit: cover;
		margin-top: 20px;
	}

	.wrapper__studios {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 20px;
		padding: 0px;
		border-radius: 15px;
		z-index: 4;
		width: 100%;
	}

	.wrapper__info-studio {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		font-family: var(--font-main);
		font-size: 1.1rem;
		color: var(--white);
		text-align: left;
		background: linear-gradient(135deg, var(--accent) 0%, #a32219 100%);
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.wrapper__info-studio ul {
		margin-top: 10px;
		color: white;
	}

	.wrapper__info-studio li {
		margin-top: 10px;
		font-weight: 600;
	}

	.wrapper__info-studio strong {
		font-size: 1.2rem;
		margin-bottom: 10px;
		color: white;
	}

	.nous-ecouter {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background-color: var(--ardoise);
		background-image: url('https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		color: white;
		min-height: 100vh;
		gap: 20px;
		z-index: -2;
		position: relative;
	}

	.nous-ecouter::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(18, 18, 19, 0.699);
		z-index: -1;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	.nous-ecouter h2 {
		font-family: var(--font-heading);
		font-size: 3rem;
		color: white;
		margin-bottom: 1rem;
		z-index: 3;
		text-transform: uppercase;
	}

	.nous-ecouter p {
		font-family: var(--font-main);
		font-size: var(--fs-body);
		color: var(--white-off);
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
		z-index: 3;
	}

	.wrapper__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5;
	}

	/*******SLIDER**************/
	.slider {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.viewport {
		overflow: hidden;
		width: 100%;
		flex: 1;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}

	.track {
		display: flex;
		height: 100%;
		transition: transform 380ms ease-in-out;
		will-change: transform;
	}

	.slide {
		min-width: 100%;
		height: 100%;
		position: relative;
		background: var(--ardoise);
		min-height: 400px;
	}

	.img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 42px;
		height: 42px;
		border-radius: 50%;
		border: 0;
		background: rgb(247, 245, 245);
		color: #be1a1a;
		font-size: 24px;
		line-height: 42px;
		text-align: center;
		cursor: pointer;
	}

	.nav:hover {
		background: rgba(0, 0, 0, 0.65);
		color: var(--red);
	}

	.nav.prev { left: 28px; }
	.nav.next { right: 28px; }

	.dots {
		display: flex;
		gap: 6px;
		justify-content: center;
		margin-top: 10px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: 0;
		background: #c9c9c9;
		cursor: pointer;
	}

	.dot.active { background: #333; }

	@media (max-width: 768px) {
		.container__info-desc {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20px 10px;
			width: 100%;
		}
		.wrapper__info-studio {
			width: 92%;
			max-width: 500px;
			margin: 0 auto;
			align-items: center;
			text-align: center;
		}
		.wrapper__info-studio ul {
			text-align: left;
		}
		.slider {
			width: 92%;
			max-width: 500px;
			margin: 20px auto 0;
		}
		.wrapper__studios h1 {
			font-family: var(--font-heading);
			font-size: 2.4rem;
			font-weight: 800;
			line-height: 1.2;
			letter-spacing: -1px;
			padding-bottom: 1.5rem;
			margin-top: 40px;
			margin-bottom: 2.5rem;
		}
	}
</style>
