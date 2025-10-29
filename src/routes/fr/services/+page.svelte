<script>
	let txt = '';
	let href = '';

	const services = [
		{
			id: '1',
			label: 'Communication sonore',
			subLabel: `Audio branding / Identité sonore (signature sonore, identité musicale, voix de marque,
sound design produit…)`,
			desc: `L’<strong>identité sonore</strong>, c’est bien plus qu’un simple jingle musical : c’est la signature sonore d’une marque. 
			<br/>	 Elle réunit des éléments sonores <strong>(création musicale, voix, design sonore)</strong> qui traduisent ses valeurs et la rendent identifiable, même sans visuel.
<br/>	<br/>	Pouvant aller jusqu’à une véritable <strong>charte sonore</strong>, elle s’intègre à la stratégie globale de
communication pour renforcer la reconnaissance, la cohérence et l’impact émotionnel de la
marque. <br/>	<br/>	
Chez Audio Pigment, nous accompagnons chaque projet <strong> depuis la réflexion stratégique 
jusqu’à la création et la production </strong> : définition des intentions, conception musicale et/ou
vocale, direction artistique, enregistrement et mixage.<br/>	
Notre expertise nous permet d’élaborer des signatures sonores pertinentes, uniques et
durables, capables d’évoluer avec la marque tout en préservant son identité.<br/>	<br/>	
Une identité sonore se décline sur tous les supports (audiovisuels, digitaux, téléphoniques
ou événementiels) pour assurer une présence cohérente et reconnaissable.
Dans un monde saturé de sons, nous aidons les marques à se <strong>distinguer, être entendues et
mémorisées</strong>, avec justesse et émotion.`,
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/7859937/pexels-photo-7859937.jpeg'
		},
		{
			id: '2',

			label: 'Marketing sonore',
			subLabel: `Spot radio, podcast, création sonore événementiel, sonorisation d’espace, svi, message
téléphonique…`,
			desc: `Dans un paysage saturé de messages, se faire entendre demande une véritable expertise.
Le <strong>	marketing sonore </strong>	 réunit toutes les formes de communication audio <strong>	(spots radio,
podcasts, créations sonores événementielles, sonorisations d’espaces, serveurs vocaux
interactifs ou messages téléphoniques…)</strong>	 et vise à créer un lien fort, cohérent et mémorable
entre une marque et son public cible. <br> <br>
Chez Audio Pigment, nous concevons chaque projet comme une véritable <strong>	production sur
mesure </strong>	dans laquelle nous <strong>	accompagnons nos clients </strong>	: conception et rédaction du message,
sélection et direction des voix, création musicale et/ou sound design, habillage sonore, et
mixage final adapté aux normes de diffusion radio, web ou événementielle. <br> <br>
Nous portons une attention particulière à la cohérence entre la voix, le ton et l’univers
sonore pour garantir <strong>	l’impact, la pertinence et l’émotion</strong>	, pour transformer chaque diffusion
en une expérience d’écoute identifiable et marquante.`,
			link: '/fr/contact',

			image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg'
		},
		{
			id: '3',
			label: 'Audiovisuel & digital ',
			subLabel: `Habillage sonore, création musicale &amp; voix off (pub TV, pub cinéma, film corporate, film
			d’animation, motion design, e-learning…)`,
			desc: `Dans l’audiovisuel comme dans le digital, <strong>	le son et la voix </strong>	donnent vie à l’image.
Ils captent l’attention, soulignent les émotions, rythment la mise en scène et rendent chaque
projet plus immersif. <br><br>
Chez Audio Pigment, nous concevons et produisons l’ensemble de la création sonore : <strong>	sound
design, habillage musical, composition originale, casting, enregistrement et direction de
voix.</strong>	<br>
Notre travail s’étend des <strong>	 publicités TV ou cinéma,</strong>	 aux <strong>	 films corporate et contenus digitaux </strong>	,
jusqu’aux <strong>	films d’animation et productions immersives </strong>	(planétariums, expositions, ou
créations artistiques).<br><br>
Dans le domaine de la communication, nous mettons notre exigence artistique au service de
l’efficacité : une <strong>	voix juste et incarnée</strong>	, une <strong>	musique originale</strong>	 ou un <strong>	habillage sonore sur
mesure </strong>, une <strong>cohérence globale entre image, rythme et intention </strong>, pour que chaque spot,
chaque film, trouve son ton et son impact propre.<br><br>
Dans l’animation, où tout est créé de toutes pièces, le son devient un élément essentiel de
crédibilité et d’émotion : il façonne les espaces, donne vie aux personnages et crée le lien
entre le spectateur et l’histoire.
Nos <strong>comédiens professionnels</strong>, dirigés en studio par nos équipes, prêtent leurs voix avec
justesse et sensibilité pour incarner les personnages et donner corps à la narration.<br><br>
Qu’il s’agisse d’un film publicitaire, d’une production corporate ou d’un univers narratif
immersif, notre approche reste la même : <strong>construire un paysage sonore cohérent, expressif
et identitaire </strong>, où chaque son, chaque voix, chaque silence participe à raconter l’histoire et
servir l’image.`,
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg'
		},
		{
			id: '4',
			label: 'Doublage multilingue / localisation',
			subLabel: `Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation
(audioguide, elearning, reportage…)`,
			desc: `Le doublage et la localisation permettent à un film, un spot ou toute production
audiovisuelle de franchir les frontières linguistiques <strong>	sans perdre son authenticité et son
efficacité. </strong>	 <br><br>
Ce travail exige <strong>	précision et savoir-faire </strong>	: traduction rigoureuse et adaptation des dialogues
pour une synchronisation labiale naturelle et un ajustement aux usages culturels, direction
artistique attentive pour restituer la personnalité et les nuances de jeu, enregistrements
avec des comédiens professionnels du doublage, puis mixage précis pour réintégrer les voix
dans la bande-son originale et recréer l’univers sonore.<br><br>
Chez Audio Pigment, nous maîtrisons l’ensemble de cette chaîne technique et artistique (de
la traduction à la livraison des masters) pour garantir des versions crédibles, fidèles à l’esprit
de l’œuvre et <strong>	adaptées à chaque culture</strong>	.<br><br>
Qu’il s’agisse d’un film, d’une vidéo de marque, d’un contenu institutionnel ou digital, nous
considérons la localisation et le doublage comme un art d’équilibre entre <strong>	technique,
interprétation et fidélité à l’œuvre </strong>	, pour que la langue change, mais pas l’émotion.`,
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/4476164/pexels-photo-4476164.jpeg'
		},
		{
			id: '5',
			label: 'Mixage & Post pro broadcast',
			subLabel: `Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast
PAD « Prêt A Diffuser »`,
			desc: `Le mixage est l’étape finale où tous les éléments sonores prennent leur équilibre.
C’est à la fois un travail <strong> technique de précision</strong>  et un <strong> acte artistique</strong> , visant à créer une
cohérence entre les voix, la musique, le sound design et l’ensemble de l’univers sonore. <br><br>
Chez Audio Pigment, chaque projet est traité dans un environnement acoustique calibré,
avec des outils numériques de haute précision et surtout, une <strong> écoute experte</strong>  capable de
prendre les bonnes décisions artistiques et techniques. <br><br>
Le mixage consiste à trouver l’équilibre parfait entre les différentes sources : réglage des
niveaux, traitement fréquentiel, gestion de la dynamique, spatialisation stéréo ou
multicanale <strong> (5.1, 7.1, ou formats immersifs)</strong> , et respect des normes de diffusion <strong> (EBU R128,
ITU BS.1770, ou spécifications cinéma et web)</strong> .
Mais au-delà des outils, c’est avant tout <strong> le jugement de l’oreille humaine</strong>  qui fait la
différence : hiérarchiser les plans sonores, donner de la clarté au message, préserver
l’intention émotionnelle et assurer une diffusion fidèle à la vision du réalisateur ou du client. <br><br>
Nous assurons également la <strong> conformation technique et la normalisation broadcast</strong> ,
garantissant que les masters livrés respectent toutes les contraintes de diffusion et soient
immédiatement exploitables, sans compromis sur la qualité.`,
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg'
		}
	];
