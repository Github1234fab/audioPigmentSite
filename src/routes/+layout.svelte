<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	onMount(() => {
		const lang = $page.url.pathname.split('/')[1]; // Récupère 'fr' ou 'en'

		if (!['fr', 'en'].includes(lang)) {
			// Si l'URL ne contient pas de langue, rediriger vers 'fr' par défaut
			window.location.href = '/fr';
		}
	});
</script>

<Navbar />
<slot />
