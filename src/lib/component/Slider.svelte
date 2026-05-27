<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  const videos = [
    { url: 'https://www.youtube.com/watch?v=Fu-aEj_Q8ig', title: 'Hazelnuts' },
    { url: 'https://www.youtube.com/watch?v=FJhtKdsnsN0', title: 'Granpa & Zoe' },
    { url: 'https://www.youtube.com/watch?v=uj19mlAZlUo', title: 'Hazelnuts 2' },
    { url: 'https://www.youtube.com/watch?v=NtHwCg4i73c', title: 'Granpa & Zoe 2' },
    { url: 'https://www.youtube.com/watch?v=Glq7QP-US-Y', title: 'Lucia' },
    { url: 'https://www.youtube.com/watch?v=l8vJAkablNk', title: 'Emmentaler' },
    { url: 'https://www.youtube.com/watch?v=LfNereR9MHI', title: 'Barilla' },
    { url: 'https://www.youtube.com/watch?v=4H_sEETHmvs', title: 'Info Jeunes' },
    { url: 'https://www.youtube.com/watch?v=gmcgXXlpras', title: 'Mix Buffet' },
    { url: 'https://www.youtube.com/watch?v=9b-nxj_la6o', title: '3D Binaural' },
  ];

  let thumbnailUrls = {};
  let activeVideo = '';

  function getYoutubeId(url) {
    return url.match(/[?&]v=([^&]+)/)?.[1] || url.split('/').pop() || '';
  }

  onMount(() => {
    videos.forEach(video => {
      const id = getYoutubeId(video.url);
      thumbnailUrls[video.url] = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    });
    thumbnailUrls = { ...thumbnailUrls };
  });

  function getThumbnail(url) {
    return thumbnailUrls[url] || `https://img.youtube.com/vi/${getYoutubeId(url)}/hqdefault.jpg`;
  }

  function handleImageError(event, video) {
    const id = getYoutubeId(video.url);
    event.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  function getYouTubeEmbedUrl(url) {
    const videoId = getYoutubeId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';
  }

  function openVideo(url) {
    activeVideo = getYouTubeEmbedUrl(url);
  }

  function closeVideo() {
    activeVideo = '';
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeVideo();
    }
  }
</script>

<div class="marquee-wrapper">
  <div class="marquee">
    <div class="marquee__group">
      {#each videos as video, index (video.url + '-group1-' + index)}
        <div class="marquee__item">
          <a 
            href={video.url} 
            class="video-thumbnail" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Regarder {video.title} sur YouTube"
            on:click|preventDefault={() => openVideo(video.url)}
          >
            <img 
              src={getThumbnail(video.url)} 
              alt={video.title}
              loading="lazy"
              on:error={(e) => handleImageError(e, video)}
            />
            <div class="play-overlay">
              <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="var(--accent)"/>
                <path d="M45 24L27 14v20" fill="white"/>
              </svg>
            </div>
            <div class="video-title">{video.title}</div>
          </a>
        </div>
      {/each}
    </div>
    <div class="marquee__group" aria-hidden="true">
      {#each videos as video, index (video.url + '-group2-' + index)}
        <div class="marquee__item">
          <a 
            href={video.url} 
            class="video-thumbnail" 
            target="_blank"
            rel="noopener noreferrer"
            on:click|preventDefault={() => openVideo(video.url)}
          >
            <img 
              src={getThumbnail(video.url)} 
              alt={video.title}
              loading="lazy"
              on:error={(e) => handleImageError(e, video)}
            />
            <div class="play-overlay">
              <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="var(--accent)"/>
                <path d="M45 24L27 14v20" fill="white"/>
              </svg>
            </div>
            <div class="video-title">{video.title}</div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

<svelte:window on:keydown={handleKeyDown} />

{#if activeVideo}
  <div
    class="modal-backdrop"
    on:click={closeVideo}
    on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeVideo(); }}
    role="button"
    tabindex="0"
    transition:fade={{ duration: 200 }}
  >
    <button class="close-btn" on:click={closeVideo} aria-label="Close video">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="white"/>
      </svg>
    </button>
    <div class="video-container" on:click|stopPropagation role="presentation">
      <iframe
        src={activeVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
{/if}

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
    touch-action: pan-y;
  }
  
  .marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    min-width: 100%;
    padding-right: 40px;
    animation: scroll-video 40s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  .marquee__item {
    flex: 0 0 auto;
    width: 360px;
    height: 300px;
    padding: 0;
    box-sizing: border-box;
  }
  
  .video-thumbnail {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #1a1a1a;
    text-decoration: none;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
  
  .video-thumbnail:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  }
  
  .video-thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .play-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }
  
  .video-thumbnail:hover .play-overlay {
    opacity: 1;
  }
  
  .video-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }
  
  @keyframes scroll-video {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
  
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

  /* Style de la modale de lecture vidéo */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100001;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  .video-container {
    width: 90%;
    max-width: 1000px;
    aspect-ratio: 16/9;
    background: black;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .video-container iframe {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: 768px) {
    .close-btn {
      top: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
    }
  }
</style>