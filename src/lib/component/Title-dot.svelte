<script>
	export let title;
</script>

<div class="card">
	<div class="dot"></div>

	<h2 class="title">{title}</h2>
</div>

<style>
	.card {
		border-radius: 0px;
		padding: 15px 30px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: black;
		font-family: var(--raleway);
		z-index: 0;
		border: 1px solid var(--ardoise);
		margin-top: 100px;
	}

	.dot {
		width: 5px;
		aspect-ratio: 1;
		background-color: rgba(255, 0, 0, 1);
		border-radius: 50%;
		position: absolute;
		top: 0%;
		left: 0%;
		transform: translate(-50%, -50%);
		z-index: 2;
		box-shadow: 0px 10px 5px rgb(20, 20, 20);
		animation: moveDot 5s linear infinite;
	}

	.title {
		font-size: 4rem;
		margin-bottom: 10px;
		font-family: var(--bebas);
		text-align: center;
		color: var(--ardoise);
		font-weight: 400;
		letter-spacing: -1.5px;
		width: 100%;
	}

	@keyframes moveDot {
		0% {
			top: 0%;
			left: 0%;
		}
		25% {
			top: 0%;
			left: 100%;
		}
		50% {
			top: 100%;
			left: 100%;
		}
		75% {
			top: 100%;
			left: 0%;
		}
		100% {
			top: 0%;
			left: 0%;
		}
	}


	@media screen and (max-width: 768px) {
		.card {
			height: 150px;
			width: 450px;
			aspect-ratio: 0;
			margin-bottom: 30px;
		}

		.title {
			font-size: 3.5rem;
		}
	}
	@media screen and (max-width: 490px) {
		.card {
			height: 150px;
			width: 300px;
			aspect-ratio: 0;
			margin-bottom: 30px;
		}

		.title {
			font-size: 2.5rem;
		}
	}
</style>
