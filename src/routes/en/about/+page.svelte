<!-- 

<section>
	<h1>Audio Pigment <br /> – <br /> Sound Creation Studio since 1999</h1>

	<h2>Shaping Emotions… Creating Meaningful Impact…</h2>

	<p>
		Founded in 1999, Audio Pigment is a <strong> voice recording studio and sound production agency</strong>,
		recognized for its work in the communication, cultural, and media sectors. <br>
        <br> We combine <strong>technical
		precision, creative intuition, and attention to detail to deliver premium, tailor-made</strong> 
		productions. 
        <br>Specializing in voiceover, dubbing, lip sync, sound design, music creation,
		post-production, and mixing, we support our clients in producing radio spots, TV commercials,
		corporate films, animated films, sound branding, motion design, podcasts, e-learning, museum
		installations, immersive projects, and much more. 
        <br>Coming from the music and marketing worlds,
		our approach is both <strong>creative and strategic, serving communication, impact, and visibility
		goals </strong> . 
        <br>At Audio Pigment, <strong>authenticity and emotion</strong> are at the heart of every project – in an era
		where technology is rapidly evolving, our tools are diversifying, but <strong>   our added value remains
		deeply human</strong> .
        <br> From voice production and mixing to strategic audio design and musical
		composition, each project is crafted as <strong> a unique piece, where creativity serves impact, image,
		storytelling, and identity </strong>.
		<br /><br />They trust us :
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: var(--ardoise);
		color: white;
		padding: 2rem;
		min-height: 100vh;
		gap: 20px;
	}
	section h1 {
		font-family: var(--bebas);
		color: white;
		font-size: 3rem;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -2px;
	}
	section h2 {
		font-family: var(--raleway);
		font-weight: var(--bold);
		color: white;
		font-size: 1.5rem;
		margin-top: 50px;
		letter-spacing: -1px;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-top: 20px;
		max-width: 800px;
		font-weight: var(--regular);
	}
</style> -->


<script>
	import Lolo from '../../../assets/Portrait-lolo.jpg';
	import Rom from '../../../assets/Portrait-rom.jpg';
	import Logo from '../../../assets/audio-pigment-logo.jpg';

	import { onMount } from 'svelte';




</script>

<section>

	<h1>Audio Pigment <br /> – <br /></h1>
	<h2>Studio de création sonore depuis 1999</h2>

	<p>
		Fondée en 1999, Audio Pigment est une agence de communication, spécialisée dans la <span
			>conception et la production sonore</span
		>
		pour les secteurs de la communication, de la culture et des médias. <br /><br />

		Nous conjuguons <span>exigence technique, sens du détail</span> et
		<span>approche artistique</span>
		pour offrir des productions haut de gamme,<span> pensées sur mesure.</span> <br /><br />

		Spécialistes de la voix off, du doublage, du sound design, de la création musicale, de la post
		production et du mixage, nous accompagnons nos clients dans la réalisation de spots radio et
		pubs TV, films corporate, films d’animation, création d’identités sonores, motion design,
		podcasts, e-learnings, installations muséographiques et projets immersifs, etc...
	</p>

	<h2>Créer des émotions… Marquer les esprits…</h2>

	<p>
		Créer des émotions… Marquer les esprits… Chez Audio Pigment, l’<span>authenticité</span> et l’
		<span>émotion </span> restent au cœur de chaque projet. <br /><br />
		Issus du milieu de la musique et du marketing, nous allions
		<span>sens créatif et réflexion stratégique</span>, au service des
		<span>objectifs de communication, d’impact et de lisibilité.</span> <br /><br />

		Dans une époque où la technologie évolue, nos outils se diversifient, mais notre valeur ajoutée
		reste profondément humaine... <br /><br />

		De la voix, à la composition musicale et au design audio, chaque projet est pensé comme une
		<span>œuvre singulière</span>, où la créativité est au service de l’<span
			>impact stratégique
		</span>, de l’<span>image</span>, du <span>récit</span> et de l’<span>identité</span> .
	</p>

	<div class="wrapper__fondators">
		<h4>Les fondateurs</h4>
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
		font-size: 3rem;
		margin-top: 50px;
		font-weight: 200;
		letter-spacing: -2px;
		z-index: 2;
	}
	section h2 {
		font-family: var(--bebas);
		font-weight: var(--bold);
		color: white;
		font-size: 2.5rem;
		margin-top: 50px;
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
