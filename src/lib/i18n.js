import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

addMessages('fr', {
  footer: {
    title: "Votre projet audio commence ici",
    contact_btn: "Contactez-nous",
    localisation_title: "Venir au studio <br> Audio Pigment",
    studio: "Audio Pigment",
    address: "10 Rue Nicolaï, 69007 Lyon",
    phone: "04 72 73 47 21",
    email: "contact@audiopigment.com",
    mentions: "STUDIO AUDIO PIGMENT | MENTIONS LÉGALES | POLITIQUES DE CONFIDENTIALITÉ | SITE BY GRALYPHO"
  }
});

addMessages('en', {
  footer: {
    title: "Your audio project starts here",
    contact_btn: "Contact us",
    localisation_title: "Come to <br> Audio Pigment studio",
    studio: "Audio Pigment",
    address: "10 Rue Nicolaï, 69007 Lyon",
    phone: "04 72 73 47 21",
    email: "contact@audiopigment.com",
    mentions: "STUDIO AUDIO PIGMENT | LEGAL NOTICE | PRIVACY POLICY | SITE BY GRALYPHO"
  }
});

init({
  fallbackLocale: 'fr',
  initialLocale: getLocaleFromNavigator()
});
