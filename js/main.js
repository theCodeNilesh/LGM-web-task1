$(".owl-carousel").owlCarousel({
  merge:true,
  loop:true,
  video:true,
  image:true
});

// The marker, positioned at Nashik
const marker = new google.maps.Marker({
  position: nashik,
  map: map,
});

// Initialize and add the map
function initMap() {
  // The location of Nashik
  const nashik = { lat: 19.9975, lng: 73.7898 };
  // The map, centered at Nashik
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: nashik,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: nashik,
    map: map,
  });
}