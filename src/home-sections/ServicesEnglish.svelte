<!-- <script>
	import Collapse from '$lib/component/Collapse.svelte';

	let datas = [
		{
			title: 'Communication sonore',
			p: 'Nous créons des expériences sonores immersives qui captivent et engagent votre public. \n Notre expertise en design sonore et en production audio garantit une communication efficace et mémorable.'
		},
		{
			title: 'Production audio',
			p: 'De la conception à la réalisation, nous produisons des contenus audio de haute qualité adaptés à vos besoins spécifiques. \n Que ce soit pour des podcasts, des publicités ou des projets audiovisuels, nous sommes là pour vous accompagner.'
		},
		{
			title: 'Consultation en stratégie sonore',
			p: "Nous vous aidons à développer une stratégie sonore cohérente qui renforce votre identité de marque et améliore l'expérience utilisateur. \n Notre approche personnalisée garantit que chaque projet résonne avec votre audience."
		},
        {
			title: 'Doublage Multilingue/localisation',
			p: "Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation (audioguide, elearning, reportage…) "
		},
        {
			title: 'Mixage & post prod boradcast',
			p: "Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser."
		}
	];
</script>

<section>
	<h2>Nos prestations</h2>
    <div class="wrapper__collapses">
	{#each datas as data}
		<Collapse title={data.title} p={data.p} />
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
		background-color: white;
		color: var(--black);
		height: 100%;
		margin-bottom: 2rem;
		
	}
    .wrapper__collapses {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin-top: 30px;
    }

	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 1rem;
        margin-top: 50px;
	}
</style> -->

<script>
	import ButtonWhite from '$lib/component/btn-black.svelte';

	const services = [
		{
			label: 'Sound communication',
			desc: 'Sonic branding &amp; audio identity',
			infos: '(sonic logo, musical identity, brand voice, product sound design)',
			link: '/en/services/#1',
			image: 'https://images.pexels.com/photos/7859937/pexels-photo-7859937.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Audio marketing',
			desc: 'Creative audio for brand communication',
			infos:
				'(radio commercials, podcasts, event soundscapes, spatial audio, IVR systems, on-hold messages)',
			link: '/en/services/#2',

			image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Audiovisual & Digital Media',
			desc: 'Voices, sound design &amp; soundtrack creation',
			infos:
				'(TV commercials, cinema ads, corporate films, institutional videos, motion design, VR, e-learning)',
			link: '/en/services/#3',
			image: 'https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Multilingual Dubbing & Localization',
			desc: 'Dubbing, lip sync &amp; voice-over recording for international content',
			infos: '(audioguides, e-learning, documentaries, translation &amp; adaptation)',
			link: '/en/services/#4',
			image: 'https://images.pexels.com/photos/4476164/pexels-photo-4476164.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		},
		{
			label: 'Mixing & Post-Production',
			desc: 'High-end audio mixing and finishing',
			infos:
				'((stereo, 5.1, 7.1, binaural/ambisonic VR, PAD-ready broadcast delivery))',

			link: '/en/services/#5',
			image: 'https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg?w=600&h=400&auto=compress&cs=tinysrgb'
		}
	];
</script>

<section>
	<h2>Our services</h2>
	<div class="wrapper__services-cards">
		{#each services as service}
			{#if service.link}
				<a
					class="service-card"
					href={service.link}
					style={service.image ? `background-image: url(${service.image});` : ''}
				>
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<p>{service.desc}</p>
						<p>{service.infos}</p>
					</div>
				</a>
			{:else}
				<div
					class="service-card"
					style={service.image ? `background-image: url(${service.image});` : ''}
				>
					<div class="wrapper__service-txt">
						<h3>{service.label}</h3>
						<p>{service.desc}</p>
					</div>
				</div>
			{/if}
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
		font-weight: 400;
		letter-spacing: -1.5px;
	}
	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);
	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-end;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		margin-bottom: 0.6rem;
		z-index: 2;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-end;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 12px;
		box-shadow: 0 10px 20px rgba(50, 50, 50, 0.328);
		padding: 2rem;
		height: 600px;
		width: 400px;
		transition: transform 0.15s;
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
		background: linear-gradient(to top, rgba(0, 0, 0, 0.832), rgba(255, 255, 255, 0));
	}
	.service-card:hover {
		transform: translateY(-5px) scale(1.04);
		box-shadow: 0 3px 16px rgba(50, 50, 50, 0.18);
		transition: 0.4s ease-in-out;
	}

	.wrapper__service-txt h3 {
		margin-bottom: 1rem;
		color: rgb(255, 255, 255);
		font-size: 2rem;
	}
	.wrapper__service-txt p {
		margin-bottom: 1rem;
		color: white;
		font-size: 1rem;
	}
	a {
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.wrapper__services-cards {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			padding: 1rem;
			height: 400px;
			width: 100%;
		}
		.wrapper__service-txt h3 {
			font-size: 1.8rem;
		}
		section h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
	}
</style>
