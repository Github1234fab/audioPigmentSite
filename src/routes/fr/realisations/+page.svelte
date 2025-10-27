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
    title: "LENOR Belle au bois dormant",
    type: "SPOT TV - FR",
    technique: "Enregistrement voix",
    link: "https://youtube.com/watch?v=pz2xpVFJ-nU",
    image: "https://i.ytimg.com/vi/pz2xpVFJ-nU/mqdefault.jpg"
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
    title: "\"Piscines Magiline - 30s\". Enregistrement et mixage",
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
      font-weight: 500;
      letter-spacing: -1.5px;
    }
    .filters {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      margin-top: 20px;
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
      text-transform: lowercase;
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

@media (max-width: 768px) {

  section h2 {
    font-size: 3rem;
    letter-spacing: -1px;
    line-height: 60px;

  }
  .filters {
      margin-top: 40px;
    }
    .cards-grid {
  display: flex;
  flex-wrap: wrap;         /* Retour à la ligne si besoin */
  gap: 1rem;               /* Espace entre les cartes */
  justify-content: center; /* Centrage horizontal */
  margin-top: 0px;
}
section {
     
      padding: 2rem;
      
    }

}
  </style>
  