<script>
	import { page } from '$app/stores';

	// Récupérer la langue actuelle
	$: lang = $page.url.pathname.split('/')[1];

	// Fonction pour changer la langue
	function switchLanguage(newLang) {
		let newPath = $page.url.pathname.replace(/^\/(fr|en)/, `/${newLang}`);
		window.location.href = newPath; // Rediriger vers la nouvelle langue
	}
</script>

<!-- place files you want to import through the `$lib` alias in this folder. -->

<nav>
	<a href="/{lang}/about">about</a>
	<a href="/{lang}/références">références</a>
	<a href="/{lang}/contact">contact</a>

	<button on:click={() => switchLanguage('fr')}>🇫🇷 FR</button>
	<button on:click={() => switchLanguage('en')}>🇬🇧 EN</button>
</nav>
