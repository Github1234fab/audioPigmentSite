
<script>
	import Bilingue from '../assets/bilingue.png';
	import Button from '$lib/component/btn-white.svelte';

	const services = [
		{
			label: 'Communication sonore',
			desc: 'Audio branding / Identité sonore (signature sonore, identité musicale, voix de marque, sound design produit…).',
			link: '/fr/services/#1',
			image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg'
		},
		{
			label: 'Marketing Sonore',
			desc: 'Spot radio, podcast, création sonore événementiel, sonorisation d’espace, svi, message téléphonique…',
			link: '/fr/services/#2',

			image: 'https://images.pexels.com/photos/1271380/pexels-photo-1271380.jpeg'
		},
		{
			label: 'Audiovisuel & digital',
			desc: 'Habillage sonore &amp; voix off (pub TV, pub cinéma, film corporate, institutionnel, motion design, e-learning…)',
			link: '/fr/services/#3',
			image: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg'
		},
		{
			label: 'Doublage multinlingue / Localisation',
			desc: 'Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation (audioguide, elearning, reportage…)',
			link: '/fr/services/#4',
			image: Bilingue
		},
		{
			label: 'Mixage & Post pro broadcast',
			desc: 'Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser »',
			link: '/fr/services/#5',
			image: 'https://images.pexels.com/photos/25396131/pexels-photo-25396131.jpeg'
		}
	];
</script>

<section>
	<h2>Nos prestations</h2>
	<!-- <div class="wrapper__services-cards"> -->

	<div class="wrapper__cards">
		{#each services as service}
			<div class="card">
				<!-- href={service.link} -->
				<img src={service.image} alt="" />
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{service.desc}</p>
					<!-- <a class="button" href={service.link} aria-label="button">En savoir +</a> -->
					 <div class="wrapper-button">
					<Button txt="En Savoir +" href={service.link} />
				</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- </div> -->
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
		background: linear-gradient(rgb(224, 219, 219), #eceaea, rgb(224, 219, 219));
	}
	.wrapper__cards {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 30px;
	}
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		border-radius: 12px 10px 12px 12px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.462);
		width: 80vw;
	}
	.card img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 12px 10px 0px 0px;
	}
	.wrapper-button{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 50px;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 3rem;
		margin-top: 50px;
		font-weight: 500;
		letter-spacing: -2px;
		color: var(--ardoise);
	}

	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		padding: 0.5rem 1rem;
		z-index: 2;
		border-radius: 0px 0px 12px 12px;
		background-color: rgb(231, 226, 226);
		width: 100%;
		margin-top: 20px;
	}

	.wrapper__service-txt h3 {
		color: var(--ardoise);
		font-size: 2rem;
		font-family: var(--bebas);
	}
	.wrapper__service-txt p {
		color: rgb(82, 80, 80);
		font-size: 1rem;
		font-weight: 400;
		font-family: var(--bebas);
	}
	/* a {
		text-decoration: none;
	} */

	@media screen and (max-width: 768px) {
		/* .wrapper__services-cards {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		} */

		/* .service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			padding: 1rem;
			height: 400px;
			width: 100%;
		} */
		.wrapper__service-txt h3 {
			font-size: 1.8rem;
		}
		section h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
	}
</style>
