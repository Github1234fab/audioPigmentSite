<script>
	import Btn from '$lib/component/btn-black-border.svelte';
	import Slider from '$lib/component/Slider.svelte';
</script>

<section>
	<h1>Latest News</h1>
	<p>Discover some of our latest projects and stay up to date with our news</p>
	<div class="wrapper__footer-infos-following">
		<a
			href="https://www.facebook.com/p/Audio-Pigment-100047378936341/?locale=fr_FR"
			target="_blank"
			aria-label="link"
			class="social-link"><i class="fa-brands fa-facebook fa-2xl"></i></a
		>
		<a
			href="https://www.instagram.com/explore/locations/224133827636515/audio-pigment/"
			target="_blank"
			aria-label="link"
			class="social-link"><i class="fa-brands fa-instagram fa-2xl"></i></a
		>
		<a
			href="https://www.youtube.com/@StudioAudioPigment"
			target="_blank"
			aria-label="link"
			class="social-link"><i class="fa-brands fa-youtube fa-2xl"></i></a
		>
	</div>
	<Btn txt="Get in touch" href="/fr/contact" />
	<Slider />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-image: url('../../../assets/bg-Actu.webp');
		background-size: cover;
		background-position: center;

		background-repeat: no-repeat;
		color: white;
		padding: 2rem;
		height: 100%;
		gap: 20px;
	}
	section h1 {
		font-family: var(--bebas);
		color: var(--ardoise);
		font-size: 5rem;
		margin-top: 50px;
		font-weight: 600;
		letter-spacing: -2.5px;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-top: 20px;
		max-width: 800px;
		font-weight: var(--regular);
		color: var(--ardoise);
	}
	.social-link {
		color: var(--red);
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		transition: 0.3s ease-in-out;
	}
	.social-link:hover {
		transform: scale(1.3);
	}
	.wrapper__footer-infos-following {
		display: flex;
		gap: 0px;
		margin-top: 10px;
		margin-bottom: 20px;
	}
</style>
