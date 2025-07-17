<script>
	// import BtnBlack from '$lib/component/BtnBlack.svelte';
	// import BtnWhite from '$lib/component/BtnWhite.svelte';
	import Button from '$lib/component/btn-black-border.svelte';
	import Form from '$lib/component/Form.svelte';
</script>

<section>
	<h2>Votre projet audio commence ici</h2>
	<Form />

	<div class="wrapper__footer-infos">
		<Button txt="Contactez-nous" />
		<div class="wrapper__footer-infos-localisation">
			<h3>Venir au studio Audio Pigment</h3>
			<p>Audio Pigment</p>
			<p>10 Rue Nicolaï, 69007 Lyon</p>
			<a href="04 72 73 47 21">04 72 73 47 21</a>
			<a href="mailto:ccontact@audiopigment.com ">contact@audiopigment.com </a>
		</div>
		<div class="wrapper__footer-infos-following">
			<i class="fa-brands fa-facebook fa-2xl"></i>
			<i class="fa-brands fa-instagram fa-2xl"></i>
			<i class="fa-brands fa-youtube fa-2xl"></i>
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
		justify-content: space-around;
		text-align: center;
		width: 100%;
		padding: 1rem;
		background-color: var(--ardoise);
		color: white;
		gap: 20px;
		border: 1px solid rgba(128, 128, 128, 0.292);
		width: 70%;
	}
	.wrapper__footer-infos-localisation {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		text-align: center;
		padding: 2rem;
		background-color: var(--ardoise);
		color: white;
		gap: 5px;
		font-family: var(--raleway);
	}
	.wrapper__footer-infos-localisation a {
		font-family: var(--raleway);
		font-weight: var(--extra-bold);
		color: white;
		font-size: 1rem;
		text-decoration: none;
	}
	.wrapper__footer-infos-following {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
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
</style>
