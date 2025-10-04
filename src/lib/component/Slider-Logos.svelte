<script>
	import CardRealisation from '$lib/component/Card-logo.svelte';
	import BP from '../../assets/logos/Banque_de_France_1.png';
	import Barilla from '../../assets/logos/barilla-1.png';
	import BioMerieux from '../../assets/logos/BioMerieux 1.png';
	import BlablaCar from '../../assets/logos/blablaCar.webp';
	import BMW from '../../assets/logos/BMW.png';
	import burgerKing from '../../assets/logos/burger king.png';
	import CiteEspace from '../../assets/logos/citeEspace.jpg';
	import Costa from '../../assets/logos/Costa.png';
	import Decathlon from '../../assets/logos/decathlon.png';
	import Delacre from '../../assets/logos/Delacre.png';
	import Disneyland from '../../assets/logos/disneyland-paris-1995-logo-png_seeklogo-431918.png';
	import Evian from '../../assets/logos/Evian.png';
	import FDJ from '../../assets/logos/FDJ.png';
	import Fnac from '../../assets/logos/fnac-2-logo.png';
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
	padding: 20px 0;
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
	padding: 4px;
	box-sizing: border-box;
}

.logo-box {
	display: flex; 
	align-items: center; 
	justify-content: center;
	width: 100%; 
	height: 100%;
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