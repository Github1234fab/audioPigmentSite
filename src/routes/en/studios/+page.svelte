<!-- <h1>EN/studio</h1>

<script>
    import Btn from '$lib/component/btn-white.svelte';
</script>

<section>
	<h1>OUR STUDIOS</h1>
	<h2>Visite de nos studios</h2>
	<div class="wrapper__studios">
		<div class="wrapper__studios-room">
			<h3>Studio I</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi eveniet quasi, repellat voluptatum cumque earum.</p>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
		</div>

		<div class="wrapper__studios-room">
			<h3>Studio II</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi eveniet quasi, repellat voluptatum cumque earum.</p>

			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
		</div>
		<div class="wrapper__studios-room">
			<h3>Studio III</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi eveniet quasi, repellat voluptatum cumque earum.</p>

			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
		</div>
	</div>
</section>

<section class="nous-ecouter">
    <h2>NOUS ÉCOUTER</h2>
    <p>
        Audio Pigment est une agence de communication, spécialisée dans la conception, et la production sonore haut de gamme pour les secteurs de la communication, de la culture et des médias.
    </p>
    <p>
        Fondée en 1999, Audio Pigment est une agence de communication, spécialisée dans la conception, et la production sonore haut de gamme pour les secteurs de la communication, de la culture et des médias.
    </p>
<Btn txt="Nous écouter" href="/fr/realisations"/>
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
            gap: 10px;
	}
	section h1 {
		font-family: var(--bebas);
		font-size: 5rem;
		color: var(--ardoise);
		font-weight: 400;
		letter-spacing: -1.5px;
	}
	section h2 {
		font-family: var(--raleway);
		font-size: 1.5rem;
		margin-bottom: 2rem;
		color: var(--ardoise);
		letter-spacing: -1px;

	}
	.wrapper__studios {
		display: flex;
        align-items: center;
		justify-content: center;
		gap: 20px;
  
	}
	.wrapper__studios-room {
        background-color: rgb(255, 254, 253);
		border-radius: 10px;
		box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.339);
        padding: 20px;
	}
	.wrapper__studios-room h3 {
		font-family: var(--bebas);
		font-size: 1.5rem;
		margin-bottom: 10px;
		font-weight: 400;
		letter-spacing: 0px;
	}
	.wrapper__studios-room .img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		margin-bottom: 10px;
	}
    .wrapper__studios-room p {
        font-family: var(--raleway);
        font-size: 1rem;
        color: var(--ardoise);
        margin-bottom: 10px;
        padding: 1rem;
    }
    .nous-ecouter{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        background-color: var(--ardoise);
        color: white;
        min-height: 50vh;
        gap: 20px;
    }
    .nous-ecouter h2 {
        font-family: var(--bebas);
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
		font-weight: 400;
		letter-spacing: -1.5px;
    }
    .nous-ecouter p {
        font-family: var(--raleway);
        font-size: 1.2rem;
        color: white;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
    }

	@media (max-width: 768px) {
		.wrapper__studios {
			flex-direction: column;
			gap: 20px;
		}
		.wrapper__studios-room {
			width: 100%;
		}
	}
</style> -->


<script>
	import Btn from '$lib/component/btn-white.svelte';
