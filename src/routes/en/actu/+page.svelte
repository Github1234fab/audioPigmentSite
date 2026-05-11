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
			aria-label="Facebook"
			class="social-link"><i class="fa-brands fa-facebook fa-xl"></i></a
		>
		<a
			href="https://www.instagram.com/explore/locations/224133827636515/audio-pigment/"
			target="_blank"
			aria-label="Instagram"
			class="social-link"><i class="fa-brands fa-instagram fa-xl"></i></a
		>
		<a
			href="https://www.youtube.com/@StudioAudioPigment"
			target="_blank"
			aria-label="YouTube"
			class="social-link"><i class="fa-brands fa-youtube fa-xl"></i></a
		>
	</div>

	<Btn txt="Get in touch" href="/en/contact" />
	
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
		color: var(--white);
		padding: var(--space-xl) var(--space-md);
		min-height: 100vh;
		gap: 20px;
	}

	section h1 {
		font-family: var(--font-heading);
		font-size: var(--fs-h1);
		color: var(--ardoise);
		font-weight: 800;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		position: relative;
		width: fit-content;
		margin-top: var(--space-xl);
		padding-bottom: 1rem;
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

	section p {
		font-family: var(--font-main);
		font-size: 1.1rem;
		line-height: 1.6;
		margin-top: var(--space-md);
		max-width: 700px;
		font-weight: 400;
		color: var(--ardoise-light);
		margin-bottom: var(--space-md);
	}

	.social-link {
		color: var(--white);
		background-color: var(--accent);
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		transition: var(--transition);
		box-shadow: var(--shadow-sm);
	}

	.social-link:hover {
		transform: translateY(-5px);
		background-color: var(--ardoise);
		box-shadow: var(--shadow-md);
	}

	.wrapper__footer-infos-following {
		display: flex;
		gap: var(--space-sm);
		margin-bottom: var(--space-lg);
	}
</style>
