<script>
  import { page } from '$app/stores';
  import Logo from '../assets/logos/PIGMENT.jpg';
  import French from '../assets/pimsFrenchFlag.png';
  import English from '../assets/pimsEnglishFlag.png';
  import { fade } from 'svelte/transition';
  import { locale } from 'svelte-i18n';
  import { goto } from '$app/navigation';

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

//   function switchLanguage(newLang) {
//       let newPath = $page.url.pathname.replace(/^\/(fr|en)/, `/${newLang}`);
//       // Si on est à la racine "/", il faut ajouter le préfixe
//       if (newPath === '/' || newPath === '') {
//           newPath = `/${newLang}`;
//       }
//       window.location.href = newPath;
//   }



function switchLanguage(newLang) {
    const currentPath = $page.url.pathname;
    const segments = currentPath.split('/').filter(Boolean);
    
    // Remplacer la langue
    if (segments.length > 0) {
        segments[0] = newLang;
    } else {
        // Si on est à la racine, aller vers /newLang/home
        goto(`/${newLang}/home`);
        return;
    }
    
    // S'assurer d'avoir au moins /lang/page
    if (segments.length === 1) {
        segments.push('home');
    }
    
    goto(`/${segments.join('/')}`);
}

  function closeMenu() {
      menuOpen = false;
  }
</script>

<nav>
  <!-- <a href="/" class="home-link">
      <img src={Logo} class="logo" alt="Logo Audio Pigment" />
      Audio Pigment
  </a> -->

  <a href="/{lang}/home" class="home-link">
    <img src={Logo} class="logo" alt="Logo Audio Pigment" />
    <span>Audio Pigment</span>
</a>

  <button class="burger" class:open={menuOpen} aria-label="Menu" on:click={() => (menuOpen = !menuOpen)}>
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
              class:active={lang === 'fr'}
              on:click={() => {
                  closeMenu();
                  switchLanguage('fr');
              }}
          >
              <img class="flag" src={French} alt="Drapeau Français" />
          </button>
          <button
              class="buttons-switch"
              class:active={lang === 'en'}
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
      padding: 0.75rem 2rem;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid var(--glass-border);
      transition: var(--transition);
  }

  .home-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;
      font-weight: 700;
      font-size: 0.8rem;
      gap: 5px;
      font-family: var(--font-main);
  }

  .logo {
      height: 60px;
      width: auto;
      object-fit: contain;
      border-radius: 2px;
      transition: var(--transition);
  }

  .home-link:hover .logo {
      transform: scale(1.05);
  }

  .main-menu {
      display: flex;
      align-items: center;
      gap: 1.1rem;
  }

  .main-menu a {
      text-decoration: none;
      color: var(--ardoise-light);
      font-family: var(--font-main);
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.4rem;
      position: relative;
      transition: var(--transition);
  }

  .main-menu a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0.5rem;
      right: 0.5rem;
      height: 2px;
      background: var(--accent);
      transform: scaleX(0);
      transition: var(--transition);
  }

  .main-menu a:hover {
      color: var(--accent);
  }

  .main-menu a:hover::after {
      transform: scaleX(1);
  }

  .wrapper__buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: 1rem;
      padding-left: 1rem;
      border-left: 1px solid var(--grey);
  }

  .buttons-switch {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: var(--transition);
      opacity: 0.7;
  }

  .buttons-switch:hover, .buttons-switch.active {
      opacity: 1;
      transform: translateY(-2px);
  }

  .buttons-switch.active img {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
  }

  .flag, .Enflag {
      width: 24px;
      height: 18px;
      object-fit: cover;
      border-radius: 2px;
      box-shadow: var(--shadow-sm);
  }

  .burger {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
  }

  .bar {
      width: 24px;
      height: 2px;
      background: var(--ardoise);
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
  }

  .burger.open .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
  }

  .burger.open .bar:nth-child(2) {
      opacity: 0;
  }

  .burger.open .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 1024px) {
      nav {
          padding: 0.4rem 1rem;
      }

      .logo {
          height: 65px;
      }

      .home-link span {
          display: inline-block;
          font-size: 0.7rem;
      }

      .main-menu {
          position: fixed;
          top: 100%; /* Juste sous le header */
          left: 0;
          right: 0;
          height: auto;
          background: rgba(255, 255, 255, 1); /* Opaque sur mobile pour la performance */
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem;
          gap: 0.5rem;
          box-shadow: var(--shadow-lg);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s, visibility 0.4s;
          z-index: 90;
          border-bottom: 1px solid var(--glass-border);
      }

      .main-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
      }

      .burger {
          display: flex;
          z-index: 200;
      }

      .main-menu a {
          font-size: 1.1rem;
          width: 100%;
          text-align: center;
          padding: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
      }

      .wrapper__buttons {
          border: none;
          margin-top: 1rem;
          padding: 0;
          justify-content: center;
          width: 100%;
          gap: 1.5rem;
      }
  }

  @media (max-width: 600px) {
      .home-link span {
          display: none !important;
      }
  }
</style>