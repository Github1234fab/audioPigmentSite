<script>
	// import ThreeComponent from '$lib/component/Three-component.svelte';
	import ThreeComponent from '$lib/component/Vumetre-three.svelte';

	import Button from '$lib/component/btn-black.svelte';
	import ButtonWhite from '$lib/component/btn-white.svelte';
</script>

<section>
	<div class="wrapper__txt">
		<h1>Agence de communication sonore</h1>
		<h2>
			Studio post production son, voix off, doublage, identité sonore, sound design, composition
			musicale, mixage
		</h2>
		<div class="wrapper__component">
			<ThreeComponent />
		</div>
		<div class="wrapper__buttons">
			<Button txt="Nous contacter" href="/fr/contact" />
			<ButtonWhite txt="Nous écouter" href="/fr/realisations" />
		</div>
	</div>
</section>

<style>
	section {
		z-index: 0;
		height: 800px;
		position: relative;
	}

	.wrapper__component {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 100%;
		width: 100%;
	}

	.wrapper__txt {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-family: var(--raleway);
		color: rgb(14, 14, 14);
		z-index: 3;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	.wrapper__buttons {
		display: flex;
		margin-top: 50px;
	}

	h1 {
		font-family: var(--bebas);
		font-size: 4.5rem;
		width: 90%;
		margin: 0 auto;
		font-weight: 400;
		letter-spacing: -2px;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: var(--medium);
		width: 90%;
		margin: 0 auto;
	}

	@media screen and (max-width: 768px) {
		section {
			height: 1000px;
		}
		.wrapper__txt {
			position: absolute;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
			gap: 30px;
		}
		.wrapper__buttons {
			display: flex;
			flex-direction: column;
			margin-top: 10px;
			gap: 0px;
		}

		h1 {
			font-size: 3.2rem;
			margin-top: 5rem;
			line-height: 1.2;
		}
		h2 {
			font-size: 1rem;
		}
	}
</style>
