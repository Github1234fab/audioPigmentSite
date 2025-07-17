<!-- <script>
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
	<a href="/"><img src={Logo} class="logo" alt="Logo Audio Pigment" width="100" height="100" />Audio Pigment</a>
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
		justify-content: space-around;
		align-items: center;
		height: 60px;
		padding: 20px;
		background-color: transparent;
		letter-spacing: -0.5px;
		z-index: 2;
	}

	a {
		color: rgb(66, 65, 65);
		text-decoration: none;
		font-family: var(--raleway);
		font-weight: var(--regular);
		font-size: 1rem;
		display: flex;
		gap: 3px;
		align-items: center;
		justify-content: center;
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
		height: 30px;
		width: 30px;
		border-radius: 50%;
	}
</style> -->

<script>
	import { page } from '$app/stores';
	import Logo from '../assets/audio-pigment-logo.jpg';
	import French from '../assets/Français.png';
	import English from '../assets/Anglais.png';

	// Récupérer la langue actuelle
	$: lang = $page.url.pathname.split('/')[1];

	// Dictionnaire de traductions
	const translations = {
		fr: {
			navItems: [
				{ label: 'Notre expertise', path: 'expertise' },
				{ label: 'Nos réalisations', path: 'realisations' },
				{ label: 'Nos prestations', path: 'services' },
				{ label: 'Nos studios', path: 'studios' },
				{ label: 'Notre actu', path: 'actu' },
				{ label: 'À propos', path: 'À propos' },
				{ label: 'Contact', path: 'contact' }
			]
		},
		en: {
			navItems: [
				{ label: 'Expertise', path: 'expertise' },
				{ label: 'Our Work', path: 'realisations' },
				{ label: 'Our Services', path: 'services' },
				{ label: 'Studios', path: 'studios' },
				{ label: 'News', path: 'actu' },
				{ label: 'About', path: 'about' },
				{ label: 'Contact', path: 'contact' }
			]
		}
	};

	function switchLanguage(newLang) {
		let newPath = $page.url.pathname.replace(/^\/(fr|en)/, `/${newLang}`);
		window.location.href = newPath;
	}
</script>

<nav>
	<a href="/" class="home-link">
		<img src={Logo} class="logo" alt="Logo Audio Pigment" width="100" height="100" />
		Audio Pigment
	</a>

	{#if translations[lang]}
		{#each translations[lang].navItems as item}
			<a href="/{lang}/{item.path}">{item.label}</a>
		{/each}
	{/if}

	<div class="wrapper__buttons">
		<button class="buttons-switch" on:click={() => switchLanguage('fr')}>
			<img class="flag" src={French} alt="Drapeau Français" />
		</button>
		<button class="buttons-switch" on:click={() => switchLanguage('en')}>
			<img class="flag" src={English} alt="English Flag" />
		</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100px;
		padding: 20px;
		background-color: transparent;
		letter-spacing: -0.5px;
		z-index: 2;
		flex-wrap: wrap;
	}

	a {
		color: rgb(66, 65, 65);
		text-decoration: none;
		font-family: var(--raleway);
		font-weight: var(--regular);
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.4rem 0.8rem;
		transition: color 0.2s ease;
	}

	a:hover {
		color: var(--primary-color, #ce2d2d);
	}

	.home-link {
		font-weight: bold;
		font-size: 1.1rem;
		border: 1px solid rgb(226, 226, 226);
	}

	.buttons-switch {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		color: black;
		font-size: 0.8rem;
		cursor: pointer;
		border-radius: 5px;
		height: 30px;
		width: 30px;
		transition: 0.2s ease-in-out;
	}

	.buttons-switch:hover {
		transform: scale(1.1);
	}

	.wrapper__buttons {
		display: flex;
		gap: 5px;
	}

	.logo {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		margin-right: 6px;
	}
	.flag {
		height: 100%;
		width: auto;
	}
</style>
