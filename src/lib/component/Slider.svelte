<script>
  import { onMount } from 'svelte';

  const videos = [
    { url: 'https://www.youtube.com/watch?v=Fu-aEj_Q8ig' },
    { url: 'https://www.youtube.com/watch?v=FJhtKdsnsN0' },
    { url: 'https://www.youtube.com/watch?v=uj19mlAZlUo'},
    { url: 'https://www.youtube.com/watch?v=NtHwCg4i73c'},
    { url: 'https://www.youtube.com/watch?v=Glq7QP-US-Y'},
    { url: 'https://www.youtube.com/watch?v=l8vJAkablNk'},
    { url: 'https://www.youtube.com/watch?v=LfNereR9MHI'},
    { url: 'https://www.youtube.com/watch?v=4H_sEETHmvs'},
    { url: 'https://www.youtube.com/watch?v=gmcgXXlpras'},
    { url: 'https://www.youtube.com/watch?v=9b-nxj_la6o' },
  ];

  let selectedVideo = null;
  let thumbnailUrls = {};

  function getYoutubeId(url) {
    return url.match(/[?&]v=([^&]+)/)?.[1] || '';
  }

  function getThumbnailUrls(url) {
    const id = getYoutubeId(url);
    return [
      `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${id}/sddefault.jpg`,
      `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/default.jpg`
    ];
  }

  function openVideo(video) {
    selectedVideo = video;
  }

  function closeModal() {
    selectedVideo = null;
  }

  onMount(async () => {
    for (const video of videos) {
      const urls = getThumbnailUrls(video.url);
      
      for (const url of urls) {
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (response.ok) {
            thumbnailUrls[video.url] = url;
            break;
          }
        } catch (e) {
          continue;
        }
      }
      
      if (!thumbnailUrls[video.url]) {
        const id = getYoutubeId(video.url);
        thumbnailUrls[video.url] = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      }
    }
    thumbnailUrls = { ...thumbnailUrls };
  });

  function getThumbnail(url) {
    return thumbnailUrls[url] || getThumbnailUrls(url)[2];
  }

  function handleImageError(event, video) {
    const id = getYoutubeId(video.url);
    event.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
</script>

<div class="marquee-wrapper">
  <div class="marquee">
    <div class="marquee__group">
      {#each videos as video, index (video.url + '-group1-' + index)}
        <div class="marquee__item">
          <button 
            class="video-thumbnail" 
            on:click={() => openVideo(video)}
            aria-label="Regarder {video.title}"
          >
            <img 
              src={getThumbnail(video.url)} 
              alt={video.title}
              loading="lazy"
              on:error={(e) => handleImageError(e, video)}
            />
            <div class="play-overlay">
              <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
                <path d="M45 24L27 14v20" fill="white"/>
              </svg>
            </div>
            <div class="video-title">{video.title}</div>
          </button>
        </div>
      {/each}
    </div>
    <div class="marquee__group" aria-hidden="true">
      {#each videos as video, index (video.url + '-group2-' + index)}
        <div class="marquee__item">
          <button 
            class="video-thumbnail" 
            on:click={() => openVideo(video)}
            tabindex="-1"
          >
            <img 
              src={getThumbnail(video.url)} 
              alt={video.title}
              loading="lazy"
              on:error={(e) => handleImageError(e, video)}
            />
            <div class="play-overlay">
              <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
                <path d="M45 24L27 14v20" fill="white"/>
              </svg>
            </div>
            <div class="video-title">{video.title}</div>
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>

{#if selectedVideo}
  <div 
    class="modal-overlay" 
    on:click={closeModal} 
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog" 
    aria-modal="true"
    tabindex="-1"
  >
    <div 
      class="modal-content" 
      on:click|stopPropagation
      on:keydown|stopPropagation
      role="document"
    >
      <button class="close-btn" on:click={closeModal} aria-label="Fermer">
        ✕
      </button>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/{getYoutubeId(selectedVideo.url)}?autoplay=1"
          title={selectedVideo.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
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
  }
  
  .marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    min-width: 60%;
    animation: scroll-video 35s linear infinite;
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
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: none;
    background: #1a1a1a;
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.645); /* Ombre par défaut */
  }
  
  .video-thumbnail:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6); /* Ombre plus prononcée au survol */
  }
  
  .video-thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    background: #1a1a1a;
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
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .modal-content {
    position: relative;
    width: 100%;
    max-width: 1200px;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
    animation: slideUp 0.3s ease;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8); /* Ombre sur la modal aussi */
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 32px;
    cursor: pointer;
    z-index: 1001;
    padding: 10px;
    line-height: 1;
    transition: color 0.2s ease;
  }
  
  .close-btn:hover {
    color: #ff0000;
  }
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  @keyframes scroll-video {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
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
    
    .marquee__group {
      gap: 8px;
      min-width: 100%;
    }
    
    .close-btn {
      top: 10px;
      right: 10px;
      background: rgba(0,0,0,0.8);
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .marquee__group {
      animation: none;
    }
    
    .video-thumbnail:hover {
      transform: none;
    }
  }
  </style>