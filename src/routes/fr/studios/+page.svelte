<script>
	import Btn from '$lib/component/btn-white.svelte';
	import SConnect from '../../../assets/studios/SCS.png';

	const slides = [
		{ src: '/studios/Studio1.webp', alt: 'studio 1' },
		{ src: '/studios/Studio2.webp', alt: 'studio 2' },
		{ src: '/studios/Studio3.webp', alt: 'studio 3' },
		{ src: '/studios/Studio4.webp', alt: 'studio 4' },
		{ src: '/studios/Studio5.webp', alt: 'studio 5' },
		{ src: '/studios/Studio6.webp', alt: 'studio 6' },
		{ src: '/studios/Studio7.webp', alt: 'studio 7' },
		{ src: '/studios/Studio8.webp', alt: 'studio 8' },
		{ src: '/studios/Studio9.webp', alt: 'studio 9' },
		{ src: '/studios/Studio10.webp', alt: 'studio 10' },
		{ src: '/studios/Studio11.webp', alt: 'studio 11' },
		{ src: '/studios/Studio12.webp', alt: 'studio 12' },
		{ src: '/studios/Studio13.webp', alt: 'studio 13' },
		{ src: '/studios/Studio14.webp', alt: 'studio 14' },
		{ src: '/studios/Studio15.webp', alt: 'studio 15' }
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
		<h1>Nos Studios</h1>
		<p>
			Spécialisés dans la conception et la production sonore pour les secteurs de la communication,
			de l’audiovisuel et des médias.
			<br /><br />

			Nous conjuguons exigence technique, sens du détail et approche artistique pour offrir des
			productions haut de gamme, pensées sur mesure.
			<br /><br />
		</p>
		<div class="wrapper__info-studio">
			<strong>3 studios son équipés de : </strong>

			<ul>
				<li>Pro Tools Ultimate + HDX</li>
				<li>Source Connect PRO</li>
				<li>FOCAL + GENELEC monitoring</li>
				<li>MERGING + AVID i/o</li>
				<li>AVALON preamps</li>
				<li>LIP-SYNC dubbing</li>
				<li>5.1 mixing</li>
			</ul>
			<img class="label" src={SConnect} alt="Certified source-connect studio" />
		</div>

		<!-- <h2>Visite de nos locaux</h2> -->

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

			<button class="nav prev" on:click={prev} aria-label="Slide précédent">‹</button>
			<button class="nav next" on:click={next} aria-label="Slide suivant">›</button>

			<!-- points (optionnel) -->
			<div class="dots" role="tablist" aria-label="Navigation des slides">
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
</section>

<section class="nous-ecouter">
	<h2>NOUS ÉCOUTER</h2>
	<p>
		Audio Pigment est une agence de communication, spécialisée dans la conception, et la production
		sonore haut de gamme pour les secteurs de la communication, de la culture et des médias.
	</p>
	<div class="wrapper__btn">
		<Btn txt="Nous écouter" href="/fr/realisations" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 1.5rem;
		background-image: url('../../../assets/studios/bg-studio.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100%;
		z-index: 0;
		gap: 10px;
		position: relative;
	}
	section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(35, 35, 35, 0.719);
		z-index: 1;
	}
.wrapper__studios h1 {
		font-family: var(--bebas);
		font-size: 3.5rem;
		color: white;
		font-weight: var(--bold);
		letter-spacing: -2px;
		margin-top: 0px;
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
		background-color: rgba(248, 248, 248, 0.212);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		padding: 30px;
		border-radius: 15px;
		z-index: 4;
		width: 800px
	}
	.wrapper__info-studio {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);
		font-size: 1rem;
		color: var(--ardoise);
		text-align: left;
		max-width: 800px;
		background-color: #ec4034df;
		padding: 50px;
		border-radius: 20px;
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

	.wrapper__studios p {
		font-family: var(--raleway);
		font-size: 1rem;
		color: white;
		margin-bottom: 0px;
		padding: 1rem;
		border-radius: 5px;
		max-width: 400px;
		line-height: 30px;
		font-weight: 500;
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
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		-webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	}
	.nous-ecouter h2 {
		font-family: var(--bebas);
		font-size: 3rem;
		color: white;
		margin-bottom: 1rem;
		z-index: 3;
	}
	.nous-ecouter p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		color: white;
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
		max-width: 960px; /* ajuste selon ton layout */
		margin: 0 auto;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		margin-top: 100px;
	}

	.viewport {
		overflow: hidden;
		width: 100%;
		border-radius: 12px;
		box-shadow: 0px 0px 20px rgb(25, 25, 25);
	}

	.track {
		display: flex;
		transition: transform 380ms ease-in-out;
		will-change: transform;
	}

	.slide {
		min-width: 100%;
		height: 0;
		padding-top: 56.25%; /* ratio 16:9 ; change si besoin */
		position: relative;
		background: #f3f3f3;
		height: 500px;
	}

	.img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover; /* ou "contain" si tu veux voir 100% de l’image */
		display: block;
		box-shadow: 0px 0px 20px rgb(16, 16, 16);
		

	}

	/* boutons */
	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		inline-size: 42px;
		block-size: 42px;
		border-radius: 50%;
		border: 0;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		font-size: 24px;
		line-height: 42px;
		text-align: center;
		cursor: pointer;
	}
	.nav:hover {
		background: rgba(0, 0, 0, 0.65);
	}
	.nav.prev {
		left: 8px;
	}
	.nav.next {
		right: 8px;
	}

	/* points */
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
	.dot.active {
		background: #333;
	}

	/* accessibilité: outline visible au focus clavier */
	.slider :focus-visible {
		outline: 2px solid #0070f3;
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		.wrapper__studios {
			flex-direction: column;
			gap: 20px;
			padding: 0px;
		}
	}
</style>
