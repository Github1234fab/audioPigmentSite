<script>
	export let image;
	export let href = "";
</script>

<a href={href} target="_blank"><div class="card"><img class="img" src={image} alt="" /></div></a>

<style>
	.card {
		position: relative;
		height: 90px;
		width: auto;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px;
		transition: transform 0.3s ease;
		background-color: white;
		padding: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}
	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}

	.card:hover {
		transform: scale(0.9);
	}
</style>
