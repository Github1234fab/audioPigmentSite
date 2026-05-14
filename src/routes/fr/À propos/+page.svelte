<script>
	import Lolo from '../../../assets/Portrait-lolo.jpg';
	import Rom from '../../../assets/Portrait-rom.jpg';
</script>

<section>
	<!-- Image de fond optimisée en HTML pour priorité haute -->
	<img 
		src="/bg-apropos.webp" 
		alt="" 
		class="bg-img" 
		fetchpriority="high" 
		decoding="async"
	/>

	<div class="content-wrapper">
		<h1>Audio Pigment <br /> – <br /></h1>
		<h2>Studio de création sonore depuis 1999</h2>

		<p>
			Fondée en 1999, Audio Pigment est une agence de communication, spécialisée dans la <span
				>conception et la production sonore</span
			>
			pour les secteurs de la communication, de l’audiovisuel et des médias. <br /><br />

			Nous conjuguons <span>exigence technique, sens du détail</span> et
			<span>approche artistique</span>
			pour offrir des productions haut de gamme, <span> pensées sur mesure.</span> <br /><br />

			Spécialistes de la voix off, du doublage, du sound design, de la création musicale, de la post
			production et du mixage, nous accompagnons nos clients dans la réalisation de spots radio et
			pubs TV, films corporate, films d’animation, création d’identités sonores, motion design,
			podcasts, e-learnings, installations muséographiques et projets immersifs, etc...
		</p>

		<h2>Créer des émotions… Marquer les esprits… </h2>

		<p>
			Créer des émotions… Marquer les esprits… Chez Audio Pigment, l’<span>authenticité</span> et l’<span>émotion </span> restent au cœur de chaque projet. <br /><br />
			Issus du milieu de la musique et du marketing, nous allions
			<span>sens créatif et réflexion stratégique</span>, au service des
			<span>objectifs de communication, d’impact et de lisibilité.</span> <br /><br />

			Dans une époque où la technologie évolue, nos outils se diversifient, mais notre valeur ajoutée
			reste profondément humaine... <br /><br />
		</p>

		<div class="wrapper__fondators">
			<h4>Les fondateurs</h4>
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
		filter: brightness(0.4); /* Remplace l'overlay pour plus de performance */
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
		font-weight: 300;
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
		}
		.wrapper__fondators-img {
			flex-direction: column;
			align-items: center;
		}
		.wrapper__fondators-img-container {
			backdrop-filter: none; /* Désactivation du flou sur mobile */
			background: rgba(0, 0, 0, 0.5);
		}
	}
</style>
