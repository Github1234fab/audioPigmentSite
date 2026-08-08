<script>
    import { fade } from 'svelte/transition';
    import Card from '$lib/component/Card-realisation.svelte';
    import UnderConstructionOverlay from '$lib/component/UnderConstructionOverlay.svelte';
    import allRealisations from '$lib/realisations.json';
  
    let selectedType = "All";
    let activeVideo = '';

    const productionTypes = [
      "FILM CORPORATE",
      "PUBLICITÉ",
      "IDENTITÉ SONORE",
      "MUSIQUE ORIGINALE",
      "FULLDOME",
      "DOUBLAGE & LOCALISATION",
      "SOUND DESIGN",
      "FILM D’ANIMATION",
      "SPOT RADIO",
      "MUSÉOGRAPHIE",
      "MIXAGE"
    ];

    function normalize(str) {
      if (!str) return '';
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/['’]/g, "'")
        .toUpperCase()
        .trim();
    }
  
    $: filteredRealisations = selectedType === "All"
      ? allRealisations
      : allRealisations.filter(r => normalize(r.type) === normalize(selectedType));

    function getYouTubeEmbedUrl(url) {
      let videoId = '';
      if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v');
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
      }
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

<svelte:window on:keydown={handleKeyDown} />

<section>
  <h1>Our achievements</h1>
  <div class="filters">
    <button
      class:selected={selectedType === "All"}
      on:click={() => (selectedType = "All")}
    >All</button>
    {#each productionTypes as type}
      <button
        class:selected={selectedType === type}
        on:click={() => (selectedType = type)}
      >{type}</button>
    {/each}
  </div>

  <div class="cards-grid">
    {#each filteredRealisations as realisation}
      <Card
        title={realisation.title}
        image={realisation.image}
        link={realisation.link}
        on:click={(e) => {
          e.preventDefault();
          openVideo(realisation.link);
        }}
      />
    {:else}
      <p class="empty-state">No achievements in this category for now.</p>
    {/each}
  </div>
</section>

<!-- <UnderConstructionOverlay lang="en" /> -->

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
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    background-color: white;
    color: var(--black);
    min-height: 100vh;
  }
  section h1 {
    font-family: var(--font-heading);
    font-size: 2.8rem;
    margin-bottom: var(--space-xl);
    margin-top: var(--space-xl);
    font-weight: 800;
    letter-spacing: -0.04em;
    position: relative;
    width: fit-content;
    padding-bottom: 1.5rem;
  }

  section h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--accent);
    border-radius: 4px;
  }

  .filters {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-bottom: var(--space-xl);
    justify-content: center;
  }

  .filters button {
    background-color: var(--white);
    border: 1px solid var(--grey-light);
    color: var(--ardoise);
    padding: 10px 24px;
    cursor: pointer;
    font-family: var(--font-main);
    font-size: 0.85rem;
    font-weight: 700;
    transition: var(--transition);
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .filters button:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .filters button.selected {
    background-color: var(--accent);
    color: var(--white);
    border-color: var(--accent);
    box-shadow: var(--shadow-md);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    width: 100%;
    max-width: 1400px;
    margin-top: 50px;
    justify-content: center;
  }

  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    font-family: var(--font-main);
    font-size: 1.2rem;
    color: var(--ardoise-light);
    background: var(--white-off);
    border-radius: var(--radius-md);
    border: 1px dashed var(--grey-light);
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
    section h1 {
      font-size: 2.4rem;
      letter-spacing: -1px;
      line-height: 1.2;
      padding-bottom: 1.5rem;
      margin-top: 40px;
      margin-bottom: 2.5rem;
    }
    .filters {
      margin-top: 40px;
    }
    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-top: 0px;
    }
    section {
      padding: var(--space-lg) var(--space-sm);
    }
    .close-btn {
      top: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
    }
  }
</style>
