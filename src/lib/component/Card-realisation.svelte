<script>
	export let title;
	// export let type;
	// export let technique;
	export let image; // URL de l'image de fond


	function test() {
		console.log('test');
	}
</script>

<div class="card" style="background-image: url({image})">
	<div class="overlay">
		<h3>{title}</h3>
		<!-- <div class="tags">
			<span class="tag">{type}</span>
			<span class="tag">{technique}</span>
		</div> -->
	</div>
</div>

<style>
	.card {
		position: relative;
		aspect-ratio: 16/9;
		width: 100%;
		max-width: 450px;
		background-size: cover;
		background-position: center;
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-lg);
		display: flex;
		align-items: flex-end;
		transition: var(--transition);
		cursor: pointer;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 30px 60px rgba(0,0,0,0.4);
	}

	.overlay {
		width: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
		color: var(--white);
		padding: var(--space-md);
		box-sizing: border-box;
		transition: var(--transition);
	}

	h3 {
		margin: 0;
		font-size: 1.1rem;
		font-family: var(--font-heading);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		line-height: 1.2;
	}

	@media (max-width: 768px) {
		.card {
			max-width: 100%;
		}

		h3 {
			font-size: 1.2rem;
		}
	}

	

</style>
