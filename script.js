//const cluster = require('leaflet.markercluster');

//Creating the map object (the main object of our algorithm)
var map = L.map('map').setView([-23.596846, -46.682813], 13);

//Seeting the API through HERE website
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Creating a layer control
var baseMaps = {
    OSMap: osm,
};

//Creating a scale to control the zoom and to show the zoom in the metric system
L.control.scale(metric = "True").addTo(map);

//Por alguma razão, quase todos os pontos dependem desse ponto. Por quê?
var marker = L.marker([-23.590379, -46.67593]).addTo(map).bindPopup('Hi there!').openPopup();

//Creating the red flower icon
var redIcon = L.icon({
    iconUrl: 'leaf-red.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 90], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
L.marker([51.487200, -0.068300], {icon: redIcon}).addTo(map);

//Creating the circle
var circle = L.circle([-23.588924, -46.672819], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
    }).addTo(map);

//Creating the polygon
var polygon = L.polygon([
        [-23.593088, -46.67321],
        [-23.595232, -46.673425],
        [-23.593486, -46.675109]
    ]).addTo(map);

marker.bindPopup("<b> Hey there! </b><br> I am a marker.");
circle.bindPopup("I am a circle");
polygon.bindPopup("I am a polygon");

var popup = L.popup();

//GeoJSON
var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              -0.11492729187011717,
              51.505537109466715
            ],
            [
              -0.11381149291992186,
              51.47496812303541
            ],
            [
              -0.03742218017578125,
              51.469194055890355
            ],
            [
              -0.03604888916015625,
              51.50190410761811
            ],
            [
              -0.05699157714843749,
              51.49891200625809
            ],
            [
              -0.098876953125,
              51.50681927626061
            ],
            [
              -0.11466979980468751,
              51.50561724594832
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -0.12411117553710939,
            51.48074145939243
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -0.03888130187988281,
            51.47004951935931
          ]
        }
      }
    ]
  };

//Adicionando GeoJSON e bounds que dependem do GeoJSON
var addedGeoJSON = L.geoJSON(geojson, {
        style : function (feature) {
            return {
                color: "black",
                weight: 0.75
            };
        }
    }).addTo(map);
        /*,
        pointToLayer: function(geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: redIcon
             });
            },
            onEachFeature: function(feature, layer) {
                if(feature.geometry.type==='Point'){
                    layer.bindPopup('hello');
                }
            }
    }).addTo(map);

    map.fitBounds(addedGeoJSON.getbounds(),{
        padding: [20, 20]
    });
*/

//Creating several markers. Why this markers are dependend of another marker??
var markers = [];
var coordinates = [
    [-23.596846, -46.682813],
    [-23.594100, -46.683589],
    [-23.596098, -46.689564],
    [-23.594614, -46.687221],
    [-23.595150, -46.686850],
    [-23.592302, -46.685565],
    [-23.59357, -46.68535],
    [-23.592198, -46.688284],
    [-23.592228, -46.681702],
    [-23.594057, -46.682147],
    [-23.598697, -46.681767],
    [-23.600152, -46.679245],
    [-23.597596, -46.685779],
    [-23.595256, -46.680919],
    [-23.59855, -46.675233],
    [-23.604586, -46.677518],
    [-23.60143, -46.67534],
    [-23.598481, -46.67461],
    [-23.599562, -46.674691],
    [-23.600059, -46.682265],
    [-23.601199, -46.679798],
    [-23.602517, -46.678467],
    [-23.601057, -46.682319],
    [-23.598963, -46.684899],
    [-23.593545, -46.688644],
    [-23.594765, -46.68933],
    [-23.594951, -46.684502]
];

coordinates.forEach(function(coords){
    var marker = L.marker(coords);
    markers.push(marker);
});

//Inserting more layers into the layer control
L.control.layers(baseMaps, {
    'Circle': circle,
    'Marker': marker, 
    //'Markers': markers, I cant insert the var markers.. why???

}).addTo(map);  

//Changing marker to red flower
var featureGroup = L.featureGroup(markers).addTo(map);

//Creating clusters
var cluster = L.markerClusterGroup();
cluster.addLayer(featureGroup);
cluster.addTo(map);

//Fitting markers within map's bounds
map.fitBounds(featureGroup.getBounds(), {
    padding: [20,20]
});
        
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

};
map.on('click', onMapClick);