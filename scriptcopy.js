

//Creating the map object (the main object of our algorithm)
//function initMap(){
  var map = L.map('map', {
    center: [-10.18305556, -48.33361111], //Brazil's geography center
    zoom: 4,
    zoomSnap: 0.5,
    //minZoom: 4,
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
function onClick(e){
  console.log(e.target._latlng);
  document.getElementById('first_chart').style.display="block";
  }

var marker = L.marker([-23.590379, -46.67593]).addTo(map).on('click', onClick);


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

var geojson3 = L.geoJSON({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
         index: 0,
         Pais: "BRASIL",
         Regiao: "CONNE",
         Distrito: "DISTRITO TM",
         Polo: "POLO IGARAPAVA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -48.2515839216,
          -19.5910918784
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

var clusterpolosp2 = L.markerClusterGroup();
clusterpolosp2.addLayer(geojson3);
map.addLayer(clusterpolosp2);
    
var fgpolosp2 = L.featureGroup([clusterpolosp2])
  .bindPopup('Hello world!')
  .on('click', function(){ alert ('Clicked on a member of the group'); }).addTo(map);
  
/*
var geojson_arrays = L.geoJSON({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
         "id": 0,
         "Pais": "BRASIL",
         "Regiao": "CONNE",
         "Distrito": "DISTRITO TM",
         "Polo": "POLO IGARAPAVA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -19.5910918784,
          -48.2515839216
          ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 1,
        "Pais": "BRASIL",
        "Regiao": "RJMG",
        "Distrito": "DISTRITO SMG",
        "Polo": "POLO VARGINHA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.4750236587,
          -45.3765872084
          ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2,
        "Pais": "BRASIL",
        "Regiao": "NORDESTE",
        "Distrito": "DISTRITO PE",
        "Polo": "POLO RECIFE - CENTRO"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8.2332671087,
          -35.0267348115
          ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3,
        "Pais": "BRASIL",
        "Regiao": "SUL",
        "Distrito": "DISTRITO SRS",
        "Polo": "POLO PORTO ALEGRE 5"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -29.9472437485,
          -51.1344060799
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
    })//.addTo(map);

    //var json = JSON.parse(geojson_arrays)
    //var oi = geojson_arrays._leaflet_id
    console.log(geojson_arrays)
    //console.log(geojson_arrays._layers[oi])
    console.log(geojson_arrays._layers[134].feature)
    console.log(geojson_arrays._layers[134].feature.geometry)
    console.log(geojson_arrays._layers[134].feature.geometry.coordinates)
    console.log(geojson_arrays._layers[134].feature.properties.id)
    console.log(geojson_arrays._leaflet_id);
    console.log(geojson_arrays._layers[137].feature.geometry.coordinates)


    
    //var coisa = geojson_arrays;
    
    //console.log(coisa)


function setup(){
  //var plotmarker = geojson_arrays._layers[125].feature.properties.id;
  //[].forEach.call(plotmarker){
    //const id = plotmarker.id;
  var coordinates = geojson_arrays._layers[137].feature.geometry.coordinates;
  return new L.marker(coordinates[0].lat,coordinates[1].lng).addTo(map)};

onepoint = geojson_arrays._layers[137].feature.geometry.coordinates;
setup(onepoint);
*/

var polosSP_arrays = [[-23.7055268434, -46.6984244105], [-23.5462269421, -46.6796297963], [-23.6704282345, -46.7726264745],
  [-23.4368999301, -46.8110950393], [-23.5553186889, -46.731903387], [-23.7036161903, -46.703979279], 
  [-23.4849199595, -46.617045501], [-23.5092924213, -46.6341447454], [-23.5426843139, -46.8356477085],
  [-23.6346991283, -46.7187070317], [-23.9626654309, -46.40309479], [-23.5925717597, -46.6396302104],
  [-23.4825994667, -46.8850440307], [-23.4110675444, -46.7796093865], [-23.5002534208, -46.41035825],
  [-23.5257877137, -46.6650292408], [-23.9925393497, -46.4786252837], [-23.4703642896, -46.6020596439],
  [-23.5147467083, -46.5730338829], [-23.5409440557, -46.9623224487], [-23.6000427034, -46.6843254194],
  [-23.5271319917, -46.4697613201], [-23.5621723582, -46.4631572252], [-23.5414917273, -46.6643663277],
  [-23.8489291286, -46.2218240304], [-23.4931848398, -46.5900645247], [-23.5260374714, -46.62159507],
  [-23.5139596667, -46.6299800667], [-23.4872774879, -46.6410908438], [-23.53261015, -46.8934022361],
  [-23.5645405903, -46.5970945232], [-23.4803151449, -46.4559735558], [-23.453807606, -46.6591100445],
  [-23.7768234984, -46.8546797596], [-23.9469792487, -46.3363983828], [-23.8838637652, -46.4251758314],
  [-23.6539135058, -46.6490689782], [-23.5043524289, -46.6508020048], [-23.5936270617, -46.6087507038],
  [-23.4495016864, -46.6789577658], [-23.5230121796, -46.7040462556], [-23.4744406483, -46.3475013501],
  [-23.4764066603, -46.7301561588], [-23.5955209597, -46.7615562328], [-23.5689660538, -46.5394228261],
  [-23.5674719861, -46.6438644254], [-23.5997085025, -46.9235073073], [-23.5335100483, -46.7917429426],
  [-23.5893837056, -46.7407864389], [-23.6520897782, -46.8232280452]];
distritaisSP_array = [[-23.5281437396, -46.6814055846], [ -23.5268766094, -46.6292964458], [-23.554261814, -46.8267442905], [-23.8483938749, -46.4873643277], [-23.5253532863, -46.5047279971], [-23.4763559942, -46.6421831924], [-23.6134146027, -46.6645572981]];
regionalSP_array= [[-23.5829331157, -46.6344973705]];

for (var i=0; i<polosSP_arrays.length; i++) {
           
  var lat = polosSP_arrays[i][0];
  var lng = polosSP_arrays[i][1];
  //var popupText = polosSP_arrays[i][2]; NEED TO ADD OR ID
  
  var markerLocation = new L.LatLng(lat, lng);
  var polosSP_markers = new L.Marker(markerLocation)//.addTo(map);
  //marker.bindPopup(popupText);
}
var cluster_polospSP = L.markerClusterGroup();
cluster_polospSP.addLayer(polosSP_markers);
map.addLayer(cluster_polospSP);
    
var fg_polospSP = L.featureGroup([cluster_polospSP])
  .bindPopup('Hello world!')
  .on('click', function(){ alert ('Clicked on a member of the group'); }).addTo(map);
//Layer control
var baseMaps = {
  OSMap: osm,
};
var overlays ={
  "Circle": circle,
  "Marker": marker,
  "FeatureGroup": fgpolosp1, 
  "FeatureGroup2": fgpolosp2,
  "Polos SP": fg_polospSP
};
L.control.layers(baseMaps, overlays).addTo(map);  

map.on("zoomend", function () {
  if (map.getZoom() <7){
        map.removeLayer(fgpolosp1)
        map.removeLayer(fgpolosp2)
        map.removeLayer(fg_polospSP);
  }else{
        map.addLayer(fgpolosp1)
        map.addLayer(fgpolosp2)
        map.addLayer(fg_polospSP);
  }
});

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

};
map.on('click', onMapClick);
