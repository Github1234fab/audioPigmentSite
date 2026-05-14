<script>
	import { onMount } from 'svelte';

	let videos = [];

	onMount(() => {
		videos.forEach((v) => {
			if (v) v.playbackRate = 0.6; // Ralenti pour confort de lecture
		});
	});
</script>

<main>
	<h1>Notre expertise</h1>

	<section id="post-production-audio">
		<div class="container">
			<div class="glass-panel">
				<h2>Post-production audio</h2>
				<p>
					La post-production audio est l’étape où chaque élément sonore <strong
						>s’ajuste avec précision</strong
					>
					dans une <strong>création audiovisuelle ou musicale</strong>, qu’elle soit narrative,
					publicitaire ou immersive. <br /><br />
					Chez Audio Pigment, nous considérons cette phase comme un
					<strong>travail d’équilibre</strong> entre <strong>technique</strong> et
					<strong>création</strong>, alliant <strong>exigence</strong> et
					<strong>sens artistique.</strong><br /><br />
					Habillage, sound design, editing et optimisation des sources, doublage / voiceover, mixage
					(stéréo, multicanal ou ambisonic VR), mastering et normalisation broadcast : notre
					<strong>exigence technique</strong> et notre
					<strong>collaboration étroite avec les équipes créatives </strong>
					garantissent un rendu à la fois précis, inspiré et fidèle à la vision de nos clients.<br
					/><br />
					Notre objectif : <strong>renforcer l’impact </strong> et
					<strong>la portée émotionnelle</strong> de chaque projet.
				</p>
			</div>
			<video
				bind:this={videos[0]}
				class="background-video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080,so_0/v1763023556/console_BELLE_et_COLOREES_2_mains_vcf02k.jpg"
			>
				<source
					src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080/v1763023556/console_BELLE_et_COLOREES_2_mains_vcf02k.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<div class="wrapper__advantages">
			<h2>Nos atouts</h2>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Un son maîtrisé, au service du sens et de l’émotion</h3>
					<p>
						Chaque décision de traitement, chaque plan sonore est pensé pour servir le récit ou
						l’image. Nous privilégions la lisibilité, la cohérence et la justesse du ressenti.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Une collaboration sur-mesure et exigeante</h3>
					<p>
						Nous entretenons un dialogue permanent avec nos clients et les équipes créatives, pour
						assurer une continuité naturelle entre les intentions artistiques et le rendu final.
						Cette proximité, forgée par l’expérience, garantit une post-production sur-mesure,
						efficace, sans compromis sur la qualité.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Une expertise tous formats</h3>
					<p>
						Cinéma, télévision, digital, radio, VR : nous maîtrisons les codes esthétiques et normes
						techniques de chaque support pour que chaque projet sonne juste, partout.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="creation-originale">
		<div class="container">
			<div class="glass-panel">
				<h2>Création originale</h2>
				<p>
					Chez Audio Pigment, nous imaginons et produisons des <strong
						>univers sonores sur mesure</strong
					>
					: signature sonore, habillage sonore, composition musicale, sound design ou événementiel…<br
					/><br />
					Notre rôle :
					<strong>transformer une idée ou une intention, en matière sonore et en émotion</strong
					>.<br /><br />
					Qu’il s’agisse de donner une identité sonore à une marque, d’accompagner un film, une publicité,
					un podcast, ou de concevoir une expérience immersive, nous nous approprions les
					<strong>enjeux</strong>, nous adaptons notre approche au <strong>contexte</strong> et aux
					<strong>contraintes de diffusion</strong>, et nous cherchons la
					<strong>justesse émotionnelle</strong>, celle qui permet au son de porter la narration,
					l’image ou le message <strong>auprès du public</strong>.
					<br /><br />Pour les compositions musicales, nous proposons également des licences à
					partir de notre catalogue, et <strong>accompagnons nos clients </strong> dans leur
					sélection.
					<br />Ces musiques sont personnalisables, mais lorsqu’un projet exige une identité unique,
					la création originale reste la plus adaptée : elle assure une adéquation complète entre
					musique, intention et émotion, ainsi qu’une exclusivité totale de diffusion.
				</p>
			</div>

			<video
				bind:this={videos[1]}
				class="background-video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080,so_0/v1763023587/PIANO_Couleurs_3_er2jzz.jpg"
			>
				<source
					src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080/v1763023587/PIANO_Couleurs_3_er2jzz.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<div class="wrapper__advantages">
			<h2>Nos atouts</h2>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Une démarche ancrée dans le dialogue</h3>
					<p>
						Chaque création naît d’un échange approfondi avec nos clients, pour comprendre les
						enjeux, les contraintes, les intentions et les émotions à transmettre. Cette
						collaboration rapprochée permet aux équipes créatives d’aboutir à des compositions
						parfaitement ajustées, sans compromis.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Une large palette musicale</h3>
					<p>
						Notre équipe de compositeurs maîtrise des registres variés : du minimalisme électronique
						à l’orchestration symphonique classique, en passant par le sound design abstrait ou
						narratif.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Une production complète, de l'écriture au mastering</h3>
					<p>
						Nous gérons l'intégralité de la chaîne : composition, arrangements, enregistrements si
						nécessaire, mixage, mastering. Nos clients bénéficient d’un interlocuteur unique du
						début à la fin, et d’une totale sérénité sur la gestion des droits et des licences.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="Voix">
		<div class="container">
			<div class="glass-panel">
				<h2>Voix</h2>
				<p>
					La voix <strong>capte naturellement l’attention</strong>: elle parle à l’inconscient,
					crée des émotions, donne du sens et relie le message à la mémoire. <br /><br />
					Qu’il s’agisse de <strong>supports sonores</strong> (radio, podcasts, audioguides) ou de
					<strong>productions audiovisuelles</strong> (films, publicités, e-learning, jeux vidéo,
					installations), la voix <strong>incarne</strong> un message, un récit, elle
					<strong>explique, personnifie, renforce la portée émotionnelle.</strong> <br /><br />
					Mais face à la profusion de contenus auxquels nous sommes exposés,
					<strong>se faire entendre ne suffit plus</strong>: il faut <strong>se démarquer et retenir l’attention</strong>. Cela passe par le choix
					d’une voix juste, une direction d'acteur impliquée, et une qualité d'enregistrement
					irréprochable.
					<br /><br />
					Voix off, doublage / dubbing / ADR, voice-over, adaptation multilingue :
					<strong>nous ne nous contentons pas d'enregistrer</strong>. Chaque projet bénéficie d’un
					<strong>accompagnement complet</strong>, du choix du comédien à la finalisation audio.
					Nous assurons le casting, la direction artistique, l’enregistrement, ajustons
					l'interprétation en temps réel avec nos clients, et veillons attentivement à ce que
					<strong>la voix serve le sens, l’intention, et l'impact émotionnel</strong> recherchés.
				</p>
			</div>
			<video
				bind:this={videos[2]}
				class="background-video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080,so_0/v1763023614/enregistrement_VOIX_en_studio_ofxow4.jpg"
			>
				<source
					src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080/v1763023614/enregistrement_VOIX_en_studio_ofxow4.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<div class="wrapper__advantages">
			<h2>Nos atouts</h2>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Un son maîtrisé, au service du sens et de l’émotion</h3>
					<p>
						Chaque décision de traitement, chaque plan sonore est pensé pour servir le récit ou
						l’image. Nous privilégions la lisibilité, la cohérence et la justesse du ressenti.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Une direction artistique impliquée</h3>
					<p>
						Nous assurons l'intégralité du processus : sélection des voix, organisation des
						sessions, enregistrement, montage, traitement, mixage et intégration finale. Un
						interlocuteur unique, un suivi rigoureux, et une exigence constante de qualité.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Un réseau international et un suivi dans la durée</h3>
					<p>
						En lien avec nos studios partenaires dans le monde entier, nous enregistrons à distance
						en temps réel, avec supervision client en direct. Nous assurons aussi le suivi des
						projets dans la durée (mises à jour, adaptations, séries sur plusieurs saisons) avec une
						gestion fluide des urgences et des évolutions.
					</p>
				</div>
			</div>
		</div>
	</section>

	<div class="bg-black section-video-banner">
		<video
			bind:this={videos[3]}
			autoplay
			muted
			loop
			playsinline
			class="background-video-banner"
			preload="auto"
		>
			<source
				src="https://videos.pexels.com/video-files/8319438/8319438-hd_1920_1080_25fps.mp4"
				type="video/mp4"
			/>
		</video>
		<div class="wrapper__section-txt">
			<h2>Notre engagement pour une qualité sonore exceptionnelle</h2>
			<h3>Chaque projet mérite son histoire sonore unique</h3>

			<p>
				Chez AUDIO PIGMENT, chaque projet est pensé, écouté, façonné avec précision, pour créer un
				impact optimal. Une <strong>écoute exigeante</strong>, un
				<strong>savoir-faire affûté</strong>, et le <strong>soin du sur-mesure</strong>.
				<br /><br />
				<strong>Comprendre, ressentir, transmettre: c’est notre métier. </strong>
			</p>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0;
		background-color: var(--white);
		min-height: 100vh;
		z-index: 0;
		gap: 0;
		overflow: hidden;
		width: 100%;
	}

	.glass-panel {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		padding: 3rem;
		border-radius: var(--radius-lg);
		max-width: 900px;
		width: 90%;
		z-index: 5;
		box-shadow: var(--shadow-lg);
	}

	.section-video-banner {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: transparent;
		min-height: 1000px;
		z-index: 0;
		gap: 20px;
	}
	.section-video-banner video {
		filter: brightness(1) contrast(0.9) saturate(1.3);
	}

	.section-video-banner::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 1));
		z-index: 1;
	}
	.container {
		position: relative;
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 0;
	}
	.container::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100vh;
		background: radial-gradient(circle at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
		z-index: 2;
	}
	.background-video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		object-fit: cover;
		z-index: -1;
	}

	.container h2 {
		font-family: var(--bebas);
		font-size: 1.8rem;
		color: var(--white);
		font-weight: 800;
		letter-spacing: -0.02em;
		z-index: 4;
	}
	.container p {
		font-family: var(--font-main);
		font-size: 1.15rem;
		line-height: 1.7;
		margin-top: var(--space-md);
		color: var(--white-off);
		font-weight: 400;
		max-width: 850px;
		z-index: 4;
		padding: 10px;
		text-wrap: balance;
	}

	.background-video-banner {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: 1;
	}

	main h1 {
		font-family: var(--font-heading);
		font-size: 2.8rem;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-xl);
		color: var(--ardoise);
		font-weight: 800;
		letter-spacing: -0.04em;
		text-align: center;
		position: relative;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 1.5rem;
	}

	main h1::after {
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

	section h3 {
		font-family: var(--raleway);
		font-size: 1.5rem;
		margin-top: 20px;
		color: var(--white-pure);
		letter-spacing: -1px;
		font-weight: var(--bold);
		z-index: 4;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 1.8rem;
		color: var(--white-pure);
		margin-top: 80px;
		font-weight: 700;
		letter-spacing: normal;
		z-index: 4;
	}

	.wrapper__advantages {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
		padding: 5rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	.wrapper__advantages h2 {
		font-size: 2rem;
		margin-top: 30px;
		color: var(--ardoise);
	}
	.advantage {
		background: linear-gradient(135deg, var(--accent) 0%, #c02d24 100%);
		padding: 3rem;
		border-radius: var(--radius-md);
		width: 100%;
		box-shadow: var(--shadow-md);
		transition: var(--transition);
		text-align: left;
	}
	.advantage:hover {
		transform: scale(1.01);
		box-shadow: var(--shadow-lg);
	}
	.advantage h3 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: var(--white);
		text-transform: uppercase;
		line-height: 1.2;
		text-shadow: none;
	}
	.advantage p {
		font-family: var(--font-main);
		font-size: 0.95rem;
		font-weight: var(--bold);
		line-height: 1.6;
		color: var(--white-off);
	}

	.bg-black {
		background-color: var(--ardoise);
	}
	.bg-black h2,
	.bg-black h3,
	.bg-black p {
		color: white;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
		color: white;
		z-index: 2;
		position: relative;
		padding: 2rem;
		z-index: 2;
		font-family: var(--raleway);
	}
	.wrapper__section-txt p {
		font-weight: var(--regular);
		max-width: 800px;
		line-height: 1.8;
	}
	.wrapper__section-txt h3 {
		font-weight: var(--medium);
		font-size: 1.5rem;
	}
	.wrapper__section-txt h2 {
		font-weight: var(--bold);
		font-family: var(--bebas);
		font-size: 2.3rem;
	}

	@media screen and (max-width: 768px) {
		.container {
			position: relative;
			width: 100%;
			min-height: 100vh;
			overflow: hidden;
		}
		.background-video {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			min-width: 100%;
			min-height: 100%;
			width: auto;
			height: auto;
			object-fit: cover;
			z-index: -1;
		}

		main h1 {
			font-size: 2.4rem;
			letter-spacing: -1px;
			line-height: 1.2;
			padding-bottom: 1.5rem;
			margin-top: 40px;
			margin-bottom: 2.5rem;
		}
		section h2 {
			font-size: 1.8rem;
		}
		section h3 {
			font-size: 1.2rem;
		}
		section p {
			font-size: 1rem;
			line-height: 1.4;
			font-weight: var(--regular);
		}
		.wrapper__advantages {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 30px;
			padding: var(--space-lg) var(--space-md);
			width: 100%;
		}
		.advantage {
			width: 100%;
			max-width: 450px;
			margin: 0 auto !important;
			text-align: center;
		}
	}
</style>
