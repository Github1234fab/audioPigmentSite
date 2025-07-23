<!-- <script>
	import { page } from '$app/stores';
	import Logo from '../assets/audio-pigment-logo.jpg';
	import French from '../assets/Français.png';
	import English from '../assets/Anglais.png';
	import { fade } from 'svelte/transition';

	let menuOpen = false;

	$: lang = $page.url.pathname.split('/')[1];

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

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav>
	<a href="/" class="home-link">
		<img src={Logo} class="logo" alt="Logo Audio Pigment" />
		Audio Pigment
	</a>


	<button class="burger" aria-label="Ouvrir le menu" on:click={() => (menuOpen = !menuOpen)}>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>



	<div class="main-menu {menuOpen ? 'open' : ''}">
		{#if translations[lang]}
			{#each translations[lang].navItems as item}
				<a href="/{lang}/{item.path}" on:click={closeMenu}>{item.label}</a>
			{/each}
		{/if}

		<div class="wrapper__buttons">
			<button
				class="buttons-switch"
				on:click={() => {
					closeMenu();
					switchLanguage('fr');
				}}
			>
				<img class="flag" src={French} alt="Drapeau Français" />
			</button>
			<button
				class="buttons-switch"
				on:click={() => {
					closeMenu();
					switchLanguage('en');
				}}
			>
				<img class="flag" src={English} alt="English Flag" />
			</button>
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em 2em;
		background: white;
		position: relative;
		z-index: 10;
		font-family: var(--raleway);
	}
	.home-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		font-weight: var(--medium);
		font-size: 0.8rem;
		gap: 5px;
	}
	.logo {
		height: 50px;
		width: 50px;
		object-fit: fill;
		border-radius: 50%;
	}
	.main-menu {
		display: flex;
		align-items: center;
		gap: 2em;
	}
	.main-menu a {
		text-decoration: none;
		color: inherit;
		padding: 0.5em 0.2em;
	}

	.wrapper__buttons {
		display: flex;
		gap: 0.5em;
		margin-left: 0.6em;
	}
	.buttons-switch {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}
	.flag {
		width: 32px;
		height: 24px;
	}

	.burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		justify-content: center;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 200;
		width: 35px;
		height: 35px;
		margin-left: 1em;
	}
	.bar {
		width: 100%;
		height: 4px;
		background: #222;
		border-radius: 2px;
		transition: 0.3s;
	}

	@media (max-width: 1200px) {
		.main-menu {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			background: rgba(255, 255, 255, 0.8);
			flex-direction: column;
			align-items: flex-start;
			gap: 1.2em;
			padding: 2em 1.5em 1.5em;
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
			backdrop-filter: blur(10px);
			border-radius: 0 0 10px 10px;
			transition: all 0.3s ease-in-out;
			font-weight: bold;
			opacity: 0;
			pointer-events: none;
			transform: translateY(-20px);
			transition:
				opacity 0.45s,
				transform 0.45s;
		}
		.main-menu.open {
			display: flex;
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}

		.burger {
			display: flex;
		}
		.main-menu a {
			padding: 0.7em 0;
			width: 100%;
		}
		.wrapper__buttons {
			margin-left: 0;
		}
	}
</style> -->

<script>
	import { page } from '$app/stores';
	import Logo from '../assets/audio-pigment-logo.jpg';
	import French from '../assets/pimsFrenchFlag.png';
	import English from '../assets/pimsEnglishFlag.png';
	import { fade } from 'svelte/transition';
	import { locale } from 'svelte-i18n';

	let menuOpen = false;
	// Initialise lang avec une valeur sûre
	let lang = 'fr';

	// Met à jour lang et le store locale quand la route change
	$: if ($page?.url?.pathname) {
		lang = $page.url.pathname.split('/')[1] || 'fr';
		if (lang === 'fr' || lang === 'en') {
			locale.set(lang);
		} else {
			locale.set('fr');
		}
	}

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
		// Si on est à la racine "/", il faut ajouter le préfixe
		if (newPath === '/' || newPath === '') {
			newPath = `/${newLang}`;
		}
		window.location.href = newPath;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav>
	<a href="/" class="home-link">
		<img src={Logo} class="logo" alt="Logo Audio Pigment" />
		Audio Pigment
	</a>

	<button class="burger" aria-label="Ouvrir le menu" on:click={() => (menuOpen = !menuOpen)}>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>

	<div class="main-menu {menuOpen ? 'open' : ''}">
		{#if translations[lang]}
			{#each translations[lang].navItems as item}
				<a href="/{lang}/{item.path}" on:click={closeMenu}>{item.label}</a>
			{/each}
		{/if}

		<div class="wrapper__buttons">
			<button
				class="buttons-switch"
				on:click={() => {
					closeMenu();
					switchLanguage('fr');
				}}
			>
				<img class="flag" src={French} alt="Drapeau Français" />
			</button>
			<button
				class="buttons-switch"
				on:click={() => {
					closeMenu();
					switchLanguage('en');
				}}
			>
				<img class="Enflag" src={English} alt="English Flag" />
			</button>
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em 2em;
		background: white;
		position: relative;
		z-index: 10;
		font-family: var(--raleway);
	}
	.home-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		font-weight: var(--medium);
		font-size: 0.8rem;
		gap: 5px;
	}
	.logo {
		height: 50px;
		width: 50px;
		object-fit: fill;
		border-radius: 50%;
	}
	.main-menu {
		display: flex;
		align-items: center;
		gap: 2em;
	}
	.main-menu a {
		text-decoration: none;
		color: inherit;
		padding: 0.5em 0.2em;
	}

	.wrapper__buttons {
		display: flex;
		gap: 0.5em;
		margin-left: 0.6em;
	}
	.buttons-switch {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}
	.flag {
		width: 22px;
		height:22px;
	}
	.Enflag {
		width: 28px;
		height: 28px;
	}

	.burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		justify-content: center;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 200;
		width: 35px;
		height: 35px;
		margin-left: 1em;
	}
	.bar {
		width: 100%;
		height: 4px;
		background: #222;
		border-radius: 2px;
		transition: 0.3s;
	}

	@media (max-width: 1200px) {
		.main-menu {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			background: rgba(255, 255, 255, 0.8);
			flex-direction: column;
			align-items: flex-start;
			gap: 1.2em;
			padding: 2em 1.5em 1.5em;
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
			backdrop-filter: blur(10px);
			border-radius: 0 0 10px 10px;
			transition: all 0.3s ease-in-out;
			font-weight: bold;
			opacity: 0;
			pointer-events: none;
			transform: translateY(-20px);
			transition:
				opacity 0.45s,
				transform 0.45s;
		}
		.main-menu.open {
			display: flex;
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}

		.burger {
			display: flex;
		}
		.main-menu a {
			padding: 0.7em 0;
			width: 100%;
		}
		.wrapper__buttons {
			margin-left: 0;
		}
	}
</style>
