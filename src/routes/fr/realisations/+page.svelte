<script>
    import Card from '$lib/component/Card-realisation.svelte';
  
  
    const allRealisations = [
    {
      title: "Série Mystère",
      type: "Séries audio",
      technique: "Réalisation sonore 3D",
      link: "/realisations/serie-mystere",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
    },
    {
      title: "Entreprise X",
      type: "Corporate",
      technique: "Design sonore & mixage",
      link: "/realisations/entreprise-x",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "Le livre magique",
      type: "Livres audio",
      technique: "Enregistrement voix studio",
      link: "/realisations/livre-magique",
      image: "https://images.pexels.com/photos/5904937/pexels-photo-5904937.jpeg"
    },
    {
      title: "Podcast Innovant",
      type: "Podcast",
      technique: "Prise de son mobile",
      link: "/realisations/podcast-innovant",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
    },
    {
      title: "Série TV Futur",
      type: "TV/VOD",
      technique: "Post-prod audio cinématographique",
      link: "/realisations/serie-tv-futur",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
    },
    {
      title: "Animation Cartoon",
      type: "Animation",
      technique: "Conception sonore",
      link: "/realisations/animation-cartoon",
      image: "https://images.pexels.com/photos/1301832/pexels-photo-1301832.jpeg"
    },
    {
      title: "Documentaire Nature",
      type: "Documentaires",
      technique: "Field recording",
      link: "/realisations/documentaire-nature",
      image: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg"
    },
    {
      title: "Série True Crime",
      type: "Séries audio",
      technique: "Montage & mixage spécial",
      link: "/realisations/serie-true-crime",
      image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
    },
    {
      title: "Corporate Tech",
      type: "Corporate",
      technique: "Sound branding",
      link: "/realisations/corporate-tech",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    },
    {
      title: "Livre Classique",
      type: "Livres audio",
      technique: "Voix off professionnelle",
      link: "/realisations/livre-classique",
      image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
    }
  ];
    let selectedType = "Tous";
    $: productionTypes = Array.from(new Set(allRealisations.map(r => r.type)));
  
    $: filteredRealisations = selectedType === "Tous"
      ? allRealisations
      : allRealisations.filter(r => r.type === selectedType);
  </script>
  
  <section>
    <h2>Nos réalisations</h2>
    <div class="filters">
      <button
        class:selected={selectedType === "Tous"}
        on:click={() => selectedType = "Tous"}
      >Tous</button>
      {#each productionTypes as type}
        <button
          class:selected={selectedType === type}
          on:click={() => selectedType = type}
        >{type}</button>
      {/each}
    </div>
  
    <div class="cards-grid">
      {#each filteredRealisations as realisation}
        <Card
          title={realisation.title}
          type={realisation.type}
          technique={realisation.technique}
          link={realisation.link}
          image={realisation.image}
        />
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
      background-color: white;
      color: var(--black);
      height: 100%;
    }
    section h2 {
      font-family: var(--bebas);
      font-size: 4rem;
      margin-bottom: 1rem;
      margin-top: 50px;
      font-weight: 400;
      letter-spacing: -1.5px;
    }
    .filters {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    .filters button {
      background-color: transparent;
      border: 1px solid var(--ardoise);
      color: var(--ardoise);
      padding: 10px 20px;
      cursor: pointer;
      font-family: var(--raleway);
      font-weight: var(--extra-bold);
      transition: background-color 0.3s, color 0.3s;
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.104);
      border-radius: 5px;
    }
    .filters button:hover {
      background-color: var(--red);
      color: #fff;
      transition: 0.3s ease-in-out;

    }
    .filters button.selected {
      color: var(--red);
    }
    .filters button.selected:hover {
      background-color: var(--red);
      color: #fff;
      border: none;
    }
    .cards-grid {
  display: flex;
  flex-wrap: wrap;         /* Retour à la ligne si besoin */
  gap: 2rem;               /* Espace entre les cartes */
  justify-content: center; /* Centrage horizontal */
  margin-top: 50px;
}

/* .cards-grid > * {
  flex: 0 1 320px;         
  min-width: 220px;
  max-width: 100%;
  margin-bottom: 2rem;
} */
  </style>
  