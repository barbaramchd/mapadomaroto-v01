var map = L.map('map').setView([-23.5949549, -46.6893987],16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var rockfella = L.marker([-23.5937489,-46.6848148]);
var outback = L.marker([-23.5955433,-46.6865461]);
var rinconcito = L.marker([-23.5967956,-46.6891613]);

var vila_olimpia = L.marker([-23.594358,-46.687976]);
var moema = L.marker([-23.604525,-46.666288]);

var clientes = L.layerGroup([rockfella,outback,rinconcito]);
var polos = L.layerGroup([vila_olimpia,moema]);

polos.addTo(map);

map.on("zoomend", function (e) {
    const zoom = map.getZoom();
    console.log("ZOOM: ", zoom);

    if (zoom > 15) {
        // SHOW CLIENTS
        if (!map.hasLayer(clientes)) {
            map.addLayer(clientes);
        }

        if (map.hasLayer(polos)) {
            map.removeLayer(polos);
        }
    } else {
        // SHOW POLOS
        if (!map.hasLayer(polos)) {
            map.addLayer(polos);
        }

        if (map.hasLayer(clientes)) {
            map.removeLayer(clientes);
        }

    }
});
map.on('click', onMapClick);