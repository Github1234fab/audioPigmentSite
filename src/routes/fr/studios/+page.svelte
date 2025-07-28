<script>
    import Btn from '$lib/component/btn-white.svelte';
</script>

<section>
	<h1>NOS STUDIOS</h1>
	<h2>Visite de nos studios</h2>
	<div class="wrapper__studios">
		<div class="wrapper__studios-room">
			<h3>Studio I</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi eveniet quasi, repellat voluptatum cumque earum.</p>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
		</div>

		<div class="wrapper__studios-room">
			<h3>Studio II</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi eveniet quasi, repellat voluptatum cumque earum.</p>

			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
		</div>
		<div class="wrapper__studios-room">
			<h3>Studio III</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus facere obcaecati asperiores maxime, accusantium earum harum libero voluptatum. Provident corporis minus cum nostrum animi eveniet quasi, repellat voluptatum cumque earum.</p>

			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
			<img
				class="img"
				src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
				alt="Studio 1"
			/>
		</div>
	</div>
</section>

<section class="nous-ecouter">
    <h2>NOUS ÉCOUTER</h2>
    <p>
        Audio Pigment est une agence de communication, spécialisée dans la conception, et la production sonore haut de gamme pour les secteurs de la communication, de la culture et des médias.
    </p>
    <p>
        Fondée en 1999, Audio Pigment est une agence de communication, spécialisée dans la conception, et la production sonore haut de gamme pour les secteurs de la communication, de la culture et des médias.
    </p>
<Btn txt="Nous écouter" href="/fr/realisations"/>
</section>

<style>
	section {
        display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            background-color: transparent;
            min-height: 100vh;
            z-index: 0;
            gap: 10px;
	}
	section h1 {
		font-family: var(--bebas);
		font-size: 5rem;
		color: var(--ardoise);
		font-weight: 400;
		letter-spacing: -1.5px;
	}
	section h2 {
		font-family: var(--raleway);
		font-size: 1.5rem;
		margin-bottom: 2rem;
		color: var(--ardoise);
	
		letter-spacing: -1px;
	}
	.wrapper__studios {
		display: flex;
        align-items: center;
		justify-content: center;
		gap: 20px;
  
	}
	.wrapper__studios-room {
        background-color: rgb(255, 254, 253);
		border-radius: 10px;
		box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.339);
        padding: 20px;
	}
	.wrapper__studios-room h3 {
		font-family: var(--bebas);
		font-size: 1.5rem;
		margin-bottom: 10px;
		font-weight: 400;
		letter-spacing: 0px;
	}
	.wrapper__studios-room .img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		margin-bottom: 10px;
	}
    .wrapper__studios-room p {
        font-family: var(--raleway);
        font-size: 1rem;
        color: var(--ardoise);
        margin-bottom: 10px;
        padding: 1rem;
    }
    .nous-ecouter{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        background-color: var(--ardoise);
        color: white;
        min-height: 50vh;
        gap: 20px;
    }
    .nous-ecouter h2 {
        font-family: var(--bebas);
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
    }
    .nous-ecouter p {
        font-family: var(--raleway);
        font-size: 1.2rem;
        color: white;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
    }

	@media (max-width: 768px) {
		.wrapper__studios {
			flex-direction: column;
			gap: 20px;
		}
		.wrapper__studios-room {
			width: 100%;
		}
	}
</style>
