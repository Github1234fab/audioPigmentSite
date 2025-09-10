<!-- <script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import VideoCard from './VideoCard.svelte';
    import { onMount } from 'svelte';


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

    { url: 'https://www.youtube.com/watch?v=UqSREduT-Tw', title: 'Vidéo 30' },
 
];

const options = {
        type: 'loop',
        perPage: 4,
        gap: 3,
        autoplay: true,
        pauseOnHover: true,
        speed: 2000,
        arrows: true,
        pagination: false,
        breakpoints: {
            1560: { perPage: 4, gap: 20 },
            1024: { perPage: 3, gap:10 },
            938: { perPage: 3, gap: 20 },
            768: { perPage: 2 },
            480: { perPage: 1, gap: 10 }
        },
        easing: 'ease-in-out'
    };

    let currentSlide = 0;

   
    function getYoutubeThumbnail(url) {
        const idMatch = url.match(/[?&]v=([^&]+)/);
        if (!idMatch) return '';
        return `https://img.youtube.com/vi/${idMatch[1]}/hqdefault.jpg`;
    }

    let splideRef;

    function handleMoved(e) {
        currentSlide = e.index;
    }

    onMount(() => {
        
        if (splideRef && splideRef.splide) {
            currentSlide = splideRef.splide.index;
        }
    });

</script>

