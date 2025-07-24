<!-- <script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import "./style.css";

	import { redirect } from '@sveltejs/kit';

export function load({ url }) {
    const lang = url.pathname.split('/')[1]; // Récupère 'fr' ou 'en'

    if (!['fr', 'en'].includes(lang)) {
        throw redirect(307, '/fr/home'); // Redirection côté serveur
    }
}
onMount(() => {
		const lang = $page.url.pathname.split('/')[1]; // Récupère 'fr' ou 'en'

		if (!['fr', 'en'].includes(lang)) {
			// Détecter la langue du navigateur
			const userLang = navigator.language.startsWith('en') ? 'en' : 'fr';

			// Rediriger vers la bonne page d'accueil
			window.location.href = `/${userLang}/home`;
		}
	});
</script>

<Navbar />
<slot /> -->

<!-- <script>
	import Navbar from '$lib/Navbar.svelte';
	import './style.css';
	import '@splidejs/svelte-splide/css';
	import '$lib/component/slider-global.css';
	import '$lib/i18n'; 
	import Footer from '../home-sections/Footer.svelte';

	import { afterNavigate } from '$app/navigation';

afterNavigate(() => {
  if(window.location.hash) {
    const el = document.getElementById(window.location.hash.substring(1));
    if(el) el.scrollIntoView({ behavior: "smooth" });
  }
});
</script>

<Navbar />
<slot />
<Footer/> -->

<script>
    import Navbar from '$lib/Navbar.svelte';
    import './style.css';
    import '@splidejs/svelte-splide/css';
    import '$lib/component/slider-global.css';
    import '$lib/i18n'; // <--- ceci initialise la traduction pour toute l'app
	import { locale } from 'svelte-i18n';
    import Footer from '../home-sections/Footer.svelte';

    import { afterNavigate } from '$app/navigation';

    if (browser) {
    afterNavigate(() => {
      if (window.location.hash) {
        const el = document.getElementById(window.location.hash.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
</script>

<Navbar />
<slot />
<Footer/>
