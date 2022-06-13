var wms_layers = [];


        var lyr_Maps_0 = new ol.layer.Tile({
            'title': 'Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_HYBRID_1 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CitraSatelit_2 = new ol.layer.Tile({
            'title': 'Citra Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_USULANBATASRESORT_3 = new ol.format.GeoJSON();
var features_USULANBATASRESORT_3 = format_USULANBATASRESORT_3.readFeatures(json_USULANBATASRESORT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USULANBATASRESORT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USULANBATASRESORT_3.addFeatures(features_USULANBATASRESORT_3);
var lyr_USULANBATASRESORT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USULANBATASRESORT_3, 
                style: style_USULANBATASRESORT_3,
                interactive: true,
    title: 'USULAN BATAS RESORT<br />\
    <img src="styles/legend/USULANBATASRESORT_3_0.png" /> Detusoko<br />\
    <img src="styles/legend/USULANBATASRESORT_3_1.png" /> Kelimutu<br />\
    <img src="styles/legend/USULANBATASRESORT_3_2.png" /> Moni<br />\
    <img src="styles/legend/USULANBATASRESORT_3_3.png" /> Ndona<br />\
    <img src="styles/legend/USULANBATASRESORT_3_4.png" /> Ndona Timur<br />\
    <img src="styles/legend/USULANBATASRESORT_3_5.png" /> Niowula<br />\
    <img src="styles/legend/USULANBATASRESORT_3_6.png" /> Wolojita<br />'
        });
var format_batas_kawasan_4 = new ol.format.GeoJSON();
var features_batas_kawasan_4 = format_batas_kawasan_4.readFeatures(json_batas_kawasan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kawasan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kawasan_4.addFeatures(features_batas_kawasan_4);
var lyr_batas_kawasan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kawasan_4, 
                style: style_batas_kawasan_4,
                interactive: true,
                title: '<img src="styles/legend/batas_kawasan_4.png" /> batas_kawasan'
            });
var format_SISTEMGRIDDANDESAPENYANGGA_5 = new ol.format.GeoJSON();
var features_SISTEMGRIDDANDESAPENYANGGA_5 = format_SISTEMGRIDDANDESAPENYANGGA_5.readFeatures(json_SISTEMGRIDDANDESAPENYANGGA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SISTEMGRIDDANDESAPENYANGGA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SISTEMGRIDDANDESAPENYANGGA_5.addFeatures(features_SISTEMGRIDDANDESAPENYANGGA_5);
var lyr_SISTEMGRIDDANDESAPENYANGGA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SISTEMGRIDDANDESAPENYANGGA_5, 
                style: style_SISTEMGRIDDANDESAPENYANGGA_5,
                interactive: true,
    title: 'SISTEM GRID DAN DESA PENYANGGA<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_0.png" /> Detusoko<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_1.png" /> Kelimutu<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_2.png" /> Moni<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_3.png" /> Ndona<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_4.png" /> Ndona Timur<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_5.png" /> Niowula<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_5_6.png" /> Wolojita<br />'
        });
var format_KantorResortdanKantorSeksi_6 = new ol.format.GeoJSON();
var features_KantorResortdanKantorSeksi_6 = format_KantorResortdanKantorSeksi_6.readFeatures(json_KantorResortdanKantorSeksi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorResortdanKantorSeksi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorResortdanKantorSeksi_6.addFeatures(features_KantorResortdanKantorSeksi_6);
var lyr_KantorResortdanKantorSeksi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorResortdanKantorSeksi_6, 
                style: style_KantorResortdanKantorSeksi_6,
                interactive: true,
    title: 'Kantor Resort dan Kantor Seksi<br />\
    <img src="styles/legend/KantorResortdanKantorSeksi_6_0.png" /> Kantor Resort<br />\
    <img src="styles/legend/KantorResortdanKantorSeksi_6_1.png" /> Kantor Seksi<br />'
        });
var format_danau_7 = new ol.format.GeoJSON();
var features_danau_7 = format_danau_7.readFeatures(json_danau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danau_7.addFeatures(features_danau_7);
var lyr_danau_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danau_7, 
                style: style_danau_7,
                interactive: true,
                title: '<img src="styles/legend/danau_7.png" /> danau'
            });
var format_Sungai_8 = new ol.format.GeoJSON();
var features_Sungai_8 = format_Sungai_8.readFeatures(json_Sungai_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_8.addFeatures(features_Sungai_8);
var lyr_Sungai_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_8, 
                style: style_Sungai_8,
                interactive: true,
                title: '<img src="styles/legend/Sungai_8.png" /> Sungai'
            });
