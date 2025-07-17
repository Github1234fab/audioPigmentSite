
<script>
    import { onMount } from 'svelte';
    let mapContainer;
    const center = { lat: 45.74981, lng: 4.85661 }; // tes coordonnées personnalisées
    const zoom = 15;
    let map;
  
    // Charge la Google Maps JS API
    onMount(() => {
      window.initMap = () => {
        map = new google.maps.Map(mapContainer, {
          center,
          zoom,
        });
        new google.maps.Marker({ position: center, map });
      };
    });
  </script>
  
  <svelte:head>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEwpAek6JuWKBWxCZRWHIpJpFtLmngzLE&callback=initMap"
      async defer>
    </script>
  </svelte:head>
  
  <div bind:this={mapContainer} style="width:100%;height:600px;border-radius:16px"></div>