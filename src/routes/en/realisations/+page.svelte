<script>
    import Card from '$lib/component/Card-realisation.svelte';
  
    const allRealisations = [
  {
    title: "Mystery Series",
    type: "Audio Series",
    technique: "3D Sound Design",
    link: "https://youtube.com/watch?v=Fu-aEj_Q8ig",
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
  },
  {
    title: "Company X",
    type: "Corporate",
    technique: "Sound Design & Mixing",
    link: "https://youtube.com/watch?v=FJhtKdsnsN0",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  }
];

    let selectedType = "All";

    $: productionTypes = Array.from(new Set(allRealisations.map(r => r.type)));
  
    $: filteredRealisations = selectedType === "All"
      ? allRealisations
      : allRealisations.filter(r => r.type === selectedType);
  </script>
  
  <section>
    <h1>Our achievements</h1>
    <div class="filters">
      <button
        class:selected={selectedType === "All"}
        on:click={() => (selectedType = "All")}
      >All</button>
      {#each productionTypes as type}
        <button
          class:selected={selectedType === type}
          on:click={() => (selectedType = type)}
        >{type}</button>
      {:else}
        <p class="empty-state">No categories available.</p>
      {/each}
    </div>
  
    <div class="cards-grid">
      {#each filteredRealisations as realisation}
        <Card
          title={realisation.title}
          image={realisation.image}
          link={realisation.link}
        />
      {:else}
        <p class="empty-state">No achievements in this category for now.</p>
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
    section h1 {
      font-family: var(--font-heading);
      font-size: 2.8rem;
      margin-bottom: var(--space-xl);
      margin-top: var(--space-xl);
      font-weight: 800;
      letter-spacing: -0.04em;
      position: relative;
      width: fit-content;
      padding-bottom: 1.5rem;
    }

    section h1::after {
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

    .filters {
      display: flex;
      gap: 0.8rem;
      flex-wrap: wrap;
      margin-bottom: var(--space-xl);
      justify-content: center;
    }

    .filters button {
      background-color: var(--white);
      border: 1px solid var(--grey-light);
      color: var(--ardoise);
      padding: 10px 24px;
      cursor: pointer;
      font-family: var(--font-main);
      font-size: 0.85rem;
      font-weight: 700;
      transition: var(--transition);
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .filters button:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .filters button.selected {
      background-color: var(--accent);
      color: var(--white);
      border-color: var(--accent);
      box-shadow: var(--shadow-md);
    }

    .cards-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        margin-top: 50px;
        max-width: 1400px;
    }

    .empty-state {
		grid-column: 1 / -1;
		text-align: center;
		padding: 3rem;
		font-family: var(--font-main);
		font-size: 1.2rem;
		color: var(--ardoise-light);
		background: var(--white-off);
		border-radius: var(--radius-md);
		border: 1px dashed var(--grey-light);
	}

@media (max-width: 768px) {
  section h1 {
    font-size: 2.4rem;
    letter-spacing: -1px;
    line-height: 1.2;
    padding-bottom: 1.5rem;
    margin-top: 40px;
    margin-bottom: 2.5rem;
  }
  .filters {
      margin-top: 40px;
    }
    .cards-grid {
  gap: 1rem;
  margin-top: 0px;
}
section {
      padding: var(--space-lg) var(--space-sm);
    }
}
  </style>
