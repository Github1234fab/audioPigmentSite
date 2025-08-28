<script>
	export let txt;
	export let href = ''; // destination du lien
</script>

<!-- <button class="btn"><span>{txt} </span></button> -->
<a href={href} class="btn">
	<span>{txt}</span>
  </a>

<style>
	.btn {
		margin-top: 20px;
		margin-left: 20px;
		background-color: var(--red);
		font-family: var(--raleway);
		font-weight: var(--bold);
		color: white;
		padding: 13px 40px;
		font-size: 1rem;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: color 0.6s ease;
    
	outline: none;  
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
		color: var(--ardoise);
		font-weight: var(--bold);
	}
	a{
		text-decoration: none;
	}
</style>