const StudioA = '/2017-11-07_17-13-40-Architecture-Audio-Pigment-www.studiolecarre.com.jpg';
	const StudioB = '/2017-11-07_18-03-38-Architecture-Audio-Pigment-www.studiolecarre.com.jpg';
	const StudioC = '/2017-11-07_18-17-49-Architecture-Audio-Pigment-www.studiolecarre.com.jpg';
	const StudioD = '/2017-11-07_18-29-09-Architecture-Audio-Pigment-www.studiolecarre.com.jpg';
	const StudioE = '/2017-11-07_18-42-11-Architecture-Audio-Pigment-www.studiolecarre.com.jpg';
	const StudioF = '/2017-11-07_19-08-06-Architecture-Audio-Pigment-www.studiolecarre.com.jpg';
	import SC from '../../../assets/studios/SCS.png';

	const slides = [
		{ src: StudioA, alt: 'studio A' },
		{ src: StudioB, alt: 'studio B' },
		{ src: StudioC, alt: 'studio C' },
		{ src: StudioD, alt: 'studio D' },
		{ src: StudioE, alt: 'studio E' },
		{ src: StudioF, alt: 'studio F' }
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
	<h1>Our studios</h1>



	<div class="wrapper__studios">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores
			maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi
			eveniet quasi, repellat voluptatum cumque earum.
		</p>
		<!-- <h2>Visite de nos locaux</h2> -->
		<img class="label" src={SC} alt="Certified source-connect studio" />
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
	<h2>LISTEN TO US</h2>
	<p>
		Audio Pigment is a communication agency specializing in high-end sound design, conception, and production for the communication, culture, and media sectors..
	</p>
<div class="wrapper__btn">
	<Btn txt="Listen to us" href="/fr/realisations" />
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
		background-image: linear-gradient(22.5deg, rgba(67, 67, 67, 0.02) 0%, rgba(67, 67, 67, 0.02) 29%,rgb(255,255,255) 29%, rgb(255,255,255) 37%,rgba(23, 23, 23, 0.02) 37%, rgba(23, 23, 23, 0.02) 55%,rgba(182, 182, 182, 0.02) 55%, rgba(182, 182, 182, 0.02) 69%,rgba(27, 27, 27, 0.02) 69%, rgba(27, 27, 27, 0.02) 71%,rgba(250, 250, 250, 0.02) 71%, rgba(250, 250, 250, 0.02) 100%),linear-gradient(67.5deg, rgba(117, 117, 117, 0.02) 0%, rgba(117, 117, 117, 0.02) 14%,rgba(199, 199, 199, 0.02) 14%, rgba(199, 199, 199, 0.02) 40%,rgba(33, 33, 33, 0.02) 40%, rgba(33, 33, 33, 0.02) 48%,rgba(135, 135, 135, 0.02) 48%, rgba(135, 135, 135, 0.02) 60%,rgba(148, 148, 148, 0.02) 60%, rgba(148, 148, 148, 0.02) 95%,rgba(53, 53, 53, 0.02) 95%, rgba(53, 53, 53, 0.02) 100%),linear-gradient(135deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 6%,rgba(251, 251, 251, 0.02) 6%, rgba(251, 251, 251, 0.02) 18%,rgba(2, 2, 2, 0.02) 18%, rgba(2, 2, 2, 0.02) 27%,rgba(253, 253, 253, 0.02) 27%, rgba(253, 253, 253, 0.02) 49%,rgba(128, 128, 128, 0.02) 49%, rgba(128, 128, 128, 0.02) 76%,rgba(150, 150, 150, 0.02) 76%, rgba(150, 150, 150, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff);
		height: 100%;
		z-index: 0;
		gap: 10px;
	}
	section h1 {
		font-family: var(--bebas);
		font-size: 3.5rem;
		color: var(--ardoise);
		font-weight: var(--bold);
		letter-spacing: -2.5px;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 1.5rem;
		color: var(--ardoise);
		font-weight: var(--bold);
		letter-spacing: -0.6px;
	}
	.label {
		width: auto;
		height: 60px;
		object-fit: cover;
	}
	.wrapper__studios {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 40px;
	}

	.wrapper__studios p {
		font-family: var(--raleway);
		font-size: 1rem;
		color: var(--ardoise);
		margin-bottom: 10px;
		padding: 1rem;
		/* background-color: rgb(240, 239, 239); */
		border-radius: 5px;
		max-width: 960px;
	
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
		margin-top: 20px;
	}

	.viewport {
		overflow: hidden;
		width: 100%;
		border-radius: 12px;
		box-shadow: 0px 0px 20px rgb(150, 150, 150);
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
		box-shadow: 0px 0px 20px rgb(150, 150, 150);
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
		}
	}
</style>

