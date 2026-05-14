<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			visible = true;
		}
	});

	function accept() {
		localStorage.setItem('cookie-consent', 'accepted');
		visible = false;
	}

	function refuse() {
		localStorage.setItem('cookie-consent', 'refused');
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie-banner" in:fade={{ duration: 400 }} out:fade={{ duration: 300 }}>
		<div class="content">
			<div class="text">
				<p>
					Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic sur notre site. 
					En continuant votre visite, vous acceptez leur utilisation.
					<a href="/fr/cgu" class="link">En savoir plus</a>
				</p>
			</div>
			<div class="buttons">
				<button on:click={refuse} class="btn btn-refuse">Refuser</button>
				<button on:click={accept} class="btn btn-accept">Accepter</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		max-width: 800px;
		background: rgba(18, 18, 19, 0.85);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 1.5rem 2rem;
		z-index: 10000;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.text p {
		color: rgba(255, 255, 255, 0.9);
		font-family: var(--font-main);
		font-size: 0.9rem;
		line-height: 1.5;
		margin: 0;
	}

	.link {
		color: var(--accent);
		text-decoration: underline;
		margin-left: 5px;
		transition: var(--transition);
	}

	.link:hover {
		color: white;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		flex-shrink: 0;
	}

	.btn {
		padding: 0.6rem 1.2rem;
		border-radius: 50px;
		font-family: var(--font-main);
		font-weight: 700;
		font-size: 0.85rem;
		cursor: pointer;
		transition: var(--transition);
		border: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.btn-refuse {
		background: transparent;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.btn-refuse:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: white;
	}

	.btn-accept {
		background: var(--accent);
		color: white;
	}

	.btn-accept:hover {
		background: #a32219;
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		.cookie-banner {
			bottom: 1rem;
			padding: 1.5rem;
		}
		.content {
			flex-direction: column;
			gap: 1.2rem;
			text-align: center;
		}
		.buttons {
			width: 100%;
			justify-content: center;
		}
		.btn {
			flex: 1;
		}
	}
</style>
