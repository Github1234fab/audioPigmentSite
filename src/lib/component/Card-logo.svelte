<script>
	export let image;
	export let href = "";
</script>

<a href={href} target="_blank"><div class="card"><img class="img" src={image} alt="" decoding="async" /></div></a>

<style>
	.card {
		position: relative;
		height: 100px;
		width: 100%;
		/* background-size: cover;
		background-position: center;
		background-repeat: no-repeat; */
		border-radius: 5px;
		transition: transform 0.3s ease;
		background-color: white;
		padding: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Ombre plus légère par défaut */
		will-change: transform;
		backface-visibility: hidden;
	}
	.img {
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
	}

	.card:hover {
		transform: scale(0.95);
	}

	@media (max-width: 768px) {
		.card {
			box-shadow: none; /* Crucial pour la fluidité sur mobile */
			border: 1px solid rgba(0,0,0,0.05); /* Remplacement par une bordure fine */
		}
	}
</style>
