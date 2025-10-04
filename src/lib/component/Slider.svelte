<script>
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
  ];

  // Précharger les images pour éviter le clignotement
  onMount(() => {
    videos.forEach(video => {
      const img = new Image();
      const videoId = video.url.match(/[?&]v=([^&]+)/)?.[1];
      if (videoId) {
        img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    });
  });
</script>

<div class="marquee-wrapper">
  <div class="marquee">
    <div class="marquee__group">
      {#each videos as video}
        <div class="marquee__item">
          <div class="video-box">
            <VideoCard title={video.title} url={video.url} />
          </div>
        </div>
      {/each}
    </div>
    <!-- Duplication pour la boucle infinie -->
    <div class="marquee__group" aria-hidden="true">
      {#each videos as video}
        <div class="marquee__item">
          <div class="video-box">
            <VideoCard title={video.title} url={video.url} />
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
  animation: scroll-video 35s linear infinite;
}

.marquee__item {
  flex: 0 0 auto;
  width: 360px;
  height: 300px;
  padding: 8px;
  box-sizing: border-box;
}

.video-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.video-box :global(iframe),
.video-box :global(video),
.video-box :global(img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  border-radius: 8px;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Animation de défilement : -100% pour une boucle parfaite */
@keyframes scroll-video {
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
    width: 300px;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .marquee__item {
    width: 250px;
    height: 200px;
  }
}

/* Accessibilité : désactive l'animation si l'utilisateur préfère moins de mouvement */
@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    animation: none;
  }
}
</style>









































































































































