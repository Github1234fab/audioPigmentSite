<script>
	import { onMount } from 'svelte';
  
	export let url;
	export let title;
	export let forceThumbnail = false;
  
	let container;
	let visible = false;
  
	onMount(() => {
	  if (forceThumbnail) {
		return;
	  }

	  const observer = new IntersectionObserver(
		([entry]) => {
		  visible = entry.isIntersecting;
		},
		{
		  root: null,
		  threshold: 0.5,
		}
	  );
  
	  if (container) observer.observe(container);
  
	  return () => observer.disconnect();
	});
  
	function getEmbedUrl(url) {
	  const idMatch = url.match(/[?&]v=([^&]+)/);
	  if (!idMatch) return '';
	  return `https://www.youtube.com/embed/${idMatch[1]}?autoplay=0&rel=0&modestbranding=1&showinfo=0&controls=1`;
	}
  
	function getThumbnailUrl(url) {
	  const idMatch = url.match(/[?&]v=([^&]+)/);
	  if (!idMatch) return '';
	  return `https://img.youtube.com/vi/${idMatch[1]}/maxresdefault.jpg`;
	}
</script>
  
<div class="video-wrapper" bind:this={container}>
	{#if visible && !forceThumbnail}
	  <iframe
		loading="lazy"
		style="width:100%;height:100%;display:block"
		src={getEmbedUrl(url)}
		title={title}
		frameborder="0"
		allow="autoplay; encrypted-media; picture-in-picture"
		allowfullscreen
	  ></iframe>
	{:else}
	  <img src={getThumbnailUrl(url)} alt={title} class="thumbnail" loading="eager" />
	  <div class="play-overlay">
		<svg class="play-icon" viewBox="0 0 24 24" fill="white">
		  <path d="M8 5v14l11-7z"/>
		</svg>
	  </div>
	{/if}
</div>
  
<style>
	.video-wrapper {
	  position: relative;
	  width: 100%;
	  height: 100%;
	}
  
	.video-wrapper > iframe,
	.video-wrapper > .thumbnail {
	  position: absolute;
	  inset: 0;          
	  width: 100%;
	  height: 100%;
	  display: block;
	  border: 0;
	  border-radius: 8px;
	  object-fit: cover;  
	  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.436);
	  background: #000;   
	}

	.play-overlay {
	  position: absolute;
	  inset: 0;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background: rgba(0, 0, 0, 0.3);
	  pointer-events: none;
	}

	.play-icon {
	  width: 64px;
	  height: 64px;
	  opacity: 0.9;
	  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
	}
</style>