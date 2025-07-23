<h1>EN/services</h1>

<script>
	let txt = '';
	let href = '';

	const services = [
		{
			label: 'Communication sonore',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/7859937/pexels-photo-7859937.jpeg'
		},
		{
			label: 'Production audio',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',

			image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg'
		},
		{
			label: 'Consultation en stratégie sonore',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg'
		},
		{
			label: 'Doublage multilingue / localisation',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/4476164/pexels-photo-4476164.jpeg'
		},
		{
			label: 'Mixage & postproduction',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil architecto nobis numquam repellat, recusandae aut cumque. Illum, facilis laborum quo velit optio distinctio nisi? Et provident eaque fuga dolorumRepudiandae odit sequi deserunt esse deleniti tempora officia laboriosam saepe in ipsam, similique sunt repellat fuga dolore rem incidunt porro quisquam aliquid hic voluptatibus illum! Nobis eius dignissimos voluptatum facilis.Culpa facilis sapiente molestias nemo dolor recusandae ratione nam officiis consectetur nulla fugit, quasi sint iste, laboriosam et nobis ut sed deserunt tenetur non? Nam, harum. Tempora quas neque ad?',
			link: '/fr/contact',
			image: 'https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg'
		}
	];
</script>

<section>
	<h2>Nos prestations</h2>
	<div class="wrapper__services-cards">
		{#each services as service}
			<div
				class="service-card"
				style={service.image ? `background-image: url(${service.image});` : ''}
			>
				<div class="wrapper__service-txt">
					<h3>{service.label}</h3>
					<p>{service.desc}</p>
					<a href={service.link}>Contact</a>
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
	}
	.wrapper__services-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		font-family: var(--raleway);

	}
	.wrapper__service-txt {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-end;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		margin-bottom: 0.6rem;
		z-index: 2;
	}
	.wrapper__services-cards a {
		text-decoration: none;
		color: white;
		font-weight: bold;
		font-size: 1.2rem;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--ardoise);
		width: 10%;
		border: 1px solid white;
		text-align: center;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: flex-end;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 12px;
		box-shadow: 0 10px 20px rgba(50, 50, 50, 0.328);
		padding: 2rem;
		height: 600px;
		width: 100%;
		transition: transform 0.15s;
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
		background: linear-gradient(to top, rgba(0, 0, 0, 0.832) , rgba(255, 255, 255, 0) 100%);
	}
	.service-card:hover {
		transform: translateY(-5px) scale(1.04);
		box-shadow: 0 3px 16px rgba(50, 50, 50, 0.18);
		transition: 0.4s ease-in-out;
	}

	.wrapper__service-txt h3 {
		margin-bottom: 1rem;
		color: white;
		font-size: 2rem;
	}
	.wrapper__service-txt p {
		margin-bottom: 1rem;
		color: white;
		font-size: 1rem;
		line-height: 1.6;
	}
	a {
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.service-card {
			height: 100%;
			width: 100%;
		}
		.wrapper__services-cards {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.wrapper__service-txt {
			background-color: rgba(0, 0, 0, 0.472);
			padding: 2rem;
		}
		.wrapper__service-txt h3 {
			font-size: 1.5rem;
			background-color: var(--red);
			padding: 1rem;
		}
	}
	.wrapper__service-txt a {
		width: 100%;
	}
	.wrapper__service-txt a:hover {
		background-color: var(--red);
		padding: 20px;
	}
	
	

</style>
