//Creating the map object (the main object of our algorithm)
  var map = L.map('map', {
    center: [-10.18305556, -48.33361111], //Brazil's geography center
    zoom: 4,
    zoomSnap: 0.5,
    });

//Seeting API
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Creating a scale to control the zoom and to show the zoom in the metric system
L.control.scale(metric = "True").addTo(map);

//Por alguma razão, quase todos os pontos dependem desse ponto. Por quê?
function onClick(e){
  console.log(e.target._latlng);
  document.getElementById('first_chart').style.display="block";
  }

var marker = L.marker([-23.590379, -46.67593]).addTo(map).on('click', onClick);

var popup = L.popup();

//Feature Group - Polos SP
var markerspolos_arrays = [[-23.7055268434, -46.6984244105, 'POLO GRAJAU'],
                      [-23.5462269421, -46.6796297963, 'POLO PINHEIROS'],
                      [-23.6704282345, -46.7726264745, 'POLO CAPAO REDONDO'],
                      [-23.4368999301, -46.8110950393, 'POLO OSASCO OESTE'],
                      [-23.5553186889, -46.731903387, 'POLO BUTANTA']];

var popupText = '';
var cluster_polospSP = L.markerClusterGroup();
for (var i=0; i<markerspolos_arrays.length; i++) {
 
  popupText = markerspolos_arrays[i][2];
  console.log(popupText)
  
  var markersSP_markers = new L.Marker([markerspolos_arrays[i][0],markerspolos_arrays[i][1]])//.addTo(map)
  console.log(markersSP_markers)
  cluster_polospSP.addLayer(markersSP_markers);

}

map.addLayer(cluster_polospSP);
console.log(cluster_polospSP)
    
var fg_polospSP = L.featureGroup([cluster_polospSP]).addTo(map);

fg_polospSP
  .on('click', function(e){
    console.log('!!!!!!!!!!!', e); 
    
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    for (const polo in markerspolos_arrays) {
      console.log('a ', polo);
      if (markerspolos_arrays[polo][0] == lat && markerspolos_arrays[polo][1] == lng) {
        updateChart(markerspolos_arrays[polo][2]);
      }
    }
  })

//Feature Group - Distritos SP
var markersdistritos_arrays = [[-23.5281437396, -46.6814055846, 'DISTRITO SP OESTE'],
                      [-23.5268766094, -46.6292964458, 'DISTRITO SP CENTRO'],
                      [-23.5829331157, -46.6344973705, 'REGIAO SP']];

var popupText = '';
var cluster_distritospSP = L.markerClusterGroup();
for (var i=0; i<markersdistritos_arrays.length; i++) {
 
  popupText = markersdistritos_arrays[i][2];
  console.log(popupText)
  
  var markersSP_markers = new L.Marker([markersdistritos_arrays[i][0],markersdistritos_arrays[i][1]])//.addTo(map)
  console.log(markersSP_markers)
  cluster_distritospSP.addLayer(markersSP_markers);

}

map.addLayer(cluster_distritospSP);
console.log(cluster_distritospSP)
    
var fg_distritospSP = L.featureGroup([cluster_distritospSP]).addTo(map);

fg_distritospSP
  .on('click', function(e){
    console.log('!!!!!!!!!!!', e); 
    
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    for (const polo in markersdistritos_arrays) {
      console.log('a ', polo);
      if (markersdistritos_arrays[polo][0] == lat && markersdistritos_arrays[polo][1] == lng) {
        updateChart(markersdistritos_arrays[polo][2]);
      }
    }
  })

//Feature Group - Regional SP

//Layer control
var baseMaps = {
  OSMap: osm,
};
var overlays ={
  "Polos SP":fg_polospSP,
  "Distritos SP": fg_distritospSP

};
L.control.layers(baseMaps, overlays).addTo(map);  

map.on("zoomend", function () {
  if (map.getZoom() <7){
        map.removeLayer(fg_polospSP)
        map.addLayer(fg_distritospSP);
  }else{
        map.addLayer(fg_polospSP)
        map.removeLayer(fg_distritospSP);
  }
});

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

};
map.on('click', onMapClick);
