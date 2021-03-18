function desenhamapa() {
var map = new L.Map("oMeuMapa", {center: [40.633258,-8.659097],zoom: 15});
11.10
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmAttrib="Map data OpenStreetMap contributors";
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
map.addLayer(osm);
} ;
