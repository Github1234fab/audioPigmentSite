<script>
	import Splide from '@splidejs/splide';
	import '@splidejs/splide/dist/css/splide.min.css';
	import { onMount } from 'svelte';
	import CardRealisation from '$lib/component/card-realisation.svelte';
	import { TextureUtils } from 'three';
	import BP from '../../assets/logos/Banque_de_France_1.png';
	import Barilla from '../../assets/logos/barilla-1.png';
	let splide;

	const cards = [
		{
			image: {Barilla},
		}
	];

	onMount(() => {
		splide = new Splide('.splide', {
			type: 'loop',
			perPage: 1,
			autoplay: true,
			pauseOnHover: true,
			speed: 3000,
			arrows: false,
			pagination: false,
			breakpoints: {
				1560: {
					perPage: 3
				},
				1024: {
					perPage: 4
				},
				938: {
					perPage: 2
				},
				768: {
					perPage: 2
				},
				480: {
					perPage: 1
				}
			},
			easing: 'ease-in-out'
		});

		splide.mount();
		splide.play();
	});
</script>

<div class="splide">
	<div class="splide__track">
		<ul class="splide__list">
			{#each cards as card}
				<li class="splide__slide">
					<CardRealisation
						title={card.title}
						type={card.type}
						technique={card.technique}
						image={card.image}
					/>
				</li>
			{/each}
		</ul>
	</div>
</div>
