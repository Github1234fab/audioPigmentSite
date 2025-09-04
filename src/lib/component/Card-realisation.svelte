<script>
	export let title;
	export let type;
	export let technique;
	export let image; // URL de l'image de fond


	function test() {
		console.log('test');
	}
</script>

<div class="card" style="background-image: url({image})">
	<div class="overlay">
		<h3>{title}</h3>
		<div class="tags">
			<span class="tag">{type}</span>
			<span class="tag">{technique}</span>
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		aspect-ratio: 1;
		height: 200px;
		background-size: cover;
		background-position: center;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 20px 20px rgba(0, 0, 0, 0.457);
		display: flex;
		align-items: flex-end;
		transition: transform 0.3s ease;
		z-index: 4;
		cursor: pointer;
		margin: 5px;
	}

	.card:hover {
		transform: scale(1.02);
	}

	.overlay {
		width: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.858) 70%, transparent 100%);
		color: white;
		padding: 10px;
		box-sizing: border-box;
	}

	h3 {
		margin: 0 0 10px;
		font-size: 1.2rem;
		font-weight: 600;
		font-family: var(--raleway);
		font-weight: var(--extra-bold);
		text-transform: lowercase;
	}

	.tags {
		display: flex;
		gap: 5px;
		text-transform: lowercase;
	}

	.tag {
		font-family: var(--raleway);
		font-weight: var(--extra-bold);
		background-color: rgb(156, 53, 53);
		border-radius: 10px;
		padding: 5px 12px;
		font-size: 0.75rem;
		font-weight: 500;
		pointer-events: none; /* rend le bouton non cliquable */
		user-select: none;
	}
</style>
