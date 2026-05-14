<script>
	export let title;
	export let image; 
	export let link; // URL YouTube
</script>

<a 
	href={link} 
	class="card" 
	style="background-image: url({image})" 
	target="_blank" 
	rel="noopener noreferrer" 
	aria-label="Watch {title} on YouTube"
>
	<div class="overlay">
		<div class="play-icon">
			<svg viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="var(--accent)"/><path d="M45 24L27 14v20" fill="white"/></svg>
		</div>
		<h3>{title}</h3>
	</div>
</a>

<style>
	.card {
		position: relative;
		aspect-ratio: 16/9;
		width: 100%;
		background-size: cover;
		background-position: center;
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-lg);
		display: flex;
		align-items: flex-end;
		transition: var(--transition);
		cursor: pointer;
		border: none;
		padding: 0;
		text-decoration: none;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 30px 60px rgba(0,0,0,0.4);
	}

	.card:hover .play-icon {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1.1);
	}

	.play-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 60px;
		opacity: 0.8;
		transition: all 0.3s ease;
		z-index: 2;
	}

	.overlay {
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
		color: var(--white);
		padding: var(--space-md);
		box-sizing: border-box;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	h3 {
		margin: 0;
		font-size: 1.1rem;
		font-family: var(--font-heading);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		line-height: 1.2;
		text-align: left;
		position: relative;
		z-index: 3;
	}

	@media (max-width: 768px) {
		.card {
			max-width: 100%;
		}

		h3 {
			font-size: 1.2rem;
		}
	}
</style>
