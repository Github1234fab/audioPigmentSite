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
    let circles = Array.from({ length: numCircles }, (_, i) => i);
  </script>
  
  <div class="wrapper">
    <div class="container">
      {#each circles as i}
        <div
          class="circle"
          style="
            --scale:{1 - i*0.06};
            --index:{numCircles - 1 - i};
          "
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
    background: #f5f5f5; /* fond clair pour l'effet neumorphism */
  }
  
  .container {
    position: relative;
    width: 70vmin;
    height: 70vmin;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .circle {
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transform: scale(var(--scale));
  
    background: #e0e0e0;
  
    /* Ombres neumorphism de base */
    box-shadow:
    12px 12px 24px #b8b8b8,
    -12px -12px 24px #ffffff;
  
    animation: pulse 2s ease-in-out infinite;
    animation-delay: calc(var(--index) * 0.2s);
  }
  
  /* Animation qui joue uniquement sur les ombres */
  @keyframes pulse {
    0%, 100% {
      box-shadow:
      14px 14px 28px #b8b8b8,
      -14px -14px 28px #ffffff;
    }
    50% {
      box-shadow:
      2px 2px 4px #b8b8b8,
      -2px -2px 4px #ffffff;
    }
  }
  </style>
  