<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import VideoCard from './VideoCard.svelte';

	// Ton tableau de vidéos
    const videos = [
    { url: 'https://www.youtube.com/watch?v=Fu-aEj_Q8ig', title: 'Vidéo 1' },
    { url: 'https://www.youtube.com/watch?v=FJhtKdsnsN0', title: 'Vidéo 2' },
    { url: 'https://www.youtube.com/watch?v=uj19mlAZlUo', title: 'Vidéo 3' },
    { url: 'https://www.youtube.com/watch?v=NtHwCg4i73c', title: 'Vidéo 4' },
    { url: 'https://www.youtube.com/watch?v=Glq7QP-US-Y', title: 'Vidéo 5' },
    { url: 'https://www.youtube.com/watch?v=l8vJAkablNk', title: 'Vidéo 6' },
    { url: 'https://www.youtube.com/watch?v=LfNereR9MHI', title: 'Vidéo 7' },
    { url: 'https://www.youtube.com/watch?v=4H_sEETHmvs', title: 'Vidéo 8' },
    { url: 'https://www.youtube.com/watch?v=gmcgXXlpras', title: 'Vidéo 9' },
    { url: 'https://www.youtube.com/watch?v=9b-nxj_la6o', title: 'Vidéo 10' },
    { url: 'https://www.youtube.com/watch?v=-pGIzsqOoEY', title: 'Vidéo 11' },
    { url: 'https://www.youtube.com/watch?v=cxjJlnM76Wc', title: 'Vidéo 12' },
    { url: 'https://www.youtube.com/watch?v=d2AfG-OzoL8', title: 'Vidéo 13' },
    { url: 'https://www.youtube.com/watch?v=NB-SP4qrjtA', title: 'Vidéo 14' },
    { url: 'https://www.youtube.com/watch?v=28tMbzvJsG4', title: 'Vidéo 15' },
    { url: 'https://www.youtube.com/watch?v=KvOP_tbju3A&pp=0gcJCc0JAYcqIYzv', title: 'Vidéo 16' },
    { url: 'https://www.youtube.com/watch?v=pz2xpVFJ-nU', title: 'Vidéo 17' },
    { url: 'https://www.youtube.com/watch?v=KEJoZxzM0FI', title: 'Vidéo 18' },
    { url: 'https://www.youtube.com/watch?v=dUOgdMw4kMo', title: 'Vidéo 19' },
    { url: 'https://www.youtube.com/watch?v=qA9k1JurJw4&pp=0gcJCc0JAYcqIYzv', title: 'Vidéo 20' },
    { url: 'https://www.youtube.com/watch?v=JkvVrbImqBU', title: 'Vidéo 21' },
    { url: 'https://www.youtube.com/watch?v=1wQ-J_sZ3jg', title: 'Vidéo 22' },
    { url: 'https://www.youtube.com/watch?v=yRuTtiiPKhU', title: 'Vidéo 23' },
    { url: 'https://www.youtube.com/watch?v=L79bsQssG5U', title: 'Vidéo 24' },
    { url: 'https://www.youtube.com/watch?v=EJicT-1Lqe4', title: 'Vidéo 25' },
    { url: 'https://www.youtube.com/watch?v=WFxoUld3yrc', title: 'Vidéo 26' },
    { url: 'https://www.youtube.com/watch?v=BqgViQ-U7Jg', title: 'Vidéo 27' },
    { url: 'https://www.youtube.com/watch?v=63PRVdLEgZI', title: 'Vidéo 28' },
    { url: 'https://www.youtube.com/@StudioAudioPigment/videos', title: 'Vidéo 29' },
    { url: 'https://www.youtube.com/watch?v=UqSREduT-Tw', title: 'Vidéo 30' },
    { url: 'https://www.youtube.com/@StudioAudioPigment', title: 'Vidéo 31' }
];

	const options = {
		type: 'loop',
		perPage: 7,
		gap: 0,
		autoplay: true,
		pauseOnHover: true,
		speed: 2000,
		arrows: true,
		pagination: false,
		breakpoints: {
			1560: { perPage: 7 },
			1024: { perPage: 7 },
			938: { perPage: 4 },
			768: { perPage: 1 },
			480: { perPage: 1 }
		},
		easing: 'ease-in-out'
	};
</script>

<Splide {options} aria-label="Vidéos">
	{#each videos as video}
		<SplideSlide>
			<VideoCard url={video.url} title={video.title} />
		</SplideSlide>
	{/each}
</Splide>

<style>
	:global(.splide) {
		margin: 2rem auto;
		min-width: 100vw;

		background: transparent;
	}
	:global(.splide__slide) {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 240px;
	}
</style>
