<script>
	import Collapse from '$lib/component/Collapse.svelte';

	let datas = [
		{
			title: 'Communication sonore',
			p: 'Nous créons des expériences sonores immersives qui captivent et engagent votre public. \n Notre expertise en design sonore et en production audio garantit une communication efficace et mémorable.'
		},
		{
			title: 'Production audio',
			p: 'De la conception à la réalisation, nous produisons des contenus audio de haute qualité adaptés à vos besoins spécifiques. \n Que ce soit pour des podcasts, des publicités ou des projets audiovisuels, nous sommes là pour vous accompagner.'
		},
		{
			title: 'Consultation en stratégie sonore',
			p: "Nous vous aidons à développer une stratégie sonore cohérente qui renforce votre identité de marque et améliore l'expérience utilisateur. \n Notre approche personnalisée garantit que chaque projet résonne avec votre audience."
		},
        {
			title: 'Doublage Multilingue/localisation',
			p: "Dubbing, lip sync, enregistrement voix off en voice over, traduction + adaptation (audioguide, elearning, reportage…) "
		},
        {
			title: 'Mixage & post prod boradcast',
			p: "Mix stéréo, multicanal 5.1 / 7.1, mix VR Binaural / Ambisonique, Normalisation broadcast PAD « Prêt A Diffuser."
		}
	];
</script>

<section>
	<h2>Nos services premium</h2>
    <div class="wrapper__collapses">
	{#each datas as data}
		<Collapse title={data.title} p={data.p} />
	{/each}
</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background-color: white;
		color: var(--black);
		height: 100%;
		margin-bottom: 2rem;
	}
    .wrapper__collapses {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin-top: 30px;
    }

	section h2 {
		font-family: var(--bebas);
		font-size: 2.7rem;
		margin-bottom: 1rem;
        margin-top: 50px;
	}
</style>
