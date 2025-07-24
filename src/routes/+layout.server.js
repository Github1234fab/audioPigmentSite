import { redirect } from '@sveltejs/kit';

export function load({ url }) {
  try {
    const segments = url.pathname.split('/').filter(Boolean);
    const lang = segments[0];

    if (!lang || !['fr', 'en'].includes(lang)) {
      throw redirect(307, '/fr/home');
    }
    return {};
  } catch (err) {
    console.error('Erreur dans +layout.server.js load:', err);
    throw err;  // ou retourne un message d'erreur pour debug
  }
}