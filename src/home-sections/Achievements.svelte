<script>
	import Slider from '$lib/component/Slider.svelte';
</script>

<section>
	<h2>Nos dernières réalisations</h2>
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
		height: 900px;
		z-index: 0;
		gap: 0px;
		overflow: hidden;
		background-image: url(../assets/bg-Actu.webp);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 3.7rem;
		color: rgb(48, 46, 46);
		margin-top: 50px;
		font-weight: var(--bold);
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
