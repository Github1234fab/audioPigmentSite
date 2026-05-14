<script>
	import CardRealisation from '$lib/component/Card-logo.svelte';

	const cards = [
		{ image: '/assets/logos/Banque_de_France_DEF.png', href: 'https://www.banque-france.fr/' },
		{ image: '/assets/logos/barilla-DEF.png', href: 'https://www.barilla.com/fr-fr' },
		{ image: '/assets/logos/BioMerieux DEF.png', href: 'https://www.biomerieux.com/fr/' },
		{ image: '/assets/logos/BlaBlaCar NEW DEF.png', href: 'https://www.blablacar.fr/' },
		{ image: '/assets/logos/BMW_DEF.png', href: 'https://www.bmw.fr/' },
		{ image: '/assets/logos/burger king DEF.png', href: 'https://www.burgerking.fr/' },
		{ image: '/assets/logos/CiteEspace Toulouse  DEF.png', href: 'https://cite-espace.com/' },
		{ image: '/assets/logos/Costa DEF.png', href: 'https://www.costa.co.uk/' },
		{ image: '/assets/logos/Decathlon DEF.png', href: 'https://www.decathlon.fr/' },
		{ image: '/assets/logos/Delacre DEF.png', href: 'https://www.delacre.com/fr-fr' },
		{ image: '/assets/logos/Disneyland_Paris_2 DEF.png', href: 'https://www.disneylandparis.fr/' },
		{ image: '/assets/logos/Evian DEF.png', href: 'https://www.evian.com/fr-fr/' },
		{ image: '/assets/logos/FDJ DEF.png', href: 'https://www.fdj.fr/' },
		{ image: '/assets/logos/fnac-2 DEF.png', href: 'https://www.fnac.com/' },
		{ image: '/assets/logos/LEGO_1 DEF.png', href: 'https://www.lego.com/fr-fr' },
		{ image: '/assets/logos/loreal-logo-2 DEF.png', href: 'https://www.loreal.com/fr/' },
		{ image: '/assets/logos/Peugeot 1 DEF.png', href: 'https://www.peugeot.fr/' },
		{ image: '/assets/logos/Point S 1 DEF.png', href: 'https://www.points.fr/' },
		{ image: '/assets/logos/Puy-du-fou_2.png', href: 'https://www.puydufou.com/fr' },
		{ image: '/assets/logos/Region_Auvergne-Rhone-Alpes GROS DEF.png', href: 'https://www.laregion.fr/' },
		{ image: '/assets/logos/Renault GROS DEF.png', href: 'https://www.renault.fr/' },
		{ image: '/assets/logos/San-Pellegrino-Logo 1.png', href: 'https://www.sanpellegrino.fr/' },
		{ image: '/assets/logos/SAUPIQUET DEF.png', href: 'https://www.saupiquet.fr/' },
		{ image: '/assets/logos/SNCF DEF.png', href: 'https://www.sncf.com/fr' },
		{ image: '/assets/logos/TotalEnergies DEF.png', href: 'https://totalenergies.com/fr' },
		{ image: '/assets/logos/VULCANIA DEF.png', href: 'https://www.vulcania.fr/' }
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
	background: transparent;
}

.marquee {
	display: flex;
	overflow: hidden;
	user-select: none;
	gap: 0;
	touch-action: pan-y; /* Permet le scroll vertical fluide sans conflit */
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
	height: 120px; /* Plus petit pour économiser la RAM mobile */
}

.logo-box :global(img) {
	max-height: 80px;
	width: auto; 
	max-width: 100%; 
	object-fit: contain; 
	display: block;
	/* On évite les filtres complexes en mouvement */
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
		animation: none; /* Arrêt de l'animation pour économiser le processeur */
		flex-wrap: wrap;
		justify-content: center;
		min-width: 100%;
		transform: none !important;
	}
	.marquee__group[aria-hidden="true"] {
		display: none; /* On cache les doublons */
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