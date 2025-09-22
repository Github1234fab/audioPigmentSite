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
		background: linear-gradient(to top, rgba(0, 0, 0, 0.647) 80%, transparent 100%);
		color: white;
		padding: 10px;
		box-sizing: border-box;
	}

	h3 {
		margin: 0 0 10px;
		font-size: 1.1rem;
		font-weight: 600;
		font-family: var(--bebas);
		font-weight: var(--extra-bold);
		text-transform: lowercase
	}

	

</style>
