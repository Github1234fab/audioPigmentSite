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
		<img src={Logo} class="logo" alt="Logo Audio Pigment"/>
		Audio Pigment
	</a>

	<!-- Burger (caché en desktop, visible sous 768px) -->
	<button class="burger" aria-label="Ouvrir le menu" on:click={() => menuOpen = !menuOpen}>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>
	
	<!-- Menu principal -->
	<div class="main-menu {menuOpen ? 'open' : ''}">
		{#if translations[lang]}
			{#each translations[lang].navItems as item}
				<a href="/{lang}/{item.path}" on:click={closeMenu}>{item.label}</a>
			{/each}
		{/if}

		<div class="wrapper__buttons">
			<button class="buttons-switch" on:click={() => { closeMenu(); switchLanguage('fr'); }}>
				<img class="flag" src={French} alt="Drapeau Français" />
			</button>
			<button class="buttons-switch" on:click={() => { closeMenu(); switchLanguage('en'); }}>
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
  font-family: var(--raleway)
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
  padding: .5em .2em;
}

.wrapper__buttons {
  display: flex;
  gap: .5em;
  margin-left: .6em;
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

/* ----- Responsive ------ */
@media (max-width: 1200px) {
  .main-menu {
    position: absolute;
    left: 0; right: 0;
    top: 100%;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2em;
    padding: 2em 1.5em 1.5em;
    display: none;
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  }
  .main-menu.open {
    display: flex;
  }
  .burger {
    display: flex;
  }
  .main-menu a {
    padding: .7em 0;
    width: 100%;
  }
  .wrapper__buttons {
    margin-left: 0;
  }
}
</style>
