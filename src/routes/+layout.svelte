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

<script>
	import Navbar from '$lib/Navbar.svelte';
	import './style.css';
	import '@splidejs/svelte-splide/css';
	import '$lib/component/slider-global.css';
</script>

<Navbar />
<slot />
