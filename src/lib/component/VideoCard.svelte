<!-- <script>
	export let url;
	export let title = 'Vidéo YouTube';

	function extractYouTubeId(url) {
		const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/))([a-zA-Z0-9_-]{11})/;
		const match = url.match(regExp);
		return match ? match[1] : null;
	}

	$: videoId = extractYouTubeId(url);
</script>

{#if videoId}
	<div class="video-card" role="group" aria-label={title}>
		<iframe
			src={'https://www.youtube.com/embed/' + videoId}
			{title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			  style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
		></iframe>
		<div class="video-title">{title}</div>
	</div>
{:else}
	<div class="video-card video-card--invalid">
		<div>URL YouTube invalide</div>
		<div class="video-title">{title}</div>
	</div>
{/if}

<style>
	.video-card {
		display: flex;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		background: var(-ardoise);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem;
	}
	.video-title {
		margin-top: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		color: #222;
	}
	.video-card--invalid {
		background: #ffeaea;
		color: #c00;
		border: 1px solid #c00;
	}
	iframe {
		border-radius: 8px;
		background-color: var(--ardoise);
	}
</style> -->



<script>
	import { onMount } from 'svelte';
  
	export let url;
	export let title;
  
	let container;
	let visible = false;
  
	onMount(() => {
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
	  return `https://img.youtube.com/vi/${idMatch[1]}/hqdefault.jpg`;
	}
  </script>
  
  <div class="video-wrapper" bind:this={container}>
	{#if visible}
	  <iframe
		src={getEmbedUrl(url)}
		title={title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	  ></iframe>
	{:else}
	  <img src={getThumbnailUrl(url)} alt={title} class="thumbnail" loading="lazy" />
	{/if}
  </div>
  
  <style>
	.video-wrapper {
	  width: 100%;
	  height: 400px;
	  padding: 0px;
	}
  
	iframe,
	.thumbnail {
	  width: 100%;
	  height: 400px;
	  object-fit: cover;
	  border: none;
	  border-radius: 8px;
	  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.436);
	}
  </style>
  