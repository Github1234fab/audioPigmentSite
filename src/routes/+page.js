import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(307, '/fr/home'); // Redirection vers la page d'accueil en français par défaut
}