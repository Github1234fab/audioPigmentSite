<script>
	import CardRealisation from '$lib/component/Card-logo.svelte';

	import Barilla from '../../assets/Logos-English/barilla-DEF.png';
	import BioMerieux from '../../assets/Logos-English/BioMerieux DEF.png';
	import BMW from '../../assets/Logos-English/BMW_DEF.png';
	import burgerKing from '../../assets/Logos-English/burger king DEF.png';
	import Costa from '../../assets/Logos-English/Costa DEF.png';
	import Accor from '../../assets/Logos-English/ACCOR DEF.png';
	import Amplifon from '../../assets/Logos-English/amplifon DEF.png';
	import Chanel from '../../assets/Logos-English/CHANNEL DEF.png';
	import Ferrero from '../../assets/Logos-English/Ferrero_logo GROS DEF.png';
	import Hermes from '../../assets/Logos-English/hermes DEF.png';
	import Lenor from '../../assets/Logos-English/LENOR DEF.png';
	import Delacre from '../../assets/Logos-English/Delacre DEF.png';
	import Disneyland from '../../assets/Logos-English/Disneyland_Paris_2 DEF.png';
	import ProtectGamble from '../../assets/Logos-English/PG-1 DEF.png';
	import LEGO from '../../assets/Logos-English/LEGO_1 DEF.png';
	import loreal from '../../assets/Logos-English/loreal-logo-2 DEF.png';
	import Peugeot from '../../assets/Logos-English/Peugeot 1 DEF.png';
	import PuyDuFou from '../../assets/Logos-English/Puy-du-fou_1 DEF.png';
	import Renault from '../../assets/Logos-English/Renault GROS DEF.png';
	import SanPe from '../../assets/Logos-English/San-Pellegrino-Logo 1 DEF.png';
	import Saupiquet from '../../assets/Logos-English/SAUPIQUET DEF.png';
	import TotalEnergie from '../../assets/Logos-English/TotalEnergies DEF.png';

	const cards = [
		{ image: Barilla, href: 'https://www.barilla.com/en' },
		{ image: Accor, href: 'https://group.accor.com/en' },
		{ image: Amplifon, href: 'https://www.amplifon.com/' },
		{ image: Chanel, href: 'https://www.chanel.com/' },
		{ image: Ferrero, href: 'https://www.ferrerogroup.com/' },
		{ image: Hermes, href: 'https://www.hermes.com/' },
		{ image: Lenor, href: 'https://www.lenor.com/' },
		{ image: ProtectGamble, href: 'https://us.pg.com/' },
		{ image: BioMerieux, href: 'https://www.biomerieux.com/' },
		{ image: BMW, href: 'https://www.bmw.com/' },
		{ image: burgerKing, href: 'https://www.bk.com/' },
		{ image: Costa, href: 'https://www.costa.co.uk/' },
		{ image: Delacre, href: 'https://www.delacre.com/' },
		{ image: Disneyland, href: 'https://www.disneylandparis.com/' },
		{ image: LEGO, href: 'https://www.lego.com/' },
		{ image: loreal, href: 'https://www.loreal.com/' },
		{ image: Peugeot, href: 'https://www.peugeot.com/' },
		{ image: PuyDuFou, href: 'https://www.puydufou.com/' },
		{ image: Renault, href: 'https://www.renaultgroup.com/' },
		{ image: SanPe, href: 'https://www.sanpellegrino.com/' },
		{ image: Saupiquet, href: 'https://www.saupiquet.com/' },
		{ image: TotalEnergie, href: 'https://totalenergies.com/' }
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
		<!-- Exact duplication for infinite loop -->
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
	background: transparent;
}

.marquee {
	display: flex;
	overflow: hidden;
	user-select: none;
	gap: 0;
	touch-action: pan-y;
}

.marquee__group {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 20px;
	min-width: 100%;
	padding-right: 20px;
	animation: scroll-x 50s linear infinite;
	will-change: transform;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
}

.marquee__item {
	flex: 0 0 auto;
	width: 180px;
	padding: 10px;
	box-sizing: border-box;
}

.logo-box {
	display: flex; 
	align-items: center; 
	justify-content: center;
	width: 100%; 
	height: 120px;
}

.logo-box :global(img) {
	max-height: 80px;
	width: auto; 
	max-width: 100%; 
	object-fit: contain; 
	display: block;
	filter: none !important;
}

@keyframes scroll-x {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(-100%, 0, 0);
	}
}

@media (max-width: 768px) {
	.marquee {
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}
	.marquee__group {
		animation: none;
		flex-wrap: wrap;
		justify-content: center;
		min-width: 100%;
		transform: none !important;
		padding-right: 0;
	}
	.marquee__group[aria-hidden="true"] {
		display: none;
	}
	.marquee__item { 
		width: 100px;
		padding: 5px;
	}
	.logo-box {
		height: 60px;
	}
	.logo-box :global(img) { 
		max-height: 40px;
	}
}
</style>
