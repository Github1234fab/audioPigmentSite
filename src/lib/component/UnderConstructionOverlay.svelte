<script>
  export let lang = 'fr';
</script>

<div class="construction-overlay">
  <div class="content-wrapper">
    <div class="icon-pulse">
      <!-- Minimalist premium rotating gear -->
      <svg class="gear-svg" viewBox="0 0 24 24" width="80" height="80">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.53.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="var(--accent, #e53e3e)"/>
      </svg>
    </div>

    {#if lang === 'fr'}
      <h1>PAGE EN COURS DE CONSTRUCTION</h1>
      <p class="subtitle">Pour le moment, veuillez visiter notre chaîne YouTube pour découvrir nos réalisations.</p>
      <a href="https://www.youtube.com/@StudioAudioPigment" target="_blank" rel="noopener noreferrer" class="youtube-btn">
        <svg class="youtube-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
        </svg>
        VISITER NOTRE CHAÎNE YOUTUBE
      </a>
    {:else}
      <h1>PAGE UNDER CONSTRUCTION</h1>
      <p class="subtitle">Please visit our YouTube channel for the moment to discover our achievements.</p>
      <a href="https://www.youtube.com/@StudioAudioPigment" target="_blank" rel="noopener noreferrer" class="youtube-btn">
        <svg class="youtube-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
        </svg>
        VISIT OUR YOUTUBE CHANNEL
      </a>
    {/if}
  </div>
</div>

<style>
  .construction-overlay {
    position: fixed;
    top: 78px; /* S'affiche exactement sous la Navbar pour que les boutons de navigation restent utilisables */
    left: 0;
    width: 100vw;
    height: calc(100vh - 78px);
    background-color: #0e1013; /* Fond noir premium */
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    font-family: var(--font-main, sans-serif);
    z-index: 80; /* Par-dessus le contenu de la page, mais sous la Navbar et le burger flottant */
  }

  .content-wrapper {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .icon-pulse {
    animation: pulse 2.5s infinite ease-in-out;
  }

  .gear-svg {
    animation: rotate 12s infinite linear;
  }

  h1 {
    font-family: var(--font-heading, sans-serif);
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0;
    line-height: 1.25;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #a0aec0;
    line-height: 1.6;
    margin: 0;
  }

  .youtube-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background-color: #ff0000; /* Rouge YouTube officiel */
    color: white;
    padding: 14px 32px;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .youtube-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(255, 0, 0, 0.5);
    background-color: #e60000;
  }

  .youtube-btn:active {
    transform: translateY(-1px);
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.85; }
    50% { transform: scale(1.04); opacity: 1; }
    100% { transform: scale(1); opacity: 0.85; }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
    }
    .subtitle {
      font-size: 0.95rem;
    }
    .youtube-btn {
      padding: 12px 24px;
      font-size: 0.8rem;
      width: 100%;
      justify-content: center;
    }
  }
</style>
