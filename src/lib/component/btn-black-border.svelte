<script>
	export let txt;
	export let href = ''; // destination du lien
</script>

<a href={href} class="btn">
	<span>{txt}</span>
  </a>


<style>
	.btn {
		margin-top: 20px;
		margin-left: 20px;
		background-color: var(--ardoise);
		font-family: var(--raleway);
		font-weight: var(--medium);
		color: white;
		border: 1px solid var(--ardoise);
		padding: 13px 40px;
		font-size: 1rem;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: color 0.6s ease;
		border: 1px solid white;
	}

	.btn::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 1;
		transition: left 0.6s ease-in-out;
	}

	.btn:hover::after {
		left: 0%;
	}

	.btn span {
		position: relative;
		z-index: 2;
		transition: color 0.5s ease;
	}

	.btn:hover span {
		color: black;
	}
	a{
		text-decoration: none;

	}
</style>
