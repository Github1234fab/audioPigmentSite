<script>
	import { page } from '$app/stores';
	import Logo from '../assets/audio-pigment-logo.jpg';

	// Récupérer la langue actuelle
	$: lang = $page.url.pathname.split('/')[1];

	// Dictionnaire de traductions
	const translations = {
		fr: {
			about: 'À propos',
			references: 'Références',
			contact: 'Contact'
		},
		en: {
			about: 'About',
			references: 'References',
			contact: 'Contact'
		}
	};

	// Fonction pour changer la langue
	function switchLanguage(newLang) {
		let newPath = $page.url.pathname.replace(/^\/(fr|en)/, `/${newLang}`);
		window.location.href = newPath; // Rediriger vers la nouvelle langue
	}
</script>

<nav>
	<a href="/"><img src={Logo} class="logo" alt="Logo Audio Pigment" width="100" height="100" /></a>
	<a href="/{lang}/about">{translations[lang]?.about}</a>
	<a href="/{lang}/references">{translations[lang]?.references}</a>
	<a href="/{lang}/contact">{translations[lang]?.contact}</a>
	<div class="wrapper__buttons">
		<button class="buttons-switch" on:click={() => switchLanguage('fr')}>🇫🇷 FR</button>
		<button class="buttons-switch" on:click={() => switchLanguage('en')}>🇬🇧 EN</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		padding: 20px;
	}

	a {
		color: rgb(31, 30, 30);
		text-decoration: none;
	}

	.buttons-switch {
		background: none;
		border: none;
		color: white;
		font-size: 0.8rem;
		cursor: pointer;
		border: 1px solid grey;
		padding: 5px;
		border-radius: 5px;
	}
	.buttons-switch:hover {
		background: grey;
		border: 1px solid white;
	}
	.logo {
		/* border-radius: 50%; */
		height: 40px;
		width: 30px;
	}
</style>
