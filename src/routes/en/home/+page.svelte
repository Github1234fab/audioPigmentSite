<script>
	import Cta from '$lib/component/cta.svelte';
	import { CSSPlugin } from 'gsap/CSSPlugin';
	gsap.registerPlugin(CSSPlugin);
	import { gsap } from 'gsap';
	import Proposition from '../../../home-sections/PropositionEnglish.svelte';
	import Hero from '../../../home-sections/HeroEnglish.svelte';
	import ValueProp from '../../../home-sections/Value-propEnglish.svelte';
	import Services from '../../../home-sections/ServicesEnglish.svelte';
	import Advantages from '../../../home-sections/AdvantageEnglish.svelte';
	import Achievements from '../../../home-sections/AchievementsEnglish.svelte';
	import ValueProp2 from '../../../home-sections/Value-prop-2English.svelte';
	import Footer from '../../../home-sections/Footer.svelte';
	import '@splidejs/splide/dist/css/splide.min.css';
</script>

<Hero />
<Proposition />
<ValueProp />
<Services />
<Advantages />
<Achievements />
<ValueProp2 />
<!-- <Footer/> -->


