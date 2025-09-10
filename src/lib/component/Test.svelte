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






<!-- 
   <script>
	const numCircles = 16; // nombre de disques
	const step = 0.08; // ↑ augmente pour rendre le disque central plus petit (0.06 → 0.08/0.1)
	let circles = Array.from({ length: numCircles }, (_, i) => i);
</script>

<div class="wrapper">
	<div class="container">
		{#each circles as i}
			<div
				class="circle"
				style="
            --scale:{1 - i * step};
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
		margin-top: 170px;
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
		background: #cbc3c3;
		

		/* ✅ Neumorphism interne: pas d'ombre qui déborde à l'extérieur */
		box-shadow:
			inset 12px 12px 24px #f3f2f2,
			inset -12px -12px 24px #d4d2d2;
		/* Animation uniquement via les ombres (imite “rentré/sorti”) */
		animation: pulse 2s ease-in-out infinite;
		animation-delay: calc(var(--index) * 0.2s);
		animation-fill-mode: both;
		/* petits plus perf / rendu */
		will-change: box-shadow;
		outline: 1px solid transparent; /* évite certains franges AA */
	}

	/* Ombres internes animées = effet de profondeur sans variation de largeur */
	@keyframes pulse {
		0%,
		100% {
			box-shadow:
				inset 14px 14px 28px #fffdfd,
				inset -14px -14px 28px #4a4949;
		}
		50% {
			box-shadow:
				inset 3px 3px 6px #dddcdc,
				inset -3px -3px 6px #b3b0b0cc;
		}
	}
</style>  -->