var format_MataAir_9 = new ol.format.GeoJSON();
var features_MataAir_9 = format_MataAir_9.readFeatures(json_MataAir_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MataAir_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MataAir_9.addFeatures(features_MataAir_9);
var lyr_MataAir_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MataAir_9, 
                style: style_MataAir_9,
                interactive: true,
                title: '<img src="styles/legend/MataAir_9.png" /> Mata Air'
            });
var format_LahanTerbakar_10 = new ol.format.GeoJSON();
var features_LahanTerbakar_10 = format_LahanTerbakar_10.readFeatures(json_LahanTerbakar_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanTerbakar_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanTerbakar_10.addFeatures(features_LahanTerbakar_10);
var lyr_LahanTerbakar_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LahanTerbakar_10, 
                style: style_LahanTerbakar_10,
                interactive: true,
                title: '<img src="styles/legend/LahanTerbakar_10.png" /> Lahan Terbakar'
            });
var format_PotensiKebakaranHutan_11 = new ol.format.GeoJSON();
var features_PotensiKebakaranHutan_11 = format_PotensiKebakaranHutan_11.readFeatures(json_PotensiKebakaranHutan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiKebakaranHutan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiKebakaranHutan_11.addFeatures(features_PotensiKebakaranHutan_11);
var lyr_PotensiKebakaranHutan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiKebakaranHutan_11, 
                style: style_PotensiKebakaranHutan_11,
                interactive: true,
                title: '<img src="styles/legend/PotensiKebakaranHutan_11.png" /> Potensi Kebakaran Hutan'
            });
var format_ODTWA_12 = new ol.format.GeoJSON();
var features_ODTWA_12 = format_ODTWA_12.readFeatures(json_ODTWA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODTWA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODTWA_12.addFeatures(features_ODTWA_12);
var lyr_ODTWA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ODTWA_12, 
                style: style_ODTWA_12,
                interactive: true,
    title: 'ODTWA<br />\
    <img src="styles/legend/ODTWA_12_0.png" /> Air Panas<br />\
    <img src="styles/legend/ODTWA_12_1.png" /> Air Terjun<br />\
    <img src="styles/legend/ODTWA_12_2.png" /> Embung<br />\
    <img src="styles/legend/ODTWA_12_3.png" /> Fenomena geologis di sekitar pantai<br />\
    <img src="styles/legend/ODTWA_12_4.png" /> Kampung Adat<br />\
    <img src="styles/legend/ODTWA_12_5.png" /> Perbukitan<br />'
        });
var format_Gangguan_13 = new ol.format.GeoJSON();
var features_Gangguan_13 = format_Gangguan_13.readFeatures(json_Gangguan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gangguan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gangguan_13.addFeatures(features_Gangguan_13);
var lyr_Gangguan_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gangguan_13, 
                style: style_Gangguan_13,
                interactive: true,
                title: '<img src="styles/legend/Gangguan_13.png" /> Gangguan'
            });
var format_Fauna_14 = new ol.format.GeoJSON();
var features_Fauna_14 = format_Fauna_14.readFeatures(json_Fauna_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fauna_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fauna_14.addFeatures(features_Fauna_14);
var lyr_Fauna_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fauna_14, 
                style: style_Fauna_14,
                interactive: true,
                title: '<img src="styles/legend/Fauna_14.png" /> Fauna'
            });
var format_Flora_15 = new ol.format.GeoJSON();
var features_Flora_15 = format_Flora_15.readFeatures(json_Flora_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flora_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora_15.addFeatures(features_Flora_15);
var lyr_Flora_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Flora_15, 
                style: style_Flora_15,
                interactive: true,
                title: '<img src="styles/legend/Flora_15.png" /> Flora'
            });
var format_Kontur_16 = new ol.format.GeoJSON();
var features_Kontur_16 = format_Kontur_16.readFeatures(json_Kontur_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_16.addFeatures(features_Kontur_16);
var lyr_Kontur_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kontur_16, 
                style: style_Kontur_16,
                interactive: true,
                title: '<img src="styles/legend/Kontur_16.png" /> Kontur'
            });
var format_AksesibilitasJaringanJalan_17 = new ol.format.GeoJSON();
var features_AksesibilitasJaringanJalan_17 = format_AksesibilitasJaringanJalan_17.readFeatures(json_AksesibilitasJaringanJalan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasJaringanJalan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasJaringanJalan_17.addFeatures(features_AksesibilitasJaringanJalan_17);
var lyr_AksesibilitasJaringanJalan_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AksesibilitasJaringanJalan_17, 
                style: style_AksesibilitasJaringanJalan_17,
                interactive: true,
                title: '<img src="styles/legend/AksesibilitasJaringanJalan_17.png" /> Aksesibilitas Jaringan Jalan'
            });
