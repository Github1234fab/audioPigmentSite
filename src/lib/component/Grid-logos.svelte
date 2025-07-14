<script>
	import CardLogo from '$lib/component/Card-logo.svelte';

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
</script>

<div class="wrapper__customers">
	<!-- <h2 class="title-rotate-animation">Nos clients</h2> -->
	<div class="wrapper__logos">
		{#each cards as card}
			<CardLogo image={card.image} />
		{/each}
	</div>
</div>

<style>
	.wrapper__logos {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 3px;
		padding: 10px;
	}
	.wrapper__customers {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0rem;
		height: 100%;
		margin-top: 50px;
		max-width: 800px;
	}

	/* .wrapper__customers h2 {
		font-family: var(--bebas);
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: white;
		margin-top: 50px;
	}
	.title-rotate-animation {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid white;
		height: 200px;
		width: 200px;
		animation: rotate 10s linear infinite;
		box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.355);
	} */

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
