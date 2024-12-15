var map = L.map('map', {
    center: [-12.033336841624664, -76.89263710738467],
    zoom: 13,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-12.047454227355168, -76.91428952368017], [-12.033336841624664, -76.89263710738467]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);



var Ate = L.tileLayer.wms("http://localhost:8080/geoserver/web_ate/wms?", {
    layers: "web_ate:ate_poligono", //gisweb:Ate
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Ate.addTo(map);


var Iglesia = L.tileLayer.wms("http://localhost:8080/geoserver/web_ate/wms?", {
    layers: "web_ate:ate_iglesi", //gisweb:Iglesia
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Iglesia.addTo(map);

var Hospital = L.tileLayer.wms("http://localhost:8080/geoserver/web_ate/wms?", {
    layers: "web_ate:ate_hospital", //gisweb:Hospital
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Hospital.addTo(map);

var Grifo = L.tileLayer.wms("http://localhost:8080/geoserver/web_ate/wms?", {
    layers: "web_ate:ate_grifo", //gisweb:Grifo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Grifo.addTo(map);


var Curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_ate/wms?", {
    layers: "web_ate:curvas_Ate", //gisweb:Curvas_nivel
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Curvas_nivel.addTo(map);

var Colegio = L.tileLayer.wms("http://localhost:8080/geoserver/web_ate/wms?", {
    layers: "web_ate:ate_colegio", //gisweb:Colegio
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Colegio.addTo(map);




var baseMaps = {
    "OSM": basemapOSM,
    "Satelite": bgoogleSat
};

var overlayMaps = {
    "Ate": Ate,
    "Iglesia":Iglesia,
    "Hospital":Hospital,
    "Grifo":Grifo,
    "Curvas_nivel":Curvas_nivel,
    "Colegio":Colegio




    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);