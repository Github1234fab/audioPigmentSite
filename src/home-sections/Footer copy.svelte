<!-- <script>
	
	import Button from '$lib/component/btn-black-border.svelte';
	import Form from '$lib/component/Form.svelte';
</script>

<section>
	<h2>Votre projet audio commence ici</h2>
	<Form />

	<div class="wrapper__footer-infos">
		<Button txt="Contactez-nous" href="/fr/contact" />
		<div class="wrapper__footer-infos-localisation">
			<h3>Venir au studio <br> Audio Pigment</h3>
			<p>Audio Pigment</p>
			<p>10 Rue Nicolaï, 69007 Lyon</p>
			<a href="04 72 73 47 21" class="contact-link">04 72 73 47 21</a>
			<a href="mailto:ccontact@audiopigment.com " class="contact-link">contact@audiopigment.com </a>
		</div>
		<div class="wrapper__footer-infos-following">
			<a
				href="https://www.facebook.com/p/Audio-Pigment-100047378936341/?locale=fr_FR"
				target="_blank"
				aria-label="link"
				class="social-link"><i class="fa-brands fa-facebook fa-2xl"></i></a
			>
			<a
				href="https://www.instagram.com/explore/locations/224133827636515/audio-pigment/"
				target="_blank"
				aria-label="link"
				class="social-link"><i class="fa-brands fa-instagram fa-2xl"></i></a
			>
			<a
				href="https://www.youtube.com/@StudioAudioPigment"
				target="_blank"
				aria-label="link"
				class="social-link"><i class="fa-brands fa-youtube fa-2xl"></i></a
			>
		</div>
	</div>
	<div class="mentions">
		STUDIO AUDIO PIGMENT | MENTIONS LÉGALES | POLITIQUES DE CONFIDENTIALITÉ | SITE BY GRALYPHO
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: var(--ardoise);
		color: white;
		gap: 20px;
	
	}
	section h2 {
		font-family: var(--bebas);
		font-weight: var(--bold);
		color: white;
		font-size: 2.8rem;
		margin-top: 50px;
	}
	.wrapper__footer-infos {
		display: flex;
		align-items: baseline;
		justify-content: center;
		width: 35%;
		padding: 1rem;
		margin: 0 auto;
		background-color: var(--ardoise);
		color: white;
		width: 100%;
		border-radius: 5px;
		border-top: 1px solid rgb(47, 47, 47);
	}
	.wrapper__footer-infos-localisation {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		background-color: var(--ardoise);
		color: white;
		gap: 5px;
		font-family: var(--raleway);
		width: 35%;
	}
	.wrapper__footer-infos-localisation a {
		font-family: var(--raleway);
		font-weight: var(--extra-bold);
		color: white;
		font-size: 1rem;
		text-decoration: none;
		width: 100%;
	}
	.wrapper__footer-infos-following {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 35%;
	}
	.mentions {
		font-family: var(--raleway);
		font-size: 0.8rem;
		color: white;
		margin-top: 0px;
		padding: 0px;
		text-align: center;
		margin-bottom: 20px;
	}
	.social-link {
		color: white;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: var(--ardoise);
		transition: 0.3s ease-in-out;
	}
	.social-link:hover {
		background-color: var(--red);
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}
	.contact-link {
		color: white;
		text-decoration: none;
		font-family: var(--raleway);
		font-weight: var(--extra-bold);
		font-size: 1rem;
		width: auto;
		transition: 0.6s ease-in-out
	}
	.contact-link:hover {
		background-color: var(--red);
		padding: 20px;
	}

	@media screen and (max-width: 768px) {
		.wrapper__footer-infos {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		text-align: center;
		width: 100%;
		padding: 1rem;
		background-color: var(--ardoise);
		color: white;
		gap: 20px;
		width: 100%;
		border-radius: 5px;
	}
	.wrapper__footer-infos-localisation{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: var(--ardoise);
		color: white;
		gap: 5px;
		width: 100%;

		}
		
	}
	
</style> -->


<script>
	import Button from '$lib/component/btn-black-border.svelte';
	import Form from '$lib/component/Form.svelte';
	import { locale, _ } from 'svelte-i18n';
  
	// Option : pour traduire des attributs dynamiquement (liens, etc), tu peux aussi
	// t'inspirer de ce qu'on fait plus bas.
  </script>
  
  <section>
	  <h2>{@html $_('footer.title')}</h2>
	  <Form />
  
	  <div class="wrapper__footer-infos">
		  <!-- Remplacer directement ici le texte -->
		  <Button txt={$_('footer.contact_btn')} href="/fr/contact" />
		  <div class="wrapper__footer-infos-localisation">
			  <h3>{@html $_('footer.localisation_title')}</h3>
			  <p>{$_('footer.studio')}</p>
			  <p>{$_('footer.address')}</p>
			  <!-- Pour les liens téléphone/email on met la valeur comme attribut -->
			  <a href="tel:0472734721" class="contact-link">{$_('footer.phone')}</a>
			  <a href="mailto:contact@audiopigment.com" class="contact-link">{$_('footer.email')}</a>
		  </div>
		  <div class="wrapper__footer-infos-following">
			  <a
				  href="https://www.facebook.com/p/Audio-Pigment-100047378936341/?locale=fr_FR"
				  target="_blank"
				  aria-label="link"
				  class="social-link"><i class="fa-brands fa-facebook fa-2xl"></i></a>
			  <a
				  href="https://www.instagram.com/explore/locations/224133827636515/audio-pigment/"
				  target="_blank"
				  aria-label="link"
				  class="social-link"><i class="fa-brands fa-instagram fa-2xl"></i></a>
			  <a
				  href="https://www.youtube.com/@StudioAudioPigment"
				  target="_blank"
				  aria-label="link"
				  class="social-link"><i class="fa-brands fa-youtube fa-2xl"></i></a>
		  </div>
		  <Button txt={$_('footer.contact_btn')} href={"/" + $locale + "/contact"} />
	  </div>
	  <div class="mentions">
		  {$_('footer.mentions')}
	  </div>
  </section>
  
