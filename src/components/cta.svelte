<script>
	export let btnTxt = 'Démarrer';
</script>

<button class="btn-grad">{btnTxt}</button>

<style>
	.btn-grad {
		background-color: whitesmoke;
		font-size: 1rem;
		font-weight: 500;
		padding: 10px 25px;
		letter-spacing: -0.5px;
		text-align: center;
		color: #212121;
		border-radius: 10px;
		border: none;
		z-index: 3;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.448);
		transition: 0.5s;
	}

	.btn-grad:hover {
		background-color: #212121;
		color: whitesmoke;
		text-decoration: none;
	}
</style>
