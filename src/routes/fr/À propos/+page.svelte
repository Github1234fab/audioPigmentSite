<script>
	import Lolo from '../../../assets/Portrait-lolo.jpg';
	import Rom from '../../../assets/Portrait-rom.jpg';
	import Logo from '../../../assets/audio-pigment-logo.jpg';
</script>

<section>
	<h1>Audio Pigment <br /> – <br /> Studio de création sonore depuis 1999</h1>

	<h2>Créer des émotions… Marquer les esprits…</h2>
	

	<p>
		Fondée en 1999, Audio Pigment est une agence de communication, spécialisée dans la conception et
		la production sonore pour les secteurs de la communication, de la culture et des médias.
		<br /> Nous conjuguons
		<strong>exigence technique, sens du détail</strong> et <strong>approche artistique</strong>
		pour offrir des productions haut de gamme, <strong>pensées sur mesure</strong>.
		<br /><br /> Spécialistes de la voix off, du doublage, du sound design, de la création musicale,
		de la post production et du mixage, nous accompagnons nos clients dans la réalisation de spots
		radio et pubs TV, films corporate, films d’animation, création d’identités sonores, motion
		design, podcasts, e-learnings, installations muséographiques et projets immersifs, etc...

		<br /><br />Issus du milieu de la musique et du marketing, nous allions
		<strong>sens créatif et réflexion stratégique</strong>
		, au service des
		<strong>objectifs de communication, d’impact et de lisibilité.</strong><br />
		<br /><strong>Chez Audio Pigment</strong>, l’authenticité et l’émotion restent au cœur de chaque
		création – dans une époque où la technologie évolue,
		<strong
			>nos outils se diversifient, mais <strong
				>notre valeur ajoutée reste profondément humaine.</strong
			>.
			<br /> <br />De la voix, à la composition musicale et au design audio stratégique, chaque
			projet est pensé comme une <strong>œuvre singulière</strong> , où la créativité est au service
			de
			<strong>l’impact</strong> , de <strong>l’image</strong>, du <strong>récit</strong> et de
			<strong>l’identité</strong> .
		</strong>
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
		background-image: url('https://images.pexels.com/photos/13003485/pexels-photo-13003485.jpeg');
		background-position: center;
		background-size: cover;
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
		font-weight: 400;
		letter-spacing: -2px;
		z-index: 2;
	}
	section h2 {
		font-family: var(--raleway);
		font-weight: var(--bold);
		color: white;
		font-size: 1.5rem;
		margin-top: 50px;
		letter-spacing: -1px;
		z-index: 2;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-top: 20px;
		margin-bottom: 100px;;
		max-width: 800px;
		font-weight: var(--medium);
		z-index: 2;
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
			font-size: 2.2rem;
		}
		section h2 {
			font-size: 1.3rem;
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
