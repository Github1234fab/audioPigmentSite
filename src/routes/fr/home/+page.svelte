<script>
	import { onMount } from 'svelte';
	import Cta from '$lib/component/cta.svelte';
	import { CSSPlugin } from 'gsap/CSSPlugin';
	gsap.registerPlugin(CSSPlugin);
	import { gsap } from 'gsap';

	import CardDotWhite from '$lib/component/cards-dot-white.svelte';
	import Btn from '$lib/component/btn-black.svelte';
	import BtnGrey from '$lib/component/btn-grey.svelte';
	import BtnWhite from '$lib/component/btn-white.svelte';
	import CardsDotWhite from '$lib/component/cards-dot-white.svelte';
	import Slider from '$lib/component/slider.svelte';
	import CardRealisation from '$lib/component/card-realisation.svelte';
	import Collapse from '$lib/component/Collapse.svelte';
	import BtnArrow from '$lib/component/btn-arrow.svelte';
</script>

<h1 class="big-title">Home</h1>
<h1 class="title thin">Home</h1>
<h1 class="title light">Home</h1>
<h1 class="title regular">Home</h1>
<h1 class="title medium">Home</h1>
<h1 class="title bold">Home</h1>
<h1 class="title extra-bold">Home</h1>
<h1 class="title black">Home</h1>

<div class="wrapper__card">
	<CardDotWhite
		title="Post-production audio"
		subtitle={`Sound Design
Mixage 5.1
 Mastering`}
		txt="Découvrir"
	/>
	<CardDotWhite
		title="Création originale"
		subtitle={`Identité sonore
	 Habillage sonore 
	Composition musicale`}
		txt="Explorer"
	/>
	<CardDotWhite
		title="Voix"
		subtitle={`Voix off
Doublage/Dubbing/ADR
Voice over`}
		txt="En savoir +"
	/>
</div>

<Btn txt="Salut" />
<BtnGrey txt="Salut" />
<BtnWhite txt="Salut" />
<BtnArrow/>
<Slider />
<Collapse title="COMMUNICATION SONORE" p="vdfjnvljqdnfljv lkdfnv lqkdfjvlkq   lqkdfjvlkqdfjv qdflkvjqdf vqldfkjv qdflvk qdsfvkljq sdflvkq jdsfvlqks dfjlvkqsj fvlkqsjfv "/>


<style>
	.wrapper__card {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}
	.big-title {
		font-size: var(--xl);
		text-align: center;
		margin-top: 20px;
		font-family: var(--bebas);
	}
	.title {
		font-size: 2rem;
		text-align: center;
		margin-top: 20px;
		font-family: raleway;
		font-weight: 400;
	}
	.thin {
		font-weight: var(--thin);
	}
	.light {
		font-weight: var(--light);
	}
	.regular {
		font-weight: var(--regular);
	}
	.medium {
		font-weight: var(--medium);
	}
	.bold {
		font-weight: var(--bold);
	}
	.extra-bold {
		font-weight: var(--extra-bold);
	}
	.black {
		font-weight: var(--black);
	}
</style>
