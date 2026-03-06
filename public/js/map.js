maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: coordinates,
  zoom: 10
});

// ✅ Store marker in variable
const marker = new maptilersdk.Marker({ color: "red" })
  .setLngLat(coordinates)
  .addTo(map);

// ✅ Create popup
const popup = new maptilersdk.Popup({ offset: 25 })
  .setHTML(`
   <h4>Exact location provided after booking</h4>
  `);

// ✅ Attach popup to marker
marker.setPopup(popup);