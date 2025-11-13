<script>
	let txt = '';
	let href = '';
	import ComSonore from '../../../assets/ComSonore.webp';
	import MarkSonore from '../../../assets/MarkSonore2.webp';
	import AudioVisuel from '../../../assets/AudioVisuel2.webp';
	import Voix from '../../../assets/Voix.webp';
	import Mixage from '../../../assets/Mixage3.jpg';

	const services = [
		{
			id: '1',
			label: 'Sound Communication',
			subLabel: `Sonic branding & audio identity <br>
(sonic logo, musical identity, brand voice, product sound design)`,
			desc: `A <strong> sonic identity</strong>		 is far more than a simple musical logo: it’s a brand’s signature sound.
It brings together <strong> music, voice, and sound design</strong>	  to express a brand’s values and make it instantly
recognizable, even without visuals. <br> <br>
Extending into a full-fledged 	<strong>sound charter </strong> , it integrates seamlessly into the brand’s overall communication
strategy, strengthening recognition, coherence, and emotional impact. <br><br>
At <strong> Audio Pigment</strong> , we guide each project  	<strong> from strategic thinking to creative production</strong>: defining intent,
composing music and voice design, artistic direction, recording, and mixing.
Our expertise allows us to craft meaningful, distinctive, and lasting sonic identities, able to evolve with the
brand while preserving its core essence. <br><br>
A well-designed sonic identity can resonate across all media (audiovisual, digital, phone-based, or event-
related) ensuring a coherent and recognizable presence everywhere your audience listens.
In a world saturated with sound, we help brands  	<strong>stand out, be heard, and be remembered </strong> , with authenticity
and emotion.`,
			link: '/fr/contact',
			image: ComSonore,
			alt: "Personne utilisant un microphone dans un studio d'enregistrement"
		},
		{
			id: '2',

			label: 'Audio Marketing',
			subLabel: `Creative audio for brand communication <br> (radio commercials, podcasts, event soundscapes, spatial audio, IVR systems, on-hold messages)`,
			desc: `In a world saturated with messages, being heard requires true expertise.
			<br>
			<br>

<strong>Audio marketing </strong>

brings together all forms of sound communication <strong>(radio commercials, podcasts,
event soundscapes, spatial and environmental audio, IVR systems, and on-hold messages) </strong> to
create a strong, coherent, and memorable connection between a brand and its audience.
<br>
<br>
At <strong> Audio Pigment</strong> , we approach every project as a <strong>bespoke production </strong> , working <strong> alongside our
clients through every step</strong> : message conception and scriptwriting, voice casting and direction,
musical composition and sound design, and final mix adapted to radio, web, or event broadcast
standards.
<br>
<br>
We pay close attention to the harmony between voice, tone, and soundscape to ensure each
production delivers <strong>  impact, relevance, and emotion</strong>, turning every broadcast into a distinctive and
engaging listening experience.`,
			link: '/fr/contact',

			image: MarkSonore
		},
		{
			id: '3',
			label: 'Audiovisual &amp; Digital Media',
			subLabel: `Voices, sound design &amp; soundtrack creation <br>
(TV commercials, cinema ads, corporate films, institutional videos, motion design, VR, e-learning)`,
			desc: `In both film and digital content, <strong>sound and voice bring images to life</strong>.
They capture attention, highlight emotion, shape rhythm and atmosphere, making each project more
immersive and memorable.
<br><br>
At<strong> Audio Pigment</strong>, we design and produce complete sound creations: <strong>sound design, musical
scoring, original composition, voice casting, recording </strong>, and <strong>creative direction</strong>.
<br>
<br>
Our work covers <strong> TV and cinema commercials, corporate films, digital content, animated
features </strong>, and <strong> immersive productions </strong>, from <strong>exhibitions</strong> and <strong>planetariums</strong> to <strong>artistic installations</strong>.
<br>
<br>
In <strong>communication projects</strong>, we bring our artistic precision to serve effectiveness: the <strong>right,
expressive voice</strong>, an <strong>original composition</strong> or a <strong>bespoke sound design </strong>, and a <strong>seamless
coherence between image, rhythm, and intention</strong>, so every film and every spot finds its own tone
and impact.
<br>
<br>
In <strong> animation</strong>, where everything is created from scratch, <strong>sound becomes essential </strong>to emotion and
believability: it shapes space, gives life to characters, and creates a connection between story and
audience.
<br>
<br>
Our <strong> professional actors</strong>, directed in-studio by our team,<strong> bring voices to life </strong> with nuance and
sensitivity, giving depth to every narrative.
<br>
<br>
Whether for a <strong>commercial</strong>, a corporate production, or an <strong>immersive storytelling world</strong>, our
approach remains the same: to build a <strong>coherent, expressive, and distinctive soundscape</strong>, where
every sound, every voice, and every silence plays its part in telling the story and serving the image.`,
			link: '/fr/contact',
			image:
				'https://images.pexels.com/photos/4941721/pexels-photo-4941721.jpeg?_gl=1*sihbeq*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcwJHQxNzYzMDE1OTUxJGo2MCRsMCRoMA.'
		},
		{
			id: '4',
			label: 'Multilingual Dubbing & Localization',
			subLabel: `Dubbing, lip sync &amp; voice-over recording for international content <br>
(audioguides, e-learning, documentaries, translation &amp; adaptation)`,
			desc: `<strong>	Dubbing and localization </strong>	allow a film, commercial, or any audiovisual production to cross
language borders <strong>	without losing its authenticity or impact</strong>	.

<br>
<br>

This process demands both<strong>	 technical precision </strong>	and <strong>	artistic expertise</strong>	: rigorous translation
and dialogue adaptation for <strong>	 natural lip sync </strong>	and <strong>	cultural authenticity, attentive artistic
direction </strong>	 to capture the <strong>	subtleties of performance</strong>	, recordings with <strong>	professional dubbing
actors </strong>	, and <strong>	precise mixing</strong>	 to reintegrate the voices into the original soundtrack and
<strong>	recreate the sonic environment</strong>	 in perfect harmony.

<br>
<br>
At <strong>	Audio Pigment</strong>	, we oversee and master every stage of this technical and artistic process
(from translation to master delivery) ensuring versions that <strong>	 stay true to the original spirit
while connecting authentically with each culture</strong>	.

<br>
<br>
From films and branded videos to corporate and digital content, we approach localization
and dubbing as <strong>	a careful balance </strong>	 between technique, interpretation, and fidelity to the
original work, so <strong>	the language may change, but the emotion remains</strong>	.`,
			link: '/fr/contact',
			image:
				'https://images.pexels.com/photos/8001238/pexels-photo-8001238.jpeg?_gl=1*1t4lt56*_ga*NjY3ODMwNzE5LjE3MjQ4Nzc0OTQ.*_ga_8JE65Q40S6*czE3NjMwMTU5NTEkbzM2JGcxJHQxNzYzMDE2MDU2JGo1NSRsMCRoMA.'
		},
		{
			id: '5',
			label: 'Mixing & Broadcast Post-production',
			subLabel: `High-end audio mixing and finishing <br>
(stereo, 5.1, 7.1, binaural/ambisonic VR, PAD-ready broadcast delivery)`,
			desc: `Mixing is the final stage where every sound element comes together in balance.
It is both <strong> a technical process and an artistic craft </strong> , aiming to create coherence between voices,
music, sound design, and the overall sonic environment.
<br>
<br>

At Audio Pigment, every project is mixed in a finely tuned acoustic environment, using high-precision
<strong> digital tools</strong> , and above all, <strong> expert ears</strong>  capable of making the right artistic and technical choices.
<br>
<br>
Our work focuses on achieving the perfect balance between all sound elements: level adjustments,
frequency shaping, dynamic control, and stereo or multichannel spatialization <strong>  (5.1, 7.1, and
immersive formats), all while meeting international broadcast standards (EBU R128, ITU BS.1770,
cinema or web specifications) </strong> .
<br>
<br>
Yet beyond the tools, it’s <strong>  the judgment of a trained human ear </strong>  that truly makes the difference,
organizing the soundscape, bringing clarity to the message, preserving emotional intent, and ensuring
that each mix remains <strong>  faithful to the creator’s or client’s vision</strong> .
<br>
<br>
We also provide full <strong>  technical conformation and broadcast normalization </strong> , ensuring every master
delivered is fully compliant and ready for immediate broadcast, with no compromise on quality.`,
			link: '/fr/contact',
			image: Mixage
		}
	];
