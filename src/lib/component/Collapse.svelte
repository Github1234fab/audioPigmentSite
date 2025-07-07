<script>
	export let title;
	export let p;

	import { fade, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let close = false;

	function collapse() {
		close = !close;
	}

	// Transition personnalisée combinant fade + slide
	function slideFade(node, { delay = 0, duration = 300 }) {
		const f = fade(node, { delay, duration });
		const s = slide(node, { delay, duration, easing: cubicOut });

		return {
			delay,
			duration,
			css: (t) => `${f.css(t)}; ${s.css(t)}`
		};
	}
</script>

<div class="wrapper {close ? 'active' : ''}">
	<button class="button" on:click={collapse}>
		<h2 class="title">{title}</h2>

		<!-- Flèche qui tourne -->
		<span class="button-after">
			<div class="arrow-button {close ? 'rotate' : ''}">-==</div>
		</span>
	</button>

	<!-- Contenu avec transition combinée -->
	{#if close}
		<div class="content" transition:slideFade>
			<p class="p">{p}</p>
		</div>
	{/if}
</div>

<style>
	.arrow-button {
		display: inline-block;
		transition: transform 0.4s ease;
	}

	.rotate {
		transform: rotate(180deg);
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
	}

	.button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		cursor: pointer;
		text-align: center;
		margin-bottom: 10px;
		width: 80%;
		background-color: white;
		border: 1px solid var(--ardoise);
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
		padding: 10px;
	}

	.title {
		font-family: var(--bebas);
		font-size: 2.5em;
	}

	.arrow-button {
		font-family: var(--bebas);
		font-size: 2.5em;
		color: white;
		transition: transform 0.3s ease;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: var(--ardoise);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 10px;
		border: none;
	}

	.p {
		font-family: var(--raleway);
		text-align: center;
		font-weight: var(--medium);
	}

	@media screen and (max-width: 768px) {
		.button {
			font-size: 1.2em;
			height: 200px;
			line-height: 30px;
		}

		.button-after {
			right: 0px;
			margin-top: -30px;
			line-height: 30px;
		}
	}
</style>
