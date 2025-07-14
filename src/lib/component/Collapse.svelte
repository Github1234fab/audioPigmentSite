<script>
	export let title;
	export let p;

	import { fade, slide } from 'svelte/transition';
	import Arrow from '../../assets/arrow.png';
	import Button from '$lib/component/btn-black-shadow.svelte';

	let close = false;

	function collapse() {
		close = !close;
	}
</script>

<div class="wrapper">
	<button class="button" on:click={collapse}>
		<h2 class="title">{title}</h2>

		<!-- Flèche qui tourne -->
		<span class="button-after">
			<div class="arrow" transition:fade>{close ? '-' : '+'}</div>
		</span>
	</button>

	<!-- Contenu avec transition combinée -->
	{#if close}
		<div class="content" transition:slide={{ duration: 1000 }}>
			<p class="p">{p}</p>
			<Button txt="En savoir +" />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90vw;
	}

	.button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		cursor: pointer;
		text-align: center;
		margin-bottom: 10px;
		width: 80%;
		border: 1px solid var(--ardoise);
		background-color: white;
		z-index: 0;
	}
	.button:hover {
		background-color: rgb(250, 229, 229);
		color: white;
	}

	.button-after {
		position: absolute;
		color: var(--secondary);
		font-size: 1em;
		font-weight: bolder;
		right: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		background-color: black;
	}
	.button-after:hover .arrow {
		transform: rotate(180deg);
		transition: transform 0.3s ease;
	}
	.arrow {
		font-size: 1.5em;
		font-weight: bold;
		color: white;
		transition: none;
		z-index: 1;
	}
	.arrow:hover {
		transform: rotate(180deg);
		transition: transform 0.3s ease;
	}

	.title {
		font-family: var(--raleway);
		font-size: 1.7em;
		letter-spacing: -1px;
		font-weight: var(--regular);
		width: 50%;
		color: var(--ardoise);
		padding: 20px;
	}

	.content {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 50px;
		border-radius: 0px;
		margin-bottom: 80px;
		border: 1px solid grey;
		background-color: transparent;
	}

	.p {
		white-space: pre-line;
		font-family: var(--raleway);
		text-align: center;
		font-weight: var(--medium);
		width: 100%;
		color: var(--ardoise);
		padding: 20px;
		line-height: 1.7;
	}

	@media screen and (max-width: 768px) {
		.button {
			height: 100px;
			width: 100%;
			padding: 0px;
		}
		.wrapper {
			width: 100%;
			padding: 5px;
		}
		.title {
			font-family: var(--raleway);
			font-size: 1.5em;
			letter-spacing: -1px;
			font-weight: var(--regular);
			width: 100%;
			color: var(--ardoise);
		}

		.button-after {
			top: -10px;
			right: -10px;
			line-height: 30px;
			height: 5px;
			width: 5px;
			border-radius: 50%;
			padding: 15px;
		}
		.content {
			width: 97%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 10px;
			border-radius: 0px;
			margin-bottom: 80px;
			border: 1px solid grey;
			background-color: transparent;
		}
	}
</style>
