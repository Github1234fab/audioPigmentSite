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
		padding: 2rem;
		background-image: radial-gradient(circle at 11% 63%, rgba(82, 82, 82,0.06) 0%, rgba(82, 82, 82,0.06) 25%,rgba(136, 136, 136,0.06) 25%, rgba(136, 136, 136,0.06) 50%,rgba(191, 191, 191,0.06) 50%, rgba(191, 191, 191,0.06) 75%,rgba(245, 245, 245,0.06) 75%, rgba(245, 245, 245,0.06) 100%),radial-gradient(circle at 16% 28%, rgba(80, 80, 80,0.06) 0%, rgba(80, 80, 80,0.06) 25%,rgba(68, 68, 68,0.06) 25%, rgba(68, 68, 68,0.06) 50%,rgba(56, 56, 56,0.06) 50%, rgba(56, 56, 56,0.06) 75%,rgba(44, 44, 44,0.06) 75%, rgba(44, 44, 44,0.06) 100%),radial-gradient(circle at 51% 54%, rgba(179, 179, 179,0.06) 0%, rgba(179, 179, 179,0.06) 25%,rgba(121, 121, 121,0.06) 25%, rgba(121, 121, 121,0.06) 50%,rgba(62, 62, 62,0.06) 50%, rgba(62, 62, 62,0.06) 75%,rgba(4, 4, 4,0.06) 75%, rgba(4, 4, 4,0.06) 100%),linear-gradient(303deg, rgb(255,255,255),rgb(255,255,255));
		height: 100vh;
		z-index: 0;
		gap: 0px;
		overflow: hidden;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 3.5rem;
		margin-bottom: 0.5rem;
		color: rgb(48, 46, 46);
		margin-top: 50px;
		font-weight: 500;
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
