var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ktym_1 = new ol.format.GeoJSON();
var features_ktym_1 = format_ktym_1.readFeatures(json_ktym_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ktym_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ktym_1.addFeatures(features_ktym_1);
var lyr_ktym_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ktym_1, 
                style: style_ktym_1,
                popuplayertitle: 'ktym',
                interactive: true,
                title: '<img src="styles/legend/ktym_1.png" /> ktym'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ktym_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ktym_1];
lyr_ktym_1.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SOTR': 'SOTR', 'Borelog': 'Borelog', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', });
lyr_ktym_1.set('fieldImages', {'Name': '', 'Sample ID': '', 'District': '', 'Bore Date': '', 'Latitude': '', 'Longitude': '', 'SOTR': '', 'Borelog': '', 'field_9': '', 'field_10': '', 'field_11': '', 'field_12': '', 'field_13': '', 'field_14': '', 'field_15': '', 'field_16': '', 'field_17': '', 'field_18': '', });
lyr_ktym_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', 'field_9': 'inline label - visible with data', 'field_10': 'inline label - visible with data', 'field_11': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'field_13': 'inline label - visible with data', 'field_14': 'inline label - visible with data', 'field_15': 'inline label - visible with data', 'field_16': 'inline label - visible with data', 'field_17': 'inline label - visible with data', 'field_18': 'inline label - visible with data', });
lyr_ktym_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});