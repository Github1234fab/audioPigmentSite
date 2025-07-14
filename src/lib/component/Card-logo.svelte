<script>
	export let image;
</script>


<div class="card"><img class="img" src={image} alt="" /></div>


<style>
	.card {
		position: relative;
		height: 100%;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;
		background-color: rgb(255, 255, 255);
		padding: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.img {
		width: 100%;
		height: 200px;
		object-fit: contain;
		border-radius: 5px;
	}

	.card:hover {
		transform: scale(0.9);
	}
</style>
