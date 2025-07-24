<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	//  import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	import CardRealisation from '$lib/component/Card-logo.svelte';
	let splide;

	//    import BP from '../../assets/logos/Banque_de_France_1.png';
	import Barilla from '../../assets/logos/barilla-1.png';
	import BioMerieux from '../../assets/logos/BioMerieux 1.png';
	//    import BlablaCar from '../../assets/logos/BlaBlaCar.webp';
	import BMW from '../../assets/logos/BMW.png';
	import burgerKing from '../../assets/logos/burger king.png';
	//    import CiteEspace from '../../assets/logos/citeEspace.jpg';
	import Costa from '../../assets/logos/Costa.png';
	import Accor from '../../assets/logos/Accor.png';
	import Amplifon from '../../assets/logos/Amplifon.png';
	import Chanel from '../../assets/logos/Chanel.png';
	import Ferrero from '../../assets/logos/Ferrero.png';
	import Hermes from '../../assets/logos/Hermès.png';
	import Lenor from '../../assets/logos/Lenor.png';
	import ProtectGamble from '../../assets/logos/procterGamble.png';
	//    import Decathlon from '../../assets/logos/Decathlon.png';
	import Delacre from '../../assets/logos/Delacre.png';
	import Disneyland from '../../assets/logos/disneyland-paris-1995-logo-png_seeklogo-431918.png';
	//    import Evian from '../../assets/logos/Evian.png';
	//    import FDJ from '../../assets/logos/FDJ.png';
	import Fnac from '../../assets/logos/fnac-2-logo.png';
	import LEGO from '../../assets/logos/LEGO_1.png';
	import loreal from '../../assets/logos/loreal-logo-3.png';
	import Peugeot from '../../assets/logos/Peugeot 1.png';
	//    import PointS from '../../assets/logos/Point S 1.png';
	import PuyDuFou from '../../assets/logos/Puy-du-fou_2.png';
	//    import Region from '../../assets/logos/laRegion.png';
	import Renault from '../../assets/logos/Renault 1.png';
	import SanPe from '../../assets/logos/San-Pellegrino-Logo 1.png';
	import Saupiquet from '../../assets/logos/SAUPIQUET.jpg';
	//    import SNCF from '../../assets/logos/SNCF.png';
	import TotalEnergie from '../../assets/logos/TotalEnergies.png';
	//    import Vulcania from '../../assets/logos/Vulcania.png';

	const cards = [
		{
			image: Barilla,
			href: 'https://www.barilla.com/fr-fr'
		},

		{
			image: Accor,
            href: 'https://group.accor.com/fr-FR'
		},
		{
			image: Amplifon,
            href: 'https://www.amplifon.com/fr/'
		},
		{
			image: Chanel,
            href: 'https://www.chanel.com/fr/'
		},
		{
			image: Ferrero,
            href: 'https://www.ferrerogroup.com/fr/'
		},
		{
			image: Hermes,
            href: 'https://www.hermes.com/fr/fr/'
		},

		{
			image: Lenor,
            href: 'https://www.lenor.fr/'

		},

		{
			image: ProtectGamble

		},
		{
			image: BioMerieux,
            href: 'https://www.biomerieux.com/fr/'
		},

		{
			image: BMW,
            href: 'https://www.bmw.fr/fr/home.html'
		},
		{
			image: burgerKing
            , href: 'https://www.burgerking.fr/'
		},

		{
			image: Costa,
            href: 'https://www.costa.fr/'
		},

		{
			image: Delacre,
            href: 'https://www.delacre.fr/'
		},
		{
			image: Disneyland,
            href: 'https://www.disneylandparis.fr/'
		},

		{
			image: Fnac,
            href: 'https://www.fnac.com/'
		},
		{
			image: LEGO,
            href: 'https://www.lego.com/fr-fr'
		},
		{
			image: loreal,
            href: 'https://www.loreal.com/fr/'
		},
		{
			image: Peugeot,
            href: 'https://www.peugeot.fr/'
		},

		{
			image: PuyDuFou
            , href: 'https://www.puydufou.com/fr'
		},

		{
			image: Renault
            , href: 'https://www.renault.fr/'
		},
		{
			image: SanPe
            , href: 'https://www.sanpellegrino.fr/'
		},
		{
			image: Saupiquet
            , href: 'https://www.saupiquet.fr/'
		},

		{
			image: TotalEnergie
            , href: 'https://totalenergies.com/fr'
		}
	];

	// Options Splide
	const options = {
		type: 'loop',
		perPage: 8,
		gap: 3,
		autoplay: true,
		pauseOnHover: true,
		speed: 2000,
		arrows: true,
		pagination: false,
		breakpoints: {
			1560: { perPage: 9 },
			1024: { perPage: 7 },
			938: { perPage: 6, gap: 20 },
			768: { perPage: 5, gap: 20 },
			480: { perPage: 3, gap: 10 }
		},
		easing: 'ease-in-out'
	};
</script>

<Splide {options} aria-label="Logos">
	{#each cards as card}
		<SplideSlide>
			<CardRealisation image={card.image} href={card.href} />
		</SplideSlide>
	{/each}
</Splide>

<!-- <style>
     :global(.splide) {
       margin: 50px auto;
       width: 100vw;
       background: rgba(0, 255, 0, 0.08);
     }
   
   </style> -->