</script>

<section>
	<h2>Our Services</h2>
	<div class="wrapper__services-cards">
		{#each services as service}
			<div class="service-card" id={service.id}>
				<div class="wrapper__img-title">
					<img class="img" src={service.image} alt={service.alt} />
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<h4>{@html service.subLabel}</h4>
					</div>
				</div>
				<div class="wrapper__p-cta">
					<p>{@html service.desc}</p>
					<a class="cta" href={service.link}>Get in touch</a>
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
	section h2 {
		font-family: var(--bebas);
		font-size: 5rem;
		margin-bottom: 3rem;
		margin-top: 50px;
		font-weight: 600;
		letter-spacing: -2.5px;
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
		gap: 2px;
		border-radius: 18px 18px 0px 0px;
		border: 1px solid rgb(223, 223, 223);
		background-color: transparent;
	}
	.img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: center;
		border-radius: 18px 0px 0px 0px;
	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 0px 18px 0px 0px;
		z-index: 2;
		gap: 25px;
		padding: 20px;
		max-height: 400px;
		background: linear-gradient(to left, rgb(101, 99, 99), rgb(153, 150, 150));
	}
	.wrapper__service-txt h3 {
		margin-bottom: 0rem;
		color: white;
		font-size: 2.5rem;
		font-family: var(--bebas);
		line-height: 50px;
		text-align: center;
	}
	.wrapper__service-txt h4 {
		color: rgba(255, 255, 255, 0.884);
		font-size: 1rem;
		font-family: var(--bebas);
		text-align: center;
		line-height: 30px;
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
		font-weight: 500;
		font-size: 1rem;
		line-height: 2.5;
		max-width: 800px;
		padding: 2rem;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
	.wrapper__services-cards a {
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
		.wrapper__img-title {
			display: grid;
			grid-template-columns: 1fr;
			width: 100%;
			border-radius: 18px 18px 0px 0px;
			border: 1px solid rgb(223, 223, 223);
			background-color: transparent;
		}
		.img {
			width: 100%;
			max-height: 300px;
			object-fit: cover;
			object-position: center;
			border-radius: 18px 18px 0px 0px;
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
			max-width: auto;
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
			background: linear-gradient(to left, rgb(101, 99, 99), rgb(153, 150, 150));
		}
		.wrapper__service-txt h3 {
			margin-bottom: 10px;
			color: white;
			font-size: 2.2rem;
			font-family: var(--bebas);
			line-height: 40px;
			margin-top: 30px;
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

		.wrapper__services-cards a {
			font-size: 1rem;
		}
	}
</style>
