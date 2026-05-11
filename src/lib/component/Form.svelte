<!-- <form
	name="contact-form-AudioPigment"
	method="POST"
	netlify-honeypot="bot-field"
	data-netlify="true"
	class="form"
>
	<input type="hidden" name="form-name" value="contact-form-AudioPigment" />

	<div class="wrapper-inputs">
		<input name="nom" type="text" id="nom" required placeholder="Nom" />

		<input name="prenom" type="text" id="prenom" required placeholder="Prénom" />
		<input name="company" type="text" id="company" required placeholder="Société" />
	</div>

	<div class="wrapper-inputs">
		<input name="email" type="email" id="email" required placeholder="Adresse mail" />

		<input name="telephone" type="tel" id="telephone" required placeholder="Téléphone" />
	</div>

	<textarea name="demande" id="demande" class="demande" placeholder="Votre demande"></textarea>

	<button class="btn" type="submit"><span>Envoyez </span></button>
</form> -->

<script>
	import { _ } from 'svelte-i18n';
</script>

<form
	name="contact-form-AudioPigment"
	method="POST"
	netlify-honeypot="bot-field"
	data-netlify="true"
	class="form"
	netlify
>
	<input type="hidden" name="form-name" value="contact-form-AudioPigment" />
	<p class="hidden">
		<label>Ne pas remplir ce champ si vous êtes humain : <input name="bot-field" /></label>
	</p>

	<div class="wrapper-inputs">
		<input name="nom" type="text" id="nom" required placeholder={$_('form.placeholder_nom')} />
		<input
			name="prenom"
			type="text"
			id="prenom"
			required
			placeholder={$_('form.placeholder_prenom')}
		/>
		<input
			name="company"
			type="text"
			id="company"
			required
			placeholder={$_('form.placeholder_societe')}
		/>
	</div>

	<div class="wrapper-inputs">
		<input
			name="email"
			type="email"
			id="email"
			required
			placeholder={$_('form.placeholder_email')}
		/>
		<input
			name="telephone"
			type="tel"
			id="telephone"
			required
			placeholder={$_('form.placeholder_telephone')}
		/>
	</div>

	<textarea name="demande" id="demande" class="demande" placeholder={$_('form.placeholder_demande')}
	></textarea>

	<button class="btn" type="submit"><span>{$_('form.send')}</span></button>
</form>

<style>
	.hidden {
		display: none;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--space-lg);
		background-color: var(--ardoise);
		color: var(--white);
		gap: var(--space-md);
		font-family: var(--font-main);
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}
	form input, .demande {
		width: 100%;
		padding: 14px;
		border-radius: var(--radius-md);
		border: 1px solid rgba(255, 255, 255, 0.1);
		background-color: rgba(255, 255, 255, 0.05);
		color: var(--white);
		font-size: 1rem;
		transition: var(--transition);
		outline: none;
	}
	form input:focus, .demande:focus {
		border-color: var(--accent);
		background-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0 0 0 4px rgba(236, 64, 52, 0.15);
	}
	.wrapper-inputs {
		display: flex;
		flex-direction: row;
		gap: var(--space-sm);
		width: 100%;
	}
	.demande {
		min-height: 180px;
		font-family: var(--font-main);
		resize: vertical;
	}
	form input::placeholder, .demande::placeholder {
		color: var(--grey);
		opacity: 0.7;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--accent);
		font-family: var(--font-heading);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 700;
		color: var(--white);
		padding: 16px 48px;
		font-size: 1rem;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: var(--transition);
		border-radius: 50px;
		border: none;
		margin-top: var(--space-sm);
		box-shadow: var(--shadow-md);
	}

	.btn:hover {
		background-color: var(--white);
		color: var(--ardoise);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}

	@media screen and (max-width: 768px) {
		form {
			width: 100%;
			padding: 1rem;
		}
		form input,
		.demande {
			width: 100%;
			font-size: 0.9rem;
		}
		.btn {
			padding: 10px 20px;
			font-size: 0.9rem;
		}
	}
</style>
