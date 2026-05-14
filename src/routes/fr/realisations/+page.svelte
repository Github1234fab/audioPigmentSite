<script>
    import Card from '$lib/component/Card-realisation.svelte';
  
    const allRealisations = [
  {
    title: "Série Mystère",
    type: "Séries audio",
    technique: "Réalisation sonore 3D",
    link: "https://youtube.com/watch?v=Fu-aEj_Q8ig",
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
  },
  {
    title: "Entreprise X",
    type: "Corporate",
    technique: "Design sonore & mixage",
    link: "https://youtube.com/watch?v=FJhtKdsnsN0",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    title: "HAZELNUTS",
    type: "DESSIN ANIME",
    technique: "Enregistrement, Soundesign et Mixage.",
    link: "https://youtube.com/watch?v=Fu-aEj_Q8ig",
    image: "https://i.ytimg.com/vi/Fu-aEj_Q8ig/mqdefault.jpg"
  },
  {
    title: "GRANPA et ZOE",
    type: "DOUBLAGE",
    technique: "Enregistrement, Soundesign et Mixage.",
    link: "https://youtube.com/watch?v=FJhtKdsnsN0",
    image: "https://i.ytimg.com/vi/FJhtKdsnsN0/mqdefault.jpg"
  },
  {
    title: "HAZELNUTS",
    type: "DESSIN ANIME",
    technique: "Enregistrement, Soundesign et Mixage.",
    link: "https://youtube.com/watch?v=uj19mlAZlUo",
    image: "https://i.ytimg.com/vi/uj19mlAZlUo/mqdefault.jpg"
  },
  {
    title: "GRANPA et ZOE",
    type: "DESSIN ANIME",
    technique: "Enregistrement, Soundesign et Mixage.",
    link: "https://youtube.com/watch?v=NtHwCg4i73c",
    image: "https://i.ytimg.com/vi/NtHwCg4i73c/mqdefault.jpg"
  },
  {
    title: "LUCIA",
    type: "HABILLAGE SONORE",
    technique: "Soundesign et mixage",
    link: "https://youtube.com/watch?v=Glq7QP-US-Y",
    image: "https://i.ytimg.com/vi/Glq7QP-US-Y/mqdefault.jpg"
  },
  {
    title: "Emmentaler AOP - Share a piece of you",
    type: "SPOT TV - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=l8vJAkablNk",
    image: "https://i.ytimg.com/vi/l8vJAkablNk/mqdefault.jpg"
  },
  {
    title: "BARILLA _ Diner entre amis - 15s",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix et D.A.",
    link: "https://youtube.com/watch?v=LfNereR9MHI",
    image: "https://i.ytimg.com/vi/LfNereR9MHI/mqdefault.jpg"
  },
  {
    title: "InfoJeunesProstitution",
    type: "CAMPAGNE WEB - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=4H_sEETHmvs",
    image: "https://i.ytimg.com/vi/4H_sEETHmvs/mqdefault.jpg"
  },
  {
    title: "MIX BUFFET",
    type: "FILM INSTITUTIONNEL - FR",
    technique: "Post production",
    link: "https://youtube.com/watch?v=gmcgXXlpras",
    image: "https://i.ytimg.com/vi/gmcgXXlpras/mqdefault.jpg"
  },
  {
    title: "preview MIX 3D Binaural.",
    type: "MIXAGE 5.1",
    technique: "preview MIX 3D Binaural. CASQUE AUDIO INDISPENSABLE !",
    link: "https://youtube.com/watch?v=9b-nxj_la6o",
    image: "https://i.ytimg.com/vi/9b-nxj_la6o/mqdefault.jpg"
  },
  {
    title: "DASH _ Maniaque - 30s",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix et D.A.",
    link: "https://youtube.com/watch?v=-pGIzsqOoEY",
    image: "https://i.ytimg.com/vi/-pGIzsqOoEY/mqdefault.jpg"
  },
  {
    title: "film corporate IFF",
    type: "LOCALISATION - ANGLAIS",
    technique: "Post production",
    link: "https://youtube.com/watch?v=cxjJlnM76Wc",
    image: "https://i.ytimg.com/vi/cxjJlnM76Wc/mqdefault.jpg"
  },
  {
    title: "COSTA CROISIERE 2021 - 30s",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix",
    link: "https://youtube.com/watch?v=d2AfG-OzoL8",
    image: "https://i.ytimg.com/vi/d2AfG-OzoL8/mqdefault.jpg"
  },
  {
    title: "Thon entier nature SAUPIQUET - 20s",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix",
    link: "https://youtube.com/watch?v=NB-SP4qrjtA",
    image: "https://i.ytimg.com/vi/NB-SP4qrjtA/mqdefault.jpg"
  },
  {
    title: "Costa Crociere Foundation",
    type: "SPOT WEB - FR",
    technique: "Direction artistique",
    link: "https://youtube.com/watch?v=28tMbzvJsG4",
    image: "https://i.ytimg.com/vi/28tMbzvJsG4/mqdefault.jpg"
  },
  {
    title: "Cookies DELACRE - 30s",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix",
    link: "https://youtube.com/watch?v=KvOP_tbju3A",
    image: "https://i.ytimg.com/vi/KvOP_tbju3A/mqdefault.jpg"
  },
  {
    title: "SAN PELLEGRINO Manifesto",
    type: "SPOT WEB - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=KEJoZxzM0FI",
    image: "https://i.ytimg.com/vi/KEJoZxzM0FI/mqdefault.jpg"
  },
  {
    title: "SAN PELLEGRINO Manifesto",
    type: "SPOT WEB - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=KEJoZxzM0FI",
    image: "https://i.ytimg.com/vi/KEJoZxzM0FI/mqdefault.jpg"
  },
  {
    title: "TECHNOFLEX",
    type: "FILM INSTITUTIONNEL - US",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=dUOgdMw4kMo",
    image: "https://i.ytimg.com/vi/dUOgdMw4kMo/mqdefault.jpg"
  },
  {
    title: "LE PHILTRE Organic Vodka",
    type: "SPOT WEB - FR",
    technique: "Direction artistique",
    link: "https://youtube.com/watch?v=qA9k1JurJw4",
    image: "https://i.ytimg.com/vi/qA9k1JurJw4/mqdefault.jpg"
  },
  {
    title: "One Planet Summit 2021",
    type: "FILM INSTITUTIONNEL - ANGLAIS",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=JkvVrbImqBU",
    image: "https://i.ytimg.com/vi/JkvVrbImqBU/mqdefault.jpg"
  },
  {
    title: "spot web \"LANGE XT3 ski boots",
    type: "LOCALISATION - ANGLAIS US",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=1wQ-J_sZ3jg",
    image: "https://i.ytimg.com/vi/1wQ-J_sZ3jg/mqdefault.jpg"
  },
  {
    title: "Piscines Magiline - 30s",
    type: "SPOT TV - FR",
    technique: "Enregistrement et mixage",
    link: "https://youtube.com/watch?v=yRuTtiiPKhU",
    image: "https://i.ytimg.com/vi/yRuTtiiPKhU/mqdefault.jpg"
  },
  {
    title: "SMTC - Enquête Mobilité",
    type: "SPOT RADIO",
    technique: "Réalisation",
    link: "https://youtube.com/watch?v=L79bsQssG5U",
    image: "https://i.ytimg.com/vi/L79bsQssG5U/mqdefault.jpg"
  },
  {
    title: "Cars - Vroom Planet",
    type: "SPOT TV - FR",
    technique: "Post production",
    link: "https://youtube.com/watch?v=EJicT-1Lqe4",
    image: "https://i.ytimg.com/vi/EJicT-1Lqe4/mqdefault.jpg"
  },
  {
    title: "Lenor SLEEPING BEAUTY - 30s",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix",
    link: "https://youtube.com/watch?v=WFxoUld3yrc",
    image: "https://i.ytimg.com/vi/WFxoUld3yrc/mqdefault.jpg"
  },
  {
    title: "BIOMERIEUX",
    type: "FILM INSTITUTIONNEL - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=BqgViQ-U7Jg",
    image: "https://i.ytimg.com/vi/BqgViQ-U7Jg/mqdefault.jpg"
  },
  {
    title: "TOTAL Fleet",
    type: "FILM INSTITUTIONNEL - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=63PRVdLEgZI",
    image: "https://i.ytimg.com/vi/63PRVdLEgZI/mqdefault.jpg"
  },
  {
    title: "GINGER Etude Balcons",
    type: "FILM INSTITUTIONNEL - FR",
    technique: "Post production voix",
    link: "https://youtube.com/watch?v=Emf3yYcQJaw",
    image: "https://i.ytimg.com/vi/Emf3yYcQJaw/mqdefault.jpg"
  },
  {
    title: "Capcom GO",
    type: "FILM ANIMATION",
    technique: "Post production VF",
    link: "https://youtube.com/watch?v=dgSSWMvv35U",
    image: "https://i.ytimg.com/vi/dgSSWMvv35U/mqdefault.jpg"
  }
];


    let selectedType = "Tous";

    $: productionTypes = Array.from(new Set(allRealisations.map(r => r.type)));
  
    $: filteredRealisations = selectedType === "Tous"
      ? allRealisations
      : allRealisations.filter(r => r.type === selectedType);
  </script>
  
  <section>
    <h1>Nos réalisations</h1>
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
          image={realisation.image}
          link={realisation.link}
        />
      {:else}
        <p class="empty-state">Aucune réalisation dans cette catégorie pour le moment.</p>
      {/each}
    </div>
  </section>
  
  <style>
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      background-color: white;
      color: var(--black);
      min-height: 100vh;
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
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 450px));
		gap: 2.5rem;
		width: 100%;
		max-width: 1400px;
		margin-top: 50px;
		justify-content: center;
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
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 0px;
}
section {
      padding: var(--space-lg) var(--space-sm);
    }

}
  </style>
