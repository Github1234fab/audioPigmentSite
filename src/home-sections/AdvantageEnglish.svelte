<script>
	const features = [
		{
			title: 'EXPERIENCE',
			iconClass: 'fa-solid fa-user-tie fa-2xl',
			p: "Over <strong>25 years</strong> of creative and technical expertise"
		},
		{
			title: 'ARTISTIC',
			iconClass: 'fa-solid fa-palette fa-2xl',
			p: '<strong>Thoughtful art direction</strong>, systematic proofreading and quality control'
		},
		{
			title: 'STUDIOS',
			iconClass: 'fa-solid fa-microphone-lines fa-2xl',
			p: "<strong>3 high-end</strong> recording and audio post-production studios"
		},
		{
			title: 'LIVE CONNECT',
			iconClass: 'fa-solid fa-headset fa-2xl',
			p: '<strong>Live session supervision</strong>, in studio or remotely via internet'
		},
		{
			title: 'PRO VOICES',
			iconClass: 'fa-solid fa-users fa-2xl',
			p: '<strong>Native professional voice actors</strong> in 50+ languages'
		},
		{
			title: 'INTERNATIONAL',
			iconClass: 'fa-solid fa-globe fa-2xl',
			p: 'Real-time remote recording sessions with <strong>partner studios worldwide</strong>'
		},
		{
			title: 'VOICE CASTING',
			iconClass: 'fa-solid fa-comment-dots fa-2xl',
			p: '<strong>Custom voice casting</strong> tailored to your project'
		},
		{
			title: 'ONGOING SUPPORT',
			iconClass: 'fa-solid fa-history fa-2xl',
			p: '<strong>Long-term project support</strong> (updates, multi-year series), fast turnaround'
		},
		{
			title: 'EXPERT NETWORK',
			iconClass: 'fa-solid fa-user-check fa-2xl',
			p: 'Access to our trusted <strong>artistic, technical, and translation</strong> network'
		}
	];
	import { onMount } from 'svelte';
	let isDesktop = false;
	onMount(() => {
		isDesktop = window.innerWidth > 1023;
	});
</script>

<section>
	{#if isDesktop}
		<video autoplay muted loop playsinline preload="none" class="background-video">
			<source src="https://www.pexels.com/fr-fr/download/video/27660115/" type="video/mp4" />
		</video>
	{/if}
	<h2>Our Strengths</h2>
	<p class="section-intro">What makes us different</p>
	<div class="features-grid">
		{#each features as feature}
			<div class="feature-card">
				<div class="title">{feature.title}</div>
				<i class="{feature.iconClass} icon"></i>
				<p>{@html feature.p}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--space-xl) var(--space-md);
		color: var(--white);
		position: relative;
		overflow: hidden;
		min-height: 80vh;
	}

	.background-video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	section {
		background-image: url(/assets/Mixage2.webp);
		background-size: cover;
		background-position: center;
	}

	section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.6) 50%,
			rgba(0, 0, 0, 0.8) 100%
		);
		z-index: 1;
	}

	h2 {
		position: relative;
		z-index: 3;
		font-size: var(--fs-h2);
		margin-bottom: var(--space-xs);
		color: var(--white);
	}

	.section-intro {
		position: relative;
		z-index: 3;
		font-size: var(--fs-body);
		color: var(--grey);
		margin-bottom: var(--space-lg);
		max-width: 600px;
	}

	.features-grid {
		position: relative;
		z-index: 3;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-md);
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		padding: var(--space-md);
		transition: var(--transition);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-sm);
	}

	.feature-card:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-5px);
		border-color: var(--accent);
	}

	.icon {
		width: 60px;
		height: 60px;
		background-color: var(--accent);
		color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 1.5rem;
		margin-bottom: var(--space-xs);
		transition: var(--transition);
	}

	.feature-card:hover .icon {
		transform: rotate(10deg) scale(1.1);
	}

	.title {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--white);
		letter-spacing: 0.02em;
	}

	.feature-card p {
		font-size: var(--fs-small);
		line-height: 1.6;
		color: var(--grey-light);
		margin: 0;
	}

	@media (max-width: 768px) {
		section {
			background-color: var(--ardoise);
			padding: var(--space-lg) var(--space-sm);
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: var(--space-sm);
		}
	}
</style>