<Splide bind:this={splideRef} {options} on:moved={handleMoved} aria-label="Vidéos">
    {#each videos as video, i}
        <SplideSlide>
            {#if Math.abs(currentSlide - i) <= 2}
         
            
                <VideoCard url={video.url} title={video.title}/>
            {:else}

            
                <img 
                    src={getYoutubeThumbnail(video.url)}
                    alt={video.title}
                    style="width:100%; aspect-ratio:16/9; object-fit:cover; border-radius:8px;"
                />
            {/if}
        </SplideSlide>
    {/each}
</Splide>
 -->

<!-- 
 <script>
    import { onMount } from 'svelte';
    import VideoCard from './VideoCard.svelte';
  
    let Splide = null;
    let SplideSlide = null;
    let splideReady = false;
  
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
      { url: 'https://www.youtube.com/watch?v=UqSREduT-Tw', title: 'Vidéo 30' },
    ];
  
    const options = {
      type: 'loop',
      perPage: 4,
      gap: 3,
      autoplay: true,
      pauseOnHover: true,
      speed: 2000,
      arrows: true,
      pagination: false,
      breakpoints: {
        1560: { perPage: 4, gap: 20 },
        1024: { perPage: 3, gap: 10 },
        938: { perPage: 3, gap: 20 },
        768: { perPage: 2 },
        480: { perPage: 1, gap: 10 },
      },
      easing: 'ease-in-out',
    };
  
    let currentSlide = 0;
    let splideRef;
  
    function handleMoved(e) {
      currentSlide = e.detail.index;
    }
  
 
    function getYoutubeThumbnail(url) {
      const idMatch = url.match(/[?&]v=([^&]+)/);
      if (!idMatch) return '';
      return `https://img.youtube.com/vi/${idMatch[1]}/hqdefault.jpg`;
    }
  
    onMount(async () => {
      const mod = await import('@splidejs/svelte-splide');
      Splide = mod.Splide;
      SplideSlide = mod.SplideSlide;
      splideReady = true;
  

      if (splideRef && splideRef.splide) {
        currentSlide = splideRef.splide.index;
      }
    });
  </script>
  
  {#if splideReady && Splide && SplideSlide}
    <svelte:component this={Splide} bind:this={splideRef} {options} on:moved={handleMoved} aria-label="Vidéos">
      {#each videos as video, i}
        <svelte:component this={SplideSlide}>
          {#if Math.abs(currentSlide - i) <= 2}
         
            <VideoCard url={video.url} title={video.title} />
          {:else}
          
            <img 
              src={getYoutubeThumbnail(video.url)} 
              alt={video.title} 
              style="width:100%; height: 100%; border-radius:8px; position: absolute; top: 0; left: 0;" 
            />
          {/if}
        </svelte:component>
      {/each}
    </svelte:component>
  {:else}
    <div>Chargement du carousel de vidéos…</div>
  {/if}
   -->

<!-- <script>
	import { onMount } from 'svelte';
	import VideoCard from './VideoCard.svelte';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	let Splide = null;
	let SplideSlide = null;
	let splideReady = false;

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
		{ url: 'https://www.youtube.com/watch?v=9b-nxj_la6o', title: 'Vidéo 10' }
		// ... tu peux garder les autres
	];

	const options = {
		type: 'slide',
    rewind: true,
		perPage: 4,
    direction: 'ltr', 
		gap: '1rem',
		autoplay: true,
		pauseOnHover: true,
		interval: 3000,
		speed: 800,
		arrows: true,
		pagination: false,
		breakpoints: {
			1560: { perPage: 4, gap: '1.25rem' },
			1024: { perPage: 3, gap: '1rem' },
			768: { perPage: 2, gap: '1rem' },
			480: { perPage: 1, gap: '0.75rem' }
		},
		easing: 'ease-in-out'
	};

	let splideRef;

	onMount(async () => {
		const mod = await import('@splidejs/svelte-splide');
		Splide = mod.Splide;
		SplideSlide = mod.SplideSlide;
		splideReady = true;
	});
</script>

{#if splideReady && Splide && SplideSlide}
	<div class="carousel-container">
		<svelte:component this={Splide} bind:this={splideRef} {options} aria-label="Vidéos">
			{#each videos as video(video.url)}
				<svelte:component this={SplideSlide}>
					<div class="slide-wrapper">
						<VideoCard url={video.url} title={video.title} />
					</div>
				</svelte:component>
			{/each}
		</svelte:component>
	</div>
{:else}
	<div>Chargement du carousel de vidéos…</div>
{/if}

<style>
	.carousel-container {
		width: 100vw;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		overflow: hidden;
	
	}

	:global(.splide) {
		width: 100%;
   
	}

	:global(.splide__track),
	:global(.splide__list),
	:global(.splide__slide) {
		width: 100%;
 
	}

	.slide-wrapper {
		width: 100%;
		aspect-ratio: 16 / 9;
		position: relative;
		border-radius: 8px;
		overflow: hidden;
    height: 450px;
	}
  .slide-wrapper { background:#000; }
</style> -->




<script>
  import { onMount, onDestroy } from 'svelte';
  import VideoCard from './VideoCard.svelte';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

  let Splide = null;
  let SplideSlide = null;
  let splideReady = false;
  let splideRef;

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
  ];

  // Défilement continu + largeur contrôlée par CSS (autoWidth)
  const options = {
    type: 'loop',
    drag: 'free',
    direction: 'ltr',
    arrows: false,
    pagination: false,
    gap: '1rem',
    autoplay: false,   // AutoScroll gère le mouvement
    speed: 800,
    easing: 'linear',

    autoWidth: true,   // ← clé : Splide calcule la track, toi tu fixes la largeur des slides en CSS

    autoScroll: {
      speed: 3.0,      // ajuste la vitesse à ton goût
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  };

  const cleanups = [];
  const addCleanup = (fn) => cleanups.push(fn);

  function onSplideMounted() {
    const s = splideRef?.splide;
    if (s && !s.Components.AutoScroll) {
      // @ts-ignore
      s.mount({ AutoScroll });
    }
    const root = s?.root;
    if (root) {
      const io = new IntersectionObserver(([entry]) => {
        if (!s?.Components?.AutoScroll) return;
        entry.isIntersecting ? s.Components.AutoScroll.play() : s.Components.AutoScroll.pause();
      }, { threshold: 0.1 });
      io.observe(root);
      addCleanup(() => io.disconnect());
    }
  }

  onMount(async () => {
    const mod = await import('@splidejs/svelte-splide');
    Splide = mod.Splide;
    SplideSlide = mod.SplideSlide;
    splideReady = true;

    const onLoad = () => splideRef?.splide?.refresh();
    window.addEventListener('load', onLoad);
    addCleanup(() => window.removeEventListener('load', onLoad));
  });

  onDestroy(() => { while (cleanups.length) cleanups.pop()(); });
</script>

{#if splideReady && Splide && SplideSlide}
  <div class="carousel-container">
    <svelte:component
      this={Splide}
      bind:this={splideRef}
      {options}
      aria-label="Vidéos"
      extensions={{ AutoScroll }}
      on:mounted={onSplideMounted}
    >
      {#each videos as video (video.url)}
        <svelte:component this={SplideSlide}>
          <div class="slide-wrapper">
            <VideoCard url={video.url} title={video.title} />
          </div>
        </svelte:component>
      {/each}
    </svelte:component>
  </div>
{:else}
  <div>Chargement du carousel de vidéos…</div>
{/if}

<style>
  .carousel-container {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  :global(.splide) { width: 100%; }
  :global(.splide__track) { width: 100%; overflow: hidden; }

  /* IMPORTANT : laisse Splide gérer la track; on fixe la largeur des slides ici (autoWidth) */
  :global(.splide__slide) {
    /* Desktop par défaut */
    width: clamp(320px, 26vw, 520px);
    padding: 0;
    margin: 0;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    :global(.splide__slide) {
      width: clamp(280px, 34vw, 460px);
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    :global(.splide__slide) {
      width: clamp(220px, 72vw, 380px);
    }
  }

  .slide-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* change si tu veux 4/5 en mobile, voir ci-dessous */
    height: auto;
    border-radius: 8px;
    overflow: hidden;
    background: #000;
    will-change: transform;
  }

  /* Option : ratio différent en mobile (ex. 4/5 pour plus de hauteur)
  @media (max-width: 768px) {
    .slide-wrapper { aspect-ratio: 4 / 5; }
  }
  */
</style>
