//const cluster = require('leaflet.markercluster');

//Creating the map object (the main object of our algorithm)
//function initMap(){
  var map = L.map('map', {
    center: [-23.596846, -46.682813], 
    zoom: 10,
    zoomSnap: 0.5,
    minZoom: 5,
    //zoomDelta: 3,
    //attributionControl: true
    });

//Seeting the API through HERE website
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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
var geojson = L.geoJSON({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -46.6791134,
            -23.5123009,
            0
          ],
          [
            -46.679485,
            -23.52265,
            0
          ],
          [
            -46.69092,
            -23.53844,
            0
          ],
          [
            -46.690128,
            -23.542638,
            0
          ],
          [
            -46.690925,
            -23.546118,
            0
          ],
          [
            -46.68883,
            -23.54756,
            0
          ],
          [
            -46.685354,
            -23.547959,
            0
          ],
          [
            -46.68421,
            -23.54944,
            0
          ],
          [
            -46.67993,
            -23.54976,
            0
          ],
          [
            -46.6658662,
            -23.5564326,
            0
          ],
          [
            -46.663791,
            -23.555134,
            0
          ],
          [
            -46.659572,
            -23.552914,
            0
          ],
          [
            -46.65361,
            -23.5498,
            0
          ],
          [
            -46.64751,
            -23.54739,
            0
          ],
          [
            -46.64771,
            -23.54169,
            0
          ],
          [
            -46.64664,
            -23.54098,
            0
          ],
          [
            -46.64622,
            -23.53939,
            0
          ],
          [
            -46.644895,
            -23.538043,
            0
          ],
          [
            -46.64026,
            -23.53495,
            0
          ],
          [
            -46.63863,
            -23.534266,
            0
          ],
          [
            -46.643865,
            -23.5286,
            0
          ],
          [
            -46.647985,
            -23.527498,
            0
          ],
          [
            -46.65397,
            -23.51606,
            0
          ],
          [
            -46.677665,
            -23.513056,
            0
          ],
          [
            -46.6791134,
            -23.5123009,
            0
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
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67399883270264,
          -23.53298606380227
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66895627975464,
          -23.535799279183763
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67367696762085,
          -23.530172788264938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.683053970336914,
          -23.534363169757285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66065216064453,
          -23.54510410142578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65464401245117,
          -23.5321991396418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66683197021484,
          -23.520394712500526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.68039321899414,
          -23.54116979602965
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.669921875,
          -23.549353019034193
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.64863586425781,
          -23.538651778805537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65902137756348,
          -23.52724140920563
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.68210983276367,
          -23.544199221607894
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.68683052062988,
          -23.540618983881284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65369987487793,
          -23.546717132613146
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65618896484375,
          -23.538061611545263
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66841983795166,
          -23.539438664366696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.673526763916016,
          -23.51787629769063
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67524337768555,
          -23.521889998499038
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67447090148926,
          -23.523503314342346
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67773246765137,
          -23.526572494766636
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65897846221924,
          -23.520158613158657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66142463684082,
          -23.52110300798548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.645545959472656,
          -23.533261486146454
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66335582733154,
          -23.530035073932055
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66618824005127,
          -23.527516843574624
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65202617645263,
          -23.52291307913251
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.650395393371575,
          -23.525470745926064
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.655802726745605,
          -23.517207335658984
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.64078235626221,
          -23.5347566259539
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.64970874786377,
          -23.531333517629083
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.648292541503906,
          -23.53495335361092
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66125297546386,
          -23.5334582160393
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66451454162598,
          -23.549195654164066
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.6724967956543,
          -23.54250747307116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67644500732422,
          -23.536369784056784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.67966365814208,
          -23.53153025040477
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66022300720215,
          -23.537314062547555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.657819747924805,
          -23.548330144011366
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.65696144104003,
          -23.541759949342897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.66949272155762,
          -23.51708928318293
        ]
      }
    }
  ]
},
{
  style : function (feature) {
      return {
          color: "black",
          weight: 1
        };
      }
    })
    //.addTo(map); Do not addTo(map) cause you will create double latlng points

//FeatureGroup and ClusterGroup Polos SP

var clusterpolosp1 = L.markerClusterGroup();
clusterpolosp1.addLayer(geojson);
map.addLayer(clusterpolosp1);

var fgpolosp1 = L.featureGroup([clusterpolosp1])
    .bindPopup('Hello world!')
    .on('click', function(){ alert ('Clicked on a member of the group'); }).addTo(map);

//Layer control
var baseMaps = {
  OSMap: osm,
};
var overlays ={
  "Circle": circle,
  "Marker": marker,
  //"GeoJSON": geojson,
  "FeatureGroup": fgpolosp1 
  //'Markers': markers, I cant insert the var markers.. why???
};
L.control.layers(baseMaps, overlays).addTo(map);  

//Creating clusters
//var cluster = L.markerClusterGroup();
//cluster.addLayer(geojson);
//cluster.addTo(map);

/*
//Fitting markers within map's bounds
map.fitBounds(featureGroup.getBounds(), {
    padding: [20,20]
});

//Setting zoom
setInterval(function(){
  map.setZoom(0);
  setTimeout(function(){
      map.setZoom(1);
  }, 2000);
}, 4000);
*/
var div = document.getElementById("map");
map.addEventListener("click", function(){
  console.log("clicked")
})


function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

};
map.on('click', onMapClick);
