import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

addMessages('fr', {
  footer: {
    title: "Votre projet sonore commence ici",
    contact_btn: "Contactez-nous",
    // localisation_title: "Venir au studio <br> Audio Pigment",
    studio: "Audio Pigment",
    address: "10 Rue Nicolaï, 69007 Lyon",
    phone: "04 72 73 47 21",
    email: "contact@audiopigment.com",
    mentions: [
      { label: "STUDIO AUDIO PIGMENT", url: "/" },
      { label: "MENTIONS LÉGALES", url: "/fr/cgu" },
      { label: "POLITIQUES DE CONFIDENTIALITÉ", url: "/fr/cgu" },
      { label: "SITE RÉALISÉ PAR GRALYPHO", url: "https://www.gralypho.com" },
      { label: "©AUDIO PIGMENT", url: "/" }
    ]
  },
  form: {
    placeholder_nom: "Nom",
    placeholder_prenom: "Prénom",
    placeholder_societe: "Société",
    placeholder_email: "Adresse mail",
    placeholder_telephone: "Téléphone",
    placeholder_demande: "Votre demande",
    send: "Envoyer"
  }
});

addMessages('en', {
  footer: {
    title: "Your audio project starts here",
    contact_btn: "Contact us",
    // localisation_title: "Come to <br> Audio Pigment studio",
    studio: "Audio Pigment",
    address: "10 Rue Nicolaï, 69007 Lyon",
    phone: "+33 472 734 721",
    email: "contact@audiopigment.com",
    mentions: [
      { label: "STUDIO AUDIO PIGMENT", url: "/" },
      { label: "LEGAL NOTICE", url: "/en/cgu" },
      { label: "PRIVACY POLICY", url: "/en/cgu" },
      { label: "WEBSITE BY GRALYPHO", url: "https://www.gralypho.com" },
      { label: "©AUDIO PIGMENT", url: "/" }
    ]
  },
  form: {
    placeholder_nom: "Last name",
    placeholder_prenom: "First name",
    placeholder_societe: "Company Name",
    placeholder_email: "E-mail",
    placeholder_telephone: "Phone Number",
    placeholder_demande: "Tell us about your project",
    send: "Send"
  }
});

init({
  fallbackLocale: 'fr',
  initialLocale: getLocaleFromNavigator()
});
