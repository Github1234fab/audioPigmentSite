<script>
	import Slider from '$lib/component/Slider.svelte';
</script>

<section>
	<h2>Our Latest Projects</h2>
	<div class="wrapper__slider-logos"><Slider /></div>
</section>

<style>
	.wrapper__slider-logos {
		width: 100%;
		min-height: 200px;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background-color: var(--ardoise);
		height: 75vh;
		z-index: 0;
		gap: 0px;
		overflow: hidden;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 3.5rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -1.5px;
	}


	@media (max-width: 768px) {
		section {
			height: 70vh;
		}
		section h2 {
			font-size: 3rem;
		}
	}
	.wrapper__slider-logos {
		width: auto;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		section {
			gap: 50px;
		}
		.wrapper__slider-logos {
			width: 600px;
			height: 300px;
		}
	}

	@media screen and (max-width: 480px) {
		section {
			gap: 50px;
		}
		.wrapper__slider-logos {
			width: 300px;
			height: 300px;
		}
	}
</style>
