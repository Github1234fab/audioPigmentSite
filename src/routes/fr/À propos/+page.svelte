<script>
	import Lolo from "../../../assets/Portrait-lolo.jpg";
	import Rom from "../../../assets/Portrait-rom.jpg";
</script>

<section>
	<h1>Audio Pigment <br> – <br> Studio de création sonore depuis 1999</h1>

	<h2>Créer des émotions… Marquer les esprits…</h2>

	<p>
		Fondée en 1999, Audio Pigment est une agence de communication, spécialisée dans la conception,
		et la production sonore haut de gamme pour les secteurs de la communication, de la culture et
		des médias.
        <br> Nous conjuguons <strong>exigence technique, sens du détail et approche artistique</strong> pour
		offrir des productions haut de gamme, <strong>pensées sur mesure</strong>. 
		<br> Spécialistes de la voix off, du sound
		design, de la création musicale, de la post production, et du mixage, nous accompagnons nos
		clients dans la réalisation de films corporate, films d’animation, spots radio et pubs TV,
		création d’identités sonores, motion design, podcasts, e-learnings, installations
		muséographiques et projets immersifs, etc... 
        
        <br><br>Issus du milieu de la musique et du marketing, nous allions <strong>sens créatif et réflexion stratégique</strong> , au service des
		<strong>objectifs de communication, d’impact et de lisibilité.</strong><br>
        <br><strong>Chez Audio Pigment</strong>, l’authenticité et l’émotion restent au cœur de chaque création – dans une époque où la
		technologie évolue, <strong>notre valeur ajoutée reste profondément humaine</strong>. 
		<br>De la voix, à la composition musicale et au design audio stratégique, chaque projet est pensé comme une <strong>œuvre
			singulière</strong> , où la créativité est au service de <strong>l’impact, de l’image, du récit et de l’identité </strong> .

		</p>

			<div class="wrapper__fondators">
				<img src={Lolo} alt="Laurent Guillot - fondateur de Audio Pigemnt">
				<img src={Rom} alt="Romain Noiret - fondateur de Audio Pigemnt">
			</div>



		<p><br><br>ILS NOUS FONT CONFIANCE :
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
	.wrapper__fondators {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 50px;
		margin-top: 30px;
	}
	.wrapper__fondators img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;

	}
	.wrapper__fondators img:hover {
		transform: scale(1.05);
		transition: transform 0.3s ease;
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
