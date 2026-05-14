<script>
	import { onMount } from 'svelte';

	let videos = [];

	onMount(() => {
		videos.forEach((v) => {
			if (v) v.playbackRate = 0.6; // Ralenti pour confort de lecture
		});
	});
</script>

<main>
	<h1>Our expertise</h1>

	<section id="post-production-audio">
		<div class="container">
			<div class="glass-panel">
				<h2>Audio Post-Production</h2>
				<p>
					Audio post-production is the stage where every sound element is <strong>precisely adjusted</strong> within an
					<strong>audiovisual or musical creation</strong>, whether narrative, commercial, or immersive.
					<br/><br/>
					At Audio Pigment, we approach this phase as a true <strong>balance between technology and artistry</strong>, combining
					<strong>technical</strong> accuracy, <strong>creative</strong> sensitivity, and a deep understanding of <strong>storytelling</strong>.
					<br/><br/>
					Sound design, editing and source optimization, dubbing and voice-over, mixing (stereo, multichannel or ambisonic VR), mastering and broadcast normalization: our <strong>technical expertise</strong> and <strong>close collaboration with creative teams</strong> ensure results that are both precise and inspired, perfectly aligned with our clients’ vision.
					<br/><br/>
					Our goal: <strong>to enhance the impact</strong>, clarity, and <strong>emotional resonance</strong> of every project.
				</p>
			</div>
			<video
				bind:this={videos[0]}
				class="background-video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080,so_0/v1763023556/console_BELLE_et_COLOREES_2_mains_vcf02k.jpg"
			>
				<source
					src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080/v1763023556/console_BELLE_et_COLOREES_2_mains_vcf02k.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<div class="wrapper__advantages">
			<h2>Our Strengths</h2>
			<div class="advantage">
				<div class="advantage-content">
					<h3>A finely tuned sound, serving meaning and emotion</h3>
					<p>
						Every processing choice and sound layer is shaped to serve the narrative and the image. We
						value readability, coherence, and the accuracy of emotional expression.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Tailor-made, demanding collaboration</h3>
					<p>
						We maintain a close dialogue with our clients and creative teams to ensure a seamless link
						between artistic intention and final rendering.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Expertise across all formats</h3>
					<p>
						Cinema, television, digital, radio or VR: we master the aesthetic codes and technical
						standards of every medium so that each project delivers a sound faithful to its context.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="creation-originale">
		<div class="container">
			<div class="glass-panel">
				<h2>Original Sound Creation</h2>
				<p>
					At Audio Pigment, we imagine and produce tailor-made sonic worlds: sonic branding, sound design, musical composition, sound identity, and event soundscapes.
					<br/><br/>
					Our role: <strong>to transform an idea or an intention, into sound and emotion</strong>.
					<br/><br/>
					Whether it’s giving a brand its sonic identity, scoring a film, shaping the sound of a commercial or podcast, or designing an immersive experience, <strong>we adapt our creative process</strong> to the project’s context, objectives, and broadcast constraints.
					<br/><br/>
					For musical compositions, we also offer licensing options from our <strong>in-house catalog</strong> and <strong>assist our clients</strong> throughout the selection process.
					<br/><br/>
					Our mission: to give every project its own identity, rhythm, and emotional signature.
				</p>
			</div>

			<video
				bind:this={videos[1]}
				class="background-video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080,so_0/v1763023587/PIANO_Couleurs_3_er2jzz.jpg"
			>
				<source
					src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080/v1763023587/PIANO_Couleurs_3_er2jzz.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<div class="wrapper__advantages">
			<h2>Our Strengths</h2>
			<div class="advantage">
				<div class="advantage-content">
					<h3>A process rooted in dialogue</h3>
					<p>
						Every creation begins with an in-depth exchange with our clients to understand goals, constraints, intentions, and the emotions to convey.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>A broad musical palette</h3>
					<p>
						Our composers master a wide range of styles: from minimal electronic textures to classical orchestral scoring, as well as abstract or narrative sound design.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>End-to-end production</h3>
					<p>
						We handle the entire chain: composition, arrangements, recording, mixing, and mastering. Our clients benefit from a single point of contact.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="Voix">
		<div class="container">
			<div class="glass-panel">
				<h2>Voices</h2>
				<p>
					The human voice <strong>naturally draws attention</strong>: it speaks to the subconscious, evokes emotion, gives meaning, and anchors a message in memory.
					<br/><br/>
					Whether for <strong>audio media</strong> or <strong>audiovisual productions</strong>, the voice <strong>embodies</strong> a story, it <strong>explains, personifies, and amplifies emotional impact</strong>.
					<br/><br/>
					In a world overflowing with content, the voice must <strong>stand out</strong>. That comes from the <strong>right voice casting</strong>, inspired <strong>artistic direction</strong>, and impeccable <strong>recording quality</strong>.
					<br/><br/>
					Voice-over recording, dubbing, ADR, multilingual localization: <strong>we don’t just record, we craft performances</strong>.
				</p>
			</div>
			<video
				bind:this={videos[2]}
				class="background-video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080,so_0/v1763023614/enregistrement_VOIX_en_studio_ofxow4.jpg"
			>
				<source
					src="https://res.cloudinary.com/dkw5bl7fx/video/upload/f_auto,q_auto,w_1080/v1763023614/enregistrement_VOIX_en_studio_ofxow4.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<div class="wrapper__advantages">
			<h2>Our Strengths</h2>
			<div class="advantage">
				<div class="advantage-content">
					<h3>A network of 800 professional voices</h3>
					<p>
						An international roster of native voice actors in French and foreign languages for diverse, multicultural projects.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>Dedicated artistic direction</h3>
					<p>
						We master the entire process: selection, recording, editing, and final integration. A single point of contact and meticulous follow-up.
					</p>
				</div>
			</div>
			<div class="advantage">
				<div class="advantage-content">
					<h3>International network</h3>
					<p>
						Through our worldwide partner studios, we conduct remote, real-time recording sessions with live client supervision.
					</p>
				</div>
			</div>
		</div>
	</section>

	<div class="bg-black section-video-banner">
		<video
			bind:this={videos[3]}
			autoplay
			muted
			loop
			playsinline
			class="background-video-banner"
			preload="auto"
		>
			<source
				src="https://videos.pexels.com/video-files/8319438/8319438-hd_1920_1080_25fps.mp4"
				type="video/mp4"
			/>
		</video>
		<div class="wrapper__section-txt">
			<h2>Our commitment to exceptional sound quality</h2>
			<h3>Every project deserves its own sonic story</h3>

			<p>
				At Audio Pigment, every creation begins with attentive listening to a vision, a story, an emotion.
				We craft sound with precision and intent, blending technical mastery with the sensitivity that turns listening into experience.
				<br/><br/>
				<strong>Understanding, feeling, transmitting: we do it for you.</strong>
			</p>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0;
		background-color: var(--white);
		min-height: 100vh;
		z-index: 0;
		gap: 0;
		overflow: hidden;
		width: 100%;
	}

	.glass-panel {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		padding: 3rem;
		border-radius: var(--radius-lg);
		max-width: 900px;
		width: 90%;
		z-index: 5;
		box-shadow: var(--shadow-lg);
	}

	.section-video-banner {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: transparent;
		min-height: 1000px;
		z-index: 0;
		gap: 20px;
	}
	.section-video-banner video {
		filter: brightness(1) contrast(0.9) saturate(1.3);
	}

	.section-video-banner::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 1));
		z-index: 1;
	}
	.container {
		position: relative;
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 0;
	}
	.container::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100vh;
		background: radial-gradient(circle at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
		z-index: 2;
	}
	.background-video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		object-fit: cover;
		z-index: -1;
	}

	.container h2 {
		font-family: var(--bebas);
		font-size: 1.8rem;
		color: var(--white);
		font-weight: 800;
		letter-spacing: -0.02em;
		z-index: 4;
	}
	.container p {
		font-family: var(--font-main);
		font-size: 1.15rem;
		line-height: 1.7;
		margin-top: var(--space-md);
		color: var(--white-off);
		font-weight: 400;
		max-width: 850px;
		z-index: 4;
		padding: 10px;
		text-wrap: balance;
	}

	.background-video-banner {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: 1;
	}

	main h1 {
		font-family: var(--font-heading);
		font-size: 2.8rem;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-xl);
		color: var(--ardoise);
		font-weight: 800;
		letter-spacing: -0.04em;
		text-align: center;
		position: relative;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 1.5rem;
	}

	main h1::after {
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

	section h3 {
		font-family: var(--raleway);
		font-size: 1.5rem;
		margin-top: 20px;
		color: var(--white-pure);
		letter-spacing: -1px;
		font-weight: var(--bold);
		z-index: 4;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 1.8rem;
		color: var(--white-pure);
		margin-top: 80px;
		font-weight: 700;
		letter-spacing: normal;
		z-index: 4;
	}

	.wrapper__advantages {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
		padding: 5rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	.wrapper__advantages h2 {
		font-size: 2rem;
		margin-top: 30px;
		color: var(--ardoise);
	}
	.advantage {
		background: linear-gradient(135deg, var(--accent) 0%, #c02d24 100%);
		padding: 3rem;
		border-radius: var(--radius-md);
		width: 100%;
		box-shadow: var(--shadow-md);
		transition: var(--transition);
		text-align: left;
	}
	.advantage:hover {
		transform: scale(1.01);
		box-shadow: var(--shadow-lg);
	}
	.advantage h3 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: var(--white);
		text-transform: uppercase;
		line-height: 1.2;
		text-shadow: none;
	}
	.advantage p {
		font-family: var(--font-main);
		font-size: 0.95rem;
		font-weight: var(--bold);
		line-height: 1.6;
		color: var(--white-off);
	}

	.bg-black {
		background-color: var(--ardoise);
	}
	.bg-black h2,
	.bg-black h3,
	.bg-black p {
		color: white;
	}
	.wrapper__section-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
		color: white;
		z-index: 2;
		position: relative;
		padding: 2rem;
		z-index: 2;
		font-family: var(--raleway);
	}
	.wrapper__section-txt p {
		font-weight: var(--regular);
		max-width: 800px;
		line-height: 1.8;
	}
	.wrapper__section-txt h3 {
		font-weight: var(--medium);
		font-size: 1.5rem;
	}
	.wrapper__section-txt h2 {
		font-weight: var(--bold);
		font-family: var(--bebas);
		font-size: 2.3rem;
	}

	@media screen and (max-width: 768px) {
		.container {
			position: relative;
			width: 100%;
			min-height: 100vh;
			overflow: hidden;
		}
		.background-video {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			min-width: 100%;
			min-height: 100%;
			width: auto;
			height: auto;
			object-fit: cover;
			z-index: -1;
		}

		main h1 {
			font-size: 2.4rem;
			letter-spacing: -1px;
			line-height: 1.2;
			padding-bottom: 1.5rem;
			margin-top: 40px;
			margin-bottom: 2.5rem;
		}
		section h2 {
			font-size: 1.8rem;
		}
		section h3 {
			font-size: 1.2rem;
		}
		section p {
			font-size: 1rem;
			line-height: 1.4;
			font-weight: var(--regular);
		}
		.wrapper__advantages {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 30px;
			padding: var(--space-lg) var(--space-md);
			width: 100%;
		}
		.advantage {
			width: 100%;
			max-width: 450px;
			margin: 0 auto !important;
			text-align: center;
		}
	}
</style>
