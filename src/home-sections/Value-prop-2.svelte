<script>
	import BtnBlack from '$lib/component/btn-black.svelte';
	import BtnWhite from '$lib/component/Btn-White.svelte';
</script>

<section>
	<h2>Notre engagement pour une qualité sonore exceptionnelle</h2>

	<p>
		Chez AUDIO PIGMENT, chaque projet est pensé, écouté, façonné avec précision par l’expertise
		humaine, pour créer un impact optimal. Une écoute exigeante, un savoir-faire affûté, et le goût
		du sur-mesure. Comprendre, ressentir, transmettre : c’est notre métier. Faisons-nous confiance.
	</p>
<div class="wrapper__buttons">	
    <BtnBlack txt="Contactez-nous" />
	<BtnWhite txt="Découvrez nos services" />
</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background-color: rgb(228, 226, 226);
		height: 100%;
		z-index: 0;
		gap: 40px;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 2.9rem;
		margin-bottom: 0.5rem;
		color: var(--bebas);
		margin-top: 50px;
	}
	section p {
		font-family: var(--raleway);
		font-size: 1rem;
		margin-bottom: 0.5rem;
		color: var(--ardoise    );
		font-weight: var(--regular);
		margin-top: 0px;
		padding: 20px 40px;
		max-width: 800px;
	}
</style>
