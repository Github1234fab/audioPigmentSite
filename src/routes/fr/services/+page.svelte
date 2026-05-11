<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ComSonore from '../../../assets/ComSonore.webp';
	import MarkSonore from '../../../assets/MarkSonore2.webp';
	import AudioVisuel from '../../../assets/AudioVisuel2.webp';
	import Voix from '../../../assets/Voix.webp';
	import Mixage from '../../../assets/Mixage3.jpg';

	import BtnBlack from '$lib/component/btn-black-shadow.svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const cards = gsap.utils.toArray('.service-card');
		cards.forEach((card, i) => {
			const titleBlock = card.querySelector('.wrapper__service-txt');
			gsap.from(titleBlock, {
				x: i % 2 === 0 ? 100 : -100,
				opacity: 0,
				duration: 1.2,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: card,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			});
		});
	});

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
			image: ComSonore,
			alt: "Personne utilisant un microphone dans un studio d'enregistrement"
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

			image: MarkSonore
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
			image:  "https://images.pexels.com/photos/4941721/pexels-photo-4941721.jpeg?_gl=1*sihbeq*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcwJHQxNzYzMDE1OTUxJGo2MCRsMCRoMA."

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
			image: "https://images.pexels.com/photos/8001238/pexels-photo-8001238.jpeg?_gl=1*1t4lt56*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcxJHQxNzYzMDE2MDU2JGo1NSRsMCRoMA."

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
			image: Mixage
		}
	];
</script>

<section>
	<h1>Nos prestations</h1>
	<div class="wrapper__services-cards">
		{#each services as service, i}
			<div class="service-card" id={service.id}>
				<div class="wrapper__img-title {i % 2 !== 0 ? 'reverse' : ''}">
					<img class="img" src={service.image} alt={service.alt} />
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<h4>{service.subLabel}</h4>
					</div>
				</div>
				<div class="wrapper__p-cta">
					<p>{@html service.desc}</p>
					<div class="wrapper-btn">
						<BtnBlack txt="Nous contacter" href={service.link} />
					</div>
				</div>
			
			</div>
		{/each}
	</div>
</section>

<!-- style={service.image ? `background-image: url(${service.image});` : ''} -->

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
	section h1 {
		font-family: var(--font-heading);
		font-size: var(--fs-h1);
		margin-bottom: var(--space-xl);
		margin-top: var(--space-xl);
		font-weight: 800;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		position: relative;
		width: fit-content;
		padding-bottom: 1.5rem;
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
	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);
		height: 100%;
	}

	
	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 18px;
		box-shadow: 0 0px 20px rgba(50, 50, 50, 0.148);
		height: 100%;
		max-width: 1200px;
		position: relative;
		z-index: 0;
	}
	
	.wrapper__img-title {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		gap: 0;
		border-radius: var(--radius-lg) var(--radius-lg) 0px 0px;
		border: 1px solid rgba(0,0,0,0.05);
		background-color: transparent;
		overflow: hidden;
	}

	.wrapper__img-title.reverse .img {
		grid-column: 2;
		border-radius: 0;
	}

	.wrapper__img-title.reverse .wrapper__service-txt {
		grid-column: 1;
		grid-row: 1;
		border-radius: 0;
	}

	.img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: center;
	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 2;
		gap: var(--space-sm);
		padding: var(--space-lg);
		max-height: 400px;
		background-color: #2c2c2c;
	}
	.wrapper__service-txt h3 {
		margin-bottom: 0rem;
		color: var(--white);
		font-size: 2.2rem;
		font-family: var(--font-heading);
		line-height: 1.1;
		text-align: center;
		text-transform: uppercase;
	}
	.wrapper__service-txt h4 {
		color: var(--grey-light);
		font-size: 0.9rem;
		font-family: var(--font-main);
		text-align: center;
		line-height: 1.4;
		font-weight: 500;
	}
	.wrapper__p-cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 0rem;
		z-index: 2;
		width: 100%;
		/* background-color: #FAFAFA; */
		background-image: url(../../../assets/bg-Actu.webp);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.wrapper__p-cta p {
		color: var(--ardoise);
		font-family: var(--font-main);
		font-weight: 400;
		font-size: 1.05rem;
		line-height: 1.7;
		max-width: 900px;
		padding: var(--space-lg);
		border-radius: 10px;
	}
	.wrapper-btn {
		margin-bottom: var(--space-lg);
		display: flex;
		justify-content: center;
		width: 100%;
	}
	/* .wrapper__services-cards a {
		font-family: var(--bebas);
		text-decoration: none;
		color: white;
		font-weight: bold;
		font-size: 1rem;
		margin-top: 1rem;
		margin-bottom: 3rem;
		padding: 0.8rem 1.5rem;
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
	} */

	
	

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 2rem 0; /* On gère les marges sur les cartes directement */
			color: var(--black);
			min-height: 100vh;
			margin-bottom: 2rem;
			width: 100%;
		}
		.wrapper__services-cards {
			padding: 0;
			width: 100%;
		}
		section h1 {
			font-family: var(--font-heading);
			font-size: 2.4rem;
			margin-bottom: 2.5rem;
			margin-top: 40px;
			font-weight: 800;
			letter-spacing: -1px;
			line-height: 1.2;
			text-align: center;
			padding-bottom: 1.5rem; /* Harmonisé */
		}
		.wrapper__img-title {
		display: grid;
		grid-template-columns: 1fr ;
		width: 100%;
		border-radius: 18px 18px 0px 0px;
		border: 1px solid rgb(223, 223, 223);
		background-color: transparent;
	}
	.img{
		width: 100%;
		max-height: 300px;
		object-fit: cover;
		object-position: center;
		border-radius: 18px 18px 0px 0px;
	}

	.wrapper__img-title.reverse .img,
	.wrapper__img-title.reverse .wrapper__service-txt {
		grid-column: auto;
		grid-row: auto;
	}
		.service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 18px;
			box-shadow: 0 0px 20px rgba(50, 50, 50, 0.573);
			padding: 0px;
			height: auto;
			width: 92%; /* Forcé pour Mobile S */
			max-width: 500px;
			position: relative;
			z-index: 0;
			margin: 0 auto;
		}
		.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 0px 0px;
		z-index: 2;
		gap: 25px;
		padding: 20px;
		max-height: 400px;
	height: 350px;
		background: linear-gradient(to left,rgb(101, 99, 99), rgb(153, 150, 150)) ;
	}
		.wrapper__service-txt h3 {
			margin-bottom: 10px;
			color: white;
			font-size: 1.7rem;
			font-family: var(--bebas);
			line-height: 1.1;
			margin-top: 20px;
		}
		.wrapper__p-cta p {
		color: var(--ardoise);
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.5;
		max-width: 800px;
		padding: 2rem;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
		
		/* .wrapper__services-cards a {
			font-size: 1rem;
		} */
	}
</style>