var format_AksesibilitasJalurTrack_18 = new ol.format.GeoJSON();
var features_AksesibilitasJalurTrack_18 = format_AksesibilitasJalurTrack_18.readFeatures(json_AksesibilitasJalurTrack_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasJalurTrack_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasJalurTrack_18.addFeatures(features_AksesibilitasJalurTrack_18);
var lyr_AksesibilitasJalurTrack_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AksesibilitasJalurTrack_18, 
                style: style_AksesibilitasJalurTrack_18,
                interactive: true,
                title: '<img src="styles/legend/AksesibilitasJalurTrack_18.png" /> Aksesibilitas Jalur Track'
            });
var format_TapalBatas_19 = new ol.format.GeoJSON();
var features_TapalBatas_19 = format_TapalBatas_19.readFeatures(json_TapalBatas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapalBatas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapalBatas_19.addFeatures(features_TapalBatas_19);
var lyr_TapalBatas_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TapalBatas_19, 
                style: style_TapalBatas_19,
                interactive: true,
                title: '<img src="styles/legend/TapalBatas_19.png" /> Tapal Batas'
            });
var format_SaranaPrasarana_20 = new ol.format.GeoJSON();
var features_SaranaPrasarana_20 = format_SaranaPrasarana_20.readFeatures(json_SaranaPrasarana_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaPrasarana_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaPrasarana_20.addFeatures(features_SaranaPrasarana_20);
var lyr_SaranaPrasarana_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SaranaPrasarana_20, 
                style: style_SaranaPrasarana_20,
                interactive: true,
                title: '<img src="styles/legend/SaranaPrasarana_20.png" /> Sarana Prasarana'
            });

