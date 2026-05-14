<script>
	export let txt;
	export let href = ''; // destination du lien


</script>

<!-- <button class="btn"><span>{txt} </span></button> -->
<a {href} class="btn">
	<span>{txt}</span>
</a>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--accent); /* Rouge pour Nous écouter */
		font-family: var(--font-main);
		font-weight: 600;
		color: var(--white);
		padding: 12px 32px;
		font-size: 1rem;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: var(--transition);
		box-shadow: var(--shadow-lg);
		border-radius: var(--radius-sm);
		text-decoration: none;
	}

	.btn::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background-color: var(--white); /* Slide Blanc */
		z-index: 1;
		transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.btn:hover::after {
		left: 0%;
	}

	.btn span {
		position: relative;
		z-index: 2;
		transition: color 0.4s ease;
	}

	.btn:hover span {
		color: var(--accent); /* Texte devient rouge sur fond blanc */
	}
</style>
