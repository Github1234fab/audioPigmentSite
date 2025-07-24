
import { redirect } from '@sveltejs/kit';


export function load({ url }) {
	const segments = url.pathname.split('/').filter(Boolean);
	const lang = segments[0];
  
	if (!lang || !['fr', 'en'].includes(lang)) {
	  throw redirect(307, '/fr/home');
	}
  
	return {};
  }