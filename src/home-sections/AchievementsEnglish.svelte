<script>
	import Slider from '$lib/component/Slider.svelte';
</script>

<section>
	<h2>Our Latest Projects</h2>
	<div class="wrapper__slider-logos"><Slider /></div>

</section>

<style>
	section {
		display: block; /* Passage en mode bloc */
		text-align: center;
		padding: var(--space-xl) 0;
		position: relative;
		overflow: hidden;
		background-image: url(../assets/bg-Actu.webp);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		min-height: 600px;
	}

	/* Overlay pour la lisibilité */
	section::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(255, 255, 255, 0.4);
		z-index: 1;
	}

	h2 {
		position: relative;
		z-index: 2;
		font-size: var(--fs-h2);
		color: var(--ardoise);
	}

	.wrapper__slider-logos {
		position: relative;
		z-index: 2;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 768px) {
		section {
			padding: var(--space-lg) 0;
			min-height: 500px;
		}
	}
</style>
