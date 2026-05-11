<script>
	export let txt;
	export let href = ''; // destination du lien
</script>

<a href={href} class="btn">
	<span>{txt}</span>
  </a>


<style>
	.btn {
		display: inline-block;
		background-color: var(--ardoise);
		font-family: var(--font-heading);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 700;
		color: var(--white);
		border: 1px solid var(--ardoise);
		padding: 14px 40px;
		font-size: 0.9rem;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: color 0.4s ease;
		text-decoration: none;
		border-radius: 4px;
	}

	.btn::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--white);
		z-index: 1;
		transform: translateX(-100.5%);
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.btn:hover::after {
		transform: translateX(0);
	}

	.btn span {
		position: relative;
		z-index: 2;
		transition: color 0.4s ease;
	}

	.btn:hover span {
		color: var(--ardoise);
	}
	a{
		text-decoration: none;

	}
</style>
