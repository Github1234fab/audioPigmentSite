<script>
	import CardRealisation from '$lib/component/Card-logo.svelte';
	import BP from '../../assets/LogosV2/Banque_de_France_DEF.png';
	import Barilla from '../../assets/LogosV2/barilla-DEF.png';
	import BioMerieux from '../../assets/LogosV2/BioMerieux DEF.png';
	import BlablaCar from '../../assets/LogosV2/BlaBlaCar NEW DEF.png';
	import BMW from '../../assets/LogosV2/BMW_DEF.png';
	import burgerKing from '../../assets/LogosV2/burger king DEF.png';
	import CiteEspace from '../../assets/LogosV2/CiteEspace Toulouse  DEF.png';
	import Costa from '../../assets/LogosV2/Costa DEF.png';
	import Decathlon from '../../assets/LogosV2/Decathlon DEF.png';
	import Delacre from '../../assets/LogosV2/Delacre DEF.png';
	import Disneyland from '../../assets/LogosV2/Disneyland_Paris_2 DEF.png';
	import Evian from '../../assets/LogosV2/Evian DEF.png';
	import FDJ from '../../assets/LogosV2/FDJ DEF.png';
	import Fnac from '../../assets/LogosV2/fnac-2 DEF.png';
	import LEGO from '../../assets/LogosV2/LEGO_1 DEF.png';
	import loreal from '../../assets/LogosV2/loreal-logo-2 DEF.png';
	import Peugeot from '../../assets/LogosV2/Peugeot 1 DEF.png';
	import PointS from '../../assets/LogosV2/Point S 1 DEF.png';
	import PuyDuFou from '../../assets/logos/Puy-du-fou_2.png';
	import Region from '../../assets/LogosV2/Region_Auvergne-Rhone-Alpes GROS DEF.png';
	import Renault from '../../assets/LogosV2/Renault GROS DEF.png';
	import SanPe from '../../assets/logos/San-Pellegrino-Logo 1.png';
	import Saupiquet from '../../assets/LogosV2/SAUPIQUET DEF.png';
	import SNCF from '../../assets/LogosV2/SNCF DEF.png';
	import TotalEnergie from '../../assets/LogosV2/TotalEnergies DEF.png';
	import Vulcania from '../../assets/LogosV2/Vulcania DEF.png';

	const cards = [
		{ image: BP, href: 'https://www.banque-france.fr/' },
		{ image: Barilla, href: 'https://www.barilla.com/fr-fr' },
		{ image: BioMerieux, href: 'https://www.biomerieux.com/fr/' },
		{ image: BlablaCar, href: 'https://www.blablacar.fr/' },
		{ image: BMW, href: 'https://www.bmw.fr/' },
		{ image: burgerKing, href: 'https://www.burgerking.fr/' },
		{ image: CiteEspace, href: 'https://cite-espace.com/' },
		{ image: Costa, href: 'https://www.costa.co.uk/' },
		{ image: Decathlon, href: 'https://www.decathlon.fr/' },
		{ image: Delacre, href: 'https://www.delacre.com/fr-fr' },
		{ image: Disneyland, href: 'https://www.disneylandparis.fr/' },
		{ image: Evian, href: 'https://www.evian.com/fr-fr/' },
		{ image: FDJ, href: 'https://www.fdj.fr/' },
		{ image: Fnac, href: 'https://www.fnac.com/' },
		{ image: LEGO, href: 'https://www.lego.com/fr-fr' },
		{ image: loreal, href: 'https://www.loreal.com/fr/' },
		{ image: Peugeot, href: 'https://www.peugeot.fr/' },
		{ image: PointS, href: 'https://www.points.fr/' },
		{ image: PuyDuFou, href: 'https://www.puydufou.com/fr' },
		{ image: Region, href: 'https://www.laregion.fr/' },
		{ image: Renault, href: 'https://www.renault.fr/' },
		{ image: SanPe, href: 'https://www.sanpellegrino.fr/' },
		{ image: Saupiquet, href: 'https://www.saupiquet.fr/' },
		{ image: SNCF, href: 'https://www.sncf.com/fr' },
		{ image: TotalEnergie, href: 'https://totalenergies.com/fr' },
		{ image: Vulcania, href: 'https://www.vulcania.fr/' }
	];
</script>

<div class="marquee-wrapper">
	<div class="marquee">
		<div class="marquee__group">
			{#each cards as card}
				<div class="marquee__item">
					<div class="logo-box">
						<CardRealisation image={card.image} href={card.href} />
					</div>
				</div>
			{/each}
		</div>
		<!-- Duplication exacte pour la boucle infinie -->
		<div class="marquee__group" aria-hidden="true">
			{#each cards as card}
				<div class="marquee__item">
					<div class="logo-box">
						<CardRealisation image={card.image} href={card.href} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
.marquee-wrapper {
	overflow: hidden;
	width: 100%;
	padding: 0px 0;
}

.marquee {
	display: flex;
	overflow: hidden;
	user-select: none;
	gap: 0;
}

.marquee__group {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 0;
	min-width: 100%;
	animation: scroll-x 40s linear infinite;
}

.marquee__item {
	flex: 0 0 auto;
	width: 150px;
	padding: 10px;
	box-sizing: border-box;
}

.logo-box {
	display: flex; 
	align-items: center; 
	justify-content: center;
	width: 100%; 
	height: 200px;
	background-color: none;
	
	/* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.108);
	border: 1px solid grey;
	border-radius: 18px;
	background-color: white; */
}

.logo-box :global(img),
.logo-box :global(svg),
.logo-box :global(picture) {
	max-height: 88px; 
	width: auto; 
	max-width: 100%; 
	object-fit: contain; 
	display: block;
}

/* L'animation déplace de 100% = la largeur d'un groupe complet */
@keyframes scroll-x {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-100%);
	}
}

/* Responsive */
@media (max-width: 1024px) {
	.marquee__item { 
		width: 130px;
	}
	.logo-box :global(img), 
	.logo-box :global(svg), 
	.logo-box :global(picture) { 
		max-height: 76px;
	}
}

@media (max-width: 768px) {
	.marquee__item { 
		width: 100px;
	}
	.logo-box :global(img), 
	.logo-box :global(svg), 
	.logo-box :global(picture) { 
		max-height: 62px;
	}
}
</style>