lyr_Maps_0.setVisible(true);lyr_HYBRID_1.setVisible(true);lyr_CitraSatelit_2.setVisible(true);lyr_USULANBATASRESORT_3.setVisible(true);lyr_batas_kawasan_4.setVisible(true);lyr_SISTEMGRIDDANDESAPENYANGGA_5.setVisible(false);lyr_KantorResortdanKantorSeksi_6.setVisible(true);lyr_danau_7.setVisible(false);lyr_Sungai_8.setVisible(false);lyr_MataAir_9.setVisible(false);lyr_LahanTerbakar_10.setVisible(false);lyr_PotensiKebakaranHutan_11.setVisible(false);lyr_ODTWA_12.setVisible(false);lyr_Gangguan_13.setVisible(false);lyr_Fauna_14.setVisible(false);lyr_Flora_15.setVisible(false);lyr_Kontur_16.setVisible(false);lyr_AksesibilitasJaringanJalan_17.setVisible(false);lyr_AksesibilitasJalurTrack_18.setVisible(false);lyr_TapalBatas_19.setVisible(false);lyr_SaranaPrasarana_20.setVisible(false);
var layersList = [lyr_Maps_0,lyr_HYBRID_1,lyr_CitraSatelit_2,lyr_USULANBATASRESORT_3,lyr_batas_kawasan_4,lyr_SISTEMGRIDDANDESAPENYANGGA_5,lyr_KantorResortdanKantorSeksi_6,lyr_danau_7,lyr_Sungai_8,lyr_MataAir_9,lyr_LahanTerbakar_10,lyr_PotensiKebakaranHutan_11,lyr_ODTWA_12,lyr_Gangguan_13,lyr_Fauna_14,lyr_Flora_15,lyr_Kontur_16,lyr_AksesibilitasJaringanJalan_17,lyr_AksesibilitasJalurTrack_18,lyr_TapalBatas_19,lyr_SaranaPrasarana_20];
lyr_USULANBATASRESORT_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', });
lyr_batas_kawasan_4.set('fieldAliases', {'LAYER': 'LAYER', 'Luas_Ha': 'Luas_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SISTEMGRIDDANDESAPENYANGGA_5.set('fieldAliases', {'KODE_GRID': 'KODE_GRID', 'LABEL': 'LABEL', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'UUPP': 'UUPP', 'resort': 'resort', 'usulan1': 'usulan1', 'usulan2': 'usulan2', 'RESORT_G': 'RESORT_G', });
lyr_KantorResortdanKantorSeksi_6.set('fieldAliases', {'No_': 'No_', 'nama_titik': 'nama_titik', 'X': 'X', 'Y': 'Y', 'FOTO': 'FOTO', 'PHOTO': 'PHOTO', 'jenis': 'jenis', });
lyr_danau_7.set('fieldAliases', {'landcover': 'landcover', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ORDE1': 'ORDE1', 'HA': 'HA', });
lyr_Sungai_8.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', });
lyr_MataAir_9.set('fieldAliases', {'Id': 'Id', 'keterangan': 'keterangan', 'X': 'X', 'Y': 'Y', 'Resort': 'Resort', });
lyr_LahanTerbakar_10.set('fieldAliases', {'LABEL': 'LABEL', });
lyr_PotensiKebakaranHutan_11.set('fieldAliases', {'Permasalah': 'Permasalah', });
lyr_ODTWA_12.set('fieldAliases', {'No': 'No', 'Kampung_Ad': 'Kampung_Ad', 'Jenis': 'Jenis', 'x': 'x', 'y': 'y', 'lokasi': 'lokasi', 'Atraksi': 'Atraksi', 'Akses': 'Akses', 'Amenitas': 'Amenitas', 'Pengelola': 'Pengelola', });
lyr_Gangguan_13.set('fieldAliases', {'No_': 'No_', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Keterangan': 'Keterangan', 'foto': 'foto', });
lyr_Fauna_14.set('fieldAliases', {'Jenis_Satw': 'Jenis_Satw', 'Nama_Ilmia': 'Nama_Ilmia', 'x': 'x', 'y': 'y', 'SUMBER': 'SUMBER', 'keterangan': 'keterangan', });
lyr_Flora_15.set('fieldAliases', {'Nomor': 'Nomor', 'x': 'x', 'y': 'y', 'keterangan': 'keterangan', 'Kode_Plot': 'Kode_Plot', 'Resort': 'Resort', 'sumber': 'sumber', });
lyr_Kontur_16.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_AksesibilitasJaringanJalan_17.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_AksesibilitasJalurTrack_18.set('fieldAliases', {'DESCR': 'DESCR', 'METER': 'METER', });
lyr_TapalBatas_19.set('fieldAliases', {'No': 'No', 'Nama_Pal': 'Nama_Pal', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'elev': 'elev', 'keterangan': 'keterangan', 'flora': 'flora', 'Fauna': 'Fauna', 'Mata_Air': 'Mata_Air', 'Permasalah': 'Permasalah', 'Kondisi_Pa': 'Kondisi_Pa', 'Perbatasan': 'Perbatasan', 'Perbatas_1': 'Perbatas_1', });
lyr_SaranaPrasarana_20.set('fieldAliases', {'No_': 'No_', 'nama_titik': 'nama_titik', 'X': 'X', 'Y': 'Y', 'FOTO': 'FOTO', 'PHOTO': 'PHOTO', });
lyr_USULANBATASRESORT_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', });
lyr_batas_kawasan_4.set('fieldImages', {'LAYER': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SISTEMGRIDDANDESAPENYANGGA_5.set('fieldImages', {'KODE_GRID': 'TextEdit', 'LABEL': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'UUPP': 'TextEdit', 'resort': 'TextEdit', 'usulan1': 'TextEdit', 'usulan2': 'TextEdit', 'RESORT_G': 'TextEdit', });
lyr_KantorResortdanKantorSeksi_6.set('fieldImages', {'No_': 'TextEdit', 'nama_titik': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FOTO': 'TextEdit', 'PHOTO': 'TextEdit', 'jenis': 'TextEdit', });
lyr_danau_7.set('fieldImages', {'landcover': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ORDE1': 'TextEdit', 'HA': 'TextEdit', });
lyr_Sungai_8.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'TextEdit', 'OUT_FLOW': 'TextEdit', 'DRAIN_AREA': 'TextEdit', });
lyr_MataAir_9.set('fieldImages', {'Id': 'Range', 'keterangan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Resort': 'TextEdit', });
lyr_LahanTerbakar_10.set('fieldImages', {'LABEL': 'TextEdit', });
lyr_PotensiKebakaranHutan_11.set('fieldImages', {'Permasalah': 'TextEdit', });
lyr_ODTWA_12.set('fieldImages', {'No': 'TextEdit', 'Kampung_Ad': 'TextEdit', 'Jenis': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lokasi': 'TextEdit', 'Atraksi': 'TextEdit', 'Akses': 'TextEdit', 'Amenitas': 'TextEdit', 'Pengelola': 'TextEdit', });
lyr_Gangguan_13.set('fieldImages', {'No_': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Keterangan': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Fauna_14.set('fieldImages', {'Jenis_Satw': 'TextEdit', 'Nama_Ilmia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'SUMBER': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_Flora_15.set('fieldImages', {'Nomor': '', 'x': '', 'y': '', 'keterangan': 'TextEdit', 'Kode_Plot': '', 'Resort': '', 'sumber': '', });
lyr_Kontur_16.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_AksesibilitasJaringanJalan_17.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_AksesibilitasJalurTrack_18.set('fieldImages', {'DESCR': 'TextEdit', 'METER': 'TextEdit', });
lyr_TapalBatas_19.set('fieldImages', {'No': 'TextEdit', 'Nama_Pal': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'elev': 'TextEdit', 'keterangan': 'TextEdit', 'flora': 'TextEdit', 'Fauna': 'TextEdit', 'Mata_Air': 'TextEdit', 'Permasalah': 'TextEdit', 'Kondisi_Pa': 'TextEdit', 'Perbatasan': 'TextEdit', 'Perbatas_1': 'TextEdit', });
lyr_SaranaPrasarana_20.set('fieldImages', {'No_': 'TextEdit', 'nama_titik': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FOTO': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_USULANBATASRESORT_3.set('fieldLabels', {'OBJECTID': 'inline label', 'REMARK': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'luas': 'inline label', });
lyr_batas_kawasan_4.set('fieldLabels', {'LAYER': 'inline label', 'Luas_Ha': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_SISTEMGRIDDANDESAPENYANGGA_5.set('fieldLabels', {'KODE_GRID': 'inline label', 'LABEL': 'inline label', 'Kecamatan': 'inline label', 'Desa': 'inline label', 'UUPP': 'inline label', 'resort': 'no label', 'usulan1': 'no label', 'usulan2': 'no label', 'RESORT_G': 'no label', });
lyr_KantorResortdanKantorSeksi_6.set('fieldLabels', {'No_': 'inline label', 'nama_titik': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'FOTO': 'inline label', 'PHOTO': 'inline label', 'jenis': 'inline label', });
lyr_danau_7.set('fieldLabels', {'landcover': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'ORDE1': 'inline label', 'HA': 'inline label', });
lyr_Sungai_8.set('fieldLabels', {'LAYER': 'inline label', 'ELEVATION': 'inline label', 'STREAM_ID': 'inline label', 'IN_FLOW': 'inline label', 'OUT_FLOW': 'inline label', 'DRAIN_AREA': 'inline label', });
lyr_MataAir_9.set('fieldLabels', {'Id': 'inline label', 'keterangan': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Resort': 'inline label', });
lyr_LahanTerbakar_10.set('fieldLabels', {'LABEL': 'inline label', });
lyr_PotensiKebakaranHutan_11.set('fieldLabels', {'Permasalah': 'inline label', });
lyr_ODTWA_12.set('fieldLabels', {'No': 'inline label', 'Kampung_Ad': 'inline label', 'Jenis': 'inline label', 'x': 'inline label', 'y': 'inline label', 'lokasi': 'inline label', 'Atraksi': 'inline label', 'Akses': 'inline label', 'Amenitas': 'inline label', 'Pengelola': 'inline label', });
lyr_Gangguan_13.set('fieldLabels', {'No_': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Keterangan': 'inline label', 'foto': 'inline label', });
lyr_Fauna_14.set('fieldLabels', {'Jenis_Satw': 'inline label', 'Nama_Ilmia': 'inline label', 'x': 'inline label', 'y': 'inline label', 'SUMBER': 'inline label', 'keterangan': 'inline label', });
lyr_Flora_15.set('fieldLabels', {'Nomor': 'inline label', 'x': 'inline label', 'y': 'inline label', 'keterangan': 'inline label', 'Kode_Plot': 'inline label', 'Resort': 'inline label', 'sumber': 'inline label', });
lyr_Kontur_16.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'ELEVATION': 'inline label', 'CLOSED_CON': 'inline label', });
lyr_AksesibilitasJaringanJalan_17.set('fieldLabels', {'fclass': 'inline label', 'name': 'inline label', });
lyr_AksesibilitasJalurTrack_18.set('fieldLabels', {'DESCR': 'inline label', 'METER': 'inline label', });
lyr_TapalBatas_19.set('fieldLabels', {'No': 'inline label', 'Nama_Pal': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'elev': 'inline label', 'keterangan': 'inline label', 'flora': 'inline label', 'Fauna': 'inline label', 'Mata_Air': 'inline label', 'Permasalah': 'inline label', 'Kondisi_Pa': 'inline label', 'Perbatasan': 'inline label', 'Perbatas_1': 'inline label', });
lyr_SaranaPrasarana_20.set('fieldLabels', {'No_': 'inline label', 'nama_titik': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'FOTO': 'inline label', 'PHOTO': 'inline label', });
lyr_SaranaPrasarana_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});