<script>
	import { _ } from 'svelte-i18n';

	let isSubmitting = false;
	let submitStatus = null; // 'success' | 'error' | null

	const handleSubmit = async (event) => {
		event.preventDefault();
		isSubmitting = true;
		submitStatus = null;

		const form = event.target;
		const formData = new FormData(form);
		
		// Netlify requiert que le corps soit formaté en URLSearchParams
		const body = new URLSearchParams(formData).toString();

		try {
			const response = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: body
			});

			if (response.ok) {
				submitStatus = 'success';
				form.reset();
			} else {
				submitStatus = 'error';
			}
		} catch (error) {
			console.error("Erreur d'envoi du formulaire :", error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<form
	id="contact-form"
	name="contact-form-AudioPigment"
	method="POST"
	netlify-honeypot="bot-field"
	data-netlify="true"
	class="form"
	netlify
	on:submit={handleSubmit}
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

	<div class="wrapper-action">
		{#if submitStatus === 'success'}
			<div class="status-msg success-msg">
				<i class="fa-solid fa-circle-check"></i> {$_('form.success_msg', { default: 'Merci ! Votre message a bien été envoyé avec succès.' })}
			</div>
		{:else}
			<button class="btn" type="submit" disabled={isSubmitting}>
				<span>{isSubmitting ? $_('form.sending', { default: 'Envoi en cours...' }) : $_('form.send')}</span>
			</button>
		{/if}

		{#if submitStatus === 'error'}
			<div class="status-msg error-msg">
				<i class="fa-solid fa-circle-exclamation"></i> {$_('form.error_msg', { default: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous écrire directement.' })}
			</div>
		{/if}
	</div>
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

	.wrapper-action {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		margin-top: var(--space-sm);
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
		box-shadow: var(--shadow-md);
	}

	.btn:hover {
		background-color: var(--white);
		color: var(--ardoise);
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	.status-msg {
		font-family: var(--font-main);
		font-size: 0.95rem;
		font-weight: 600;
		padding: 14px 28px;
		border-radius: var(--radius-md);
		width: 100%;
		max-width: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		box-shadow: var(--shadow-sm);
	}

	.success-msg {
		background-color: rgba(34, 197, 94, 0.15);
		color: #4ade80;
		border: 1px solid rgba(74, 222, 128, 0.3);
	}

	.error-msg {
		background-color: rgba(239, 68, 68, 0.15);
		color: #f87171;
		border: 1px solid rgba(248, 113, 113, 0.3);
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
		.wrapper-inputs {
			flex-direction: column;
			gap: var(--space-sm);
		}
		.btn {
			padding: 12px 30px;
			font-size: 0.9rem;
		}
	}
</style>
