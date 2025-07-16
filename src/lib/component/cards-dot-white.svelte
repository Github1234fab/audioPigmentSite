<script>
	export let title;
	export let subtitle;
	import Btn from '$lib/component/btn-black-shadow.svelte';
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
		background: linear-gradient(white, grey);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: black;
		font-family: var(--raleway);
		z-index: 0;
	}
	.wrapper__txt{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 10px;
		background-color: rgb(255, 255, 255);
		height: 320px;
		aspect-ratio: 1.3;
	}
	.card:hover .dot {
		width: 10px;
		aspect-ratio: 1;
		animation: moveDot 10s linear infinite;
	}
	

	.dot {
		width: 0px;
		aspect-ratio: 1;
		background-color: rgba(255, 0, 0, 1);
		border-radius: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		z-index: 2;
		box-shadow: 0px 0px 5px rgb(20, 20, 20);
		
	}

	.title {
		font-size: 2rem;
		font-weight: var(--bold);
		margin-bottom: 10px;
		font-family: var(--raleway);
		text-align: center;
		color: var(--ardoise);
		letter-spacing: -0.8px;
		width: 100%;
	}

	.subtitle {
		font-size: 1rem;
		font-weight: var(--regular);
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

	@media screen and (max-width: 490px) {
	
	.card{
	height: 300px;
			width: 300px;
			aspect-ratio: 0;
		}
		.wrapper__txt {
			height: 300px;
			width: 100%;
			aspect-ratio: 0;
		}
		.title {
			font-size: 1.5rem;
		}
		.subtitle {
			font-size: 0.9rem;
		}
		
	}
		
	
</style>
