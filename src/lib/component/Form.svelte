<form
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
</div>

<div class="wrapper-inputs">
    <input name="email" type="email" id="email" required placeholder="Adresse mail" />

    <input name="telephone" type="tel" id="telephone" required placeholder="Téléphone" />
</div>

<textarea name="demande" id="demande" class="demande" placeholder="Votre demande"></textarea>

<button class="btn" type="submit"><span>Envoyez </span></button>
</form>


<style>
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        background-color: var(--ardoise);
        color: white;
        gap: 0px;
        font-family: var(--raleway);
        height: 100%;
    }
    form input{
        width: 100%;
        max-width: 400px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--ardoise);
        box-shadow: inset 0 0 5px 5px rgba(0, 0, 0);
        color: #ffffff;
        font-size: 1rem;
        border: 1px solid grey;
        margin-bottom: 5px;

    }
    .demande{
        width: 100%;
        max-width: 400px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--ardoise);
        box-shadow: inset 0 0 5px 5px rgba(0, 0, 0);
        color: #fdfdfd;
        font-size: 1rem;
        border: 1px solid grey;
        margin-bottom: 5px;
        height: 200px;
        font-family: var(--raleway);
    }
    form input::placeholder {
        color: #c9c8c8;
    }
    .demande::placeholder {
   font-family: var(--raleway);
        color: #c9c8c8;
    }


    /* ============= */

    .btn {
		margin-top: 20px;
		margin-left: 20px;
		background-color: var(--grey);
		font-family: var(--raleway);
		font-weight: var(--medium);
		color: var(--ardoise);
		border: 1px solid var(--ardoise);
		padding: 13px 40px;
		font-size: 1rem;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: color 0.6s ease;
	}

	.btn::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 1;
		transition: left 0.6s ease-in-out;
	}

	.btn:hover::after {
		left: 0%;
	}

	.btn span {
		position: relative;
		z-index: 2;
		transition: color 0.5s ease;
	}

	.btn:hover span {
		color: black;
	}
</style>