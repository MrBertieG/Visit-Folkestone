// Initialize and add the map
function initMap() {
    // The location of Uluru
    const folkestone = { lat: 51.080598, lng: 1.185688 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: folkestone,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: folkestone,
      map: map,
    });
  }