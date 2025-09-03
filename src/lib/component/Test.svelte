<!-- <script>
    const numCircles = 16; // plus de disques
    let circles = Array.from({ length: numCircles }, (_, i) => i);
  </script>
  
  <div class="wrapper">
    <div class="container">
      {#each circles as i}
        <div
          class="circle"
  style="--scale:{1 - i*0.065}; --index:{numCircles - 1 - i}"
        ></div>
      {/each}
    </div>
  </div>
  
  <style>
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(white, #ebe9e9, white);
  }
  
  .container {
    position: relative;
    width: 70vmin;
    height: 70vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }
  
  .circle {
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    box-shadow:
      10px 10px 20px #929292,
      -10px -10px 20px #ffffff;
  
    transform: scale(var(--scale)) translateZ(0);
    
    animation: lift 3s ease-in-out infinite alternate;
    animation-delay: calc(var(--index) * 0.3s);
  }
  
  @keyframes lift {
    0%, 100% {
      transform: scale(var(--scale)) translateZ(0);
    }
    50% {
        transform: scale(var(--scale)) translateZ(80px);
    }
  }
  </style>
   -->

   <script>
    const numCircles = 16; // nombre de disques
    const step = 0.08;     // ↑ augmente pour rendre le disque central plus petit (0.06 → 0.08/0.1)
    let circles = Array.from({ length: numCircles }, (_, i) => i);
  </script>
  
  <div class="wrapper">
    <div class="container">
      {#each circles as i}
        <div
          class="circle"
          style="
            --scale:{1 - i*step};
            --index:{numCircles - 1 - i};
          "
        ></div>
      {/each}
    </div>
  </div>
  
  <style>
  .wrapper {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(white, #ebe9e9, white); */
    margin-top: 150px;
    margin-left: 30px;
  }
  
  .container {
    position: relative;
    width: 70vmin;
    height: 70vmin;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Disque max = 300px. Les autres sont des scales concentriques. */
  .circle {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    transform-origin: center;
    transform: scale(var(--scale));
  
    background: #f2efef;
  
    /* ✅ Neumorphism interne: pas d'ombre qui déborde à l'extérieur */
    box-shadow:
      inset 12px 12px 24px #e6e4e4,
      inset -12px -12px 24px #bab9b9;
  
    /* Animation uniquement via les ombres (imite “rentré/sorti”) */
    animation: pulse 3s ease-in-out infinite;
    animation-delay: calc(var(--index) * 0.3s);
    animation-fill-mode: both;
  
    /* petits plus perf / rendu */
    will-change: box-shadow;
    outline: 1px solid transparent; /* évite certains franges AA */
  }
  
  /* Ombres internes animées = effet de profondeur sans variation de largeur */
  @keyframes pulse {
    0%, 100% {
      box-shadow:
        inset 14px 14px 28px #e1dede,
        inset -14px -14px 28px #d7d6d6;
    }
    50% {
      box-shadow:
        inset 3px 3px 6px #3b3b3b,
        inset -3px -3px 6px #b5b2b2cc;
    }
  }
  </style>
  