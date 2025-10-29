<script>
import Btn from '$lib/component/btn-black-border.svelte';
import Slider from '$lib/component/Slider.svelte';


</script>



<section>
	<h1>Notre actualité</h1>
    <p>Découvrez quelques-unes de nos dernières réalisations et suivez notre actualité…</p>
<Btn txt="Nous contacter" href="/fr/contact"/>
<Slider/>
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
        padding: 2rem;
        height: 100%;
        gap: 20px;
    }
    section h1 {
        font-family: var(--bebas);
		color: white;
		font-size: 3rem;
		margin-top: 50px;
		font-weight: 400;
		letter-spacing: -1.5px;
    }
    section p {
        font-family: var(--raleway);
        font-size: 1.2rem;
        line-height: 1.6;
        margin-top: 20px;
        max-width: 800px;
        font-weight: var(--regular);
    }
</style>
