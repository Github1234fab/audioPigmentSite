<script>
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
			width="320"
			height="180"
			src={'https://www.youtube.com/embed/' + videoId}
			{title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
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
		height: 250px;
		width: 350px;
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
		width: 320px;
		height: 180px;
		max-width: 100%;
		border-radius: 8px;
		background: #5a0606;
	}
</style>
