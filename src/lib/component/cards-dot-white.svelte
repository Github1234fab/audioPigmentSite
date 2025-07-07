<script>
	export let title;
	export let subtitle;
	import Btn from '$lib/component/btn-black.svelte';
	export let txt;
</script>

<div class="card">
	<div class="dot"></div>
	<div class="wrapper__txt">
	<div class="title">{title}</div>
	<div class="subtitle">{subtitle}</div>
	<Btn {txt} />
</div>
</div>

<style>
	.card {
		aspect-ratio: 1.3;
		height: 350px;
		border-radius: 0px;
		padding: 1rem;
		position: relative;
		background-color: rgb(252, 252, 252);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: black;
		font-family: var(--raleway);
		border: 1px solid black;
		z-index: 0;
	}
	.card:hover .dot {
		width: 10px;
		aspect-ratio: 1;
		animation: moveDot 12s linear infinite;
	}
	.wrapper__txt{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 10px;
		background-color: rgb(255, 255, 255);
		padding: 1rem;
		height: 300px;
		aspect-ratio: 1.3;
	}

	.dot {
		width: 5px;
		aspect-ratio: 1;
		background-color: var(--red);
		border-radius: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		z-index: 2;
		box-shadow: 0px 0px 5px rgb(20, 20, 20);
		
	}

	.title {
		font-size: 3rem;
		font-weight: var(--extra-bold);
		margin-bottom: 10px;
		font-family: var(--bebas);
		text-align: center;
		color: var(--ardoise);
	}

	.subtitle {
		font-size: 1rem;
		font-weight: var(--medium);
		margin-bottom: 0px;
		white-space: pre-line;
		text-align: center;
	}

	@keyframes moveDot {
		0% {
			top: 0%;
			left: 0%;
		}
		25% {
			top: 0%;
			left: 100%;
		}
		50% {
			top: 100%;
			left: 100%;
		}
		75% {
			top: 100%;
			left: 0%;
		}
		100% {
			top: 0%;
			left: 0%;
		}
	}

	@media screen and (max-width: 768px) {
		.card {
			aspect-ratio: 1;
			height: 300px;
		}
		
	}
</style>
