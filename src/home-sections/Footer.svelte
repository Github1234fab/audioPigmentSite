<script>
	import Button from '$lib/component/btn-black-border.svelte';
	import Form from '$lib/component/Form.svelte';
	import { locale, _ } from 'svelte-i18n';

	$: mentions = $_('footer.mentions', {}, { json: true });
</script>

<section>
	<h2>{@html $_('footer.title')}</h2>

	<Form />

	<div class="wrapper__footer-infos">
		<!-- Remplacer directement ici le texte -->
		<!-- <Button txt={$_('footer.contact_btn')} href="/fr/contact" /> -->
		<div class="wrapper__footer-infos-localisation">
			<!-- <h3>{@html $_('footer.localisation_title')}</h3> -->
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
		{#each mentions as mention, i (mention.label)}
			<a
				href={mention.url}
				target={mention.url.startsWith('http') ? '_blank' : '_self'}
				rel={mention.url.startsWith('http') ? 'noopener noreferrer' : undefined}
			>
				{mention.label}
			</a>
			{#if i < mentions.length - 1}
				<span> | </span>
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		padding: var(--space-xl) var(--space-md);
		background-color: var(--ardoise);
		color: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
	}

	h2 {
		font-size: var(--fs-h2);
		color: var(--white);
		max-width: 800px;
		margin: 0;
	}

	.wrapper__footer-infos {
		width: 100%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		padding-top: var(--space-md);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.wrapper__footer-infos-localisation {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-xs);
	}

	.wrapper__footer-infos-localisation p {
		font-size: var(--fs-body);
		color: var(--grey);
		margin: 0;
	}

	.wrapper__footer-infos-localisation a {
		color: var(--white);
		text-decoration: none;
		font-weight: 700;
		font-size: 1.1rem;
		margin-top: 5px;
		transition: var(--transition);
		padding: 5px 10px;
		border-radius: var(--radius-sm);
	}

	.wrapper__footer-infos-localisation a:hover {
		color: var(--accent);
		background: rgba(255, 255, 255, 0.05);
	}

	.wrapper__footer-infos-following {
		display: flex;
		gap: var(--space-md);
		margin-top: var(--space-sm);
	}

	.social-link {
		color: var(--white);
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.05);
		transition: var(--transition);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.social-link:hover {
		background: var(--accent);
		color: var(--white);
		transform: translateY(-3px);
		border-color: var(--accent);
	}

	.mentions {
		font-size: var(--fs-small);
		color: var(--grey-dark);
		margin-top: var(--space-md);
	}

	.mentions a {
		color: var(--grey);
		text-decoration: none;
		transition: var(--transition);
	}

	.mentions a:hover {
		color: var(--white);
	}

	@media screen and (max-width: 768px) {
		section {
			padding: var(--space-lg) var(--space-sm);
			gap: var(--space-md);
		}

		.wrapper__footer-infos {
			gap: var(--space-md);
		}
	}
</style>
