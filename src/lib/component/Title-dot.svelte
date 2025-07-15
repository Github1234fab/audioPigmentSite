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
		font-size: 2.7rem;
		font-weight: var(--extra-bold);
		margin-bottom: 10px;
		font-family: var(--raleway);
		text-align: center;
		color: var(--ardoise);
		letter-spacing: -0.8px;
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

	@media screen and (max-width: 490px) {
		.card {
			height: 300px;
			width: 300px;
			aspect-ratio: 0;
		}

		.title {
			font-size: 1.5rem;
		}
	}
</style>
