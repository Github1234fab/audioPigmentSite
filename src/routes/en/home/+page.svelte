<script>
	import { onMount } from 'svelte';
	import Cta from '../../../components/cta.svelte';
	import { CSSPlugin } from 'gsap/CSSPlugin';
	gsap.registerPlugin(CSSPlugin);
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.to('.title', {
			letterSpacing: 0,
			opacity: 1,
			duration: 0.7,
			ease: 'sine',
			delay: 0.5
		});
	});
</script>

<section>
	<h1 class="title">The sound, a tone higher.</h1>
	<h2 class="subtitle">
		Consulting agency specializing in creation, execution, and sound production for over 20 years..
	</h2>

	<Cta btnTxt="Do you have a project ?" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 700px;
		gap: 30px;
		background-image: url('../../../assets/heroBanner-B.jpeg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;
		position: relative;
	}
	section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 700px;
		background: linear-gradient(rgba(0, 0, 0, 0.558) 10%, rgba(255, 255, 255, 0));
		z-index: 1;
	}
	.title {
		font-weight: 500;
		align-self: center;
		color: white;
		font-size: 3rem;
		opacity: 0;
		letter-spacing: 20px;
		z-index: 2;
		margin-top: -300px;
		font-family: 'Big Shoulders inline', sans-serif;
		transform: translateY(0);
		/* text-shadow: 0px 10px 5px rgba(0, 0, 0, 0.51); */
	}
	.subtitle {
		margin-top: -20px;
		font-weight: 300;
		align-self: center;
		color: white;
		font-size: 1rem;
		letter-spacing: -0.01rem;
		z-index: 2;
		font-family: 'Big Shoulders', sans-serif;
		/* text-shadow: 0px 10px 5px rgba(0, 0, 0, 0.51); */
	}
</style>
