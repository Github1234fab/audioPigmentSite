<script>
	import Cta from '$lib/component/cta.svelte';
	import { CSSPlugin } from 'gsap/CSSPlugin';
	gsap.registerPlugin(CSSPlugin);
	import { gsap } from 'gsap';
	import Proposition from '../../../home-sections/Proposition.svelte';
	import Hero from '../../../home-sections/Hero.svelte';
	import ValueProp from '../../../home-sections/Value-prop.svelte';
	import Services from '../../../home-sections/Services.svelte';
	import Advantages from '../../../home-sections/Advantage.svelte';
	import Achievements from '../../../home-sections/Achievements.svelte';
	import ValueProp2 from '../../../home-sections/Value-prop-2.svelte';
	import Footer from '../../../home-sections/Footer.svelte';
</script>

<Hero />
<Proposition />
<ValueProp />
<Services />
<Advantages />
<Achievements />
<ValueProp2 />
<Footer/>

<style>
</style>
