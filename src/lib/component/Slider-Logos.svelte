<script>
 import { Splide, SplideSlide } from '@splidejs/svelte-splide';
//  import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	import CardRealisation from '$lib/component/card-logo.svelte';
	let splide;

	import BP from '../../assets/logos/Banque_de_France_1.png';
	import Barilla from '../../assets/logos/barilla-1.png';
	import BioMerieux from '../../assets/logos/BioMerieux 1.png';
	import BlablaCar from '../../assets/logos/BlaBlaCar.webp';
	import BMW from '../../assets/logos/BMW.png';
	import burgerKing from '../../assets/logos/burger king.png';
	import CiteEspace from '../../assets/logos/citeEspace.jpg';
	import Costa from '../../assets/logos/Costa.png';
	import Decathlon from '../../assets/logos/Decathlon.png';
	import Delacre from '../../assets/logos/Delacre.png';
	import Disneyland from '../../assets/logos/disneyland-paris-1995-logo-png_seeklogo-431918.png';
	import Evian from '../../assets/logos/Evian.png';
	import FDJ from '../../assets/logos/FDJ.png';
	import Fnac from '../../assets/logos/Fnac-2-logo.png';
	import LEGO from '../../assets/logos/LEGO_1.png';
	import loreal from '../../assets/logos/loreal-logo-3.png';
	import Peugeot from '../../assets/logos/Peugeot 1.png';
	import PointS from '../../assets/logos/Point S 1.png';
	import PuyDuFou from '../../assets/logos/Puy-du-fou_2.png';
	import Region from '../../assets/logos/laRegion.png';
	import Renault from '../../assets/logos/Renault 1.png';
	import SanPe from '../../assets/logos/San-Pellegrino-Logo 1.png';
	import Saupiquet from '../../assets/logos/SAUPIQUET.jpg';
	import SNCF from '../../assets/logos/SNCF.png';
	import TotalEnergie from '../../assets/logos/TotalEnergies.png';
	import Vulcania from '../../assets/logos/Vulcania.png';

	const cards = [
		{
			image: BP
		},
		{
			image: Barilla
		},
		{
			image: BioMerieux
		},
		{
			image: BlablaCar
		},
		{
			image: BMW
		},
		{
			image: burgerKing
		},
		{
			image: CiteEspace
		},
		{
			image: Costa
		},
		{
			image: Decathlon
		},
		{
			image: Delacre
		},
		{
			image: Disneyland
		},
		{
			image: Evian
		},
		{
			image: FDJ
		},
		{
			image: Fnac
		},
		{
			image: LEGO
		},
		{
			image: loreal
		},
		{
			image: Peugeot
		},
		{
			image: PointS
		},
		{
			image: PuyDuFou
		},
		{
			image: Region
		},
		{
			image: Renault
		},
		{
			image: SanPe
		},
		{
			image: Saupiquet
		},
		{
			image: SNCF
		},
		{
			image: TotalEnergie
		},
		{
			image: Vulcania
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
      768: { perPage: 5 , gap: 20},
      480: { perPage: 3, gap: 10 }
    },
    easing: 'ease-in-out'
  };
</script>

<Splide options={options} aria-label="Logos">
  {#each cards as card}
    <SplideSlide>
      <CardRealisation image={card.image} />
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