</script>

<section>
	<h2>Nos prestations</h2>
	<div class="wrapper__services-cards">
		{#each services as service}
			<div
				class="service-card"
				id={service.id}
				style={service.image ? `background-image: url(${service.image});` : ''}
			>
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<h4>{service.subLabel}</h4>
					<p>{@html service.desc}</p>
					<a href={service.link}>Contact</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		color: var(--black);
		height: 100%;
		margin-bottom: 2rem;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 3rem;
		margin-top: 50px;
		font-weight: var(--bold);
		letter-spacing: -1.7px;
	}
	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);
		height: 100%;
	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		margin-bottom: 0.6rem;
		z-index: 2;
		gap: 5px;
	}
	.wrapper__services-cards a {
		font-family: var(--bebas);
		text-decoration: none;
		color: white;
		font-weight: bold;
		font-size: 1.2rem;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--red);
		text-align: center;
		border-radius: 5px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
	}
	.wrapper__services-cards a:hover {
		background-color: black;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.412);
		transform: scale(1.2);
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 12px;
		box-shadow: 0 0px 20px rgba(50, 50, 50, 0.573);
		padding: 4rem;
		height: 100%;
		max-width: 1200px;
		position: relative;
		z-index: 0;
	}
	.service-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		height: 100%;
		width: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.832), rgba(255, 255, 255, 0) 100%);
	}

	.wrapper__service-txt h3 {
		margin-bottom: 0rem;
		color: white;
		font-size: 4rem;
		font-family: var(--bebas);
	}
	.wrapper__service-txt h4 {
		color: rgba(255, 255, 255, 0.884);
		font-size: 1rem;
		font-family: var(--bebas);
	}
	.wrapper__service-txt p {
		margin-top: 50px;
		margin-bottom: 1rem;
		color: white;
		font-weight: 500;
		font-size: 1rem;
		line-height: 2.5;
		background-color: rgba(255, 255, 255, 0.082);
		backdrop-filter: blur(25px);
		-webkit-backdrop-filter: blur(25px);
		padding: 4rem;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
	.wrapper__service-txt p:hover {
		transform: scale(1.04);
		box-shadow: 0 0px 20px rgba(50, 50, 50, 0.541);
	}

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 10px;
			color: var(--black);
			min-height: 100vh;
			margin-bottom: 2rem;
		}
		.wrapper__services-cards {
			padding: 10px;
		}
		section h2 {
			font-family: var(--bebas);
			font-size: 3rem;
			margin-bottom: 3rem;
			margin-top: 50px;
			font-weight: var(--bold);
			letter-spacing: -1.7px;
			line-height: 50px;
			text-align: center;
		}
		.service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 12px;
			box-shadow: 0 0px 20px rgba(50, 50, 50, 0.573);
			padding: 0px;
			height: auto;
			max-width: auto;
			position: relative;
			z-index: 0;
			margin: 0 auto;
		}
		.wrapper__service-txt h3 {
			margin-bottom: 10px;
			color: white;
			font-size: 1.8rem;
			font-family: var(--bebas);
			line-height: 35px;
			margin-top: 30px;
		}
		.wrapper__service-txt p {
			margin-bottom: 1rem;
			color: white;
			font-weight: 500;
			font-size: 1rem;
			line-height: 1.9;
			background-color: rgba(255, 255, 255, 0.082);
			backdrop-filter: blur(25px);
			-webkit-backdrop-filter: blur(25px);
			border-radius: 10px;
			transition: 0.3s ease-in-out;
			padding: 20px;
		}
		.wrapper__services-cards a {
			font-size: 1rem;
		}
	}
</style>