<script>
	// — Réglages (no TS)
	export let mode = "vibrate";  // "vibrate" | "spectral"
	export let size = 380;
	export let numRings = 18;     // densité d’anneaux
	export let step = 0.06;       // espacement des anneaux
	export let speed = 1.0;       // vitesse de cycle (plus petit = plus rapide)
	export let amplitude = 0.10;  // puissance de vibration (vibrate)
	export let contrast = 1.25;   // contraste visuel des anneaux (vibrate)
	export let spectralSpeed = 3; // vitesse des ondes colorées (spectral)
	export let spectralSpread = 1.2; // largeur des anneaux colorés
  
	const rings = Array.from({ length: numRings }, (_, i) => {
	  const s = 1 - i * step;                          // base
	  const s2 = Math.max(0, s + amplitude * (1 - s)); // crête
	  const delay = (numRings - 1 - i) * (speed / numRings) * 0.75;
	  return { s, s2, delay };
	});
  </script>
  
  <div
	class="wrapper {mode === 'spectral' ? 'mode-spectral' : 'mode-vibrate'}"
	style="--size:{size}px; --speed:{speed}s; --amp:{amplitude}; --contrast:{contrast}; --ss:{spectralSpeed}s; --spread:{spectralSpread};"
  >
	<div class="speaker">
	  <div class="frame">
		<div class="rim"></div>
  
		<!-- vis décor -->
		<div class="screw" style="--rot:0deg"></div>
		<div class="screw" style="--rot:60deg"></div>
		<div class="screw" style="--rot:120deg"></div>
		<div class="screw" style="--rot:180deg"></div>
		<div class="screw" style="--rot:240deg"></div>
		<div class="screw" style="--rot:300deg"></div>
  
		<!-- suspension -->
		<div class="surround"></div>
  
		<!-- membrane -->
		<div class="cone">
		  {#each rings as r}
			<div class="ring" style="--s:{r.s}; --s2:{r.s2}; --delay:{r.delay}s;"></div>
		  {/each}
  
		  <!-- capot central -->
		  <div class="dustcap"></div>
  
		  <!-- overlay ondes colorées (affiché en mode spectral) -->
		  <div class="spectrum"></div>
		</div>
	  </div>
	</div>
  </div>
  
  <style>
	:root { color-scheme: light; }
  
	/* ==== Palette neumorph claire ==== */
	.wrapper {
	  --c-bg: #f5f6f8; 
	  --c-hi: #ffffff; 
	  --c-md: #e9ebef; 
	  --c-dk: #cfd4dc; 
	  --c-ink: #a8b0bb;
	  display: grid; 
	  place-items: center; 
	  min-height: min(80vh, 100vmin); 
	  padding: 2rem;
	  background: transparent;
	  position: absolute;
	  margin-top: 250px;
	}
  
	.speaker { 
	  width: var(--size); 
	  aspect-ratio: 1; 
	  filter: drop-shadow(0 18px 30px rgba(216, 104, 18, 0.45)); 
	}
  
	.frame {
	  position: relative; 
	  width: 100%; 
	  height: 100%; 
	  border-radius: 50%;
	  background: radial-gradient(80% 80% at 50% 35%, #efecec 0%, var(--c-bg) 55%, #edf0f5 100%);
	  box-shadow: inset 20px 20px 40px #d6dbe2, inset -20px -20px 40px #ffffff;
	  display: grid; 
	  place-items: center;
	}
  
	.rim {
	  position: absolute; 
	  inset: calc(var(--size)*.04); 
	  border-radius: 50%;
	  background: radial-gradient(60% 60% at 50% 40%, #e4e0e0 0%, #ecedee 45%, #e3e4e6 75%, #e8e9eb 100%);
	  box-shadow: inset 0 6px 16px rgba(235, 234, 234, 0.9), inset 0 -14px 22px rgba(150,160,175,.25);
	}
  
	.screw {
	  --r: calc(var(--size) * .44);
	  position: absolute; 
	  left: 50%; 
	  top: 50%;
	  width: calc(var(--size)*.042); 
	  height: calc(var(--size)*.042);
	  transform: rotate(var(--rot)) translateY(calc(-1 * var(--r)));
	  border-radius: 50%;
	  background: radial-gradient(circle at 40% 35%, #d6d4d4 0%, #dfe4eb 60%, #c9d0d9 100%);
	  box-shadow: 0 1px 0 rgba(255,255,255,.9), inset 0 3px 6px rgba(120,130,145,.25);
	}
	.screw::after { 
	  content: ""; 
	  position: absolute; 
	  inset: 22% 16%; 
	  border-radius: 2px; 
	  background: linear-gradient(#c8ced7,#eceae9,#c8ced7); 
	  opacity: .7; 
	}
  
	.surround {
	  position: absolute; 
	  inset: calc(var(--size)*.12); 
	  border-radius: 50%;
	  background: radial-gradient(70% 70% at 50% 45%, #dfdad8 0%, #eef1f6 55%, #e3e7ee 100%);
	  box-shadow: inset 0 22px 34px rgba(210, 208, 208, 0.45), inset 0 -22px 28px rgba(255,255,255,.95);
	  animation: surround 1s ease-in-out infinite;
	}
  
	/* ==== CONE : animation modernisée, technologique, subtile et futuriste ==== */
/* Remplace UNIQUEMENT la partie animation de .cone ! */
.cone {
  position: absolute;
  inset: calc(var(--size) * 0.18);
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(
    ellipse at center,
    #7c1b19 0%, #a21f1f 50%, #d44f2a 80%, #b12121 100%
  );
  box-shadow:
    inset 0 12px 25px rgba(215, 212, 212, 0.7),
    inset 0 -26px 40px rgba(120, 117, 117, 0.2);

  /* Nouvelle animation RANDOM */
  animation: cone-random-move 2.2s cubic-bezier(.45, .01, .69, 1.11) infinite;
}

@keyframes cone-random-move {
  /* Mouvement irrégulier en scale, brightness et teinte */
  0%   { transform: scale(1) rotate(-1deg); filter: brightness(.96) hue-rotate(-6deg);}
  7%   { transform: scale(0.98) rotate(2deg); filter: brightness(1.14) hue-rotate(-2deg);}
  33%  { transform: scale(1.03) rotate(-2.7deg); filter: brightness(.84) hue-rotate(7deg);}
  49%  { transform: scale(0.92) rotate(1deg); filter: brightness(1.20) hue-rotate(-14deg);}
  61%  { transform: scale(1.05) rotate(-2deg); filter: brightness(.99) hue-rotate(8deg);}
  74%  { transform: scale(1.01) rotate(2deg); filter: brightness(1.25) hue-rotate(-9deg);}
  82%  { transform: scale(.97) rotate(-3deg); filter: brightness(0.78) hue-rotate(2deg);}
  100% { transform: scale(1) rotate(0deg); filter: brightness(.98) hue-rotate(0deg);}
}

  
	/* Anneaux subtilement colorés avec lueur et pulsation */
	.ring {
	  position: absolute; 
	  inset: 0;
	  border-radius: 50%;
	  transform: scale(var(--s));
	  background:
		radial-gradient(
		  closest-side,
		  rgba(185, 210, 255, 0.75),
		  rgba(45, 75, 180, 0.15) 55%
		),
		radial-gradient(
		  farthest-side,
		  rgba(100, 140, 255, 0.3),
		  transparent 70%
		);
	  box-shadow:
		0 0 10px 2px rgba(90, 130, 255, 0.9),
		inset 0 0 6px 1px rgba(145, 195, 255, 0.6);
	  mix-blend-mode: screen;
	  animation: ring-pulse 1.75s ease-in-out infinite, ring-hue 40s linear infinite;
	  will-change: transform, filter;
	}
  
	@keyframes cone-light-shift {
	  0% {
		filter: hue-rotate(0deg) brightness(1);
	  }
	  100% {
		filter: hue-rotate(30deg) brightness(1.1);
	  }
	}
  
	/* Pulse animation — plus fluide qu'avant */
	@keyframes ring-pulse {
	  0%, 100% {
		transform: scale(var(--s)) translateZ(0);
		filter: drop-shadow(0 0 8px rgba(177, 75, 11, 0.6));
	  }
	  50% {
		transform: scale(calc(var(--s2) * 1.02)) translateZ(0);
		filter: drop-shadow(0 0 12px rgba(213, 87, 14, 0.9));
	  }
	}
  
	/* Lente rotation de la teinte pour effet dynamique */
	@keyframes ring-hue {
	  0% {
		filter: hue-rotate(0deg);
	  }
	  100% {
		filter: hue-rotate(360deg);
	  }
	}
  
	/* Spectre d'ondes colorées : subtil, flou, mouvant */
	.spectrum {
	  position: absolute;
	  inset: 0;
	  border-radius: 50%;
	  pointer-events: none;
	  background:
		radial-gradient(
		  circle at center,
		  rgba(100, 140, 255, 0.28),
		  transparent 75%
		),
		repeating-radial-gradient(
		  circle at center,
		  hsla(210, 90%, 65%, 0.1) 0%,
		  hsla(230, 85%, 55%, 0.15) 6%,
		  hsla(255, 90%, 60%, 0.12) 12%
		);
	  mix-blend-mode: screen;
	  filter: saturate(1.4) brightness(1.1) blur(3px);
	  animation: spectrum-move 45s linear infinite, spectral-hue 90s linear infinite;
	}
  
	/* Déplacement lent, oscillant pour le spectre */
	@keyframes spectrum-move {
	  0% {
		background-position: 50% 50%;
		opacity: 0.15;
	  }
	  50% {
		background-position: 52% 48%;
		opacity: 0.22;
	  }
	  100% {
		background-position: 50% 50%;
		opacity: 0.15;
	  }
	}
  
	/* Petit changement de teinte doux en continu */
	@keyframes spectral-hue {
	  0% {
		filter: saturate(1.4) brightness(1.1) hue-rotate(0deg);
	  }
	  100% {
		filter: saturate(1.4) brightness(1.1) hue-rotate(360deg);
	  }
	}
  
	/* ==== Autres styles inchangés ==== */
	.dustcap {
	  position: absolute; 
	  inset: calc(var(--size)*.34); 
	  border-radius: 50%;
	  background: radial-gradient(60% 60% at 50% 35%, #950b0b 0%, #f2f5f9 60%, #e6ebf2 100%);
	  box-shadow: inset 0 12px 20px rgba(255,255,255,.95), inset 0 -18px 26px rgba(165,175,190,.35);
	  will-change: transform;
	}
  
	.mode-vibrate .ring {
	  animation: ring-pulse 1s cubic-bezier(.3,.0,.2,1) infinite;
	  animation-delay: 1s;
	  filter: brightness(var(--contrast)) contrast(var(--contrast));
	}
	.mode-vibrate .dustcap {
	  animation: cap 1s ease-in-out infinite;
	}
  
	@keyframes cap {
	  0%,100% { transform: scale(1); }
	  50%     { transform: scale(1.06); }
	}
  
	@keyframes surround {
	  0%,100% { transform: scale(1); }
	  50%     { transform: scale(0.992); }
	}
  
	/* ==== MODE SPECTRAL (ondes colorées lumineuses) ==== */
	.mode-spectral .spectrum {
	  animation: spectral-zoom var(--ss) linear infinite, spectral-hue calc(var(--ss) * 2) linear infinite;
	}
  
	@keyframes spectral-zoom {
	  0%   { transform: scale(.65); opacity:.10; }
	  30%  { transform: scale(.86); opacity:.28; }
	  60%  { transform: scale(1.08); opacity:.16; }
	  100% { transform: scale(1.22); opacity:.05; }
	}
  
	/* Interaction désactivées par défaut pour ne pas casser l'effet */
	/*
	.speaker:hover .mode-vibrate .ring,
	.speaker:active .mode-vibrate .ring { animation-duration: calc(var(--speed) * .8); }
	.speaker:hover .mode-vibrate .dustcap,
	.speaker:active .mode-vibrate .dustcap { animation-duration: calc(var(--speed) * .8); }
	.speaker:hover.mode-spectral .spectrum,
	.speaker:active.mode-spectral .spectrum { animation-duration: calc(var(--ss) * .8); }
	*/
  
	@media (prefers-reduced-motion: reduce) {
	  .ring, .dustcap, .surround, .spectrum {
		animation: none;
	  }
	}
  </style>
  














