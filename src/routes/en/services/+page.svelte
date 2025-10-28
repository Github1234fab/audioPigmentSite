<script>
	let txt = '';
	let href = '';

	const services = [
		{
			id: '1',
			label: 'Sound communication',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact/',
			image: 'https://images.pexels.com/photos/7859937/pexels-photo-7859937.jpeg'
		},
		{
			id: '2',
			label: 'Audio marketing',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',

			image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg'
		},
		{
			id: '3',
			label: 'Audiovisual & Digital Media',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg'
		},
		{
			id: '4',
			label: 'Multilingual Dubbing & Localization',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/4476164/pexels-photo-4476164.jpeg'
		},
		{
			id: '5',
			label: 'Mixing & Post-Production',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg'
		}
	];
</script>



<section>
	<h2>Our services</h2>
	<div class="wrapper__services-cards">
		{#each services as service}
			<div
				class="service-card"
				id={service.id}
				{...service}
				style={service.image ? `background-image: url(${service.image});` : ''}
			>
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{service.desc}</p>
					<a href={service.link}>Get in touch</a>
				</div>
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
		padding: 2rem;
		color: var(--black);
		min-height: 100vh;
		margin-bottom: 2rem;
	}
	section h2 {
		font-family: var(--bebas);
		font-size: 4rem;
		margin-bottom: 3rem;
		margin-top: 50px;
		font-weight: var(--bold);
		letter-spacing: -1.7px;
	}
	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);
		height: 100%;
	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		margin-bottom: 0.6rem;
		z-index: 2;
		gap: 50px;
	}
	.wrapper__services-cards a {
		font-family: var(--bebas);
		text-decoration: none;
		color: white;
		font-weight: bold;
		font-size: 1.2rem;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--red);
		text-align: center;
		border-radius: 5px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
	}
	.wrapper__services-cards a:hover {
		background-color: black;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.412);
		transform: scale(1.2);
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 12px;
		box-shadow: 0 0px 20px rgba(50, 50, 50, 0.573);
		padding: 4rem;
		height: 100vh;
		max-width: 1200px;
		position: relative;
		z-index: 0;
	}
	.service-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		height: 100%;
		width: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.832), rgba(255, 255, 255, 0) 100%);
	}

	.wrapper__service-txt h3 {
		margin-bottom: 2rem;
		color: white;
		font-size: 4rem;
		font-family: var(--bebas);
	}
	.wrapper__service-txt p {
		margin-bottom: 1rem;
		color: white;
		font-weight: 500;
		font-size: 1rem;
		line-height: 2.5;
		background-color: rgba(255, 255, 255, 0.082);
		backdrop-filter: blur(25px);
		-webkit-backdrop-filter: blur(25px);
		padding: 4rem;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
	.wrapper__service-txt p:hover {
		transform: scale(1.04);
		box-shadow: 0 0px 20px rgba(50, 50, 50, 0.541);
	}
	

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 10px;
			color: var(--black);
			min-height: 100vh;
			margin-bottom: 2rem;
		}
		.wrapper__services-cards {
			padding: 10px;
		}
		section h2 {
			font-family: var(--bebas);
			font-size: 3rem;
			margin-bottom: 3rem;
			margin-top: 50px;
			font-weight: var(--bold);
			letter-spacing: -1.7px;
			line-height: 50px;
			text-align: center;
		}
		.service-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 12px;
			box-shadow: 0 0px 20px rgba(50, 50, 50, 0.573);
			padding: 0px;
			height: auto;
			max-width: auto;
			position: relative;
			z-index: 0;
			margin: 0 auto;
		}
		.wrapper__service-txt h3 {
			margin-bottom: 10px;
			color: white;
			font-size: 1.8rem;
			font-family: var(--bebas);
			line-height: 35px;
			margin-top: 30px;
		}
		.wrapper__service-txt p {
			margin-bottom: 1rem;
			color: white;
			font-weight: 500;
			font-size: 1rem;
			line-height: 1.9;
			background-color: rgba(255, 255, 255, 0.082);
			backdrop-filter: blur(25px);
			-webkit-backdrop-filter: blur(25px);
			border-radius: 10px;
			transition: 0.3s ease-in-out;
			padding: 20px;
		}
		.wrapper__services-cards a {
			font-size: 1rem;
		}
	}
</style>
